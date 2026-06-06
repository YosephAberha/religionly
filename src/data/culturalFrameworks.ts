import { CulturalFrameworkData } from '../types'

export const culturalFrameworks: CulturalFrameworkData[] = [
  {
    id: 'hofstede',
    name: 'Hofstede',
    fullName: "Hofstede's Cultural Dimensions",
    author: 'Geert Hofstede',
    year: '1980 (expanded 2001)',
    overview:
      "The most widely cited cross-cultural framework in HR and management. Based on surveys of 116,000 IBM employees across 40+ countries, Hofstede identified five dimensions that explain systematic differences in national cultures. These dimensions help HR professionals predict how employees from different backgrounds will respond to management styles, feedback, teamwork, and organisational structure.",
    dimensions: [
      {
        id: 'power-distance',
        name: 'Power Distance (PDI)',
        description:
          'The extent to which less powerful members of a society accept and expect unequal distribution of power. Reflects the emotional distance between employees and managers.',
        lowPole: {
          label: 'Low Power Distance',
          description: 'Hierarchy is for convenience only. Flat structures preferred. Employees expect to be consulted. Managers are accessible and informal. Power is questioned and legitimised.',
          examples: ['Denmark', 'Sweden', 'Austria', 'Netherlands', 'Germany'],
        },
        highPole: {
          label: 'High Power Distance',
          description: 'Hierarchy reflects real existential inequalities. Centralised power is normal. Subordinates expect to be told what to do. The boss is always right. Status symbols matter.',
          examples: ['Malaysia', 'Philippines', 'Mexico', 'India', 'China'],
        },
        hrImplication:
          'In high-PDI teams: direct feedback from superiors is expected and respected; employees wait for instructions. In low-PDI teams: participatory management is expected; top-down orders without explanation cause resentment.',
        workplaceExample:
          'A German manager who asks "What do you think we should do?" empowers a Dutch team member but confuses a Filipino one, who expects a clear directive.',
        countryExamples: [
          { country: 'Germany', level: 'low', note: 'PDI 35 — flat hierarchies, debate expected' },
          { country: 'Japan', level: 'medium', note: 'PDI 54 — seniority respected, consensus-driven' },
          { country: 'India', level: 'high', note: 'PDI 77 — clear hierarchy, senior approval expected' },
          { country: 'Malaysia', level: 'high', note: 'PDI 104 — among the highest globally' },
          { country: 'Denmark', level: 'low', note: 'PDI 18 — one of the world\'s flattest cultures' },
        ],
      },
      {
        id: 'individualism',
        name: 'Individualism vs Collectivism (IDV)',
        description:
          'The degree to which individuals are integrated into groups. Individualist cultures prioritise personal achievement and autonomy; collectivist cultures prioritise group loyalty and harmony.',
        lowPole: {
          label: 'Collectivism',
          description: 'People belong to strong, cohesive in-groups (family, tribe, organisation). Loyalty to the group protects the individual. Group harmony is prioritised over personal opinion. Hiring and promotion favour in-group members.',
          examples: ['Guatemala', 'Ecuador', 'Pakistan', 'Indonesia', 'China'],
        },
        highPole: {
          label: 'Individualism',
          description: 'Everyone is expected to look after themselves and immediate family. Direct honest communication expected. Personal opinion valued. Privacy important. Performance is individual.',
          examples: ['USA', 'Australia', 'UK', 'Netherlands', 'Germany'],
        },
        hrImplication:
          'Collectivist employees may struggle with individual performance reviews and prefer group rewards. Individualist employees resist group accountability. Team-building activities land very differently across this spectrum.',
        workplaceExample:
          'Publicly singling out one employee for praise motivates an American but embarrasses a Japanese colleague who sees it as separating them from the group.',
        countryExamples: [
          { country: 'USA', level: 'high', note: 'IDV 91 — highest globally' },
          { country: 'Germany', level: 'high', note: 'IDV 67 — individual accountability expected' },
          { country: 'Japan', level: 'medium', note: 'IDV 46 — group harmony valued' },
          { country: 'China', level: 'low', note: 'IDV 20 — strong in-group collectivism' },
          { country: 'Brazil', level: 'low', note: 'IDV 38 — family and group loyalty strong' },
        ],
      },
      {
        id: 'masculinity',
        name: 'Masculinity vs Femininity (MAS)',
        description:
          'The distribution of emotional roles between genders. Masculine cultures value competition, achievement and success. Feminine cultures value caring, quality of life and work-life balance.',
        lowPole: {
          label: 'Femininity',
          description: 'Dominant values: caring for others, modesty, quality of life. Consensus and cooperation valued over competition. Work to live. Gender roles overlap — both men and women can be modest and caring.',
          examples: ['Sweden', 'Norway', 'Netherlands', 'Denmark', 'Finland'],
        },
        highPole: {
          label: 'Masculinity',
          description: 'Dominant values: achievement, heroism, assertiveness, material success. Live to work. Competition and performance are central. Clear differentiation of gender roles. Winner takes all.',
          examples: ['Japan', 'Slovakia', 'Hungary', 'Austria', 'Venezuela'],
        },
        hrImplication:
          'In highly masculine cultures, long work hours = commitment; flexible working = weakness. In feminine cultures, flexible working, parental leave and work-life balance are seen as organisational values, not perks.',
        workplaceExample:
          'A Swedish employee who leaves at 5pm sharp is demonstrating discipline and respect for personal time. A Japanese colleague sees it as lack of commitment to the team.',
        countryExamples: [
          { country: 'Japan', level: 'high', note: 'MAS 95 — highest globally; intense work culture' },
          { country: 'Germany', level: 'high', note: 'MAS 66 — performance and achievement oriented' },
          { country: 'Sweden', level: 'low', note: 'MAS 5 — one of the world\'s most feminine cultures' },
          { country: 'Netherlands', level: 'low', note: 'MAS 14 — consensus, modesty valued' },
          { country: 'Brazil', level: 'medium', note: 'MAS 49 — mixed; relationships as important as achievement' },
        ],
      },
      {
        id: 'uncertainty-avoidance',
        name: 'Uncertainty Avoidance (UAI)',
        description:
          'The extent to which members of a culture feel threatened by ambiguous or unknown situations. High-UAI cultures prefer rules, structure and certainty. Low-UAI cultures are comfortable with ambiguity and improvisation.',
        lowPole: {
          label: 'Low Uncertainty Avoidance',
          description: 'Comfortable with ambiguity and change. Fewer rules preferred. Innovative and flexible. Tolerance for deviance. Practice matters more than principle. Risk-taking is acceptable.',
          examples: ['Singapore', 'Jamaica', 'Denmark', 'Sweden', 'UK'],
        },
        highPole: {
          label: 'High Uncertainty Avoidance',
          description: 'Need for rules, precision and structure. Resistance to change. Loyal to organisation and career. Expert knowledge respected. Emotional expression of anxiety about uncertainty.',
          examples: ['Greece', 'Portugal', 'Japan', 'Germany', 'France'],
        },
        hrImplication:
          'High-UAI employees need clear job descriptions, explicit procedures, and structured onboarding. Ambiguous assignments cause stress. Low-UAI employees thrive in startup-style environments but may appear to lack rigour.',
        workplaceExample:
          'A German engineer given a vague brief ("figure it out") will be frustrated and underperform. A British counterpart may thrive with the same open-ended task.',
        countryExamples: [
          { country: 'Germany', level: 'high', note: 'UAI 65 — structured, rule-oriented' },
          { country: 'France', level: 'high', note: 'UAI 86 — formal procedures deeply valued' },
          { country: 'UK', level: 'low', note: 'UAI 35 — pragmatic, comfortable with ambiguity' },
          { country: 'Singapore', level: 'low', note: 'UAI 8 — extremely low; flexible and adaptive' },
          { country: 'Japan', level: 'high', note: 'UAI 92 — among the highest globally' },
        ],
      },
      {
        id: 'long-term-orientation',
        name: 'Long-term vs Short-term Orientation (LTO)',
        description:
          'How much a culture focuses on future rewards vs present/past traditions. Derived from Confucian values. Long-term cultures invest in education, frugality and persistence. Short-term cultures honour tradition and expect quick results.',
        lowPole: {
          label: 'Short-term Orientation',
          description: 'Respect for tradition. Quick results expected. Protecting face. Spending for today. Social obligations (reciprocity of gifts and greetings). National pride.',
          examples: ['USA', 'Nigeria', 'Ghana', 'Pakistan', 'Australia'],
        },
        highPole: {
          label: 'Long-term Orientation',
          description: 'Future rewards prioritised over short-term satisfaction. Persistence and perseverance valued. Thrift and saving. Adaptation of traditions to modern needs. Shame rather than guilt as a social regulator.',
          examples: ['China', 'Japan', 'South Korea', 'Taiwan', 'Germany'],
        },
        hrImplication:
          'Long-term oriented employees invest in skills development and accept deferred rewards. Short-term oriented employees expect recognition and results now. Training ROI calculations differ dramatically across this dimension.',
        workplaceExample:
          'A Chinese employee happily invests 2 years in a role with no promotion prospect if they see a long-term career path. An American equivalent may leave after 6 months without a clear advancement.',
        countryExamples: [
          { country: 'China', level: 'high', note: 'LTO 87 — strong future orientation, Confucian roots' },
          { country: 'Germany', level: 'high', note: 'LTO 83 — long-term planning, engineering mindset' },
          { country: 'USA', level: 'low', note: 'LTO 26 — quarterly results focus, quick wins' },
          { country: 'Nigeria', level: 'low', note: 'LTO 13 — traditions and immediate obligations valued' },
          { country: 'Japan', level: 'high', note: 'LTO 88 — persistence, deferred gratification' },
        ],
      },
    ],
  },

  {
    id: 'globe',
    name: 'GLOBE',
    fullName: 'GLOBE Study — Global Leadership and Organizational Behavior Effectiveness',
    author: 'Robert J. House et al. (170 researchers, 62 countries)',
    year: '1991–2004',
    overview:
      "The GLOBE Study is the most comprehensive cross-cultural leadership and management research ever conducted. 170 researchers across 62 countries examined how culture affects leadership effectiveness and organisational behavior. It identified 9 cultural dimensions and grouped countries into 10 cultural clusters. Unlike Hofstede (values), GLOBE measures both current practices ('As Is') and ideal values ('Should Be') — showing the gap between what a culture does and what it wishes it did.",
    dimensions: [
      {
        id: 'globe-power-distance',
        name: 'Power Distance',
        description: 'The degree to which members of a collective expect power to be distributed equally.',
        lowPole: { label: 'Low Power Distance', description: 'Equal distribution of power expected. Flat structures preferred.', examples: ['Denmark', 'Netherlands', 'South Africa (white sample)'] },
        highPole: { label: 'High Power Distance', description: 'Hierarchical order accepted as normal. Authority respected.', examples: ['Morocco', 'Argentina', 'Thailand'] },
        hrImplication: 'High-PDI teams expect clear authority. Participatory leadership may be seen as weakness or indecision.',
        workplaceExample: 'In a high-PDI GLOBE cluster (Middle East), an open-door policy may be ignored because employees fear that approaching the manager directly is presumptuous.',
        countryExamples: [
          { country: 'Morocco', level: 'high', note: 'Middle East cluster — hierarchical decision-making' },
          { country: 'Denmark', level: 'low', note: 'Nordic cluster — flat, consensus-based' },
          { country: 'Germany', level: 'medium', note: 'Germanic Europe — structured but consultative' },
        ],
      },
      {
        id: 'globe-uncertainty-avoidance',
        name: 'Uncertainty Avoidance',
        description: 'The extent to which a society relies on norms, rules and procedures to reduce the unpredictability of future events.',
        lowPole: { label: 'Low Uncertainty Avoidance', description: 'Comfortable with change and ambiguity. Improvisation valued.', examples: ['Russia', 'Hungary', 'Bolivia'] },
        highPole: { label: 'High Uncertainty Avoidance', description: 'Strong preference for structure, rules and predictability.', examples: ['Switzerland', 'Sweden', 'Germany'] },
        hrImplication: 'High-UAI organisations produce thorough documentation, detailed processes, and resist ad hoc changes. Low-UAI organisations are more agile but may lack rigor.',
        workplaceExample: 'Swiss and German employees expect complete onboarding documentation. Russian employees may find the same level of documentation bureaucratic and restrictive.',
        countryExamples: [
          { country: 'Switzerland', level: 'high', note: 'Germanic Europe — precision and process oriented' },
          { country: 'Russia', level: 'low', note: 'Eastern Europe — adaptive, tolerates ambiguity' },
          { country: 'Sweden', level: 'high', note: 'Nordic — structured despite flat hierarchy' },
        ],
      },
      {
        id: 'globe-humane-orientation',
        name: 'Humane Orientation',
        description: 'The degree to which a collective encourages and rewards individuals for being fair, altruistic, generous, caring and kind.',
        lowPole: { label: 'Low Humane Orientation', description: 'Self-interest drives motivation. Power and material success valued. Less concern for others\' wellbeing.', examples: ['France', 'Spain', 'Germany'] },
        highPole: { label: 'High Humane Orientation', description: 'Altruism, generosity and care are rewarded. Belonging and affiliation are primary motivators.', examples: ['Egypt', 'Malaysia', 'Ireland', 'Philippines'] },
        hrImplication: 'High-HO workplaces build loyalty through interpersonal care. Low-HO workplaces motivate through results, titles and compensation. CSR and community programs resonate differently.',
        workplaceExample: 'In a high-HO culture like the Philippines, a manager who personally asks about an employee\'s sick family member builds stronger loyalty than a bonus.',
        countryExamples: [
          { country: 'Egypt', level: 'high', note: 'Middle East cluster — community care deeply valued' },
          { country: 'Germany', level: 'low', note: 'Performance and results over interpersonal warmth' },
          { country: 'Ireland', level: 'high', note: 'Anglo cluster �� hospitality and care valued' },
        ],
      },
      {
        id: 'globe-performance-orientation',
        name: 'Performance Orientation',
        description: 'The degree to which a collective encourages and rewards group members for performance improvement and excellence.',
        lowPole: { label: 'Low Performance Orientation', description: 'Loyalty, tradition and belonging valued over achievement. Status comes from who you are, not what you produce.', examples: ['Russia', 'Greece', 'Italy'] },
        highPole: { label: 'High Performance Orientation', description: 'Achievement and excellence are highly valued. Training and development investment expected. Meritocracy rewarded.', examples: ['USA', 'Taiwan', 'Singapore', 'Germany'] },
        hrImplication: 'High-PO cultures respond well to performance-based pay and recognition programs. Low-PO cultures see merit-only reward as unfair — seniority, relationships and loyalty should also be rewarded.',
        workplaceExample: 'A US-style performance management system (OKRs, individual KPIs, stack ranking) will alienate a Russian or Greek team that values group loyalty over individual output metrics.',
        countryExamples: [
          { country: 'USA', level: 'high', note: 'High achievement culture, meritocracy central' },
          { country: 'Germany', level: 'high', note: 'Expertise and Gründlichkeit (thoroughness) highly valued' },
          { country: 'Russia', level: 'low', note: 'Relationship and loyalty matter more than metrics' },
        ],
      },
      {
        id: 'globe-gender-egalitarianism',
        name: 'Gender Egalitarianism',
        description: 'The degree to which a collective minimises gender inequality.',
        lowPole: { label: 'Low Gender Egalitarianism', description: 'Distinct gender roles. Men and women occupy different social and professional spheres.', examples: ['Egypt', 'South Korea', 'Morocco'] },
        highPole: { label: 'High Gender Egalitarianism', description: 'Gender roles overlap significantly. Women and men have equal career opportunity and social standing.', examples: ['Hungary', 'Poland', 'Sweden', 'Denmark'] },
        hrImplication: 'Low-GE employees may be uncomfortable with female authority figures. Mixed-gender teams may function differently. Equal-pay and parental leave policies carry different meaning.',
        workplaceExample: 'A female German manager leading a team that includes male colleagues from Middle Eastern or South Korean backgrounds may face subtle authority challenges rooted in GE differences.',
        countryExamples: [
          { country: 'Sweden', level: 'high', note: 'Nordic cluster — among most egalitarian globally' },
          { country: 'Egypt', level: 'low', note: 'Middle East cluster — distinct gender role expectations' },
          { country: 'Germany', level: 'medium', note: 'Improving but historical gender role gaps persist' },
        ],
      },
      {
        id: 'globe-assertiveness',
        name: 'Assertiveness',
        description: 'The degree to which individuals are assertive, confrontational and aggressive in their relationships with others.',
        lowPole: { label: 'Low Assertiveness', description: 'Modesty and harmony valued. Indirect communication preferred. Confrontation avoided. Sympathy and warmth are key relationship builders.', examples: ['Sweden', 'New Zealand', 'Switzerland (French)'] },
        highPole: { label: 'High Assertiveness', description: 'Direct communication valued. Confrontation is healthy. Confidence and directness signal competence.', examples: ['Germany', 'Austria', 'USA', 'Greece'] },
        hrImplication: 'In high-assertiveness cultures, voicing disagreement signals engagement. In low-assertiveness cultures, it signals disrespect. The same behaviour is read completely differently.',
        workplaceExample: 'A German engineer who interrupts a presentation to challenge a technical assumption is seen as engaged and rigorous in Germany; as rude and aggressive by a New Zealand colleague.',
        countryExamples: [
          { country: 'Germany', level: 'high', note: 'Direct, debate-oriented — directness = respect' },
          { country: 'Sweden', level: 'low', note: 'Harmony and consensus valued; directness can feel aggressive' },
          { country: 'USA', level: 'high', note: 'Confident self-promotion expected' },
        ],
      },
    ],
  },

  {
    id: 'trompenaars',
    name: 'Trompenaars',
    fullName: "Trompenaars & Hampden-Turner's 7 Dimensions of Culture",
    author: 'Fons Trompenaars & Charles Hampden-Turner',
    year: '1993',
    overview:
      "Based on surveys of ~30,000 managers across 55 countries over multiple decades, Trompenaars and Hampden-Turner identified 7 dimensions of cultural difference. This framework is particularly popular in executive education and corporate cross-cultural training because it focuses on practical dilemmas managers face: How do I give feedback? Do relationships or rules come first? How do I handle time? The framework is more pragmatic and less academic than Hofstede, making it highly applicable in HR training scenarios.",
    dimensions: [
      {
        id: 'universalism-particularism',
        name: 'Universalism vs Particularism',
        description: 'Should the same rules apply to everyone, or should relationships and specific circumstances determine how rules are applied?',
        lowPole: { label: 'Particularism', description: 'Context, relationships and special circumstances matter more than abstract rules. "It depends on who it is and what the situation is." Loyalty to people over adherence to codes.', examples: ['China', 'Latin America', 'Russia', 'South Korea'] },
        highPole: { label: 'Universalism', description: '"What is good and right should apply to everyone." Rules, contracts and procedures apply consistently. Deviation for relationships is seen as corruption or unfair advantage.', examples: ['USA', 'Canada', 'Australia', 'Germany', 'Sweden'] },
        hrImplication: 'Universalist HR policies (equal rules for all) are seen as fair in Universalist cultures but as cold and inflexible in Particularist ones. Particularist employees expect special consideration for family emergencies, long-term loyalty, or relationship context.',
        workplaceExample: 'A German HR manager applies the leave policy strictly regardless of who is asking. A Brazilian colleague expects that 10 years of loyalty earns special consideration. Both believe they are being treated fairly — by their own cultural standard.',
        countryExamples: [
          { country: 'USA', level: 'high', note: 'Rules apply to all — equal treatment is the gold standard' },
          { country: 'Germany', level: 'high', note: 'Contract and procedure override relationships' },
          { country: 'China', level: 'low', note: 'Guanxi (relationships) modify how rules are applied' },
        ],
      },
      {
        id: 'individualism-communitarianism',
        name: 'Individualism vs Communitarianism',
        description: 'Do people see themselves primarily as individuals, or as part of a group? Does the individual serve the group, or does the group serve the individual?',
        lowPole: { label: 'Communitarianism', description: 'Group decisions preferred. Consensus before action. Group achievements celebrated. Individual success is a group achievement. Belonging is fundamental.', examples: ['Japan', 'China', 'India', 'Mexico'] },
        highPole: { label: 'Individualism', description: 'Individual initiative rewarded. Personal responsibility for decisions. Individual achievement celebrated. Self-reliance expected.', examples: ['USA', 'UK', 'Germany', 'Canada'] },
        hrImplication: 'Individual bonus systems motivate Individualist employees but create resentment in Communitarian teams. Group-based rewards work in Communitarian cultures but are seen as unfair ("why am I rewarded for others\' work?") in Individualist ones.',
        workplaceExample: 'An American sales incentive scheme rewarding individual top performers demoralises a Japanese team that values group harmony and shared success.',
        countryExamples: [
          { country: 'Japan', level: 'low', note: 'Communitarian — group consensus before individual action' },
          { country: 'USA', level: 'high', note: 'Individualist — personal achievement and responsibility' },
          { country: 'Germany', level: 'medium', note: 'Individual competence but values team structure' },
        ],
      },
      {
        id: 'specific-diffuse',
        name: 'Specific vs Diffuse',
        description: 'Is work a separate, defined space, or does it overlap with personal life and relationships? How much of yourself do you bring to professional interactions?',
        lowPole: { label: 'Diffuse', description: 'Work and personal life overlap. Relationships permeate all domains. Knowing someone personally affects how you work with them. Authority in one domain transfers to others. Indirect communication. The whole person is involved.', examples: ['China', 'Argentina', 'Spain', 'Russia'] },
        highPole: { label: 'Specific', description: 'Work is a defined, bounded space. Contracts define the relationship. Personal life is separate. Direct, precise communication. A manager\'s authority is specific to the work context.', examples: ['Germany', 'USA', 'UK', 'Sweden'] },
        hrImplication: 'In Diffuse cultures, socialising and building personal relationships before business is essential — skipping it signals disrespect. In Specific cultures, mixing personal life with work feels intrusive and inefficient.',
        workplaceExample: 'A German manager who never attends team social events is seen as appropriately professional. The same behavior from a manager in Argentina signals aloofness and makes collaboration harder.',
        countryExamples: [
          { country: 'Germany', level: 'high', note: 'Very Specific — strict work/life boundary' },
          { country: 'China', level: 'low', note: 'Diffuse — relationship context shapes all business' },
          { country: 'Spain', level: 'low', note: 'Personal warmth and social relationships central' },
        ],
      },
      {
        id: 'neutral-affective',
        name: 'Neutral vs Affective (Emotional)',
        description: 'Should emotions be expressed or controlled in professional settings? Is emotional expression seen as authentic or unprofessional?',
        lowPole: { label: 'Neutral', description: 'Emotions are not displayed. Keeping calm is professional. Physical contact minimal. Reason over emotion in decision-making. Emotional outbursts signal weakness or instability.', examples: ['Japan', 'UK', 'Germany', 'Netherlands'] },
        highPole: { label: 'Affective', description: 'Emotions are openly expressed. Enthusiasm, passion and warmth are professional assets. Physical touch and expressive body language are normal. Emotional engagement signals genuine interest.', examples: ['Italy', 'Spain', 'Brazil', 'France'] },
        hrImplication: 'In Affective cultures, a manager who never shows enthusiasm or emotion is seen as cold and demotivating. In Neutral cultures, emotional displays in meetings are seen as unprofessional or destabilising.',
        workplaceExample: 'A Brazilian manager who enthusiastically hugs a new client and speaks with animated gestures builds warmth and trust. The same behavior from a Japanese manager would be deeply unusual.',
        countryExamples: [
          { country: 'Italy', level: 'high', note: 'Affective — emotion is authentic and expected' },
          { country: 'Japan', level: 'low', note: 'Very Neutral — emotional control signals respect' },
          { country: 'Germany', level: 'low', note: 'Neutral — professionalism = emotional restraint' },
        ],
      },
      {
        id: 'achievement-ascription',
        name: 'Achievement vs Ascription',
        description: 'Is status earned through what you achieve (merit), or is it given to you by who you are (age, family, gender, connections)?',
        lowPole: { label: 'Ascription', description: 'Status comes from birth, age, gender, connections or family. Respect is given automatically by position. Who you are matters as much as what you do.', examples: ['Saudi Arabia', 'India', 'China', 'Japan'] },
        highPole: { label: 'Achievement', description: 'Status is earned through performance, credentials and accomplishments. Titles must be justified by demonstrated ability. A young high-performer can outrank an older colleague.', examples: ['USA', 'Australia', 'UK', 'Germany'] },
        hrImplication: 'In Ascriptive cultures, promoting a young employee over a senior one causes status rupture and resentment. In Achievement cultures, seniority without performance is not respected.',
        workplaceExample: 'A 29-year-old German engineer promoted to team lead is expected to prove herself. An Indian colleague of the same age, promoted over senior colleagues, may face subtle delegitimisation regardless of her performance.',
        countryExamples: [
          { country: 'USA', level: 'high', note: 'Pure meritocracy is the cultural ideal' },
          { country: 'Saudi Arabia', level: 'low', note: 'Age, family and connections confer status' },
          { country: 'Germany', level: 'high', note: 'Achievement-oriented but credentials (Doktor, Diplom) carry ascriptive weight' },
        ],
      },
      {
        id: 'sequential-synchronic',
        name: 'Sequential vs Synchronic Time',
        description: 'Do people do one thing at a time in sequence, or do they work on multiple things simultaneously? Is time a straight line or a cycle?',
        lowPole: { label: 'Synchronic', description: 'Multiple activities happen simultaneously. Appointments are flexible. Relationships and context modify schedule. Past and future inform the present. Time is circular and flexible.', examples: ['Brazil', 'Mexico', 'Saudi Arabia', 'India'] },
        highPole: { label: 'Sequential', description: 'One thing at a time, in order. Punctuality is critical. Schedules are respected. Time is linear and finite. Meetings start and end on time. Interruptions are rude.', examples: ['Germany', 'Switzerland', 'USA', 'UK'] },
        hrImplication: 'Sequential employees perceive polychronic colleagues as disorganised and disrespectful. Synchronic employees experience sequential colleagues as rigid and inflexible. Scheduling conflicts are endemic in mixed-time-orientation teams.',
        workplaceExample: 'A German project manager who starts calls at the exact second and cuts off discussions at the hour mark is efficient and respectful of time in German culture; is cold and abrupt to a Brazilian team.',
        countryExamples: [
          { country: 'Germany', level: 'high', note: 'Zeit ist Geld — time is money, schedules sacred' },
          { country: 'Brazil', level: 'low', note: 'Relationships and context modify schedule flexibly' },
          { country: 'Saudi Arabia', level: 'low', note: 'Meetings extend as long as the relationship requires' },
        ],
      },
      {
        id: 'internal-external-control',
        name: 'Internal vs External Control',
        description: 'Do people believe they control their environment (internal locus), or that they must adapt to it (external locus)?',
        lowPole: { label: 'External Control', description: 'Nature and environment are more powerful than people. Adaptation and harmony with the environment. Going with the flow. Nature is a partner, not an adversary.', examples: ['China', 'Japan', 'Singapore', 'Egypt'] },
        highPole: { label: 'Internal Control', description: 'People can control and change their environment. Nature is to be conquered. Problems exist to be solved. Self-determination over fate. "We make our own luck."', examples: ['USA', 'Australia', 'Canada', 'Germany'] },
        hrImplication: 'Internal-control employees take personal ownership and proactively solve problems. External-control employees may wait for the right conditions, adapt to constraints, and frame setbacks differently.',
        workplaceExample: 'An American manager saying "we can change this situation if we want to" energises US-trained employees but may feel naive to a Chinese colleague who sees the organisational context as a given to work around.',
        countryExamples: [
          { country: 'USA', level: 'high', note: 'Strong internal locus — individual agency over outcomes' },
          { country: 'China', level: 'low', note: 'Adaptation to circumstances; harmony with environment' },
          { country: 'Germany', level: 'high', note: 'Engineering mindset — problems are solvable with effort' },
        ],
      },
    ],
  },

  {
    id: 'hall',
    name: 'Hall',
    fullName: "Hall & Hall's Cultural Communication Dimensions",
    author: 'Edward T. Hall & Mildred Reed Hall',
    year: '1959–1990',
    overview:
      "Anthropologist Edward Hall and his wife Mildred developed four cultural dimensions focused on communication, time, and space. Unlike the survey-based studies of Hofstede and GLOBE, Hall's work emerged from qualitative observation and years as a government and corporate cultural advisor. His framework is the most directly applicable to everyday workplace communication — particularly for understanding why people from different cultures talk past each other in meetings, negotiations, and written communication.",
    dimensions: [
      {
        id: 'high-low-context',
        name: 'High vs Low Context Communication',
        description: 'The degree to which communication relies on explicit verbal content vs implicit context, relationship, tone and situation.',
        lowPole: { label: 'Low Context', description: 'What is said is what is meant. Explicit, direct verbal communication. Everything important is stated clearly. Written contracts matter. Communication is independent of relationship. Silence is awkward.', examples: ['Germany', 'Scandinavia', 'USA', 'Australia', 'Netherlands'] },
        highPole: { label: 'High Context', description: 'Much meaning is embedded in context, body language, relationship history, timing and silence. What is NOT said carries as much meaning as what is. A "yes" may not mean agreement. Silence is meaningful.', examples: ['Japan', 'China', 'Saudi Arabia', 'Brazil', 'France'] },
        hrImplication: 'In high-context teams: written policies may be ignored in favour of what is implicitly understood. Email confirmation of decisions may feel distrustful. In low-context teams: ambiguous instructions cause frustration and performance problems.',
        workplaceExample: 'A German manager who emails a brief "I\'ll need this by Friday" to a Japanese colleague transmits an order. The Japanese colleague may need context: why Friday? Is this flexible? What happens if it\'s not ready? Silence on these questions does not mean acceptance.',
        countryExamples: [
          { country: 'Japan', level: 'high', note: 'Very High Context — silence and restraint carry meaning' },
          { country: 'Germany', level: 'low', note: 'Very Low Context — explicit, direct, written contracts' },
          { country: 'France', level: 'high', note: 'High Context — relationships modify what is communicated' },
          { country: 'USA', level: 'low', note: 'Low Context — direct, but more relationship-oriented than Germany' },
          { country: 'Saudi Arabia', level: 'high', note: 'Very High Context — honour, dignity and context paramount' },
        ],
      },
      {
        id: 'monochronic-polychronic',
        name: 'Monochronic vs Polychronic Time',
        description: 'Do people focus on one task at a time in sequence (monochronic), or do they handle multiple things simultaneously and flexibly (polychronic)?',
        lowPole: { label: 'Polychronic', description: 'Multiple things happen at once. Schedules are flexible. Relationships take priority over appointments. Interruptions are welcomed as part of life. Time is elastic and cyclical.', examples: ['Brazil', 'Mexico', 'Saudi Arabia', 'Nigeria', 'Italy'] },
        highPole: { label: 'Monochronic', description: 'One thing at a time. Punctuality is critical. Schedules are sacred commitments. Interruptions are rude. Time is a finite, linear resource to be managed efficiently.', examples: ['Germany', 'Switzerland', 'Sweden', 'USA', 'UK'] },
        hrImplication: 'Polychronic employees may handle multiple priorities simultaneously and appear distracted. Monochronic employees refuse to multitask and may appear rigid or inflexible. Neither is wrong — they are operating on different time maps.',
        workplaceExample: 'A Nigerian colleague taking multiple phone calls during a meeting is not being disrespectful — they are managing relationships and obligations simultaneously, which is culturally normal. A German colleague finds this intolerable.',
        countryExamples: [
          { country: 'Germany', level: 'high', note: 'Monochronic — punctuality is a moral virtue' },
          { country: 'Brazil', level: 'low', note: 'Polychronic — time is flexible; relationships modify schedules' },
          { country: 'Japan', level: 'high', note: 'Monochronic in external commitments, polychronic internally' },
        ],
      },
      {
        id: 'proxemics',
        name: 'Proxemics (Spatial Orientation)',
        description: 'How cultures define appropriate personal space in different social and professional contexts.',
        lowPole: { label: 'Close Proximity', description: 'Smaller personal space bubble. Physical touch during conversation is normal. Standing or sitting close signals warmth and engagement. Large physical distance feels cold or suspicious.', examples: ['Brazil', 'Saudi Arabia (same gender)', 'Italy', 'Argentina', 'India'] },
        highPole: { label: 'Larger Proximity', description: 'Larger personal space required. Physical touch limited to formal handshake. Standing too close feels intrusive. Physical distance is professional and respectful.', examples: ['Germany', 'Scandinavia', 'USA', 'UK', 'Japan'] },
        hrImplication: 'Proxemic mismatches cause discomfort without either party understanding why. A colleague who \'stands too close\' may be perceived as aggressive or intrusive; a colleague who maintains distance may be perceived as cold or unfriendly.',
        workplaceExample: 'An Italian colleague who touches a German colleague\'s arm to emphasise a point is demonstrating warmth and connection. The German colleague experiences it as a violation of personal space.',
        countryExamples: [
          { country: 'Germany', level: 'high', note: 'Large personal space — arm\'s length in professional settings' },
          { country: 'Brazil', level: 'low', note: 'Close physical interaction signals engagement and trust' },
          { country: 'Japan', level: 'high', note: 'Very little physical contact in professional settings' },
        ],
      },
      {
        id: 'information-speed',
        name: 'Information Speed',
        description: 'How quickly personal and professional information is shared and expected in a relationship. High-speed cultures share information quickly and expect the same; low-speed cultures build information sharing gradually.',
        lowPole: { label: 'Low Information Speed', description: 'Information is shared slowly and selectively. Relationships must be established before personal disclosure. Professional and personal information are separated. Trust must be earned before information is given.', examples: ['Germany', 'Japan', 'France', 'Sweden', 'UK'] },
        highPole: { label: 'High Information Speed', description: 'Personal information is shared quickly and openly. First conversations include personal background, family status, hobbies. Openness is warmth; privacy is suspicion. Relationships build fast.', examples: ['USA', 'Australia', 'Brazil', 'Nigeria'] },
        hrImplication: 'In high-speed cultures, team building exercises and personal sharing activities build trust quickly. In low-speed cultures, they may feel forced and invasive. Onboarding social events land very differently.',
        workplaceExample: 'An American colleague who shares photos of their family and asks personal questions within the first week of joining is building a relationship in a culturally normal way. Their new German colleague finds the same openness over-familiar.',
        countryExamples: [
          { country: 'USA', level: 'high', note: 'Warm, open, quick personal disclosure' },
          { country: 'Germany', level: 'low', note: 'Professional relationships develop slowly; personal = personal' },
          { country: 'Nigeria', level: 'high', note: 'Community and personal warmth build trust quickly' },
        ],
      },
    ],
  },
]

export function getFrameworkById(id: string): CulturalFrameworkData | undefined {
  return culturalFrameworks.find((f) => f.id === id)
}
