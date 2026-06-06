import { CriticalIncident } from '../types'

export const criticalIncidents: CriticalIncident[] = [
  {
    id: 'ci-001',
    title: 'The Missed Friday Meeting',
    category: 'prayer',
    cultures: ['Europe', 'Middle East', 'South Asia'],
    religions: ['islam'],
    situation: 'A team leader schedules a mandatory all-hands meeting every Friday at 12:30pm. A Muslim colleague, Tariq, consistently arrives 20–30 minutes late without explanation. The team leader is frustrated and considers noting it in the performance review.',
    whatHappened: 'The team leader raised the issue in a 1-on-1, implying a lack of commitment. Tariq felt embarrassed and misunderstood. He had been attending Jumu\'ah (Friday communal prayer), an obligatory act of worship for Muslim men, but had not felt comfortable disclosing this.',
    culturalExplanation: 'Jumu\'ah (Friday midday prayer) is one of the most important weekly religious obligations in Islam. In Muslim-majority contexts, Friday midday is publicly protected time. The manager\'s low-context communication style expected a direct explanation, while Tariq\'s higher-context background made religious disclosure feel inappropriate or vulnerable in a professional setting.',
    framework: 'hall',
    frameworkDimension: 'High vs Low Context Communication',
    hrGuidance: {
      dos: [
        'Move recurring Friday meetings to before 11:30am or after 2:00pm',
        'Create a simple religious observance disclosure form that employees can complete voluntarily',
        'Brief all line managers on Islamic Friday prayer obligations as part of cultural awareness training',
        'If the time cannot change, have a direct, private conversation and ask if there is a religious or personal reason',
      ],
      donts: [
        'Do not assume lateness is a performance or attitude problem before investigating',
        'Do not schedule mandatory all-hands meetings at Friday midday',
        'Do not require employees to publicly justify their religious practice to their team',
        'Do not note religious observance as a performance issue without first attempting accommodation',
      ],
      bestPractice: 'Establish a standing team agreement: no mandatory all-hands meetings between 12:00–14:00 on Fridays. This protects Muslim colleagues without requiring individual disclosure and applies consistently to everyone.',
    },
    reflectionQuestions: [
      'What assumptions did the team leader make, and how does Hall\'s High vs Low Context framework explain the communication gap?',
      'How would this situation differ if the team leader were from a high-context culture?',
      'What policy change would prevent this situation from recurring across the organisation?',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-003',
    title: 'The Vegetarian Spread',
    category: 'food',
    cultures: ['India', 'France', 'Germany'],
    religions: ['hinduism'],
    situation: 'An Indian IT company hosts a delegation of French and German clients for a 3-day on-site visit in Mumbai. All meals are provided by the company canteen, which operates a strictly vegetarian policy — standard practice in many Indian corporate environments. The European guests find the food impressive but miss meat, and on day two the French delegate privately asks the host to arrange "some chicken or fish" for dinner.',
    whatHappened: 'The Indian host, visibly uncomfortable, accommodated the request but felt their hospitality had been criticised. The European team had no idea they had caused offence — they assumed vegetarian catering was a logistical default, not a deliberate cultural policy. The French delegate later told colleagues back home the catering was "a bit sparse." The Indian team heard this through a mutual contact and trust in the partnership eroded.',
    culturalExplanation: 'Many Indian corporations maintain fully vegetarian cafeterias out of deep respect for Hindu, Jain, and other faith traditions — it is a cultural and ethical statement, not a cost-cutting measure. To request meat is to ask the host to violate a principle they hold seriously. The Europeans applied a Universalist assumption (Trompenaars): that international business hospitality defaults to "standard international norms," which for them includes meat. Neither party was wrong — they were operating from completely different food-culture maps.',
    framework: 'trompenaars',
    frameworkDimension: 'Universalism vs Particularism + Internal vs External Control',
    hrGuidance: {
      dos: [
        'Brief visiting teams on host country catering norms before departure — vegetarian-only offices are common across South and East Asia',
        'Ask the host organisation: "Are there any dietary considerations we should be aware of?" — it signals respect, not criticism',
        'Frame the experience as cultural learning, not an inconvenience',
        'If dietary needs are critical, arrange your own supplement privately and discreetly — never put the host in the position of accommodating you',
      ],
      donts: [
        'Do not assume Western catering norms are the international default',
        'Do not request changes to a host\'s catering policy — it is equivalent to asking them to change their culture for you',
        'Do not describe host hospitality as "sparse" or "limited" based on your own cultural food expectations',
        'Do not raise dietary preferences in front of the delegation — handle it quietly and individually',
      ],
      bestPractice: 'Include a "Host Country Catering Norms" section in all international trip briefing packs. One paragraph prevents most food-related cultural incidents during client visits.',
    },
    reflectionQuestions: [
      'How does Trompenaars\' Universalism vs Particularism dimension explain why both parties felt they were behaving correctly?',
      'What does this incident reveal about the assumption that "professional" defaults to one cultural standard?',
      'How would you redesign the pre-departure briefing for international client visits to prevent this?',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-005',
    title: 'Silence in the Meeting Room',
    category: 'meetings',
    cultures: ['Northern Europe', 'Japan', 'South Korea'],
    religions: [],
    situation: 'A project manager leads a cross-functional team including two Japanese engineers (Kenji and Yuki) and a Korean developer (Ji-Woo). In sprint planning meetings, the European team members debate proposals directly and loudly. Kenji and Yuki rarely speak. When asked directly "Do you agree?", they always say "Yes." The project consistently runs into implementation problems that Kenji and Yuki had foreseen but never raised.',
    whatHappened: 'Post-mortem revealed that Kenji had identified the critical technical risk three sprints earlier but had not felt it was appropriate to contradict the project manager publicly. In Japan and Korea, direct public disagreement with a senior figure causes loss of face (for both parties) and is avoided through silence or indirect signals.',
    culturalExplanation: 'Japan and South Korea score very high on Power Distance and are high-context communication cultures (Hall). Silence does not mean agreement — it often signals discomfort, disagreement, or deference to hierarchy. Northern European cultures are low-context, where silence is unusual and direct disagreement is expected and respected. The project manager misread silence as consensus.',
    framework: 'hall',
    frameworkDimension: 'High vs Low Context Communication + Information Speed',
    hrGuidance: {
      dos: [
        'Create structured input channels: written pre-meeting comments, anonymous risk flags, or async feedback tools',
        'Ask open questions: "What concerns might we be missing?" rather than "Do you agree?"',
        'Build one-on-one check-ins before major decisions to surface concerns privately',
        'Explicitly tell the team: "Raising a concern is valued and will not affect your standing"',
        'Train all team leads on high-context communication styles before managing international teams',
      ],
      donts: [
        'Do not interpret silence as agreement in international teams',
        'Do not ask yes/no questions in public meetings and expect honest answers from high-context team members',
        'Do not penalise quiet team members — their silence may carry more information than the vocal members\' words',
        'Do not assume one meeting format works universally across all cultural communication styles',
      ],
      bestPractice: 'Adopt "silent brainstorming" protocols: before any decision, allow 5 minutes of written input (via shared doc or digital board) before verbal discussion. This gives high-context, reflective communicators equal input without requiring them to interrupt or contradict publicly.',
    },
    reflectionQuestions: [
      'What is the difference between high-context and low-context communication, and how did this gap create a project failure?',
      'How would a manager trained in Hofstede\'s Power Distance dimension have run this meeting differently?',
      'What structural changes to the meeting format would resolve this without requiring Japanese and Korean team members to change their cultural norms?',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ci-007',
    title: 'The Handshake That Wasn\'t',
    category: 'greetings',
    cultures: ['Western Europe', 'Pakistan', 'Saudi Arabia'],
    religions: ['islam'],
    situation: 'At a client onboarding meeting, an account manager extends his hand to greet Amira, a senior analyst from Pakistan. Amira gently declines the handshake, placing her hand on her heart instead with a slight nod. The account manager is visibly confused and slightly offended. He later tells a colleague: "She was quite unfriendly — didn\'t even shake my hand."',
    whatHappened: 'Amira follows the Islamic practice of not shaking hands with unrelated members of the opposite sex. Her gesture (hand on heart) was a sincere and respectful alternative greeting. The account manager misread the refusal as personal rejection or unfriendliness, which coloured his perception of Amira throughout the meeting.',
    culturalExplanation: 'In many Muslim communities, physical contact (including handshakes) between unrelated men and women is considered inappropriate. This is a religious boundary, not a social slight. The hand-on-heart gesture is a common, respectful alternative. The handshake is the universal professional greeting in many Western contexts; refusing it can be interpreted as a breach of social norms — a textbook Trompenaars Universalism vs Particularism conflict.',
    framework: 'trompenaars',
    frameworkDimension: 'Universalism vs Particularism + Neutral vs Affective',
    hrGuidance: {
      dos: [
        'Include cross-cultural greeting norms in client-facing team training',
        'Brief client relationship managers: not all cultures use the handshake as a universal greeting',
        'Train staff to watch for alternative greeting signals (hand on heart, slight bow, namaste) and reciprocate respectfully',
        'Correct misperceptions immediately: if a colleague expresses bias after a greeting refusal, address it directly',
      ],
      donts: [
        'Do not interpret a religious boundary as unfriendliness or unprofessionalism',
        'Do not put a client or employee in a position where they must choose between their religious practice and professional acceptance',
        'Do not assume the Western handshake norm applies universally in international or multicultural environments',
      ],
      bestPractice: 'In client-facing team briefings: "Our team respects diverse cultural greeting practices. A nod, bow, or hand-on-heart is as warmly received as a handshake." A single sentence in team norms normalises diversity without singling anyone out.',
    },
    reflectionQuestions: [
      'How does Trompenaars\' Universalism vs Particularism dimension explain the account manager\'s reaction?',
      'What is the difference between a personal insult and a cultural/religious boundary? How do we train staff to make this distinction in real time?',
      'How would this incident have unfolded if the account manager had been briefed on Islamic greeting norms beforehand?',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-008',
    title: 'The Promotion That Skipped the Seniority',
    category: 'hierarchy',
    cultures: ['Northern Europe', 'Japan', 'India'],
    religions: [],
    situation: 'A tech company promotes a 27-year-old engineer, Max, over three senior Indian and Japanese colleagues who have been at the company for 5–8 years. The promotion is based on merit — Max delivered an outstanding project. The senior colleagues are visibly uncomfortable but say nothing. Team dynamics deteriorate sharply over the following weeks.',
    whatHappened: 'In the Indian and Japanese cultural frameworks, seniority carries significant weight in determining hierarchy and respect. Being passed over by a significantly younger colleague is a deep status and face loss. None of the three raised the issue directly — high Power Distance and face-saving norms prevented open confrontation. Management read their silence as acceptance.',
    culturalExplanation: 'Hofstede\'s Power Distance and Long-term Orientation dimensions explain this directly. High-PDI cultures (India, Japan) expect hierarchical advancement to be at least partially tied to tenure and age. The concept of "face" (mentsu in Japanese, izzat in parts of Indian culture) means public demotion in status carries lasting psychological weight. Low-PDI achievement cultures treat pure merit promotion as fair and expected — both are internally consistent value systems.',
    framework: 'hofstede',
    frameworkDimension: 'Power Distance + Long-term Orientation',
    hrGuidance: {
      dos: [
        'When making cross-cultural promotion decisions, brief affected team members individually and with sensitivity',
        'Explain the criteria clearly and personally to those who were not promoted',
        'Acknowledge the tenure and contribution of the senior colleagues publicly',
        'In diverse teams, consider giving senior colleagues visible leadership roles in adjacent areas to maintain status',
        'Create a career path document that makes advancement criteria explicit and culturally accessible',
      ],
      donts: [
        'Do not assume merit-only promotion is universally understood as fair across all cultures',
        'Do not interpret silence from high-PDI employees as acceptance or approval',
        'Do not make promotion announcements without first speaking privately to those who were candidates',
        'Do not ignore team dynamics after a promotion — monitor for 30–60 days',
      ],
      bestPractice: 'Build a "Promotion Communication Protocol" for international teams: private 1-on-1 with all candidates before any announcement, explanation of criteria, specific acknowledgement of what non-promoted employees contribute, and clarity on their own progression path.',
    },
    reflectionQuestions: [
      'What is the difference between Achievement-orientation and Ascription-orientation, and why does it affect how promotions are perceived?',
      'What does Hofstede\'s Power Distance dimension predict about how Indian and Japanese employees will respond to being passed over?',
      'How could the promotion communication process have been redesigned to prevent the team breakdown?',
    ],
    difficulty: 'advanced',
  },

  {
    id: 'ci-009',
    title: 'The Religious Holiday Deadline',
    category: 'holidays',
    cultures: ['International'],
    religions: ['judaism'],
    situation: 'A project manager schedules a critical product launch deadline and mandatory all-hands presentation on the same day as Yom Kippur. David, the only observant Jewish team member, notifies the manager two weeks in advance that he will not be able to attend. The manager responds: "This is a key business date — can you make an exception just this once?"',
    whatHappened: 'David felt shocked and discriminated against. He escalated to the Diversity & Inclusion office. The manager, genuinely unaware, had not realised that asking someone to "make an exception" to Yom Kippur is equivalent to asking a devout Christian to skip Christmas morning service "just this once." The project deadline was eventually moved, but trust was damaged.',
    culturalExplanation: 'Yom Kippur is the holiest day in the Jewish calendar — the Day of Atonement. It is a 25-hour fast and full day of synagogue prayer. No observant Jew will work on this day under any circumstances. The manager\'s response reflected a monocultural workplace assumption that religious obligations are flexible. In Trompenaars\' framework, the Universalist assumption ("business rules apply to everyone") collided with the Particularist reality ("this religious obligation is non-negotiable for this person").',
    framework: 'trompenaars',
    frameworkDimension: 'Universalism vs Particularism',
    hrGuidance: {
      dos: [
        'Integrate a multi-faith calendar into project planning tools at the start of each year',
        'Treat major religious holidays with the same operational weight as national public holidays',
        'When an employee notifies you of a religious obligation conflict, the default response should be "we will adjust the date"',
        'Apologise and correct when a mistake happens — acknowledge it explicitly and move the date',
      ],
      donts: [
        'Do not ask an employee to "make an exception" to their holiest religious observance',
        'Do not schedule mandatory events on major religious holidays without checking team composition',
        'Do not treat non-majority religious holidays as less important than majority-faith ones',
        'Do not wait for employees to raise the conflict — proactively check the calendar',
      ],
      bestPractice: 'Deploy a multi-faith calendar overlay in your project management tool that flags major religious dates from 10+ traditions. Free tools exist. A 5-minute setup prevents situations like this entirely.',
    },
    reflectionQuestions: [
      'What assumptions were embedded in the manager\'s request to "make an exception"?',
      'How does a multi-faith calendar in project planning represent a structural solution rather than an individual accommodation?',
      'Use Trompenaars\' Universalism vs Particularism to frame what went wrong and what a Particularist response would have looked like.',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-010',
    title: 'Time Is a Different Clock',
    category: 'time',
    cultures: ['Northern Europe', 'Brazil', 'Nigeria'],
    religions: [],
    situation: 'A project manager from Switzerland leads a joint venture team with Brazilian and Nigerian colleagues. He opens every call at the exact scheduled time and is visibly irritated when colleagues from both countries join 5–10 minutes late. He starts calls without them and sends emails noting their "lack of punctuality." The Brazilian team calls him "cold and robotic." He considers both teams as "unprofessional."',
    whatHappened: 'The relationship between the Swiss manager and both teams deteriorated. The Brazilian and Nigerian team members felt disrespected — being 5–10 minutes late in their cultural context is entirely normal and even polite (arriving exactly on time can feel abrupt). The Swiss manager interpreted this as a sign of low commitment.',
    culturalExplanation: 'Switzerland is one of the world\'s most monochronic, time-strict cultures (Hall: Monochronic vs Polychronic time). Brazil and Nigeria operate in polychronic time cultures — where relationships, conversations, and context take priority over exact clock adherence. "Brazilian time" is a widely understood cultural reality, not a failing. Neither party is "wrong" — they are operating from different cultural time maps, both internally consistent.',
    framework: 'hall',
    frameworkDimension: 'Monochronic vs Polychronic Time',
    hrGuidance: {
      dos: [
        'Establish explicit time norms at project kickoff: "For our team, meetings start at the scheduled time AND we allow a 5-minute joining window before starting content"',
        'Have a direct, non-judgmental conversation about time expectations — frame it as a team agreement, not a correction',
        'Distinguish between time-culture behaviour and genuine reliability issues',
        'Train international project managers on monochronic vs polychronic time before deployment',
      ],
      donts: [
        'Do not include time-culture behaviour in performance reviews without first attempting a cultural conversation',
        'Do not interpret polychronic lateness as disrespect or low commitment',
        'Do not start calls and exclude latecomers as a "lesson" — this damages relationships',
        'Do not assume any single culture\'s time norms are the universal professional standard',
      ],
      bestPractice: 'Create a "Team Working Agreement" at project kickoff that explicitly covers meeting time norms, response time expectations, and "what does punctuality mean in our team?" This surfaces cultural differences as a team design question rather than a compliance issue.',
    },
    reflectionQuestions: [
      'What is the difference between Hall\'s monochronic and polychronic time orientations, and how does each culture justify its own norm as "professional"?',
      'How would Trompenaars\' Sequential vs Synchronic time dimension add nuance to this analysis?',
      'Design a 5-minute "team time agreement" conversation that a project manager could run at kickoff to prevent this conflict.',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-011',
    title: 'The Prayer Room Request',
    category: 'prayer',
    cultures: ['International'],
    religions: ['islam'],
    situation: 'A Muslim employee, Hassan, formally requests a designated prayer room in the office. The company has 250 employees, multiple unused meeting rooms, and a large break room. The facilities manager responds that "we are a secular workplace and do not provide religious services."',
    whatHappened: 'The facilities manager\'s response reflected a common but legally and culturally risky assumption: that a "secular workplace" means a religion-free one. In most jurisdictions, reasonable accommodation of religious practice is a legal obligation where operationally feasible. With multiple unused rooms available, denying the request entirely creates both legal exposure and a culture signal that religious employees are not welcome.',
    culturalExplanation: 'Constitutional frameworks across Europe, North America, and much of Asia-Pacific explicitly protect freedom of religion, including religious practice at work. The GLOBE dimension of Humane Orientation — the degree to which an organisation rewards fairness, generosity and care — predicts whether organisations proactively accommodate religious needs or require legal pressure to do so.',
    framework: 'globe',
    frameworkDimension: 'Humane Orientation + Institutional Collectivism',
    hrGuidance: {
      dos: [
        'Designate a multi-faith quiet room — this serves Muslim, Jewish, Christian, Buddhist and all other employees',
        'Frame the room as a "quiet reflection and wellbeing space" — inclusive and avoids any perception of religious favouritism',
        'A bookable meeting room with a simple mat and no chairs is sufficient',
        'Proactively mention the quiet room in the onboarding pack',
        'Respond to prayer room requests within 5 working days with approval or an alternative',
      ],
      donts: [
        'Do not conflate "secular workplace" with "no religious accommodation" — these are legally and culturally distinct',
        'Do not delay or deny a prayer room request without assessing operational feasibility',
        'Do not create a faith-specific room — a multi-faith space serves everyone and avoids differential treatment',
        'Do not require employees to use toilet cubicles for prayer — this is undignified',
      ],
      bestPractice: 'Designate one multi-faith room proactively — before anyone requests it. Add it to the office map and onboarding pack. The cost is a sign and a booking slot. The cultural and legal risk avoided is significant.',
    },
    reflectionQuestions: [
      'What is the legal distinction in most jurisdictions between a secular workplace and one that denies religious accommodation?',
      'How does the GLOBE dimension of Humane Orientation predict an organisation\'s response to this request?',
      'What is the difference between equal treatment ("we treat everyone the same") and equitable accommodation in a diverse workforce?',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ci-012',
    title: 'The Feedback That Backfired',
    category: 'communication',
    cultures: ['Netherlands', 'South Korea'],
    religions: [],
    situation: 'A Dutch senior manager gives direct negative feedback to Ji-Su, a Korean junior analyst, in a team meeting: "Ji-Su, this analysis is not at the level I expected. The numbers are wrong and the conclusion is not supported." The Dutch manager intends this as helpful and efficient — she would want the same direct feedback herself. Ji-Su goes silent and withdraws for the rest of the meeting and the following days.',
    whatHappened: 'Ji-Su experienced severe face loss (kibun in Korean — mood and dignity). Public correction by a superior is deeply humiliating in Korean culture. She submitted her resignation two weeks later, citing "cultural mismatch." In the exit interview she said: "I felt publicly shamed in front of the whole team. I could not recover from that."',
    culturalExplanation: 'The Netherlands is a classic low-context, direct, low-PDI culture — direct negative feedback is professional, honest, and respectful. South Korea is a high-context, high-PDI, face-conscious culture where public criticism from a superior is a severe social rupture. Both cultures have internally consistent and deeply held values — the problem is not that either is wrong, but that neither was briefed on the other.',
    framework: 'hofstede',
    frameworkDimension: 'Power Distance + Individualism vs Collectivism',
    hrGuidance: {
      dos: [
        'Train managers on feedback norms in high-context, high-PDI cultures before managing international teams',
        'Default to private feedback for significant corrections — especially with colleagues from high-PDI cultures',
        'Build a team feedback protocol: critical feedback → private first, then agreed framing for team learning',
        'If public correction has occurred, follow up privately the same day to repair the relationship',
        'Ask in 1-on-1s: "How do you prefer to receive feedback?" — opens the conversation without exposing cultural difference',
      ],
      donts: [
        'Do not give significant corrective feedback publicly to team members from high-PDI, face-sensitive cultures',
        'Do not interpret silence and withdrawal as acceptance or resilience',
        'Do not assume direct communication is universally experienced as honest and respectful',
        'Do not wait until an exit interview to discover a cultural rupture',
      ],
      bestPractice: 'Adopt a "public praise, private correction" norm for international teams. This is low-cost, immediately effective, and does not require managers to abandon their direct communication style — it only redirects where critical feedback lands.',
    },
    reflectionQuestions: [
      'How do Hofstede\'s Power Distance and Collectivism dimensions explain why this feedback caused Ji-Su to resign?',
      'What is "face" as a cultural concept, and how does it interact with workplace feedback practices?',
      'Design a feedback protocol for a Dutch manager leading a Korean-Dutch team that preserves directness while protecting psychological safety.',
    ],
    difficulty: 'advanced',
  },

  {
    id: 'ci-013',
    title: 'The Religious Holiday Leave Conflict',
    category: 'holidays',
    cultures: ['International'],
    religions: ['sikhism'],
    situation: 'Gurpreet requests the 13th of April as annual leave, explaining it is Vaisakhi — the most important Sikh holiday. His manager says the team\'s leave policy does not allow more than three people off on any given day and three are already approved. He offers Gurpreet the 14th instead. Gurpreet explains the 13th is the religious observance day.',
    whatHappened: 'The manager held his position — policy is policy. Gurpreet took the day as sick leave in order to observe Vaisakhi. At the next team meeting, the manager reminded everyone about the leave policy. Gurpreet felt targeted and humiliated. He raised a formal complaint.',
    culturalExplanation: 'Vaisakhi (13 April) commemorates the founding of the Khalsa in 1699 and falls on a fixed solar date — it cannot be moved to the 14th any more than Christmas can be observed on the 26th. This is a Trompenaars Universalism vs Particularism case: the manager applied a universal rule (leave policy) without considering the particular (a fixed, non-negotiable religious date). Most equal treatment legislation globally requires that blanket leave policies flex for protected religious observance where operationally feasible.',
    framework: 'trompenaars',
    frameworkDimension: 'Universalism vs Particularism',
    hrGuidance: {
      dos: [
        'Build a "religious observance leave" category separate from annual leave that is not subject to team quotas',
        'Train managers: religious holidays with fixed dates cannot be moved — the accommodation is the leave, not a different day',
        'Document a religious observance policy: employees may request religious leave assessed on operational feasibility, not leave quotas',
        'When a conflict arises, explore creative solutions first: temporary backfill, adjusted workload, swapped shifts',
      ],
      donts: [
        'Do not apply a blanket leave quota to fixed religious holy days',
        'Do not suggest an employee move a religious observance to a different day',
        'Do not allow a situation where an employee takes sick leave to observe their religion — this creates significant legal and ethical exposure',
        'Do not treat a religious accommodation request the same as a personal holiday preference',
      ],
      bestPractice: 'Create a "Religious Observance Leave Policy" — separate from annual leave, with a simple request form and a 10-day advance notice requirement. This costs nothing, prevents legal violations, and signals genuine cultural inclusion.',
    },
    reflectionQuestions: [
      'How does Trompenaars\' Universalism vs Particularism explain the manager\'s decision, and what would a Particularist approach have looked like?',
      'What is the difference between treating everyone "equally" and treating everyone "fairly" in the context of religious accommodation?',
      'How should a religious observance leave policy be structured to be both operationally manageable and compliant?',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ci-015',
    title: 'The Indirect Yes',
    category: 'communication',
    cultures: ['Western Europe', 'China'],
    religions: [],
    situation: 'A sales director is negotiating a supply contract with a Chinese partner company. In every meeting, the Chinese delegation agrees enthusiastically, says "yes" to every question, and promises everything. The director returns home confident a deal is closed. Three months later, deliveries are late, specifications are not met, and the Chinese partner denies having agreed to specific terms.',
    whatHappened: 'In Chinese (and broadly East Asian) high-context communication culture, saying "no" directly — especially to a senior partner — is face-threatening. "Yes" often means "I hear you" or "I acknowledge your point," not "I commit to this." The Chinese delegation had significant internal concerns they never expressed directly. The director, from a low-context background, interpreted "yes" as unconditional agreement.',
    culturalExplanation: 'Hall\'s High vs Low Context Communication framework is directly at play. China scores very high on context — meaning is embedded in relationship, tone, situation and silence, not in explicit verbal commitments. Low-context cultures operate on the assumption that what is said is what is meant. Trompenaars\' Specific vs Diffuse dimension also applies: low-context cultures want specific contractual clarity; Chinese business relationships operate in a diffuse context of relationship and trust.',
    framework: 'hall',
    frameworkDimension: 'High vs Low Context Communication',
    hrGuidance: {
      dos: [
        'Brief all staff doing business in high-context cultures on the meaning of indirect communication',
        'Always confirm key commitments in writing immediately after meetings: "Following our discussion, I understand we have agreed to X. Please confirm."',
        'Build more relationship time into negotiations — Chinese business culture prioritises trust before contract',
        'Treat silence, hesitation, or vague responses as signals of concern, not agreement',
      ],
      donts: [
        'Do not rely on verbal "yes" in high-context business cultures as a binding commitment',
        'Do not rush to contract stage without building trust and surfacing concerns',
        'Do not interpret enthusiasm as agreement — it may be politeness or relationship maintenance',
        'Do not send a junior team member to high-stakes cross-cultural negotiations without cultural briefing',
      ],
      bestPractice: 'Implement a "mirror protocol" for international negotiations: at the end of every meeting, have both parties independently write down the key points agreed. Compare the lists. Differences surface misalignments before they become expensive delivery failures.',
    },
    reflectionQuestions: [
      'What is the difference between "yes" in a low-context and a high-context culture?',
      'How does Trompenaars\' Specific vs Diffuse dimension explain the different expectations around contractual vs relationship-based commitment?',
      'Design a negotiation protocol for a company entering a high-context market that respects both cultural frameworks.',
    ],
    difficulty: 'advanced',
  },

  // ─── NEW SCENARIOS (Silence in the Meeting Room style) ───────────────────

  {
    id: 'ci-016',
    title: 'The Business Card Ceremony',
    category: 'greetings',
    cultures: ['USA', 'Japan'],
    religions: [],
    situation: 'An American sales director visits Tokyo for the first time to meet the senior management team of a prospective Japanese partner. He is introduced to five senior leaders who each present their business card (meishi) with two hands and a slight bow. He accepts each card with one hand, glances briefly at it, and puts it in his back pocket with a confident smile. He\'s warm and enthusiastic throughout.',
    whatHappened: 'The Japanese delegation fell visibly silent. By the afternoon, communication had become formal and guarded. The Japanese team pulled back from the proposed partnership scope. Back in Tokyo after the American left, they told their internal team: "He does not understand respect." The deal was quietly shelved.',
    culturalExplanation: 'In Japan, the business card (meishi) is a formal extension of the person\'s professional identity. The exchange ritual — receiving with both hands, reading carefully, placing respectfully on the table in front of you for the duration of the meeting — is a non-negotiable professional ceremony. Pocketing it immediately, especially with one hand, signals that you consider the person\'s identity an afterthought. In Trompenaars\' Specific vs Diffuse framework: for the American, a business card is specific information (contact details); for the Japanese team, it is diffuse — it represents the whole person and their professional honour.',
    framework: 'trompenaars',
    frameworkDimension: 'Specific vs Diffuse',
    hrGuidance: {
      dos: [
        'Include business card protocol in all pre-departure briefings for Japan, South Korea, China, and other East Asian markets',
        'Receive the card with both hands, read it carefully, and place it on the table in front of you — never write on it or put it away during the meeting',
        'Bring your own printed business cards to any client meeting in East Asia — not having one is equally damaging',
        'Use the cultural briefing as a learning moment, not a checklist — understanding why the ritual matters changes how you perform it',
      ],
      donts: [
        'Do not treat business card exchange as a minor formality in high-context cultures',
        'Do not put a Japanese, Korean or Chinese business card in your back pocket, wallet, or bag during the meeting',
        'Do not write on a business card — ever',
        'Do not send a team to high-context client meetings without a specific cultural protocol briefing',
      ],
      bestPractice: 'Include a 10-minute "business etiquette by country" module in all pre-departure travel briefings. The business card protocol alone prevents significant trust failures in East Asian markets.',
    },
    reflectionQuestions: [
      'How does Trompenaars\' Specific vs Diffuse dimension explain why the same object (a business card) carries such different meaning in the USA and Japan?',
      'What does this incident reveal about the hidden cost of skipping pre-departure cultural briefings for senior client visits?',
      'How would you design a 15-minute pre-trip protocol briefing that prepares a sales team for their first visit to Japan?',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-017',
    title: 'The Enthusiastic Interruption',
    category: 'meetings',
    cultures: ['Sweden', 'Italy'],
    religions: [],
    situation: 'At a joint European project meeting, Giulia (Italian) and Lars (Swedish) are co-presenting a product roadmap to a mixed team. Giulia interrupts Lars three times mid-sentence — building on his points with expressive gestures and animated additions. Lars pauses politely each time, waits for her to finish, and continues. After the meeting, Lars tells his manager: "I\'m not sure this partnership will work — she\'s impossible to collaborate with." Giulia, hearing this through a colleague, is deeply hurt.',
    whatHappened: 'Lars experienced Giulia\'s interruptions as rude aggression and disrespect for his work. Giulia was demonstrating enthusiasm, collaborative energy, and active listening — building on a colleague\'s ideas mid-sentence is a positive signal in Italian communication culture. She felt Lars was cold and disconnected. Both felt the other had behaved unprofessionally. Neither was wrong.',
    culturalExplanation: 'Italy scores high on Trompenaars\' Affective dimension — emotions and enthusiasm are expressed openly and are professional assets. Sweden scores very low — restraint and turn-taking signal respect and professionalism. Hall\'s framework also applies: Italy\'s higher-context, expressive communication style treats overlapping speech as collaborative; Sweden\'s lower-context, structured turn-taking treats it as an interruption. Two equally valid communication cultures, zero mutual briefing.',
    framework: 'trompenaars',
    frameworkDimension: 'Neutral vs Affective + Sequential vs Synchronic',
    hrGuidance: {
      dos: [
        'In multinational teams, run a communication norms session at project kickoff: "How do we signal disagreement? How do we signal enthusiasm? What does an interruption mean in our team?"',
        'Name the difference: "In some of our team\'s cultures, building on someone\'s idea mid-sentence is enthusiastic collaboration. In others it is an interruption. Both are valid — let\'s agree on our team norm."',
        'Rotate who facilitates meetings — different facilitation styles surface different kinds of participation',
        'If conflict arises, address it based on observable behaviour, not personality ("Giulia interrupted" not "Giulia is aggressive")',
      ],
      donts: [
        'Do not interpret expressive communication as aggression',
        'Do not interpret restrained communication as coldness or disengagement',
        'Do not allow cultural communication differences to be reported to management as "personality problems"',
        'Do not design team communication norms around only one cultural standard',
      ],
      bestPractice: 'Open the first team meeting with a 10-minute "communication contract": each person says one thing about how they communicate at work. This surfaces cultural differences as interesting rather than threatening, before any incident occurs.',
    },
    reflectionQuestions: [
      'How do Trompenaars\' Neutral vs Affective and Sequential vs Synchronic dimensions explain why both Lars and Giulia felt the other behaved unprofessionally?',
      'What does "professionalism" mean, and is it culturally neutral?',
      'Design a 10-minute team communication contract exercise for a multinational team\'s first meeting.',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-018',
    title: 'The Nodding That Wasn\'t Agreement',
    category: 'communication',
    cultures: ['USA', 'India'],
    religions: [],
    situation: 'A project manager, Kevin, is briefing Arjun, a newly joined software developer from India, on complex project requirements. Throughout the 45-minute briefing, Arjun nods continuously and moves his head from side to side repeatedly. Kevin finishes, confident the requirements are fully understood. Two weeks later, Arjun\'s deliverable is missing three key specifications.',
    whatHappened: 'Kevin interpreted Arjun\'s head movement as enthusiastic agreement and full comprehension. In India, the "head wobble" (a fluid side-to-side movement) typically means "I hear you," "I am listening," or "I am following you" — not "I agree with" or "I fully understand every specification." Kevin took it as confirmation and asked no follow-up questions. Arjun felt he had signalled his engagement throughout and was confused when Kevin seemed frustrated.',
    culturalExplanation: 'Non-verbal communication is one of the deepest expressions of high-context culture (Hall). In India, the head wobble is a culturally rich signal that is widely misread by people from low-context cultures as agreement. In the US, nodding means "yes, I agree/understand completely." The same physical gesture carries fundamentally different meaning across these two communication cultures. Neither party was communicating incorrectly within their own cultural framework.',
    framework: 'hall',
    frameworkDimension: 'High vs Low Context Communication + Proxemics',
    hrGuidance: {
      dos: [
        'After any technical briefing, ask: "Can you summarise back to me the key deliverables and constraints you\'ve noted?" — this applies universally regardless of cultural background',
        'Include non-verbal communication differences in cross-cultural onboarding for international hires',
        'Build check-in points into long briefings: "Let\'s pause — any questions or things to clarify so far?"',
        'Train managers that confirmation of understanding requires verbal or written confirmation, not physical signals alone',
      ],
      donts: [
        'Do not interpret the Indian head wobble as agreement or full comprehension',
        'Do not assume that enthusiastic body language during a briefing equals complete understanding',
        'Do not deliver 45 minutes of technical information without structured comprehension checks',
        'Do not frame the issue as the employee "not listening" — the communication system failed, not the individual',
      ],
      bestPractice: 'End every technical briefing with a "spec check": ask the employee to write down the three most important specifications in their own words. Takes 2 minutes and prevents weeks of rework.',
    },
    reflectionQuestions: [
      'What does the Indian head wobble actually communicate, and why is it so commonly misread by low-context communicators?',
      'How does Hall\'s High vs Low Context framework explain why verbal confirmation cannot be replaced by non-verbal signals in cross-cultural settings?',
      'Redesign Kevin\'s briefing process to work effectively across both high and low-context communication cultures.',
    ],
    difficulty: 'beginner',
  },

  {
    id: 'ci-019',
    title: 'The Open Door No One Used',
    category: 'hierarchy',
    cultures: ['Netherlands', 'Philippines'],
    religions: [],
    situation: 'A Dutch HR director, Marieke, implements an open-door policy across the Manila office of her company. She communicates clearly in a team meeting: "My door is always open — please come to me directly with any concerns, ideas, or issues." After six months she reports to headquarters: "The Manila team appears to have very few issues — no one has come to me." The Manila team actually has significant morale and workload concerns that have been building for months.',
    whatHappened: 'The Filipino team heard Marieke\'s invitation and concluded it was a Western social nicety, not a genuine policy. In Filipino corporate culture — strongly shaped by high Power Distance — approaching a senior foreign manager directly with concerns, especially critical ones, is presumptuous and risks causing embarrassment to both parties. Issues are expected to flow through established hierarchical channels. The team\'s silence was not satisfaction. It was cultural respect for hierarchy.',
    culturalExplanation: 'The Philippines scores very high on Hofstede\'s Power Distance Index. An "open door policy" — a low-PDI concept from flat, egalitarian management cultures — assumes that employees feel psychologically empowered to approach senior leaders directly. In high-PDI cultures, this assumption simply does not hold. The invitation was real; the cultural safety to accept it was not. Neither Marieke nor the team behaved incorrectly — they were operating on incompatible assumptions about what the relationship between seniority and access looks like.',
    framework: 'hofstede',
    frameworkDimension: 'Power Distance',
    hrGuidance: {
      dos: [
        'In high-PDI offices, use structured channels rather than open-door assumptions: anonymous pulse surveys, team leads as intermediaries, skip-level 1-on-1s through a scheduled process',
        'Brief incoming managers on local Power Distance norms before deploying them to offices in high-PDI cultures',
        'When genuinely seeking feedback from high-PDI teams, make the channel explicit and structured: "Each month I will have a 30-minute scheduled 1-on-1 with each team member"',
        'Read silence and low uptake of open-door policies in high-PDI offices as a signal to change the channel, not as evidence of no concerns',
      ],
      donts: [
        'Do not assume an open-door policy will function identically across all cultural contexts',
        'Do not interpret low direct-access in high-PDI offices as team satisfaction',
        'Do not implement management tools designed for flat, low-PDI cultures in high-PDI offices without adapting the format',
        'Do not use "no one came to me" as evidence of no problems in a high-PDI environment',
      ],
      bestPractice: 'Replace "open door" with "scheduled access": a standing monthly 30-minute 1-on-1 between the manager and each team member. In high-PDI cultures, a formal scheduled channel produces honest feedback that an informal open invitation never will.',
    },
    reflectionQuestions: [
      'How does Hofstede\'s Power Distance dimension explain why the open-door policy failed to produce the feedback Marieke was looking for?',
      'What management tools work in low-PDI cultures but fail in high-PDI ones, and how should they be adapted?',
      'Design a feedback system for a high-PDI office that surfaces genuine concerns without requiring employees to break cultural hierarchy norms.',
    ],
    difficulty: 'intermediate',
  },

  {
    id: 'ci-020',
    title: 'The Partnership That Left Too Early',
    category: 'time',
    cultures: ['USA', 'South Korea'],
    religions: [],
    situation: 'A US tech company sends their VP of Partnerships, Sarah, to Seoul to negotiate a software licensing deal. The Korean partner company spends the entire first day on a city tour, a traditional restaurant dinner, and warm team introductions — no business discussed. The second morning begins with more shared meals and cultural activities. By lunchtime, Sarah emails her CEO: "They\'re stalling. Nothing has been discussed. I\'m flying home early." The deal collapses.',
    whatHappened: 'The Korean company was following standard and sincere relationship-building protocol. In Korean business culture, you do not negotiate with strangers — the "non-business" days ARE the business. The social investment is the due diligence. Sarah\'s early departure was interpreted by the Korean team as a severe insult and a signal that she did not consider them worth her time. They quietly withdrew from the partnership.',
    culturalExplanation: 'Trompenaars\' Specific vs Diffuse dimension is central here. For Sarah (Specific, US), business and relationship are separate — you meet, you negotiate, you decide. For the Korean team (Diffuse), the relationship must be established before any business transaction is meaningful or trustworthy. Trompenaars\' Sequential vs Synchronic time dimension also applies: Sarah expected linear progression (relationship → negotiation → deal); the Korean team experienced relationship-building and deal-making as simultaneous and inseparable.',
    framework: 'trompenaars',
    frameworkDimension: 'Specific vs Diffuse + Sequential vs Synchronic Time',
    hrGuidance: {
      dos: [
        'Brief all staff travelling for high-stakes partnership discussions in East Asia: the first 1–2 days of social engagement are not optional preamble — they are the deal',
        'Build relationship time explicitly into the trip budget and timeline',
        'Instruct visiting teams: if no business has been discussed by day two, this is normal — do not escalate internally',
        'Use the social time to learn about the partner — the insights gained are strategically valuable',
      ],
      donts: [
        'Do not interpret Korean, Japanese, or Chinese social hospitality as stalling or time-wasting',
        'Do not schedule tight return flights for high-context partnership negotiations',
        'Do not communicate internal concern about "slow progress" to partners — it signals distrust',
        'Do not send a team to Diffuse-culture partnership negotiations with a Specific-culture script',
      ],
      bestPractice: 'Add a "Cultural Business Rhythm" section to international trip briefing packs: "In South Korea, Japan and China, relationship days before business discussion are standard. Budget 1–2 days of social engagement before expecting substantive negotiation. This is the deal-building phase."',
    },
    reflectionQuestions: [
      'How do Trompenaars\' Specific vs Diffuse and Sequential vs Synchronic dimensions explain why Sarah and the Korean team had completely different interpretations of the same two days?',
      'What is "due diligence" in a Diffuse business culture, and how does it differ from due diligence in a Specific one?',
      'Redesign Sarah\'s trip itinerary and internal briefing to succeed in a Diffuse, high-context business culture.',
    ],
    difficulty: 'intermediate',
  },
]

export function getIncidentsByCategory(category: string): CriticalIncident[] {
  if (category === 'all') return criticalIncidents
  return criticalIncidents.filter((i) => i.category === category)
}

export function getIncidentsByReligion(religionId: string): CriticalIncident[] {
  return criticalIncidents.filter((i) => i.religions.includes(religionId))
}

export function getIncidentsByFramework(framework: string): CriticalIncident[] {
  return criticalIncidents.filter((i) => i.framework === framework)
}

export const incidentCategories = [
  { id: 'all', label: 'All Scenarios', icon: '📚' },
  { id: 'prayer', label: 'Prayer & Observance', icon: '🙏' },
  { id: 'food', label: 'Food & Dietary', icon: '🍽️' },
  { id: 'dress', label: 'Religious Dress', icon: '👔' },
  { id: 'communication', label: 'Communication', icon: '💬' },
  { id: 'hierarchy', label: 'Hierarchy & Status', icon: '🏛️' },
  { id: 'time', label: 'Time & Punctuality', icon: '🕐' },
  { id: 'holidays', label: 'Religious Holidays', icon: '📅' },
  { id: 'greetings', label: 'Greetings & Protocol', icon: '🤝' },
  { id: 'meetings', label: 'Meetings & Decisions', icon: '📊' },
]
