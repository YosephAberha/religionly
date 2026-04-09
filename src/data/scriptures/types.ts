export interface ScriptureVerse {
  ref: string
  text: string
}

export interface BookChapter {
  chapter: number | string
  title: string
  summary: string
  keyVerses: ScriptureVerse[]
}

export interface ScriptureBook {
  id: string
  name: string
  originalName?: string
  chapters: number | string
  summary: string
  themes: string[]
  sections: BookChapter[]
  keyVerses: ScriptureVerse[]
}

export interface ScriptureCollection {
  id: string
  religionId: string
  name: string
  originalName?: string
  language: string
  description: string
  totalBooks?: number | string
  totalChapters?: number | string
  totalVerses?: number | string
  period?: string
  onlineSource?: { label: string; url: string }
  books: ScriptureBook[]
}
