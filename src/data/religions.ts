import { Religion } from '../types'
import { sinAndRedemptionData, culturalEtiquetteData } from './sinAndEtiquette'

export const religions: Religion[] = [
  {
    id: 'christianity',
    name: 'Christianity',
    emoji: '✝️',
    gradient: 'from-blue-600 to-indigo-800',
    accent: '#6366f1',
    glow: 'rgba(99, 102, 241, 0.4)',
    founded: '~30 AD',
    followersGlobal: '~2.4 billion',
    origin: 'Roman Judea (modern Israel/Palestine)',
    tagline: 'Salvation through faith in Jesus Christ',
    overview:
      'Christianity is the world\'s largest religion, centered on the life, teachings, death, and resurrection of Jesus of Nazareth. Christians believe Jesus is the Son of God and the Messiah prophesied in the Hebrew Bible. The faith emphasizes God\'s love, grace, forgiveness, and the promise of eternal life through faith in Christ.',
    sacredTexts: [
      {
        name: 'The Bible',
        language: 'Hebrew, Aramaic, Greek',
        description:
          'The Christian Bible consists of the Old Testament (shared with Judaism) and the New Testament, which contains the Gospels, Acts, Epistles, and Revelation.',
        sections: [
          'Old Testament (39 books)',
          'New Testament (27 books)',
          'Gospels: Matthew, Mark, Luke, John',
          'Pauline Epistles',
          'Book of Revelation',
        ],
      },
    ],
    beliefs: {
      god: {
        summary:
          'One God in three persons: Father, Son (Jesus Christ), and Holy Spirit — the Holy Trinity.',
        details:
          'Christianity teaches monotheism with the unique doctrine of the Trinity — one God existing in three co-equal, co-eternal persons. God is described as omnipotent, omniscient, omnipresent, holy, just, and loving. He is both transcendent and immanent, having entered human history through the incarnation of Jesus Christ.',
        scriptures: [
          {
            reference: 'John 1:1-3',
            text: 'In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made.',
          },
          {
            reference: 'Genesis 1:1',
            text: 'In the beginning God created the heavens and the earth.',
          },
          {
            reference: 'Matthew 28:19',
            text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
          },
        ],
      },
      afterlife: {
        summary:
          'Eternal life in heaven with God for believers; separation from God (hell) for those who reject Him.',
        details:
          'Christians believe in bodily resurrection and final judgment. Those who accept Christ receive eternal life in God\'s presence (heaven), while those who reject God face eternal separation (hell). Many traditions also teach an intermediate state and believe in the Second Coming of Christ, the final resurrection of all people, and the creation of a new heaven and new earth.',
        scriptures: [
          {
            reference: 'John 3:16',
            text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
          },
          {
            reference: 'Revelation 21:4',
            text: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.',
          },
          {
            reference: '2 Corinthians 5:8',
            text: 'We are confident, I say, and would prefer to be away from the body and at home with the Lord.',
          },
        ],
      },
      evil: {
        summary:
          'Evil originates from Satan (a fallen angel) and human free will; sin entered the world through Adam and Eve\'s disobedience.',
        details:
          'Christianity teaches that evil is not a creation of God but a corruption of good. Satan, originally the angel Lucifer, rebelled against God and became the adversary. Humans inherited a sinful nature through the Fall of Adam and Eve. Evil exists because God grants free will, and creatures can choose to turn away from God. Christ\'s death and resurrection provide the ultimate victory over sin and evil.',
        scriptures: [
          {
            reference: 'Genesis 3:1-6',
            text: 'Now the serpent was more crafty than any of the wild animals the Lord God had made... When the woman saw that the fruit of the tree was good for food... she took some and ate it.',
          },
          {
            reference: 'Romans 3:23',
            text: 'For all have sinned and fall short of the glory of God.',
          },
          {
            reference: '1 Peter 5:8',
            text: 'Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour.',
          },
        ],
      },
      humanNature: {
        summary:
          'Humans are created in God\'s image but are fallen and sinful, in need of redemption.',
        details:
          'Christianity teaches that humans are unique among creation, made in the image of God (Imago Dei), giving them inherent dignity, rational capacity, and moral agency. However, through the Fall, human nature became corrupted by sin. Every person is born with a sinful nature and is unable to save themselves. This creates the need for God\'s grace through Jesus Christ.',
        scriptures: [
          {
            reference: 'Genesis 1:27',
            text: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
          },
          {
            reference: 'Psalm 51:5',
            text: 'Surely I was sinful at birth, sinful from the time my mother conceived me.',
          },
          {
            reference: 'Ephesians 2:8-9',
            text: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.',
          },
        ],
      },
      salvation: {
        summary:
          'Salvation is a gift of God\'s grace, received through faith in Jesus Christ\'s atoning death and resurrection.',
        details:
          'Christians believe that salvation cannot be earned through good works alone but is a gift from God received through faith. Jesus\'s sacrificial death on the cross atoned for humanity\'s sins, and his resurrection demonstrated victory over death. Different traditions emphasize different aspects: Protestants stress faith alone (sola fide), Catholics include sacraments and works of mercy, Orthodox emphasize theosis (becoming like God).',
        scriptures: [
          {
            reference: 'Romans 6:23',
            text: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
          },
          {
            reference: 'Acts 4:12',
            text: 'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.',
          },
          {
            reference: 'John 14:6',
            text: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."',
          },
        ],
      },
      ethics: {
        summary:
          'Love God and love your neighbor; follow the teachings of Jesus, especially the Sermon on the Mount.',
        details:
          'Christian ethics are rooted in the two greatest commandments Jesus identified: love God with all your heart, and love your neighbor as yourself. The Sermon on the Mount (Matthew 5-7) provides core ethical teaching including the Beatitudes, turning the other cheek, loving enemies, and the Golden Rule. The Ten Commandments remain foundational, and Paul\'s letters further develop ethical instruction for Christian community life.',
        scriptures: [
          {
            reference: 'Matthew 22:37-39',
            text: '"Love the Lord your God with all your heart and with all your soul and with all your mind." This is the first and greatest commandment. And the second is like it: "Love your neighbor as yourself."',
          },
          {
            reference: 'Matthew 7:12',
            text: 'So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.',
          },
          {
            reference: 'Galatians 5:22-23',
            text: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.',
          },
        ],
      },
    },
    practices: [
      {
        name: 'Prayer',
        description: 'Personal and communal communication with God, including the Lord\'s Prayer.',
        frequency: 'Daily / Continual',
        icon: '🙏',
      },
      {
        name: 'Eucharist / Communion',
        description: 'Sacramental meal commemorating the Last Supper of Jesus.',
        frequency: 'Weekly to Monthly',
        icon: '🍷',
      },
      {
        name: 'Baptism',
        description: 'Initiation sacrament symbolizing spiritual cleansing and rebirth in Christ.',
        frequency: 'Once (at initiation)',
        icon: '💧',
      },
      {
        name: 'Sunday Worship',
        description: 'Gathering for communal prayer, singing, scripture reading, and preaching.',
        frequency: 'Weekly',
        icon: '⛪',
      },
      {
        name: 'Fasting',
        description: 'Abstaining from food for spiritual discipline, especially during Lent.',
        frequency: 'Seasonal (Lent, Advent)',
        icon: '🕊️',
      },
    ],
    denominations: [
      {
        name: 'Roman Catholic',
        followers: '~1.3 billion',
        description: 'Led by the Pope in Rome. Emphasizes sacraments, tradition, and apostolic succession.',
        distinctives: ['Papal authority', 'Seven sacraments', 'Veneration of Mary and saints', 'Purgatory'],
      },
      {
        name: 'Protestant',
        followers: '~900 million',
        description: 'Emerged from the Reformation. Emphasizes Scripture alone and faith alone.',
        distinctives: ['Sola Scriptura', 'Sola Fide', 'Priesthood of all believers', 'Two sacraments'],
      },
      {
        name: 'Eastern Orthodox',
        followers: '~220 million',
        description: 'Ancient tradition centered on liturgical worship, icons, and theosis.',
        distinctives: ['Ecumenical Patriarchs', 'Iconography', 'Theosis', 'Holy Tradition'],
      },
      {
        name: 'Anglican / Episcopal',
        followers: '~85 million',
        description: 'A middle way between Catholic and Protestant traditions.',
        distinctives: ['Book of Common Prayer', 'Via Media', 'Canterbury leadership', 'Episcopal polity'],
      },
    ],
    keyFigures: ['Jesus Christ', 'Paul the Apostle', 'Peter', 'Augustine of Hippo', 'Martin Luther', 'Thomas Aquinas'],
    history: [
      { year: '~4 BC', event: 'Birth of Jesus of Nazareth' },
      { year: '~30 AD', event: 'Crucifixion and resurrection of Jesus; birth of the Church' },
      { year: '~50 AD', event: 'Paul\'s missionary journeys spread Christianity across the Roman Empire' },
      { year: '313 AD', event: 'Edict of Milan — Emperor Constantine legalizes Christianity' },
      { year: '325 AD', event: 'Council of Nicaea establishes the Nicene Creed' },
      { year: '1054', event: 'Great Schism splits Eastern Orthodox and Roman Catholic churches' },
      { year: '1517', event: 'Martin Luther\'s 95 Theses sparks the Protestant Reformation' },
      { year: '1534', event: 'Henry VIII establishes the Church of England' },
    ],
    sinAndRedemption: sinAndRedemptionData.christianity,
    culturalEtiquette: culturalEtiquetteData.christianity,
  },
  {
    id: 'islam',
    name: 'Islam',
    emoji: '☪️',
    gradient: 'from-emerald-600 to-teal-800',
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.4)',
    founded: '610 AD',
    followersGlobal: '~1.9 billion',
    origin: 'Arabian Peninsula (modern Saudi Arabia)',
    tagline: 'Submission to the will of the one God, Allah',
    overview:
      'Islam is the second-largest religion in the world, founded by the Prophet Muhammad in the 7th century. Muslims believe in one God (Allah) and that Muhammad is His final prophet. Islam teaches complete submission to God\'s will, following the Five Pillars, and living according to the Quran and the Sunnah (traditions of the Prophet).',
    sacredTexts: [
      {
        name: 'The Quran',
        language: 'Arabic',
        description:
          'The holy book of Islam, believed to be the literal word of God as revealed to Prophet Muhammad through the angel Gabriel over 23 years.',
        sections: ['114 Surahs (chapters)', 'Meccan Surahs', 'Medinan Surahs', '6,236 verses (ayahs)'],
      },
      {
        name: 'Hadith Collections',
        language: 'Arabic',
        description:
          'Records of the sayings, actions, and approvals of Prophet Muhammad. Major collections include Sahih al-Bukhari and Sahih Muslim.',
        sections: ['Sahih al-Bukhari', 'Sahih Muslim', 'Sunan Abu Dawud', 'Sunan al-Tirmidhi'],
      },
    ],
    beliefs: {
      god: {
        summary:
          'Strict monotheism (Tawhid). Allah is the one and only God — eternal, all-powerful, and without partners or equals.',
        details:
          'Islam\'s central doctrine is Tawhid — the absolute oneness of God. Allah is beyond human comprehension yet intimately close to His creation. He has 99 Beautiful Names (al-Asma al-Husna) describing His attributes: the Most Merciful (ar-Rahman), the Most Compassionate (ar-Rahim), the All-Knowing (al-Alim). Islam strictly rejects the Trinity and any association of partners with God (shirk), which is considered the gravest sin.',
        scriptures: [
          {
            reference: 'Quran 112:1-4 (Surah Al-Ikhlas)',
            text: 'Say, "He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent."',
          },
          {
            reference: 'Quran 2:255 (Ayat al-Kursi)',
            text: 'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep.',
          },
          {
            reference: 'Quran 59:22-24',
            text: 'He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.',
          },
        ],
      },
      afterlife: {
        summary:
          'Belief in the Day of Judgment (Yawm al-Qiyamah), resurrection, and eternal paradise (Jannah) or hellfire (Jahannam).',
        details:
          'Islam teaches that life is a test. On the Day of Judgment, all people will be resurrected and held accountable for their deeds. Allah will weigh each person\'s good and bad deeds on a scale. Those who pass will enter Jannah (Paradise), described as gardens with rivers, peace, and the pleasure of God\'s presence. Those who fail face Jahannam (Hell), a place of punishment. Allah\'s mercy is emphasized — He forgives whom He wills.',
        scriptures: [
          {
            reference: 'Quran 3:185',
            text: 'Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.',
          },
          {
            reference: 'Quran 55:46-48',
            text: 'But for he who has feared the position of his Lord are two gardens... having [spreading] branches.',
          },
          {
            reference: 'Quran 99:7-8',
            text: 'So whoever does an atom\'s weight of good will see it. And whoever does an atom\'s weight of evil will see it.',
          },
        ],
      },
      evil: {
        summary:
          'Iblis (Satan/Shaytan) is a jinn who refused God\'s command and tempts humanity, but has no power except to whisper.',
        details:
          'In Islam, Iblis (Satan) was a jinn made of smokeless fire who refused to bow to Adam when commanded by God, out of arrogance. He was cast out but given respite until the Day of Judgment to tempt humans. However, Iblis has no actual power over humans — he can only whisper suggestions. Humans have free will and are responsible for their own choices. Evil exists as a test from God, and suffering can be a means of purification and growth.',
        scriptures: [
          {
            reference: 'Quran 7:16-17',
            text: '[Iblis] said, "Because You have put me in error, I will surely sit in wait for them on Your straight path. Then I will come to them from before them and from behind them."',
          },
          {
            reference: 'Quran 114:4-6',
            text: 'From the evil of the retreating whisperer — who whispers in the breasts of mankind — from among the jinn and mankind.',
          },
          {
            reference: 'Quran 2:168',
            text: 'O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy.',
          },
        ],
      },
      humanNature: {
        summary:
          'Humans are God\'s vicegerents (khalifah) on earth, born in a state of purity (fitrah), capable of both good and evil.',
        details:
          'Islam teaches that humans are created as God\'s representatives on earth, entrusted with stewardship of creation. Every child is born in a natural state of purity (fitrah) — recognizing God — and it is their environment that shapes them. Unlike the Christian concept of original sin, Islam holds that Adam and Eve repented and were forgiven. Humans have both a lower self (nafs) that inclines toward desire and a higher capacity for righteousness.',
        scriptures: [
          {
            reference: 'Quran 2:30',
            text: 'And when your Lord said to the angels, "Indeed, I will make upon the earth a successive authority [khalifah]."',
          },
          {
            reference: 'Quran 95:4',
            text: 'We have certainly created man in the best of stature.',
          },
          {
            reference: 'Quran 91:7-10',
            text: 'And [by] the soul and He who proportioned it. And inspired it [with discernment of] its wickedness and its righteousness. He has succeeded who purifies it, and he has failed who instills it [with corruption].',
          },
        ],
      },
      salvation: {
        summary:
          'Salvation through sincere faith (iman), good deeds (amal salih), and God\'s mercy and grace.',
        details:
          'In Islam, salvation comes through a combination of faith, righteous action, and ultimately God\'s mercy. There is no concept of vicarious atonement — each person bears responsibility for their own deeds. The Five Pillars provide the framework for a righteous life. Sincere repentance (tawbah) can erase sins, and God\'s mercy is emphasized repeatedly — He forgives all sins for those who turn to Him sincerely. Good deeds are weighed against bad deeds on the Day of Judgment.',
        scriptures: [
          {
            reference: 'Quran 39:53',
            text: 'Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins."',
          },
          {
            reference: 'Quran 2:277',
            text: 'Indeed, those who believe and do righteous deeds and establish prayer and give zakah will have their reward with their Lord.',
          },
          {
            reference: 'Quran 103:1-3',
            text: 'By time, indeed mankind is in loss. Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
          },
        ],
      },
      ethics: {
        summary:
          'Live according to Sharia (divine law), practice justice, compassion, generosity, and honesty.',
        details:
          'Islamic ethics are derived from the Quran and the Sunnah of the Prophet. Core values include justice (adl), benevolence (ihsan), honesty (sidq), patience (sabr), gratitude (shukr), and modesty (haya). The concept of akhlaq (moral character) is central — Muhammad said, "I was sent to perfect good character." Ethics extend to all aspects of life including business, family, social relations, governance, and care for the environment and animals.',
        scriptures: [
          {
            reference: 'Quran 16:90',
            text: 'Indeed, Allah orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression.',
          },
          {
            reference: 'Quran 49:13',
            text: 'O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous.',
          },
          {
            reference: 'Quran 4:135',
            text: 'O you who have believed, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives.',
          },
        ],
      },
    },
    practices: [
      {
        name: 'Shahada (Declaration of Faith)',
        description: 'Declaring "There is no god but Allah, and Muhammad is His messenger."',
        frequency: 'Foundation of faith',
        icon: '🕌',
      },
      {
        name: 'Salah (Prayer)',
        description: 'Five daily ritual prayers facing Mecca at prescribed times.',
        frequency: '5 times daily',
        icon: '🙏',
      },
      {
        name: 'Zakat (Charity)',
        description: 'Obligatory giving of 2.5% of wealth to those in need.',
        frequency: 'Annually',
        icon: '💰',
      },
      {
        name: 'Sawm (Fasting)',
        description: 'Fasting from dawn to sunset during the month of Ramadan.',
        frequency: 'Annually (Ramadan)',
        icon: '🌙',
      },
      {
        name: 'Hajj (Pilgrimage)',
        description: 'Pilgrimage to Mecca, required once in a lifetime if able.',
        frequency: 'Once in a lifetime',
        icon: '🕋',
      },
    ],
    denominations: [
      {
        name: 'Sunni',
        followers: '~1.6 billion (85-90%)',
        description: 'The largest branch, following the Sunnah and the consensus of the companions.',
        distinctives: ['Four major schools of jurisprudence', 'Caliphate succession', 'Emphasis on community consensus'],
      },
      {
        name: 'Shia',
        followers: '~200 million (10-15%)',
        description: 'Believe leadership should have passed through Ali, the Prophet\'s cousin and son-in-law.',
        distinctives: ['Imamate', 'Twelve Imams', 'Mourning of Hussain (Ashura)', 'Distinct jurisprudence'],
      },
      {
        name: 'Sufi',
        followers: 'Tens of millions (across Sunni and Shia)',
        description: 'Mystical tradition focused on inner purification and closeness to God.',
        distinctives: ['Dhikr (remembrance of God)', 'Spiritual orders (tariqas)', 'Poetry and music', 'Whirling dervishes'],
      },
    ],
    keyFigures: ['Prophet Muhammad', 'Abu Bakr', 'Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Khadijah', 'Al-Ghazali'],
    history: [
      { year: '570 AD', event: 'Birth of Prophet Muhammad in Mecca' },
      { year: '610 AD', event: 'First revelation of the Quran to Muhammad in the Cave of Hira' },
      { year: '622 AD', event: 'Hijra — Muhammad\'s migration from Mecca to Medina (Year 1 in Islamic calendar)' },
      { year: '630 AD', event: 'Conquest of Mecca; Ka\'bah cleansed of idols' },
      { year: '632 AD', event: 'Death of Prophet Muhammad; Abu Bakr becomes first Caliph' },
      { year: '661 AD', event: 'Umayyad Caliphate established; Islam spreads across Middle East and North Africa' },
      { year: '750 AD', event: 'Abbasid Caliphate begins the Islamic Golden Age' },
      { year: '1258', event: 'Mongol sack of Baghdad; end of the Abbasid Caliphate' },
    ],
    sinAndRedemption: sinAndRedemptionData.islam,
    culturalEtiquette: culturalEtiquetteData.islam,
  },
  {
    id: 'judaism',
    name: 'Judaism',
    emoji: '✡️',
    gradient: 'from-amber-500 to-yellow-700',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    founded: '~2000 BC (Abraham) / ~1300 BC (Mosaic covenant)',
    followersGlobal: '~15 million',
    origin: 'Ancient Canaan (modern Israel/Palestine)',
    tagline: 'Covenant relationship between God and the Jewish people',
    overview:
      'Judaism is the oldest of the three Abrahamic religions, rooted in the covenant between God and Abraham, and later the giving of the Torah to Moses at Mount Sinai. It emphasizes ethical monotheism, the importance of Torah study, following God\'s commandments (mitzvot), and the communal and individual pursuit of justice and righteousness.',
    sacredTexts: [
      {
        name: 'Torah (Pentateuch)',
        language: 'Hebrew',
        description:
          'The five books of Moses — the most sacred text in Judaism, containing God\'s laws, history, and covenant.',
        sections: ['Genesis (Bereshit)', 'Exodus (Shemot)', 'Leviticus (Vayikra)', 'Numbers (Bamidbar)', 'Deuteronomy (Devarim)'],
      },
      {
        name: 'Tanakh (Hebrew Bible)',
        language: 'Hebrew',
        description: 'The complete Hebrew Bible comprising Torah, Nevi\'im (Prophets), and Ketuvim (Writings).',
        sections: ['Torah (5 books)', 'Nevi\'im — Prophets (8 books)', 'Ketuvim — Writings (11 books)'],
      },
      {
        name: 'Talmud',
        language: 'Hebrew, Aramaic',
        description:
          'Massive compilation of rabbinic discussions on law, ethics, philosophy, and theology. Contains the Mishnah and Gemara.',
        sections: ['Mishnah', 'Gemara', 'Babylonian Talmud', 'Jerusalem Talmud'],
      },
    ],
    beliefs: {
      god: {
        summary:
          'One God (YHWH / HaShem), indivisible and incorporeal — the creator of the universe who chose Israel as His people.',
        details:
          'Judaism is the foundation of monotheistic belief. God is one (echad), without form or division. The Shema is the central declaration of faith. God is known by many names — YHWH (the sacred name, not pronounced), Elohim, Adonai, HaShem ("The Name"). God is both transcendent and immanent, a personal God who enters into covenant with His people and is active in history.',
        scriptures: [
          {
            reference: 'Deuteronomy 6:4 (The Shema)',
            text: 'Hear, O Israel: The LORD our God, the LORD is one.',
          },
          {
            reference: 'Isaiah 45:5',
            text: 'I am the LORD, and there is no other; apart from me there is no God.',
          },
          {
            reference: 'Exodus 3:14',
            text: 'God said to Moses, "I AM WHO I AM." And he said, "Say this to the people of Israel: I AM has sent me to you."',
          },
        ],
      },
      afterlife: {
        summary:
          'Judaism focuses on this life; afterlife beliefs vary and include Olam Ha-Ba (World to Come) and resurrection.',
        details:
          'Judaism places primary emphasis on ethical living in this world rather than detailed speculation about the afterlife. However, beliefs in Olam Ha-Ba (the World to Come), Gan Eden (Paradise), and Gehinnom (a place of purification, not eternal damnation) exist. Most Jewish thought sees Gehinnom as temporary — a maximum of 12 months. The Pharisaic tradition and later rabbinic Judaism affirm bodily resurrection. The Messianic Age is also anticipated.',
        scriptures: [
          {
            reference: 'Daniel 12:2',
            text: 'Multitudes who sleep in the dust of the earth will awake: some to everlasting life, others to shame and everlasting contempt.',
          },
          {
            reference: 'Ecclesiastes 12:7',
            text: 'And the dust returns to the ground it came from, and the spirit returns to God who gave it.',
          },
          {
            reference: 'Psalm 23:6',
            text: 'Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever.',
          },
        ],
      },
      evil: {
        summary:
          'Evil stems from the yetzer hara (evil inclination) in every person, which can be mastered through Torah and mitzvot.',
        details:
          'Judaism teaches that every person has two inclinations: the yetzer hatov (good inclination) and the yetzer hara (evil inclination). The yetzer hara is not purely evil — it includes drives like ambition and desire that, when channeled properly, serve constructive purposes. Satan in Judaism is not a rebellious fallen angel but an agent of God who tests humans. Evil is understood as the absence of good or the misuse of free will. The Torah provides the path to overcoming evil.',
        scriptures: [
          {
            reference: 'Genesis 4:7',
            text: 'If you do what is right, will you not be accepted? But if you do not do what is right, sin is crouching at your door; it desires to have you, but you must rule over it.',
          },
          {
            reference: 'Deuteronomy 30:15',
            text: 'See, I set before you today life and prosperity, death and destruction.',
          },
          {
            reference: 'Genesis 8:21',
            text: 'The LORD said in his heart... the intention of man\'s heart is evil from his youth.',
          },
        ],
      },
      humanNature: {
        summary:
          'Humans are created in God\'s image (b\'tselem Elohim) with free will and the capacity for both good and evil.',
        details:
          'Judaism teaches that humans are created b\'tselem Elohim (in the image of God), conferring infinite worth on every human life. There is no concept of original sin — each person is born with a clean slate and is responsible for their own moral choices. The dual inclinations (yetzer hatov and yetzer hara) create the arena for moral struggle, which is the purpose of human existence. Humans are partners with God in perfecting the world (tikkun olam).',
        scriptures: [
          {
            reference: 'Genesis 1:27',
            text: 'So God created mankind in his own image, in the image of God he created them.',
          },
          {
            reference: 'Deuteronomy 30:19',
            text: 'I have set before you life and death, blessings and curses. Now choose life, so that you and your children may live.',
          },
          {
            reference: 'Micah 6:8',
            text: 'He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.',
          },
        ],
      },
      salvation: {
        summary:
          'Through following God\'s commandments (mitzvot), repentance (teshuvah), and righteous living — open to all.',
        details:
          'Judaism does not have a concept of salvation from original sin. Instead, it emphasizes teshuvah (repentance/return to God), which is always available. By observing the 613 mitzvot (commandments), studying Torah, performing acts of kindness (gemilut chasadim), and engaging in tikkun olam (repairing the world), Jews draw closer to God. Righteous non-Jews (Noahides) also have a share in the World to Come through following the seven Noahide laws.',
        scriptures: [
          {
            reference: 'Ezekiel 18:21-22',
            text: 'But if a wicked person turns away from all the sins they have committed and keeps all my decrees... none of the offenses they have committed will be remembered.',
          },
          {
            reference: 'Proverbs 16:6',
            text: 'Through love and faithfulness sin is atoned for; through the fear of the LORD evil is avoided.',
          },
          {
            reference: 'Isaiah 1:17',
            text: 'Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.',
          },
        ],
      },
      ethics: {
        summary:
          'Follow the 613 commandments, pursue justice (tzedek), practice charity (tzedakah), and repair the world (tikkun olam).',
        details:
          'Jewish ethics flow from the Torah\'s 613 commandments and extensive rabbinic elaboration. Justice (tzedek) is paramount — "Justice, justice shall you pursue." Tzedakah (often translated as charity, but literally meaning righteousness) is obligatory, not optional. The concept of tikkun olam calls Jews to actively work to repair and improve the world. Pikuach nefesh (saving a life) overrides virtually all other commandments, reflecting the supreme value of human life.',
        scriptures: [
          {
            reference: 'Deuteronomy 16:20',
            text: 'Justice, justice shall you pursue, that you may live and inherit the land the LORD your God is giving you.',
          },
          {
            reference: 'Leviticus 19:18',
            text: 'Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the LORD.',
          },
          {
            reference: 'Leviticus 19:34',
            text: 'The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt.',
          },
        ],
      },
    },
    practices: [
      {
        name: 'Shabbat',
        description: 'Weekly day of rest from Friday evening to Saturday evening, marked by prayers, meals, and abstaining from work.',
        frequency: 'Weekly',
        icon: '🕯️',
      },
      {
        name: 'Torah Study',
        description: 'Regular study of sacred texts, considered one of the highest forms of worship.',
        frequency: 'Daily',
        icon: '📜',
      },
      {
        name: 'Kashrut (Dietary Laws)',
        description: 'Observing kosher food laws, including separation of meat and dairy.',
        frequency: 'Every meal',
        icon: '🥘',
      },
      {
        name: 'Prayer Services',
        description: 'Three daily prayer services: Shacharit (morning), Mincha (afternoon), Maariv (evening).',
        frequency: '3 times daily',
        icon: '🙏',
      },
      {
        name: 'High Holy Days',
        description: 'Rosh Hashanah (New Year) and Yom Kippur (Day of Atonement) — the most sacred period.',
        frequency: 'Annually',
        icon: '🔔',
      },
    ],
    denominations: [
      {
        name: 'Orthodox',
        followers: '~2 million',
        description: 'Strict adherence to halakha (Jewish law) and traditional practices.',
        distinctives: ['Strict halakhic observance', 'Traditional liturgy', 'Gender separation in worship'],
      },
      {
        name: 'Conservative (Masorti)',
        followers: '~1.5 million',
        description: 'Balances tradition with modern adaptation; observes halakha with some flexibility.',
        distinctives: ['Moderate halakhic observance', 'Egalitarian worship', 'Historical-critical Torah study'],
      },
      {
        name: 'Reform',
        followers: '~2 million',
        description: 'Progressive movement emphasizing personal autonomy, ethics, and social justice.',
        distinctives: ['Autonomy in observance', 'Social justice focus', 'Full gender equality', 'Interfaith openness'],
      },
      {
        name: 'Hasidic',
        followers: '~300,000',
        description: 'Mystical Orthodox movement emphasizing joy in worship, led by rebbes.',
        distinctives: ['Mystical traditions', 'Rebbe leadership', 'Distinctive dress', 'Joyful worship'],
      },
    ],
    keyFigures: ['Abraham', 'Moses', 'King David', 'Rabbi Akiva', 'Maimonides (Rambam)', 'Rashi'],
    history: [
      { year: '~2000 BC', event: 'Abraham\'s covenant with God; origin of the Jewish people' },
      { year: '~1300 BC', event: 'Exodus from Egypt; Moses receives the Torah at Mount Sinai' },
      { year: '~1000 BC', event: 'King David establishes Jerusalem as the capital' },
      { year: '~960 BC', event: 'Solomon builds the First Temple in Jerusalem' },
      { year: '586 BC', event: 'Babylonian exile; destruction of the First Temple' },
      { year: '516 BC', event: 'Second Temple built after return from exile' },
      { year: '70 AD', event: 'Romans destroy the Second Temple; beginning of the Diaspora' },
      { year: '1948', event: 'Establishment of the State of Israel' },
    ],
    sinAndRedemption: sinAndRedemptionData.judaism,
    culturalEtiquette: culturalEtiquetteData.judaism,
  },
  {
    id: 'hinduism',
    name: 'Hinduism',
    emoji: '🕉️',
    gradient: 'from-orange-500 to-red-700',
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.4)',
    founded: '~1500 BC (Vedic period) / roots to ~3000 BC',
    followersGlobal: '~1.2 billion',
    origin: 'Indian subcontinent',
    tagline: 'Eternal dharma — the oldest living spiritual tradition',
    overview:
      'Hinduism is the world\'s oldest major religion, a vast and diverse tradition with no single founder. It encompasses a wide range of philosophies, beliefs, and practices unified by concepts such as dharma (cosmic order/duty), karma (action and consequence), samsara (cycle of rebirth), and moksha (liberation). It embraces both monotheistic and polytheistic perspectives.',
    sacredTexts: [
      {
        name: 'The Vedas',
        language: 'Sanskrit',
        description: 'The oldest scriptures of Hinduism, regarded as divine revelation (shruti). Four collections of hymns, rituals, and philosophy.',
        sections: ['Rig Veda', 'Sama Veda', 'Yajur Veda', 'Atharva Veda'],
      },
      {
        name: 'Upanishads',
        language: 'Sanskrit',
        description: 'Philosophical texts exploring the nature of reality, Brahman, Atman, and liberation. The "end of the Vedas" (Vedanta).',
        sections: ['Chandogya', 'Brihadaranyaka', 'Mandukya', 'Katha', 'Isha'],
      },
      {
        name: 'Bhagavad Gita',
        language: 'Sanskrit',
        description: 'A 700-verse dialogue between Prince Arjuna and Lord Krishna, part of the Mahabharata. The most widely read Hindu scripture.',
      },
      {
        name: 'Epics',
        language: 'Sanskrit',
        description: 'The two great Indian epics containing mythology, philosophy, and ethical teachings.',
        sections: ['Mahabharata', 'Ramayana'],
      },
    ],
    beliefs: {
      god: {
        summary:
          'One supreme reality (Brahman) manifesting in many forms — both personal deities and impersonal cosmic principle.',
        details:
          'Hinduism encompasses diverse views of the divine. At the philosophical level, Brahman is the ultimate, formless, infinite reality — the source of everything. This one reality manifests in many forms: Brahma (creator), Vishnu (preserver), Shiva (transformer) form the Trimurti. Devotees may worship Vishnu, Shiva, Shakti (the Divine Mother), or other deities as their chosen form (ishta devata) of the one supreme God. The Upanishads teach "Brahman is the only truth, the world is illusion (maya)."',
        scriptures: [
          {
            reference: 'Chandogya Upanishad 6.2.1',
            text: 'In the beginning, dear boy, this was Being alone, one only without a second.',
          },
          {
            reference: 'Bhagavad Gita 7:7',
            text: 'There is nothing whatsoever higher than Me, O Arjuna. All this is strung on Me as clusters of gems on a string.',
          },
          {
            reference: 'Rig Veda 1.164.46',
            text: 'They call it Indra, Mitra, Varuna, Agni... To what is One, sages give many a title.',
          },
        ],
      },
      afterlife: {
        summary:
          'The soul (atman) is eternal and undergoes samsara — the cycle of birth, death, and rebirth — until moksha (liberation).',
        details:
          'Hinduism teaches that the atman (soul/self) is eternal and indestructible. After death, the atman is reborn in a new body based on accumulated karma. This cycle of samsara continues until the soul achieves moksha — liberation from the cycle and union with or closeness to Brahman. There are different paths to moksha: jnana yoga (knowledge), bhakti yoga (devotion), karma yoga (selfless action), and raja yoga (meditation). Heaven (svarga) and hell (naraka) are temporary stops, not final destinations.',
        scriptures: [
          {
            reference: 'Bhagavad Gita 2:22',
            text: 'As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.',
          },
          {
            reference: 'Bhagavad Gita 2:20',
            text: 'For the soul there is neither birth nor death at any time. It is not born, nor does it die. It is unborn, eternal, ever-existing, and primeval.',
          },
          {
            reference: 'Katha Upanishad 1.2.18',
            text: 'The knowing Self is not born, nor does it die. It has not sprung from anything; nothing has sprung from it.',
          },
        ],
      },
      evil: {
        summary:
          'Evil arises from ignorance (avidya), attachment, and the three gunas; demons (asuras) represent cosmic forces of disorder.',
        details:
          'Hinduism sees evil not as an independent force but as a product of ignorance (avidya) — the failure to see the true nature of reality. The three gunas (qualities) — sattva (goodness), rajas (passion), and tamas (darkness/inertia) — exist in all beings. When tamas and unchecked rajas dominate, evil results. Mythologically, asuras (demons) oppose the devas (gods) in cosmic battles, representing the eternal struggle between order (dharma) and chaos (adharma). Liberation comes through dispelling ignorance.',
        scriptures: [
          {
            reference: 'Bhagavad Gita 16:4',
            text: 'Hypocrisy, arrogance, pride, anger, harshness, and ignorance — these are the qualities of those born of demonic nature.',
          },
          {
            reference: 'Bhagavad Gita 3:37',
            text: 'It is desire, it is anger, born of the quality of passion; all-devouring, all-sinful; know this as the enemy here.',
          },
          {
            reference: 'Isha Upanishad 3',
            text: 'Those who are slayers of the Self go to demoniac worlds, enveloped in blinding darkness.',
          },
        ],
      },
      humanNature: {
        summary:
          'The true self (atman) is divine and identical with Brahman; the body and ego are temporary coverings.',
        details:
          'Hinduism teaches "Tat Tvam Asi" (Thou Art That) — the individual soul (atman) is ultimately identical with Brahman, the universal consciousness. The body, mind, and ego are temporary coverings that create the illusion of separateness. Humans exist within the caste system (varna) and life stages (ashrama) that provide a social and spiritual framework. The goal of human life is to realize one\'s true divine nature and achieve liberation.',
        scriptures: [
          {
            reference: 'Chandogya Upanishad 6.8.7',
            text: 'Tat Tvam Asi — Thou Art That.',
          },
          {
            reference: 'Bhagavad Gita 13:31-32',
            text: 'When a sensible man ceases to see different identities due to different material bodies and sees how beings are expanded everywhere, he attains the Brahman conception.',
          },
          {
            reference: 'Mandukya Upanishad 2',
            text: 'This Self is Brahman. This same Self has four quarters.',
          },
        ],
      },
      salvation: {
        summary:
          'Moksha (liberation from samsara) through knowledge (jnana), devotion (bhakti), selfless action (karma), or meditation (yoga).',
        details:
          'Hinduism offers multiple paths to moksha. Jnana Yoga achieves liberation through philosophical knowledge and discrimination between the real and unreal. Bhakti Yoga achieves it through loving devotion to God. Karma Yoga through selfless action without attachment to results. Raja Yoga through meditation and control of the mind. Different schools emphasize different paths, and individuals may combine them. God\'s grace is also considered essential in many traditions.',
        scriptures: [
          {
            reference: 'Bhagavad Gita 4:7-8',
            text: 'Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth. To protect the righteous, to annihilate the wicked, and to reestablish dharma, I appear millennium after millennium.',
          },
          {
            reference: 'Bhagavad Gita 9:22',
            text: 'To those who worship Me alone, thinking of no other, of those ever united, I secure what is not already possessed and preserve what they already possess.',
          },
          {
            reference: 'Mundaka Upanishad 3.2.9',
            text: 'He who knows Brahman becomes Brahman.',
          },
        ],
      },
      ethics: {
        summary:
          'Follow dharma (righteous duty), practice ahimsa (non-violence), truthfulness, and compassion toward all beings.',
        details:
          'Hindu ethics revolve around dharma — the cosmic order and one\'s duty within it. Dharma varies based on one\'s stage of life (ashrama dharma) and social position (varna dharma), but universal principles (sanatana dharma) apply to all: ahimsa (non-violence), satya (truth), asteya (non-stealing), brahmacharya (self-discipline), and aparigraha (non-possessiveness). The law of karma ensures that ethical actions produce positive results across lifetimes.',
        scriptures: [
          {
            reference: 'Bhagavad Gita 2:47',
            text: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.',
          },
          {
            reference: 'Mahabharata 13.114.8',
            text: 'Ahimsa paramo dharma — Non-violence is the highest dharma.',
          },
          {
            reference: 'Manu Smriti 6.92',
            text: 'Contentment, forgiveness, self-control, not appropriating others\' property, purity, control of the senses, wisdom, knowledge of the Self, truthfulness, and absence of anger — these ten form the essence of dharma.',
          },
        ],
      },
    },
    practices: [
      {
        name: 'Puja (Worship)',
        description: 'Daily worship of deities at home shrines or temples with offerings of flowers, incense, and food.',
        frequency: 'Daily',
        icon: '🪔',
      },
      {
        name: 'Yoga & Meditation',
        description: 'Physical, mental, and spiritual disciplines for self-realization and union with the divine.',
        frequency: 'Daily',
        icon: '🧘',
      },
      {
        name: 'Festival Celebrations',
        description: 'Major festivals include Diwali (light), Holi (colors), Navaratri, and Ganesh Chaturthi.',
        frequency: 'Seasonal',
        icon: '🎆',
      },
      {
        name: 'Pilgrimage (Tirtha Yatra)',
        description: 'Visiting sacred sites like Varanasi, Rishikesh, and the Ganges river.',
        frequency: 'Periodic',
        icon: '🏔️',
      },
      {
        name: 'Mantra Chanting',
        description: 'Recitation of sacred sounds and verses, including Om and the Gayatri Mantra.',
        frequency: 'Daily',
        icon: '🕉️',
      },
    ],
    denominations: [
      {
        name: 'Vaishnavism',
        followers: '~700 million',
        description: 'Devotion to Vishnu and his avatars (Krishna, Rama) as the Supreme God.',
        distinctives: ['Krishna/Rama worship', 'Bhakti emphasis', 'Tilak mark', 'Vegetarianism'],
      },
      {
        name: 'Shaivism',
        followers: '~250 million',
        description: 'Devotion to Shiva as the Supreme God, often in ascetic traditions.',
        distinctives: ['Shiva worship', 'Asceticism', 'Tripundra mark', 'Shiva lingam'],
      },
      {
        name: 'Shaktism',
        followers: '~30 million',
        description: 'Devotion to Shakti (the Divine Mother/Goddess) as the supreme power.',
        distinctives: ['Goddess worship', 'Durga/Kali devotion', 'Tantra', 'Navaratri festival'],
      },
      {
        name: 'Smartism',
        followers: '~10 million',
        description: 'Liberal tradition following Adi Shankaracharya; worships five deities equally.',
        distinctives: ['Five deity worship', 'Advaita Vedanta philosophy', 'Philosophical emphasis'],
      },
    ],
    keyFigures: ['Krishna', 'Rama', 'Adi Shankaracharya', 'Ramanuja', 'Swami Vivekananda', 'Mahatma Gandhi'],
    history: [
      { year: '~3000 BC', event: 'Indus Valley civilization; possible early roots of Hindu practices' },
      { year: '~1500 BC', event: 'Composition of the Rig Veda; beginning of the Vedic period' },
      { year: '~800-200 BC', event: 'Composition of the Upanishads; philosophical golden age' },
      { year: '~400 BC', event: 'Composition of the Bhagavad Gita and great epics' },
      { year: '~200 BC-300 AD', event: 'Rise of bhakti (devotional) movements' },
      { year: '~788-820 AD', event: 'Adi Shankaracharya consolidates Advaita Vedanta philosophy' },
      { year: '12th-17th c.', event: 'Medieval bhakti movement spreads devotional Hinduism across India' },
      { year: '1893', event: 'Swami Vivekananda addresses the Parliament of Religions in Chicago' },
    ],
    sinAndRedemption: sinAndRedemptionData.hinduism,
    culturalEtiquette: culturalEtiquetteData.hinduism,
  },
  {
    id: 'buddhism',
    name: 'Buddhism',
    emoji: '☸️',
    gradient: 'from-yellow-500 to-amber-700',
    accent: '#eab308',
    glow: 'rgba(234, 179, 8, 0.4)',
    founded: '~5th century BC',
    followersGlobal: '~500 million',
    origin: 'Northern India / Nepal',
    tagline: 'The Middle Way to end suffering and achieve enlightenment',
    overview:
      'Buddhism was founded by Siddhartha Gautama (the Buddha) in ancient India. It teaches the Four Noble Truths about the nature of suffering and the Eightfold Path to liberation (nirvana). Buddhism does not center on worship of a creator god but focuses on personal spiritual development, ethical conduct, meditation, and wisdom to break free from the cycle of suffering and rebirth.',
    sacredTexts: [
      {
        name: 'Tripitaka (Pali Canon)',
        language: 'Pali',
        description: 'The oldest complete Buddhist scripture collection, foundational for Theravada Buddhism.',
        sections: ['Vinaya Pitaka (Monastic Rules)', 'Sutta Pitaka (Discourses)', 'Abhidhamma Pitaka (Philosophy)'],
      },
      {
        name: 'Mahayana Sutras',
        language: 'Sanskrit, Chinese, Tibetan',
        description: 'Later scriptures revered in Mahayana traditions.',
        sections: ['Heart Sutra', 'Lotus Sutra', 'Diamond Sutra', 'Lankavatara Sutra'],
      },
      {
        name: 'Tibetan Buddhist Canon',
        language: 'Tibetan',
        description: 'The Kangyur (translated words of the Buddha) and Tengyur (commentaries).',
        sections: ['Kangyur', 'Tengyur', 'Tibetan Book of the Dead (Bardo Thodol)'],
      },
    ],
    beliefs: {
      god: {
        summary:
          'No creator god. The Buddha is not a god but an awakened teacher. Devas exist but are also subject to rebirth.',
        details:
          'Buddhism is non-theistic — it neither affirms nor denies a supreme creator God, considering the question not useful for the path to liberation. The Buddha was a human being who achieved enlightenment through his own effort and taught the way for others. Devas (celestial beings) exist in Buddhist cosmology but are themselves trapped in samsara. Some Mahayana traditions developed devotional practices around celestial Buddhas and bodhisattvas, but these are fundamentally different from theistic worship.',
        scriptures: [
          {
            reference: 'Dhammapada 165',
            text: 'By oneself is evil done; by oneself is one defiled. By oneself is evil left undone; by oneself is one made pure. Purity and impurity depend on oneself; no one can purify another.',
          },
          {
            reference: 'Majjhima Nikaya 26',
            text: 'I am not a god, not a heavenly being, not a spirit. I am one who is awake (Buddha).',
          },
          {
            reference: 'Dhammapada 276',
            text: 'You yourselves must strive; the Buddhas only point the way.',
          },
        ],
      },
      afterlife: {
        summary:
          'Rebirth driven by karma continues until nirvana is attained — the cessation of suffering and the cycle of rebirth.',
        details:
          'Buddhism teaches that consciousness continues after death and is reborn based on karma (intentional actions). There are six realms of rebirth: gods, demigods, humans, animals, hungry ghosts, and hell beings — all temporary. The ultimate goal is nirvana — the cessation of craving, aversion, and ignorance, and therefore the end of rebirth and suffering. Nirvana is not annihilation but a state beyond ordinary conceptualization. Mahayana Buddhists aspire to become bodhisattvas who delay nirvana to help all beings.',
        scriptures: [
          {
            reference: 'Dhammapada 153-154',
            text: 'Through many a birth in samsara have I wandered in vain, seeking the builder of this house. Painful is repeated birth! O house-builder, you are seen! You shall build no house again.',
          },
          {
            reference: 'Udana 8.3',
            text: 'There is, monks, an unborn, unbecome, unmade, unconditioned. If there were not, there would be no escape from the born, the become, the made, the conditioned.',
          },
          {
            reference: 'Majjhima Nikaya 63 (Cula-Malunkyovada Sutta)',
            text: 'Whether the world is eternal or not, there still remains birth, ageing, death, sorrow... the cessation of which I make known here and now.',
          },
        ],
      },
      evil: {
        summary:
          'Evil arises from the three poisons: greed (lobha), hatred (dosa), and delusion (moha) — not from an external force.',
        details:
          'Buddhism locates the root of evil entirely within the mind. The three poisons (kleshas) — greed, hatred, and delusion — are the fundamental causes of suffering and unwholesome action. There is no external devil or cosmic evil force. Mara, who tempted the Buddha, is often understood as a personification of distraction and the attachment that keeps beings trapped in samsara. Evil is overcome through wisdom, ethical conduct, and meditation — the threefold training.',
        scriptures: [
          {
            reference: 'Dhammapada 1',
            text: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a corrupt mind, suffering follows, as the wheel follows the hoof of the ox.',
          },
          {
            reference: 'Dhammapada 183',
            text: 'To avoid all evil, to cultivate good, and to purify one\'s mind — this is the teaching of the Buddhas.',
          },
          {
            reference: 'Sutta Nipata 4.16',
            text: 'Craving is the builder of this house. The rafters are the passions; the ridge-pole is ignorance.',
          },
        ],
      },
      humanNature: {
        summary:
          'No permanent self (anatta); humans are a constantly changing stream of five aggregates (skandhas).',
        details:
          'Buddhism\'s most distinctive teaching is anatta (non-self) — there is no permanent, unchanging soul. What we call a "person" is a dynamic process of five aggregates (skandhas): form, feeling, perception, mental formations, and consciousness. These are in constant flux. This does not mean humans don\'t exist, but that they exist differently than assumed — as processes, not fixed entities. Understanding this frees one from attachment to self and opens the path to liberation.',
        scriptures: [
          {
            reference: 'Anattalakkhana Sutta (SN 22.59)',
            text: 'Form is not self. If form were self, then form would not lead to affliction... "Let my form be thus. Let my form not be thus."',
          },
          {
            reference: 'Dhammapada 277-279',
            text: '"All conditioned things are impermanent." "All conditioned things are suffering." "All things are not-self." When one sees this with wisdom, one turns away from suffering.',
          },
          {
            reference: 'Milindapanha 2.1',
            text: 'Just as the word "chariot" is but a name for the combination of parts, so "being" and "person" are but names for the combination of the five aggregates.',
          },
        ],
      },
      salvation: {
        summary:
          'Liberation (nirvana) through the Noble Eightfold Path: right view, intention, speech, action, livelihood, effort, mindfulness, concentration.',
        details:
          'The Buddha\'s path to liberation is encapsulated in the Four Noble Truths and the Eightfold Path. The Four Truths are: life involves suffering (dukkha), suffering arises from craving (tanha), suffering can cease (nirodha), and the path to cessation is the Eightfold Path (magga). The Eightfold Path covers wisdom, ethical conduct, and mental discipline. Liberation is achieved through one\'s own effort — there is no savior or divine grace needed, though Mahayana traditions do include devotional practices and bodhisattva assistance.',
        scriptures: [
          {
            reference: 'Dhammacakkappavattana Sutta (SN 56.11)',
            text: 'This is the Noble Truth of Suffering... This is the Noble Truth of the Origin of Suffering... This is the Noble Truth of the Cessation of Suffering... This is the Noble Truth of the Path leading to the Cessation of Suffering.',
          },
          {
            reference: 'Dhammapada 273',
            text: 'Of all paths the Eightfold Path is the best; of all truths the Four Noble Truths are the best.',
          },
          {
            reference: 'Heart Sutra',
            text: 'Form is emptiness, emptiness is form. Emptiness is not other than form, form is not other than emptiness.',
          },
        ],
      },
      ethics: {
        summary:
          'Follow the Five Precepts, practice compassion (karuna) for all beings, cultivate loving-kindness (metta).',
        details:
          'Buddhist ethics are grounded in the Five Precepts: abstain from killing, stealing, sexual misconduct, lying, and intoxicants. More broadly, ethics flow from compassion (karuna) and loving-kindness (metta) toward all sentient beings. The Eightfold Path includes right speech, right action, and right livelihood as ethical components. Bodhisattva ethics in Mahayana Buddhism extend this further — the ideal is to work tirelessly for the liberation of all beings, placing others\' welfare above one\'s own.',
        scriptures: [
          {
            reference: 'Metta Sutta (Sutta Nipata 1.8)',
            text: 'May all beings be happy and secure; may all beings be happy at heart. Whatever living beings there may be — feeble or strong, long, stout, or of medium size — may all beings, without exception, be happy-minded.',
          },
          {
            reference: 'Dhammapada 129-130',
            text: 'All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.',
          },
          {
            reference: 'Dhammapada 5',
            text: 'Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is an eternal law.',
          },
        ],
      },
    },
    practices: [
      {
        name: 'Meditation (Bhavana)',
        description: 'Mindfulness (vipassana) and concentration (samatha) meditation to develop insight and calm.',
        frequency: 'Daily',
        icon: '🧘',
      },
      {
        name: 'Five Precepts',
        description: 'Ethical guidelines: no killing, stealing, sexual misconduct, lying, or intoxicants.',
        frequency: 'Continual',
        icon: '📿',
      },
      {
        name: 'Chanting',
        description: 'Recitation of sutras, mantras, and refuge prayers.',
        frequency: 'Daily',
        icon: '🔔',
      },
      {
        name: 'Dana (Generosity)',
        description: 'Offering food, supplies, and support to monks/nuns and those in need.',
        frequency: 'Regular',
        icon: '🙏',
      },
      {
        name: 'Vesak / Buddha Day',
        description: 'Celebration of the Buddha\'s birth, enlightenment, and passing.',
        frequency: 'Annually',
        icon: '🪷',
      },
    ],
    denominations: [
      {
        name: 'Theravada',
        followers: '~150 million',
        description: 'The "Teaching of the Elders" — oldest surviving school, dominant in Southeast Asia.',
        distinctives: ['Pali Canon', 'Arhat ideal', 'Monastic focus', 'Vipassana meditation'],
      },
      {
        name: 'Mahayana',
        followers: '~300 million',
        description: 'The "Great Vehicle" — emphasizes the bodhisattva ideal; dominant in East Asia.',
        distinctives: ['Bodhisattva ideal', 'Sutra traditions', 'Includes Zen, Pure Land, Nichiren'],
      },
      {
        name: 'Vajrayana (Tibetan)',
        followers: '~20 million',
        description: 'The "Diamond Vehicle" — esoteric tradition with tantric practices, strong in Tibet and Mongolia.',
        distinctives: ['Tantric practices', 'Dalai Lama', 'Mandala/visualization', 'Deity yoga'],
      },
      {
        name: 'Zen',
        followers: '~10 million',
        description: 'Emphasizes meditation (zazen) and direct insight, without reliance on scriptures.',
        distinctives: ['Zazen meditation', 'Koans', 'Minimalism', 'Direct pointing to the mind'],
      },
    ],
    keyFigures: ['Siddhartha Gautama (the Buddha)', 'Ananda', 'Nagarjuna', 'Bodhidharma', 'Dalai Lama XIV', 'Thich Nhat Hanh'],
    history: [
      { year: '~563 BC', event: 'Birth of Siddhartha Gautama in Lumbini (modern Nepal)' },
      { year: '~528 BC', event: 'Siddhartha attains enlightenment under the Bodhi tree at Bodh Gaya' },
      { year: '~483 BC', event: 'Death (parinirvana) of the Buddha; First Buddhist Council' },
      { year: '~269 BC', event: 'Emperor Ashoka converts to Buddhism; sends missionaries across Asia' },
      { year: '~1st c. AD', event: 'Buddhism spreads to China via the Silk Road' },
      { year: '~6th c. AD', event: 'Buddhism reaches Japan and Korea' },
      { year: '~8th c. AD', event: 'Vajrayana Buddhism established in Tibet' },
      { year: '20th c.', event: 'Buddhism spreads globally; mindfulness movement emerges in the West' },
    ],
    sinAndRedemption: sinAndRedemptionData.buddhism,
    culturalEtiquette: culturalEtiquetteData.buddhism,
  },
  {
    id: 'sikhism',
    name: 'Sikhism',
    emoji: '🪯',
    gradient: 'from-sky-500 to-blue-700',
    accent: '#0ea5e9',
    glow: 'rgba(14, 165, 233, 0.4)',
    founded: '1469 AD',
    followersGlobal: '~30 million',
    origin: 'Punjab region (modern India/Pakistan)',
    tagline: 'One God, equality of all, selfless service',
    overview:
      'Sikhism was founded by Guru Nanak in the Punjab region and developed through ten successive Gurus. It teaches devotion to one formless God (Waheguru), equality of all people regardless of caste, gender, or religion, and the importance of honest living and selfless service (seva). The Guru Granth Sahib, the holy scripture, is considered the eternal living Guru.',
    sacredTexts: [
      {
        name: 'Guru Granth Sahib',
        language: 'Gurmukhi (Punjabi)',
        description:
          'The central scripture of Sikhism, considered the eternal Guru. Contains 1,430 pages of hymns composed by the Sikh Gurus and saints from Hindu and Muslim traditions.',
        sections: ['Japji Sahib (by Guru Nanak)', 'Rehras Sahib', 'Kirtan Sohila', 'Sukhmani Sahib', 'Anand Sahib'],
      },
      {
        name: 'Dasam Granth',
        language: 'Gurmukhi, Braj Bhasha',
        description: 'A secondary scripture attributed to Guru Gobind Singh, containing devotional and heroic compositions.',
      },
    ],
    beliefs: {
      god: {
        summary:
          'One formless, timeless God (Waheguru / Ik Onkar) — without gender, birth, or death, present in all creation.',
        details:
          'Sikhism is strictly monotheistic. God is described by the Mool Mantar (opening verse of Guru Granth Sahib) as Ik Onkar — One Creator, whose name is Truth, creative being personified, without fear, without hostility, timeless in image, beyond birth, self-existent. God (Waheguru) is both transcendent (nirgun — beyond attributes) and immanent (sargun — present in creation). God has no form, gender, or physical incarnation. The divine is experienced through inner devotion and grace.',
        scriptures: [
          {
            reference: 'Guru Granth Sahib, p.1 (Mool Mantar)',
            text: 'Ik Onkar Sat Naam Karta Purakh Nirbhau Nirvair Akaal Moorat Ajoonee Saibhang Gur Prasaad — One Creator. Truth is the Name. Creative Being Personified. Without Fear. Without Hostility. Timeless. Beyond Birth. Self-Existent. By Guru\'s Grace.',
          },
          {
            reference: 'Guru Granth Sahib, p.2 (Japji Sahib)',
            text: 'He Himself is the Creator, and He Himself is the one who fulfills. There is no other; I have seen and searched.',
          },
          {
            reference: 'Guru Granth Sahib, p.596',
            text: 'Wonderful Lord, You are in all forms. You are in all places. Among all, You are the One.',
          },
        ],
      },
      afterlife: {
        summary:
          'The soul undergoes reincarnation based on karma; liberation (mukti) is union with God, ending the cycle.',
        details:
          'Sikhism teaches that the soul goes through cycles of birth and death (transmigration) based on karma and God\'s will (hukam). The ultimate goal is mukti (liberation) — merging with God like a drop of water merging with the ocean. This is achieved through meditation on God\'s name (Naam Simran), living a virtuous life, and God\'s grace (nadar/kirpa). Sikhs do not believe in a physical heaven or hell as destinations — these are states of being close to or far from God.',
        scriptures: [
          {
            reference: 'Guru Granth Sahib, p.12',
            text: 'The cycle of birth and death is ordained by the Lord\'s Will; through His Will we come and go.',
          },
          {
            reference: 'Guru Granth Sahib, p.7',
            text: 'Those who meditate on the Name — their toils shall end. Their faces shall be radiant with glory. Many are saved along with them. O Nanak, they are not bound.',
          },
          {
            reference: 'Guru Granth Sahib, p.936',
            text: 'The soul-bride who adorns herself with the Love of the Lord becomes pleasing to her God. She is absorbed in the One.',
          },
        ],
      },
      evil: {
        summary:
          'Evil comes from haumai (ego/self-centeredness) and the five thieves: lust, anger, greed, attachment, and pride.',
        details:
          'Sikhism identifies haumai (ego) as the fundamental barrier between the soul and God. From haumai arise the five thieves (panj chor): kaam (lust), krodh (anger), lobh (greed), moh (attachment), and ahankar (pride). These distract the mind from God and trap the soul in the cycle of rebirth. There is no external devil — evil is an internal condition. It is overcome through Naam Simran (meditating on God\'s name), sangat (holy company), and living according to the Guru\'s teachings.',
        scriptures: [
          {
            reference: 'Guru Granth Sahib, p.466',
            text: 'Within this body dwell the five thieves: lust, anger, greed, emotional attachment, and pride. They plunder the nectar of Naam, but the self-willed do not realize it.',
          },
          {
            reference: 'Guru Granth Sahib, p.560',
            text: 'Haumai (ego) is a chronic disease, but it contains its own cure as well.',
          },
          {
            reference: 'Guru Granth Sahib, p.1416',
            text: 'Falsehood and evil deeds are the result of ego. The cycle of birth and death and coming and going continues.',
          },
        ],
      },
      humanNature: {
        summary:
          'Humans carry a divine spark; the soul is intrinsically pure but clouded by ego and worldly attachment.',
        details:
          'Sikhism teaches that the human birth is rare and precious — a unique opportunity to merge with God. The soul (atma) is a part of the divine but has become separated through haumai (ego) and maya (worldly illusion). Humans are not inherently sinful but are clouded by attachment to the material world. All humans are equal regardless of caste, gender, or religion — this is a fundamental Sikh principle. The purpose of human life is to realize God within oneself.',
        scriptures: [
          {
            reference: 'Guru Granth Sahib, p.12 (Japji Sahib)',
            text: 'This human body has been given to you. This is your chance to meet the Lord of the Universe.',
          },
          {
            reference: 'Guru Granth Sahib, p.349',
            text: 'God\'s Light pervades every creature, and every creature is contained in His Light.',
          },
          {
            reference: 'Guru Granth Sahib, p.97',
            text: 'Recognize the Light within all, and do not question the caste. In the next world, there is no caste.',
          },
        ],
      },
      salvation: {
        summary:
          'Through Naam Simran (meditating on God\'s name), honest living, selfless service (seva), and God\'s grace.',
        details:
          'Sikhism teaches three pillars of salvation: Naam Japna (meditating on God\'s name), Kirat Karni (earning an honest living), and Vand Chakna (sharing with others). Liberation requires both human effort and God\'s grace (nadar). The mind must be purified of ego through devotion and surrender to God\'s will (hukam). The Guru (scripture) guides the soul, and sangat (community of the faithful) supports spiritual growth. Rituals alone are insufficient — internal transformation is essential.',
        scriptures: [
          {
            reference: 'Guru Granth Sahib, p.2',
            text: 'By His Grace, one is liberated; by His Command, all are created. He acts, and causes others to act.',
          },
          {
            reference: 'Guru Granth Sahib, p.4',
            text: 'How can we become truthful? How can the veil of illusion be torn away? O Nanak, it is written that you shall obey the Hukam of His Command, and walk in the Way of His Will.',
          },
          {
            reference: 'Guru Granth Sahib, p.62',
            text: 'True devotion is service to the Lord. Meditate and chant the Name of the Lord, day and night.',
          },
        ],
      },
      ethics: {
        summary:
          'Live honestly, serve selflessly (seva), share with others, treat all people as equal, defend the oppressed.',
        details:
          'Sikh ethics center on three duties: Naam Japna (remember God), Kirat Karni (earn honestly), and Vand Chakna (share with others). The Khalsa code adds the duty to fight injustice and defend the weak. All humans are equal — caste, gender, and racial discrimination are forbidden. The Langar (free community kitchen) embodies this: everyone sits together and eats the same food regardless of status. Seva (selfless service) is a daily practice, not just an ideal.',
        scriptures: [
          {
            reference: 'Guru Granth Sahib, p.26',
            text: 'One who performs selfless service, without thought of reward, shall attain his Lord and Master.',
          },
          {
            reference: 'Guru Granth Sahib, p.141',
            text: 'Those who have meditated on the Name and departed after having worked by the sweat of their brow — O Nanak, their faces are radiant in the Court of the Lord.',
          },
          {
            reference: 'Guru Granth Sahib, p.473',
            text: 'The highest religion is to rise to universal brotherhood; aye, to consider all creatures your equals.',
          },
        ],
      },
    },
    practices: [
      {
        name: 'Naam Simran',
        description: 'Meditating on and repeating God\'s Name (Waheguru) to connect with the divine.',
        frequency: 'Daily (especially Amrit Vela — pre-dawn)',
        icon: '🙏',
      },
      {
        name: 'Langar',
        description: 'Free communal kitchen where all eat together as equals, regardless of background.',
        frequency: 'At every Gurdwara, daily',
        icon: '🍲',
      },
      {
        name: 'Seva (Selfless Service)',
        description: 'Volunteering time and effort for the community without expectation of reward.',
        frequency: 'Continual',
        icon: '🤝',
      },
      {
        name: 'Kirtan',
        description: 'Devotional singing of hymns from the Guru Granth Sahib.',
        frequency: 'Daily / Weekly',
        icon: '🎵',
      },
      {
        name: 'Amrit Sanskar',
        description: 'Initiation ceremony into the Khalsa, involving taking Amrit (baptism).',
        frequency: 'Once (initiation)',
        icon: '⚔️',
      },
    ],
    denominations: [
      {
        name: 'Khalsa Sikhs',
        followers: 'Majority',
        description: 'Initiated Sikhs who follow the discipline established by Guru Gobind Singh in 1699.',
        distinctives: ['Five Ks (Kesh, Kanga, Kara, Kachera, Kirpan)', 'Amrit initiation', 'Strict discipline'],
      },
      {
        name: 'Sahajdhari',
        followers: 'Significant minority',
        description: 'Non-baptized Sikhs who follow Sikh teachings but have not taken Amrit.',
        distinctives: ['Follow Sikh teachings', 'May not maintain all Five Ks', 'Gradual spiritual development'],
      },
      {
        name: 'Namdhari',
        followers: '~2 million',
        description: 'A Sikh sect that believes in a living Guru and emphasizes meditation and simplicity.',
        distinctives: ['Living Guru lineage', 'White dress', 'Vegetarianism', 'Meditation focus'],
      },
      {
        name: 'Nirankari',
        followers: '~1 million',
        description: 'Reform movement emphasizing the formless nature of God.',
        distinctives: ['Formless God emphasis', 'Sant Nirankari Mission', 'Universal brotherhood'],
      },
    ],
    keyFigures: ['Guru Nanak', 'Guru Gobind Singh', 'Guru Arjan', 'Guru Tegh Bahadur', 'Bhai Mardana', 'Maharaja Ranjit Singh'],
    history: [
      { year: '1469', event: 'Birth of Guru Nanak, founder of Sikhism, in Talwandi' },
      { year: '1539', event: 'Guru Nanak passes; Guru Angad becomes second Guru' },
      { year: '1604', event: 'Guru Arjan compiles the Adi Granth (first version of Guru Granth Sahib)' },
      { year: '1606', event: 'Guru Arjan martyred by the Mughal Emperor Jahangir' },
      { year: '1699', event: 'Guru Gobind Singh creates the Khalsa at Anandpur Sahib' },
      { year: '1708', event: 'Guru Gobind Singh declares Guru Granth Sahib the eternal Guru' },
      { year: '1799', event: 'Maharaja Ranjit Singh establishes the Sikh Empire' },
      { year: '1984', event: 'Operation Blue Star; anti-Sikh riots reshape the global Sikh community' },
    ],
    sinAndRedemption: sinAndRedemptionData.sikhism,
    culturalEtiquette: culturalEtiquetteData.sikhism,
  },
]

export const topicLabels: Record<string, string> = {
  god: 'God / The Divine',
  afterlife: 'Afterlife & Beyond',
  evil: 'Evil & The Devil',
  humanNature: 'Human Nature',
  salvation: 'Salvation & Liberation',
  ethics: 'Ethics & Morality',
}

export const topicIcons: Record<string, string> = {
  god: '✨',
  afterlife: '🌅',
  evil: '🔥',
  humanNature: '🧬',
  salvation: '🕊️',
  ethics: '⚖️',
}

export function getReligionById(id: string): Religion | undefined {
  return religions.find((r) => r.id === id)
}
