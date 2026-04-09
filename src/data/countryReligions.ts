import { CountryReligionData, ReligionOrigin, GlobalReligionStat } from '../types'

export const globalStats: GlobalReligionStat[] = [
  { name: 'Christianity', followers: '2.4 Billion', percentage: 31.1, color: '#6366f1', emoji: '✝️' },
  { name: 'Islam', followers: '1.9 Billion', percentage: 24.9, color: '#22c55e', emoji: '☪️' },
  { name: 'Hinduism', followers: '1.2 Billion', percentage: 15.2, color: '#f97316', emoji: '🕉️' },
  { name: 'Buddhism', followers: '506 Million', percentage: 6.6, color: '#a855f7', emoji: '🧘' },
  { name: 'Folk Religions', followers: '430 Million', percentage: 5.6, color: '#14b8a6', emoji: '🌿' },
  { name: 'Sikhism', followers: '30 Million', percentage: 0.4, color: '#06b6d4', emoji: '🪯' },
  { name: 'Judaism', followers: '15 Million', percentage: 0.2, color: '#eab308', emoji: '✡️' },
  { name: 'Unaffiliated', followers: '1.2 Billion', percentage: 15.6, color: '#64748b', emoji: '🔘' },
  { name: 'Other', followers: '61 Million', percentage: 0.8, color: '#94a3b8', emoji: '🔷' },
]

export const religionColors: Record<string, string> = {
  christianity: '#6366f1',
  islam: '#22c55e',
  hinduism: '#f97316',
  buddhism: '#a855f7',
  sikhism: '#06b6d4',
  judaism: '#eab308',
  folk: '#14b8a6',
  unaffiliated: '#64748b',
  other: '#94a3b8',
}

export const religionOrigins: ReligionOrigin[] = [
  {
    religion: 'Christianity',
    originYear: '~30 AD',
    originPlace: 'Jerusalem, Roman Judea',
    originCoords: [35.23, 31.77],
    expansionPhases: [
      { period: '30–100 AD', region: 'Roman Empire', description: 'Apostolic missions spread Christianity across the Mediterranean, reaching Rome, Greece, Egypt, and Asia Minor.', coords: [23.72, 37.97] },
      { period: '300–600 AD', region: 'Europe & North Africa', description: 'After Constantine\'s conversion (313 AD), Christianity became the state religion of Rome, spreading across all of Europe and North Africa.', coords: [12.49, 41.90] },
      { period: '1500–1800', region: 'Americas, Africa, Asia', description: 'European colonialism and missionary movements brought Christianity to the Americas, Sub-Saharan Africa, the Philippines, and parts of Asia.', coords: [-43.17, -22.91] },
      { period: '1800–Present', region: 'Global South', description: 'Explosive growth in Sub-Saharan Africa, Latin America, and parts of Asia. Christianity\'s center of gravity shifted southward.', coords: [36.82, -1.29] },
    ],
  },
  {
    religion: 'Islam',
    originYear: '610 AD',
    originPlace: 'Mecca, Arabia',
    originCoords: [39.82, 21.42],
    expansionPhases: [
      { period: '622–661', region: 'Arabian Peninsula', description: 'Prophet Muhammad united Arabia under Islam. The Rashidun Caliphate conquered the Levant, Persia, and Egypt.', coords: [44.36, 33.31] },
      { period: '661–1258', region: 'North Africa to Central Asia', description: 'Umayyad and Abbasid Caliphates expanded Islam across North Africa to Spain, and eastward through Persia to Central Asia and India.', coords: [2.35, 36.75] },
      { period: '1200–1600', region: 'Southeast Asia & Sub-Saharan Africa', description: 'Trade networks brought Islam to Indonesia, Malaysia, and West/East Africa. The Ottoman Empire dominated the Middle East and SE Europe.', coords: [106.84, -6.17] },
      { period: '1600–Present', region: 'Global Diaspora', description: 'Migration and conversion continue to spread Islam globally. It is the fastest-growing major religion by birth rate.', coords: [3.17, 51.22] },
    ],
  },
  {
    religion: 'Judaism',
    originYear: '~2000 BCE',
    originPlace: 'Canaan (Israel/Palestine)',
    originCoords: [35.21, 31.76],
    expansionPhases: [
      { period: '~1000 BCE', region: 'Kingdom of Israel', description: 'United monarchy under David and Solomon. First Temple built in Jerusalem.', coords: [35.23, 31.77] },
      { period: '586 BCE – 70 AD', region: 'Babylonian & Roman Diasporas', description: 'Exile to Babylon, return, Second Temple period. After Roman destruction of the Temple (70 AD), Jews dispersed across the Roman Empire.', coords: [44.36, 33.31] },
      { period: '70–1900 AD', region: 'Europe & Middle East', description: 'Sephardic communities in Spain/N.Africa and Ashkenazi communities in Central/Eastern Europe. Centuries of persecution and migration.', coords: [21.01, 52.23] },
      { period: '1948–Present', region: 'Israel & Global', description: 'Founding of modern Israel. Major communities in Israel, USA, France, and worldwide.', coords: [34.78, 32.08] },
    ],
  },
  {
    religion: 'Hinduism',
    originYear: '~1500 BCE',
    originPlace: 'Indus Valley, South Asia',
    originCoords: [72.87, 19.07],
    expansionPhases: [
      { period: '1500–500 BCE', region: 'Indian Subcontinent', description: 'Vedic religion developed across the Ganges plain. Upanishads and early Hindu philosophy emerged.', coords: [81.85, 25.43] },
      { period: '300 BCE – 600 AD', region: 'Southeast Asia', description: 'Hindu kingdoms and culture spread to Cambodia (Angkor), Indonesia (Bali), Thailand, and Vietnam through trade and cultural exchange.', coords: [103.86, 13.36] },
      { period: '600–1500 AD', region: 'Indian Consolidation', description: 'Bhakti movement revitalized Hinduism across India. Major temples built. Hindu-Buddhist synthesis in parts of SE Asia.', coords: [78.96, 20.59] },
      { period: '1800–Present', region: 'Global Diaspora', description: 'Indian diaspora brought Hinduism to East Africa, Caribbean, UK, USA, and worldwide. Neo-Hindu movements gained global followings.', coords: [-0.12, 51.51] },
    ],
  },
  {
    religion: 'Buddhism',
    originYear: '~500 BCE',
    originPlace: 'Lumbini, Nepal',
    originCoords: [83.27, 27.47],
    expansionPhases: [
      { period: '500–250 BCE', region: 'Northern India', description: 'Buddha\'s teachings spread across the Gangetic plain. Ashoka the Great adopted and promoted Buddhism.', coords: [85.14, 25.61] },
      { period: '250 BCE – 500 AD', region: 'Sri Lanka & Central Asia', description: 'Theravada Buddhism reached Sri Lanka. Mahayana Buddhism spread along the Silk Road to China, Korea, and Vietnam.', coords: [79.86, 6.93] },
      { period: '500–1200 AD', region: 'East & Southeast Asia', description: 'Buddhism flourished in China, Japan, Tibet, Thailand, Myanmar, Cambodia, and Indonesia. Zen and Vajrayana schools developed.', coords: [139.69, 35.69] },
      { period: '1800–Present', region: 'Western World', description: 'Buddhism gained significant following in Europe and North America. Mindfulness and meditation practices became mainstream.', coords: [-118.24, 34.05] },
    ],
  },
  {
    religion: 'Sikhism',
    originYear: '1469 AD',
    originPlace: 'Punjab, South Asia',
    originCoords: [74.87, 31.63],
    expansionPhases: [
      { period: '1469–1708', region: 'Punjab Region', description: 'Ten Sikh Gurus established and developed Sikhism in the Punjab region of South Asia.', coords: [74.87, 31.63] },
      { period: '1708–1849', region: 'Sikh Empire', description: 'Sikh Empire under Maharaja Ranjit Singh controlled much of northwestern South Asia, from Kabul to Tibet border.', coords: [74.35, 31.55] },
      { period: '1849–1947', region: 'British India & Early Diaspora', description: 'Under British rule, Sikh soldiers and workers migrated to East Africa, Southeast Asia, and other British colonies.', coords: [36.82, -1.29] },
      { period: '1947–Present', region: 'Global Diaspora', description: 'Partition led to mass migration. Large Sikh communities established in UK, Canada, USA, and Australia.', coords: [-79.38, 43.65] },
    ],
  },
]

export const countryReligionData: CountryReligionData[] = [
  // NORTH AMERICA
  { name: 'United States', iso: 'USA', population: 331000000, religions: { christianity: 65, judaism: 2, islam: 1.1, buddhism: 1, hinduism: 0.7, unaffiliated: 26, other: 4.2 }, dominantReligion: 'christianity' },
  { name: 'Canada', iso: 'CAN', population: 38000000, religions: { christianity: 55, islam: 3.7, hinduism: 2.3, sikhism: 2.1, buddhism: 1.1, judaism: 1, unaffiliated: 34, other: 0.8 }, dominantReligion: 'christianity' },
  { name: 'Mexico', iso: 'MEX', population: 129000000, religions: { christianity: 92, unaffiliated: 5, other: 3 }, dominantReligion: 'christianity' },

  // CENTRAL AMERICA & CARIBBEAN
  { name: 'Guatemala', iso: 'GTM', population: 17000000, religions: { christianity: 88, folk: 5, unaffiliated: 5, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Cuba', iso: 'CUB', population: 11300000, religions: { christianity: 59, folk: 17, unaffiliated: 23, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Haiti', iso: 'HTI', population: 11400000, religions: { christianity: 87, folk: 7, unaffiliated: 5, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Jamaica', iso: 'JAM', population: 2960000, religions: { christianity: 77, folk: 10, unaffiliated: 10, other: 3 }, dominantReligion: 'christianity' },

  // SOUTH AMERICA
  { name: 'Brazil', iso: 'BRA', population: 213000000, religions: { christianity: 88, unaffiliated: 8, folk: 2, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Argentina', iso: 'ARG', population: 45000000, religions: { christianity: 79, unaffiliated: 18, islam: 1, judaism: 0.5, other: 1.5 }, dominantReligion: 'christianity' },
  { name: 'Colombia', iso: 'COL', population: 51000000, religions: { christianity: 92, unaffiliated: 6, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Peru', iso: 'PER', population: 33000000, religions: { christianity: 94, unaffiliated: 4, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Chile', iso: 'CHL', population: 19000000, religions: { christianity: 70, unaffiliated: 25, other: 5 }, dominantReligion: 'christianity' },
  { name: 'Venezuela', iso: 'VEN', population: 28400000, religions: { christianity: 89, unaffiliated: 8, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Bolivia', iso: 'BOL', population: 11700000, religions: { christianity: 92, folk: 3, unaffiliated: 4, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Ecuador', iso: 'ECU', population: 17600000, religions: { christianity: 93, unaffiliated: 5, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Paraguay', iso: 'PRY', population: 7100000, religions: { christianity: 96, unaffiliated: 2, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Uruguay', iso: 'URY', population: 3470000, religions: { christianity: 54, unaffiliated: 41, other: 5 }, dominantReligion: 'christianity' },
  { name: 'Guyana', iso: 'GUY', population: 787000, religions: { christianity: 63, hinduism: 25, islam: 7, other: 5 }, dominantReligion: 'christianity' },
  { name: 'Suriname', iso: 'SUR', population: 587000, religions: { christianity: 48, hinduism: 22, islam: 14, folk: 6, other: 10 }, dominantReligion: 'christianity' },

  // WESTERN EUROPE
  { name: 'United Kingdom', iso: 'GBR', population: 67000000, religions: { christianity: 46, islam: 6.5, hinduism: 1.7, sikhism: 0.8, buddhism: 0.5, judaism: 0.4, unaffiliated: 37, other: 7.1 }, dominantReligion: 'christianity' },
  { name: 'France', iso: 'FRA', population: 67000000, religions: { christianity: 51, islam: 9, judaism: 0.7, buddhism: 0.5, unaffiliated: 35, other: 3.8 }, dominantReligion: 'christianity' },
  { name: 'Germany', iso: 'DEU', population: 83000000, religions: { christianity: 53, islam: 6.5, unaffiliated: 37, other: 3.5 }, dominantReligion: 'christianity' },
  { name: 'Italy', iso: 'ITA', population: 60000000, religions: { christianity: 80, islam: 3.7, unaffiliated: 13, other: 3.3 }, dominantReligion: 'christianity' },
  { name: 'Spain', iso: 'ESP', population: 47000000, religions: { christianity: 60, islam: 4, unaffiliated: 33, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Netherlands', iso: 'NLD', population: 17000000, religions: { christianity: 38, islam: 5, unaffiliated: 54, other: 3 }, dominantReligion: 'unaffiliated' },
  { name: 'Belgium', iso: 'BEL', population: 11500000, religions: { christianity: 55, islam: 7, unaffiliated: 35, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Portugal', iso: 'PRT', population: 10300000, religions: { christianity: 84, unaffiliated: 12, other: 4 }, dominantReligion: 'christianity' },
  { name: 'Ireland', iso: 'IRL', population: 5000000, religions: { christianity: 79, islam: 1.4, unaffiliated: 14, other: 5.6 }, dominantReligion: 'christianity' },
  { name: 'Switzerland', iso: 'CHE', population: 8700000, religions: { christianity: 60, islam: 5.3, unaffiliated: 30, other: 4.7 }, dominantReligion: 'christianity' },
  { name: 'Austria', iso: 'AUT', population: 9000000, religions: { christianity: 64, islam: 8, unaffiliated: 24, other: 4 }, dominantReligion: 'christianity' },
  { name: 'Sweden', iso: 'SWE', population: 10400000, religions: { christianity: 57, islam: 8, unaffiliated: 32, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Norway', iso: 'NOR', population: 5400000, religions: { christianity: 68, islam: 3, unaffiliated: 26, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Denmark', iso: 'DNK', population: 5800000, religions: { christianity: 75, islam: 5, unaffiliated: 17, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Finland', iso: 'FIN', population: 5500000, religions: { christianity: 68, unaffiliated: 28, islam: 2, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Greece', iso: 'GRC', population: 10700000, religions: { christianity: 90, islam: 5, unaffiliated: 3, other: 2 }, dominantReligion: 'christianity' },

  // EASTERN EUROPE
  { name: 'Russia', iso: 'RUS', population: 146000000, religions: { christianity: 73, islam: 10, unaffiliated: 15, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Poland', iso: 'POL', population: 38000000, religions: { christianity: 87, unaffiliated: 10, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Ukraine', iso: 'UKR', population: 44000000, religions: { christianity: 83, unaffiliated: 13, islam: 1, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Romania', iso: 'ROU', population: 19000000, religions: { christianity: 93, unaffiliated: 4, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Czech Republic', iso: 'CZE', population: 10700000, religions: { christianity: 21, unaffiliated: 72, other: 7 }, dominantReligion: 'unaffiliated' },
  { name: 'Hungary', iso: 'HUN', population: 9750000, religions: { christianity: 62, unaffiliated: 33, other: 5 }, dominantReligion: 'christianity' },
  { name: 'Serbia', iso: 'SRB', population: 6900000, religions: { christianity: 85, islam: 3, unaffiliated: 9, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Bulgaria', iso: 'BGR', population: 6900000, religions: { christianity: 76, islam: 10, unaffiliated: 11, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Croatia', iso: 'HRV', population: 4050000, religions: { christianity: 87, unaffiliated: 8, islam: 2, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Bosnia and Herz.', iso: 'BIH', population: 3280000, religions: { islam: 51, christianity: 46, unaffiliated: 2, other: 1 }, dominantReligion: 'islam' },
  { name: 'Albania', iso: 'ALB', population: 2880000, religions: { islam: 57, christianity: 17, unaffiliated: 24, other: 2 }, dominantReligion: 'islam' },

  // MIDDLE EAST
  { name: 'Turkey', iso: 'TUR', population: 85000000, religions: { islam: 97.8, christianity: 0.2, unaffiliated: 1.5, other: 0.5 }, dominantReligion: 'islam' },
  { name: 'Iran', iso: 'IRN', population: 84000000, religions: { islam: 99.4, christianity: 0.2, other: 0.4 }, dominantReligion: 'islam' },
  { name: 'Iraq', iso: 'IRQ', population: 41000000, religions: { islam: 95, christianity: 1, other: 4 }, dominantReligion: 'islam' },
  { name: 'Saudi Arabia', iso: 'SAU', population: 35000000, religions: { islam: 93, christianity: 4, hinduism: 1.1, buddhism: 0.3, other: 1.6 }, dominantReligion: 'islam' },
  { name: 'Yemen', iso: 'YEM', population: 30000000, religions: { islam: 99.1, other: 0.9 }, dominantReligion: 'islam' },
  { name: 'Syria', iso: 'SYR', population: 18000000, religions: { islam: 87, christianity: 10, other: 3 }, dominantReligion: 'islam' },
  { name: 'Jordan', iso: 'JOR', population: 10200000, religions: { islam: 95, christianity: 4, other: 1 }, dominantReligion: 'islam' },
  { name: 'Israel', iso: 'ISR', population: 9200000, religions: { judaism: 74, islam: 18, christianity: 2, other: 6 }, dominantReligion: 'judaism' },
  { name: 'Palestine', iso: 'PSE', population: 5100000, religions: { islam: 93, christianity: 6, other: 1 }, dominantReligion: 'islam' },
  { name: 'Lebanon', iso: 'LBN', population: 6800000, religions: { islam: 54, christianity: 41, other: 5 }, dominantReligion: 'islam' },
  { name: 'United Arab Emirates', iso: 'ARE', population: 9900000, religions: { islam: 76, christianity: 9, hinduism: 7, buddhism: 2, other: 6 }, dominantReligion: 'islam' },
  { name: 'Kuwait', iso: 'KWT', population: 4300000, religions: { islam: 74, christianity: 14, hinduism: 6, other: 6 }, dominantReligion: 'islam' },
  { name: 'Qatar', iso: 'QAT', population: 2900000, religions: { islam: 65, christianity: 14, hinduism: 14, buddhism: 3, other: 4 }, dominantReligion: 'islam' },
  { name: 'Bahrain', iso: 'BHR', population: 1500000, religions: { islam: 73, christianity: 10, hinduism: 10, other: 7 }, dominantReligion: 'islam' },
  { name: 'Oman', iso: 'OMN', population: 5100000, religions: { islam: 86, christianity: 7, hinduism: 5, other: 2 }, dominantReligion: 'islam' },

  // CENTRAL ASIA
  { name: 'Kazakhstan', iso: 'KAZ', population: 19000000, religions: { islam: 70, christianity: 26, unaffiliated: 3, other: 1 }, dominantReligion: 'islam' },
  { name: 'Uzbekistan', iso: 'UZB', population: 34000000, religions: { islam: 88, christianity: 8, unaffiliated: 3, other: 1 }, dominantReligion: 'islam' },
  { name: 'Afghanistan', iso: 'AFG', population: 39000000, religions: { islam: 99.7, other: 0.3 }, dominantReligion: 'islam' },
  { name: 'Pakistan', iso: 'PAK', population: 221000000, religions: { islam: 96.5, hinduism: 1.9, christianity: 1.6, other: 0 }, dominantReligion: 'islam' },

  // SOUTH ASIA
  { name: 'India', iso: 'IND', population: 1400000000, religions: { hinduism: 79.8, islam: 14.2, christianity: 2.3, sikhism: 1.7, buddhism: 0.7, other: 1.3 }, dominantReligion: 'hinduism' },
  { name: 'Bangladesh', iso: 'BGD', population: 166000000, religions: { islam: 90, hinduism: 8.5, buddhism: 0.6, christianity: 0.4, other: 0.5 }, dominantReligion: 'islam' },
  { name: 'Sri Lanka', iso: 'LKA', population: 22000000, religions: { buddhism: 70, hinduism: 12.6, islam: 9.7, christianity: 7.6, other: 0.1 }, dominantReligion: 'buddhism' },
  { name: 'Nepal', iso: 'NPL', population: 30000000, religions: { hinduism: 81, buddhism: 9, islam: 4.4, christianity: 1.4, folk: 3, other: 1.2 }, dominantReligion: 'hinduism' },
  { name: 'Bhutan', iso: 'BTN', population: 770000, religions: { buddhism: 75, hinduism: 22, other: 3 }, dominantReligion: 'buddhism' },
  { name: 'Maldives', iso: 'MDV', population: 540000, religions: { islam: 98, other: 2 }, dominantReligion: 'islam' },
  { name: 'Myanmar', iso: 'MMR', population: 54000000, religions: { buddhism: 88, christianity: 6, islam: 4, folk: 1, other: 1 }, dominantReligion: 'buddhism' },

  // EAST ASIA
  { name: 'China', iso: 'CHN', population: 1400000000, religions: { folk: 22, buddhism: 18, christianity: 5, islam: 1.8, unaffiliated: 52, other: 1.2 }, dominantReligion: 'unaffiliated' },
  { name: 'Japan', iso: 'JPN', population: 126000000, religions: { buddhism: 36, folk: 35, christianity: 2, unaffiliated: 25, other: 2 }, dominantReligion: 'buddhism', notes: 'Many Japanese practice both Shinto and Buddhism' },
  { name: 'South Korea', iso: 'KOR', population: 52000000, religions: { christianity: 29, buddhism: 23, unaffiliated: 46, other: 2 }, dominantReligion: 'unaffiliated' },
  { name: 'North Korea', iso: 'PRK', population: 25800000, religions: { unaffiliated: 71, folk: 16, christianity: 2, buddhism: 5, other: 6 }, dominantReligion: 'unaffiliated' },
  { name: 'Mongolia', iso: 'MNG', population: 3300000, religions: { buddhism: 53, islam: 3, folk: 3, christianity: 2, unaffiliated: 39 }, dominantReligion: 'buddhism' },
  { name: 'Taiwan', iso: 'TWN', population: 23600000, religions: { buddhism: 35, folk: 33, christianity: 4, unaffiliated: 26, other: 2 }, dominantReligion: 'buddhism' },

  // SOUTHEAST ASIA
  { name: 'Indonesia', iso: 'IDN', population: 274000000, religions: { islam: 87, christianity: 10, hinduism: 1.7, buddhism: 0.7, other: 0.6 }, dominantReligion: 'islam' },
  { name: 'Philippines', iso: 'PHL', population: 110000000, religions: { christianity: 92, islam: 5, other: 3 }, dominantReligion: 'christianity' },
  { name: 'Vietnam', iso: 'VNM', population: 98000000, religions: { folk: 45, buddhism: 16, christianity: 8, unaffiliated: 29, other: 2 }, dominantReligion: 'folk' },
  { name: 'Thailand', iso: 'THA', population: 70000000, religions: { buddhism: 93, islam: 5, christianity: 1, other: 1 }, dominantReligion: 'buddhism' },
  { name: 'Malaysia', iso: 'MYS', population: 32000000, religions: { islam: 61, buddhism: 20, christianity: 9, hinduism: 6, folk: 2, other: 2 }, dominantReligion: 'islam' },
  { name: 'Cambodia', iso: 'KHM', population: 17000000, religions: { buddhism: 97, islam: 2, other: 1 }, dominantReligion: 'buddhism' },
  { name: 'Laos', iso: 'LAO', population: 7400000, religions: { buddhism: 65, folk: 31, christianity: 2, other: 2 }, dominantReligion: 'buddhism' },
  { name: 'Singapore', iso: 'SGP', population: 5700000, religions: { buddhism: 31, christianity: 19, islam: 15, hinduism: 5, folk: 9, unaffiliated: 20, other: 1 }, dominantReligion: 'buddhism' },

  // NORTH AFRICA
  { name: 'Egypt', iso: 'EGY', population: 102000000, religions: { islam: 90, christianity: 10 }, dominantReligion: 'islam' },
  { name: 'Algeria', iso: 'DZA', population: 44000000, religions: { islam: 99, other: 1 }, dominantReligion: 'islam' },
  { name: 'Morocco', iso: 'MAR', population: 37000000, religions: { islam: 99, other: 1 }, dominantReligion: 'islam' },
  { name: 'Tunisia', iso: 'TUN', population: 12000000, religions: { islam: 99, christianity: 0.5, other: 0.5 }, dominantReligion: 'islam' },
  { name: 'Libya', iso: 'LBY', population: 6900000, religions: { islam: 97, christianity: 2, other: 1 }, dominantReligion: 'islam' },
  { name: 'Sudan', iso: 'SDN', population: 44000000, religions: { islam: 91, christianity: 5, folk: 3, other: 1 }, dominantReligion: 'islam' },

  // SUB-SAHARAN AFRICA
  { name: 'Nigeria', iso: 'NGA', population: 211000000, religions: { islam: 50, christianity: 45, folk: 4, other: 1 }, dominantReligion: 'islam' },
  { name: 'Ethiopia', iso: 'ETH', population: 118000000, religions: { christianity: 63, islam: 34, folk: 2, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Dem. Rep. Congo', iso: 'COD', population: 92000000, religions: { christianity: 95, islam: 2, folk: 2, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Tanzania', iso: 'TZA', population: 61000000, religions: { christianity: 63, islam: 34, folk: 2, other: 1 }, dominantReligion: 'christianity' },
  { name: 'South Africa', iso: 'ZAF', population: 60000000, religions: { christianity: 80, islam: 2, hinduism: 1.2, folk: 5, unaffiliated: 10, other: 1.8 }, dominantReligion: 'christianity' },
  { name: 'Kenya', iso: 'KEN', population: 54000000, religions: { christianity: 85, islam: 11, folk: 2, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Uganda', iso: 'UGA', population: 47000000, religions: { christianity: 85, islam: 12, folk: 2, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Ghana', iso: 'GHA', population: 31000000, religions: { christianity: 71, islam: 20, folk: 5, unaffiliated: 3, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Mozambique', iso: 'MOZ', population: 32000000, religions: { christianity: 56, islam: 18, folk: 18, unaffiliated: 7, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Madagascar', iso: 'MDG', population: 28000000, religions: { christianity: 41, folk: 52, islam: 3, other: 4 }, dominantReligion: 'folk' },
  { name: 'Cameroon', iso: 'CMR', population: 27000000, religions: { christianity: 70, islam: 20, folk: 6, other: 4 }, dominantReligion: 'christianity' },
  { name: 'Angola', iso: 'AGO', population: 33000000, religions: { christianity: 93, folk: 4, unaffiliated: 2, other: 1 }, dominantReligion: 'christianity' },
  { name: 'Mali', iso: 'MLI', population: 20000000, religions: { islam: 94, christianity: 2, folk: 3, other: 1 }, dominantReligion: 'islam' },
  { name: 'Senegal', iso: 'SEN', population: 17000000, religions: { islam: 95, christianity: 4, other: 1 }, dominantReligion: 'islam' },
  { name: 'Somalia', iso: 'SOM', population: 16000000, religions: { islam: 99.8, other: 0.2 }, dominantReligion: 'islam' },
  { name: 'Rwanda', iso: 'RWA', population: 13000000, religions: { christianity: 93, islam: 2, unaffiliated: 3, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Zimbabwe', iso: 'ZWE', population: 15000000, religions: { christianity: 84, folk: 4, unaffiliated: 10, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Zambia', iso: 'ZMB', population: 19000000, religions: { christianity: 95, folk: 2, islam: 1, other: 2 }, dominantReligion: 'christianity' },
  { name: "Côte d'Ivoire", iso: 'CIV', population: 27000000, religions: { islam: 43, christianity: 34, folk: 17, unaffiliated: 5, other: 1 }, dominantReligion: 'islam' },
  { name: 'Burkina Faso', iso: 'BFA', population: 21000000, religions: { islam: 61, christianity: 23, folk: 15, other: 1 }, dominantReligion: 'islam' },
  { name: 'Niger', iso: 'NER', population: 25000000, religions: { islam: 99, other: 1 }, dominantReligion: 'islam' },
  { name: 'Chad', iso: 'TCD', population: 17000000, religions: { islam: 55, christianity: 22, folk: 21, other: 2 }, dominantReligion: 'islam' },
  { name: 'Sierra Leone', iso: 'SLE', population: 8100000, religions: { islam: 77, christianity: 21, folk: 1, other: 1 }, dominantReligion: 'islam' },

  // OCEANIA
  { name: 'Australia', iso: 'AUS', population: 26000000, religions: { christianity: 44, islam: 3.2, buddhism: 2.4, hinduism: 2.7, unaffiliated: 39, other: 8.7 }, dominantReligion: 'christianity' },
  { name: 'New Zealand', iso: 'NZL', population: 5100000, religions: { christianity: 37, hinduism: 2.6, islam: 1.3, buddhism: 1.1, unaffiliated: 49, other: 9 }, dominantReligion: 'unaffiliated' },
  { name: 'Papua New Guinea', iso: 'PNG', population: 9000000, religions: { christianity: 95, folk: 3, other: 2 }, dominantReligion: 'christianity' },
  { name: 'Fiji', iso: 'FJI', population: 900000, religions: { christianity: 64, hinduism: 28, islam: 6, other: 2 }, dominantReligion: 'christianity' },
]

export function getCountryByISO(iso: string): CountryReligionData | undefined {
  return countryReligionData.find(c => c.iso === iso)
}

export function getCountryByName(name: string): CountryReligionData | undefined {
  return countryReligionData.find(c => c.name.toLowerCase() === name.toLowerCase())
}

export function getDominantColor(dominantReligion: string): string {
  return religionColors[dominantReligion] || '#64748b'
}
