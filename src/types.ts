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

export type PageId = 'home' | 'browse' | 'map' | 'religion'

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
