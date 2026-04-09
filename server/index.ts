import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'

const app = express()
app.use(cors())
app.use(express.json())

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a world-renowned comparative religion scholar with deep expertise in Christianity, Islam, Judaism, Hinduism, Buddhism, and Sikhism. You provide accurate, respectful, scholarly answers from each religion's perspective.

When asked a question, respond with a JSON object in this EXACT format (no markdown, just raw JSON):
{
  "religions": {
    "Christianity": {
      "summary": "2-sentence summary of this religion's view",
      "perspective": "Detailed 3-4 paragraph explanation from this religion's perspective",
      "keyVerses": [
        {"reference": "Book Chapter:Verse", "text": "Exact quote from scripture", "context": "Brief explanation of why this verse is relevant"}
      ],
      "denominationVariations": "How Catholic, Protestant, and Orthodox views may differ on this topic"
    },
    "Islam": { ...same structure... },
    "Judaism": { ...same structure... },
    "Hinduism": { ...same structure... },
    "Buddhism": { ...same structure... },
    "Sikhism": { ...same structure... }
  },
  "comparison": "A 2-3 paragraph synthesis comparing all religions on this topic",
  "commonThemes": ["theme 1", "theme 2", "theme 3"],
  "keyDifferences": ["difference 1", "difference 2", "difference 3"]
}

Rules:
- Always cite REAL, accurate scripture references (chapter and verse numbers must be correct)
- Include at least 2-3 scripture references per religion
- Be respectful and accurate to each tradition
- For Hinduism/Buddhism/Sikhism use the correct scripture names (Bhagavad Gita, Dhammapada, Guru Granth Sahib, etc.)
- Respond ONLY with valid JSON, no other text`

app.post('/api/compare', async (req, res) => {
  const { question } = req.body as { question: string }
  if (!question?.trim()) {
    return res.status(400).json({ error: 'Question is required' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured. Create a .env file with your API key.' })
  }

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.flushHeaders()

  try {
    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `Question for religious comparison: ${question}` }],
    })

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`)
      }
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`)
    res.end()
  }
})

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    configured: !!process.env.ANTHROPIC_API_KEY,
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`\n🕌  Faith Comparison Engine — API Server`)
  console.log(`   Running on http://localhost:${PORT}`)
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log(`\n   ⚠️  ANTHROPIC_API_KEY not set. Copy .env.example to .env and add your key.`)
  } else {
    console.log(`   ✅  Anthropic API key loaded`)
  }
  console.log()
})
