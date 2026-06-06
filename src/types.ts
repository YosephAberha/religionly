export interface ScriptureRef {
  reference: string
  text: string
}

export interface BeliefCategory {
  summary: string
  details: string
  scriptures: ScriptureRef[]
}

export interface Practice {
  name: string
  description: string
  frequency: string
  icon: string
}

export interface Denomination {
  name: string
  followers: string
  description: string
  distinctives: string[]
}

export interface SacredText {
  name: string
  language: string
  description: string
  sections?: string[]
}

export interface Religion {
  id: string
  name: string
  emoji: string
  gradient: string
  accent: string
  glow: string
  founded: string
  followersGlobal: string
  origin: string
  tagline: string
  overview: string
  sacredTexts: SacredText[]
  beliefs: {
    god: BeliefCategory
    afterlife: BeliefCategory
    evil: BeliefCategory
    humanNature: BeliefCategory
    salvation: BeliefCategory
    ethics: BeliefCategory
  }
  practices: Practice[]
  denominations: Denomination[]
  keyFigures: string[]
  history: { year: string; event: string }[]
  sinAndRedemption: SinAndRedemption
  culturalEtiquette: CulturalEtiquette
}

export interface SinAndRedemption {
  viewOfSin: string
  sinsConsidered: { sin: string; description: string; severity: string }[]
  consequences: string
  forgiveness: string
  redemptionPath: string[]
  dealingWithSin: string
  adviceForStrugglers: string[]
  scriptures: ScriptureRef[]
}

export interface CulturalEtiquette {
  overview: string
  doList: { rule: string; explanation: string }[]
  dontList: { rule: string; explanation: string }[]
  greetings: string
  dressCode: string
  dietaryRules: string
  sacredSpaces: string
  religiousEvents: string
  commonMisconceptions: { misconception: string; reality: string }[]
}

export type PageId = 'home' | 'browse' | 'map' | 'religion' | 'workplace' | 'incidents' | 'frameworks' | 'communication'

export interface WorkplaceHoliday {
  name: string
  approxDates: string
  significance: string
  duration: string
  workImpact: string
  fastingInvolved: boolean
  accommodationTip: string
}

export interface WorkplaceAccommodation {
  religionId: string
  prayerRequirements: {
    hasMandatory: boolean
    frequency: string
    times: string[]
    duration: string
    spaceRequirements: string
    washingRequired: boolean
    notes: string
  }
  dietaryRestrictions: {
    summary: string
    prohibited: string[]
    required: string[]
    eventTips: string[]
  }
  dresscode: {
    summary: string
    specificItems: string[]
    visitTips: string[]
  }
  holidays: WorkplaceHoliday[]
  hrChecklist: string[]
  legalNote: string
}

export type IncidentCategory =
  | 'prayer'
  | 'food'
  | 'dress'
  | 'communication'
  | 'hierarchy'
  | 'time'
  | 'gender'
  | 'meetings'
  | 'greetings'
  | 'holidays'

export type CulturalFramework = 'hofstede' | 'globe' | 'trompenaars' | 'hall'

export interface CriticalIncident {
  id: string
  title: string
  category: IncidentCategory
  cultures: string[]
  religions: string[]
  situation: string
  whatHappened: string
  culturalExplanation: string
  framework: CulturalFramework
  frameworkDimension: string
  hrGuidance: {
    dos: string[]
    donts: string[]
    bestPractice: string
  }
  reflectionQuestions: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export interface FrameworkDimension {
  id: string
  name: string
  description: string
  lowPole: { label: string; description: string; examples: string[] }
  highPole: { label: string; description: string; examples: string[] }
  hrImplication: string
  workplaceExample: string
  countryExamples: { country: string; level: 'low' | 'medium' | 'high'; note: string }[]
}

export interface CulturalFrameworkData {
  id: CulturalFramework
  name: string
  fullName: string
  author: string
  year: string
  overview: string
  dimensions: FrameworkDimension[]
}

export interface CommunicationProfile {
  id: string
  region: string
  countries: string[]
  emoji: string
  contextLevel: 'very-low' | 'low' | 'medium' | 'high' | 'very-high'
  directness: 'very-direct' | 'direct' | 'moderate' | 'indirect' | 'very-indirect'
  formality: 'very-formal' | 'formal' | 'moderate' | 'informal' | 'very-informal'
  timeOrientation: 'monochronic' | 'mixed' | 'polychronic'
  hierarchyInMeetings: 'flat' | 'moderate' | 'strict'
  conflictStyle: string
  silenceMeaning: string
  meetingStyle: string
  writtenVsVerbal: string
  hrTips: string[]
  watchOutFor: string[]
}

export interface CountryReligionData {
  name: string
  iso: string
  population: number
  religions: {
    christianity?: number
    islam?: number
    judaism?: number
    hinduism?: number
    buddhism?: number
    sikhism?: number
    folk?: number
    other?: number
    unaffiliated?: number
  }
  dominantReligion: string
  notes?: string
}

export interface ReligionOrigin {
  religion: string
  originYear: string
  originPlace: string
  originCoords: [number, number]
  expansionPhases: {
    period: string
    region: string
    description: string
    coords?: [number, number]
  }[]
}

export interface GlobalReligionStat {
  name: string
  followers: string
  percentage: number
  color: string
  emoji: string
}
