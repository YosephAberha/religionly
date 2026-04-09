import { ScriptureCollection } from './types'

export const buddhistScriptures: ScriptureCollection[] = [
  // ──────────────────────────────────────────────
  // 1. PALI CANON (TRIPITAKA)
  // ──────────────────────────────────────────────
  {
    id: 'pali-canon',
    religionId: 'buddhism',
    name: 'Pali Canon (Tipitaka)',
    originalName: 'Tipitaka',
    language: 'Pali',
    description:
      'The complete canonical scripture of Theravada Buddhism, comprising three "baskets" (pitakas) of teachings attributed to the Buddha and his close disciples. It is the oldest and most complete surviving early Buddhist canon, preserved in the Pali language and committed to writing in Sri Lanka around the first century BCE.',
    totalBooks: 'Three Pitakas containing thousands of suttas',
    totalChapters: 'Numerous collections and sub-collections',
    totalVerses: 'Over 80,000 pages in printed editions',
    period: 'c. 5th–1st century BCE (oral); 1st century BCE (written)',
    onlineSource: {
      label: 'AccessToInsight.org',
      url: 'https://www.accesstoinsight.org/',
    },
    books: [
      // ── VINAYA PITAKA ──
      {
        id: 'vinaya-pitaka',
        name: 'Vinaya Pitaka (Basket of Discipline)',
        originalName: 'Vinaya Pitaka',
        chapters: 5,
        summary:
          'The regulatory framework for the Buddhist monastic community (Sangha). It contains the rules of conduct for monks (bhikkhus) and nuns (bhikkhunis), along with the stories behind each rule and detailed procedures for communal life.',
        themes: [
          'monastic discipline',
          'ethical conduct',
          'community governance',
          'ordination',
          'Sangha procedures',
        ],
        sections: [
          {
            chapter: 1,
            title: 'Suttavibhanga (Analysis of Rules)',
            summary:
              'Detailed analysis of the Patimokkha rules for monks and nuns, with the origin story and explanatory material for each rule.',
            keyVerses: [
              {
                ref: 'Parajika 1',
                text: 'Should any bhikkhu — Loss of communion for sexual intercourse. A bhikkhu who engages in sexual intercourse is defeated and no longer in communion.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'Khandhaka (Chapters)',
            summary:
              'Procedures for ordination, the Uposatha ceremony, the rainy-season retreat, and other aspects of communal monastic life.',
            keyVerses: [
              {
                ref: 'Mahavagga 1.6',
                text: 'I am freed from all snares, both those of devas and those of men. You too, bhikkhus, are freed from all snares. Wander forth for the welfare of the many, for the happiness of the many, out of compassion for the world.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Parivara (Appendices)',
            summary:
              'A summary and classification of the rules, serving as a study guide and catechism for the Vinaya.',
            keyVerses: [],
          },
        ],
        keyVerses: [
          {
            ref: 'Mahavagga 1.6.19',
            text: 'Wander forth, O bhikkhus, for the welfare of the many, for the happiness of the many, out of compassion for the world, for the good, welfare, and happiness of devas and men. Let not two go by one way. Teach the Dhamma that is beautiful in the beginning, beautiful in the middle, and beautiful in the end.',
          },
        ],
      },

      // ── SUTTA PITAKA ──
      {
        id: 'sutta-pitaka',
        name: 'Sutta Pitaka (Basket of Discourses)',
        originalName: 'Sutta Pitaka',
        chapters: '5 Nikayas',
        summary:
          'The vast collection of discourses attributed to the Buddha and, occasionally, his chief disciples. Organized into five collections (Nikayas), it contains the core doctrinal teachings of Theravada Buddhism including the Four Noble Truths, the Eightfold Path, dependent origination, and meditation instructions.',
        themes: [
          'Four Noble Truths',
          'Eightfold Path',
          'dependent origination',
          'meditation',
          'ethics',
          'wisdom',
          'liberation',
        ],
        sections: [
          // ─── DIGHA NIKAYA ───
          {
            chapter: 1,
            title: 'Digha Nikaya (Collection of Long Discourses)',
            summary:
              'Thirty-four long discourses of the Buddha, covering topics such as morality, meditation, cosmology, and the last days of the Buddha. Includes the Mahaparinibbana Sutta and the Brahmajala Sutta.',
            keyVerses: [
              {
                ref: 'DN 16 (Mahaparinibbana Sutta 6.7)',
                text: 'All conditioned things are of a nature to decay — strive on with diligence.',
              },
              {
                ref: 'DN 16 (Mahaparinibbana Sutta 2.26)',
                text: 'Be islands unto yourselves, be a refuge unto yourselves, with no other refuge. Let the Dhamma be your island, let the Dhamma be your refuge, with no other refuge.',
              },
              {
                ref: 'DN 2 (Samannaphala Sutta)',
                text: 'Just as if a man were to hold a lamp in a dark place, so that those with eyes could see forms — in the same way the Blessed One has made the Dhamma clear in many ways.',
              },
            ],
          },
          // ─── MAJJHIMA NIKAYA ───
          {
            chapter: 2,
            title: 'Majjhima Nikaya (Collection of Middle-Length Discourses)',
            summary:
              'One hundred and fifty-two discourses of moderate length, rich in doctrinal exposition, similes, and practical guidance. Contains many of the most frequently studied suttas on meditation, wisdom, and the path.',
            keyVerses: [
              {
                ref: 'MN 22 (Alagaddupama Sutta)',
                text: 'Bhikkhus, I shall show you how the Dhamma is similar to a raft, being for the purpose of crossing over, not for the purpose of holding onto.',
              },
              {
                ref: 'MN 2 (Sabbasava Sutta)',
                text: 'He attends wisely: "This is suffering. This is the origin of suffering. This is the cessation of suffering. This is the way leading to the cessation of suffering."',
              },
              {
                ref: 'MN 10 (Satipatthana Sutta)',
                text: 'This is the direct path for the purification of beings, for the surmounting of sorrow and lamentation, for the disappearance of pain and grief, for the attainment of the true way, for the realization of Nibbana — namely, the four foundations of mindfulness.',
              },
            ],
          },
          // ─── SAMYUTTA NIKAYA ───
          {
            chapter: 3,
            title: 'Samyutta Nikaya (Collection of Connected Discourses)',
            summary:
              'Thousands of shorter suttas organized by topic into fifty-six groups (samyuttas). Major sections cover dependent origination, the aggregates, the sense bases, the factors of the Eightfold Path, and the Four Noble Truths.',
            keyVerses: [
              {
                ref: 'SN 56.11 (Dhammacakkappavattana Sutta)',
                text: 'This is the noble truth of suffering: birth is suffering, aging is suffering, illness is suffering, death is suffering; union with what is displeasing is suffering; separation from what is pleasing is suffering; not to get what one wants is suffering; in brief, the five aggregates subject to clinging are suffering.',
              },
              {
                ref: 'SN 12.2 (Paticcasamuppada)',
                text: 'With ignorance as condition, volitional formations come to be; with volitional formations as condition, consciousness; with consciousness as condition, name-and-form; with name-and-form as condition, the six sense bases.',
              },
              {
                ref: 'SN 22.59 (Anattalakkhana Sutta)',
                text: 'Form, bhikkhus, is not self. For if form were self, then form would not lead to affliction, and one could have it of form: "Let my form be thus, let my form not be thus."',
              },
            ],
          },
          // ─── ANGUTTARA NIKAYA ───
          {
            chapter: 4,
            title: 'Anguttara Nikaya (Collection of Numerical Discourses)',
            summary:
              'Thousands of short suttas arranged in eleven sections (nipatas) according to the number of items in the teaching — from ones to elevens. Covers a wide range of practical and doctrinal topics.',
            keyVerses: [
              {
                ref: 'AN 3.65 (Kalama Sutta)',
                text: 'Do not go by oral tradition, by lineage of teaching, by hearsay, by a collection of scriptures, by logical reasoning, by inferential reasoning, by reasoned cogitation, by the acceptance of a view after pondering it, by the seeming competence of a speaker, or because you think: "The ascetic is our teacher." But when you know for yourselves: "These things are wholesome, these things are blameless, these things are praised by the wise, these things, if undertaken and practiced, lead to welfare and happiness" — then you should engage in them.',
              },
              {
                ref: 'AN 4.85',
                text: 'There are these four efforts: the effort to restrain, the effort to abandon, the effort to develop, and the effort to maintain.',
              },
              {
                ref: 'AN 5.57 (Upajjhatthana Sutta)',
                text: 'I am subject to aging, I have not gone beyond aging. I am subject to illness, I have not gone beyond illness. I am subject to death, I have not gone beyond death. I will grow different, separate from all that is dear and appealing to me.',
              },
            ],
          },
          // ─── KHUDDAKA NIKAYA ───
          {
            chapter: 5,
            title: 'Khuddaka Nikaya (Collection of Minor Texts)',
            summary:
              'A diverse collection of fifteen to eighteen shorter works, including the Dhammapada, the Sutta Nipata, the Udana, the Theragatha and Therigatha (verses of the elder monks and nuns), the Jataka tales, and others. Contains some of the most beloved and widely quoted Buddhist texts.',
            keyVerses: [
              {
                ref: 'Dhp 1 (Dhammapada)',
                text: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a corrupt mind, suffering follows, as the wheel follows the hoof of the ox.',
              },
              {
                ref: 'Snp 1.8 (Metta Sutta)',
                text: 'Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings.',
              },
              {
                ref: 'Ud 8.3',
                text: 'There is, bhikkhus, a not-born, not-brought-to-being, not-made, not-conditioned. If there were no not-born, not-brought-to-being, not-made, not-conditioned, no escape would be discerned from what is born, brought-to-being, made, conditioned.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'SN 56.11 (Dhammacakkappavattana Sutta)',
            text: 'This, bhikkhus, is the noble truth of suffering... This is the noble truth of the origin of suffering... This is the noble truth of the cessation of suffering... This is the noble truth of the way leading to the cessation of suffering.',
          },
          {
            ref: 'MN 10 (Satipatthana Sutta)',
            text: 'This is the direct path for the purification of beings, for the surmounting of sorrow and lamentation, for the disappearance of pain and grief, for the attainment of the true way, for the realization of Nibbana.',
          },
        ],
      },

      // ── ABHIDHAMMA PITAKA ──
      {
        id: 'abhidhamma-pitaka',
        name: 'Abhidhamma Pitaka (Basket of Higher Doctrine)',
        originalName: 'Abhidhamma Pitaka',
        chapters: 7,
        summary:
          'A systematic philosophical and psychological analysis of the Dhamma. It classifies all phenomena into ultimate realities (paramattha dhamma) and provides a detailed map of consciousness, mental factors, matter, and Nibbana.',
        themes: [
          'consciousness',
          'mental factors',
          'ultimate realities',
          'conditional relations',
          'philosophical analysis',
        ],
        sections: [
          {
            chapter: 1,
            title: 'Dhammasangani (Enumeration of Phenomena)',
            summary:
              'A classification of all phenomena into categories of wholesome, unwholesome, and indeterminate states of consciousness and their accompanying mental factors.',
            keyVerses: [],
          },
          {
            chapter: 2,
            title: 'Vibhanga (Book of Analysis)',
            summary:
              'Analytical treatment of key doctrinal categories including the aggregates, sense bases, elements, truths, faculties, and dependent origination.',
            keyVerses: [],
          },
          {
            chapter: 3,
            title: 'Dhatukatha (Discourse on Elements)',
            summary:
              'Discussion of the elements (dhatus) and how phenomena relate to the aggregates, sense bases, and elements.',
            keyVerses: [],
          },
          {
            chapter: 4,
            title: 'Puggalapannatti (Description of Individuals)',
            summary:
              'Classification of personality types according to their spiritual development and qualities.',
            keyVerses: [],
          },
          {
            chapter: 5,
            title: 'Kathavatthu (Points of Controversy)',
            summary:
              'Attributed to Moggaliputta Tissa, this work addresses and refutes doctrinal positions held by various early Buddhist schools.',
            keyVerses: [],
          },
          {
            chapter: 6,
            title: 'Yamaka (Book of Pairs)',
            summary:
              'Pairs of questions that explore the precise application of doctrinal terms and concepts through logical analysis.',
            keyVerses: [],
          },
          {
            chapter: 7,
            title: 'Patthana (Book of Conditional Relations)',
            summary:
              'The most complex text of the Abhidhamma, analyzing all possible conditional relations (24 paccayas) between phenomena. Considered the crown jewel of Abhidhamma philosophy.',
            keyVerses: [],
          },
        ],
        keyVerses: [],
      },

      // ── Key Suttas as standalone books ──

      {
        id: 'dhammacakkappavattana-sutta',
        name: 'Dhammacakkappavattana Sutta (Setting the Wheel of Dhamma in Motion)',
        originalName: 'Dhammacakkappavattana Sutta',
        chapters: 1,
        summary:
          'The first discourse of the Buddha, delivered to the five ascetics at the Deer Park in Isipatana (Sarnath). It sets forth the Middle Way, the Four Noble Truths, and the Noble Eightfold Path — the foundational teaching of Buddhism.',
        themes: [
          'Four Noble Truths',
          'Noble Eightfold Path',
          'Middle Way',
          'first sermon',
          'Deer Park',
        ],
        sections: [
          {
            chapter: 'SN 56.11',
            title: 'The Middle Way',
            summary:
              'The Buddha identifies two extremes to be avoided — indulgence in sensual pleasure and self-mortification — and presents the Middle Way as the path to awakening.',
            keyVerses: [
              {
                ref: 'SN 56.11.2',
                text: 'There are these two extremes that are not to be indulged in by one who has gone forth. Which two? That which is devoted to sensual pleasure with reference to sensual objects: base, vulgar, common, ignoble, unprofitable; and that which is devoted to self-affliction: painful, ignoble, unprofitable.',
              },
              {
                ref: 'SN 56.11.3',
                text: 'Avoiding both of these extremes, the middle way realized by the Tathagata — producing vision, producing knowledge — leads to calm, to direct knowledge, to self-awakening, to unbinding.',
              },
            ],
          },
          {
            chapter: 'SN 56.11',
            title: 'The Four Noble Truths',
            summary:
              'The Buddha proclaims the Four Noble Truths: suffering, the origin of suffering, the cessation of suffering, and the path leading to the cessation of suffering.',
            keyVerses: [
              {
                ref: 'SN 56.11.5',
                text: 'Now this, bhikkhus, is the noble truth of suffering: birth is suffering, aging is suffering, illness is suffering, death is suffering; union with what is displeasing is suffering; separation from what is pleasing is suffering; not to get what one wants is suffering; in brief, the five aggregates subject to clinging are suffering.',
              },
              {
                ref: 'SN 56.11.6',
                text: 'Now this, bhikkhus, is the noble truth of the origin of suffering: it is this craving which leads to renewed existence, accompanied by delight and lust, seeking delight here and there; that is, craving for sensual pleasures, craving for existence, craving for extermination.',
              },
              {
                ref: 'SN 56.11.7',
                text: 'Now this, bhikkhus, is the noble truth of the cessation of suffering: it is the remainderless fading away and cessation of that same craving, the giving up and relinquishing of it, freedom from it, non-reliance on it.',
              },
              {
                ref: 'SN 56.11.8',
                text: 'Now this, bhikkhus, is the noble truth of the way leading to the cessation of suffering: it is this Noble Eightfold Path; that is, right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'SN 56.11',
            text: 'Vision arose, insight arose, discernment arose, knowledge arose, illumination arose within me with regard to things never heard before: "This is the noble truth of suffering."',
          },
        ],
      },

      {
        id: 'maha-satipatthana-sutta',
        name: 'Maha-Satipatthana Sutta (Great Discourse on the Foundations of Mindfulness)',
        originalName: 'Maha-Satipatthana Sutta',
        chapters: 1,
        summary:
          'The most important single discourse on meditation practice in the Theravada tradition. It provides comprehensive instructions on the four foundations of mindfulness: body, feelings, mind, and mind-objects.',
        themes: [
          'mindfulness',
          'meditation',
          'vipassana',
          'body contemplation',
          'Four Noble Truths',
        ],
        sections: [
          {
            chapter: 'DN 22.1',
            title: 'Kayanupassana (Contemplation of the Body)',
            summary:
              'Mindfulness of breathing, postures, clear comprehension, contemplation of bodily parts, elements, and charnel ground contemplations.',
            keyVerses: [
              {
                ref: 'DN 22.1',
                text: 'Breathing in long, he discerns, "I am breathing in long"; or breathing out long, he discerns, "I am breathing out long." Breathing in short, he discerns, "I am breathing in short"; or breathing out short, he discerns, "I am breathing out short."',
              },
              {
                ref: 'DN 22.2',
                text: 'He trains himself, "I will breathe in sensitive to the entire body." He trains himself, "I will breathe out sensitive to the entire body." He trains himself, "I will breathe in calming bodily fabrication." He trains himself, "I will breathe out calming bodily fabrication."',
              },
            ],
          },
          {
            chapter: 'DN 22.2',
            title: 'Vedananupassana (Contemplation of Feelings)',
            summary:
              'Mindfulness of pleasant, unpleasant, and neither-pleasant-nor-unpleasant feelings, both worldly and unworldly.',
            keyVerses: [
              {
                ref: 'DN 22.12',
                text: 'When feeling a pleasant feeling, he discerns, "I am feeling a pleasant feeling." When feeling a painful feeling, he discerns, "I am feeling a painful feeling." When feeling a neither-pleasant-nor-painful feeling, he discerns, "I am feeling a neither-pleasant-nor-painful feeling."',
              },
            ],
          },
          {
            chapter: 'DN 22.3',
            title: 'Cittanupassana (Contemplation of Mind)',
            summary:
              'Mindfulness of the state of mind as it is in the present moment — with lust or without, with aversion or without, contracted or distracted, concentrated or unconcentrated.',
            keyVerses: [
              {
                ref: 'DN 22.13',
                text: 'He discerns mind with passion as mind with passion, and mind without passion as mind without passion. He discerns mind with aversion as mind with aversion, and mind without aversion as mind without aversion. He discerns mind with delusion as mind with delusion, and mind without delusion as mind without delusion.',
              },
            ],
          },
          {
            chapter: 'DN 22.4',
            title: 'Dhammanupassana (Contemplation of Mind-Objects)',
            summary:
              'Mindfulness of the five hindrances, the five aggregates, the six sense bases, the seven factors of awakening, and the Four Noble Truths.',
            keyVerses: [
              {
                ref: 'DN 22.14',
                text: 'There being sensual desire present within, he discerns that "There is sensual desire present within me." There being no sensual desire present within, he discerns that "There is no sensual desire present within me." He discerns how there is the arising of unarisen sensual desire. And he discerns how there is the abandoning of arisen sensual desire.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'DN 22',
            text: 'This is the direct path for the purification of beings, for the surmounting of sorrow and lamentation, for the disappearance of pain and grief, for the attainment of the true way, for the realization of Nibbana — namely, the four foundations of mindfulness.',
          },
        ],
      },

      {
        id: 'anattalakkhana-sutta',
        name: 'Anattalakkhana Sutta (Discourse on the Not-Self Characteristic)',
        originalName: 'Anattalakkhana Sutta',
        chapters: 1,
        summary:
          'The second discourse of the Buddha, delivered to the group of five ascetics. It teaches the doctrine of anatta (not-self) by analyzing the five aggregates and showing that none can be identified as self.',
        themes: ['anatta', 'not-self', 'five aggregates', 'disenchantment', 'liberation'],
        sections: [
          {
            chapter: 'SN 22.59',
            title: 'Analysis of the Five Aggregates',
            summary:
              'The Buddha demonstrates that form, feeling, perception, mental formations, and consciousness are each not-self, because they are impermanent and cannot be controlled at will.',
            keyVerses: [
              {
                ref: 'SN 22.59.3',
                text: 'Form, bhikkhus, is not self. For if form were self, then form would not lead to affliction, and one could have it of form: "Let my form be thus, let my form not be thus." But because form is not self, form leads to affliction, and one cannot have it of form: "Let my form be thus, let my form not be thus."',
              },
              {
                ref: 'SN 22.59.10',
                text: 'Seeing thus, bhikkhus, the instructed noble disciple experiences revulsion towards form, revulsion towards feeling, revulsion towards perception, revulsion towards volitional formations, revulsion towards consciousness. Experiencing revulsion, he becomes dispassionate. Through dispassion, his mind is liberated.',
              },
              {
                ref: 'SN 22.59.11',
                text: 'When it is liberated, there comes the knowledge: "It is liberated." He understands: "Birth is destroyed, the holy life has been lived, what had to be done has been done, there is no more coming to any state of being."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'SN 22.59',
            text: 'Any kind of form whatsoever, whether past, future, or present, internal or external, gross or subtle, inferior or superior, far or near — all form should be seen as it really is with correct wisdom thus: "This is not mine, this I am not, this is not my self."',
          },
        ],
      },

      {
        id: 'metta-sutta',
        name: 'Metta Sutta (Discourse on Loving-Kindness)',
        originalName: 'Karaniya Metta Sutta',
        chapters: 1,
        summary:
          'One of the most beloved texts in all of Buddhism, this short sutta from the Sutta Nipata describes the qualities needed for spiritual practice and provides a comprehensive method for cultivating universal loving-kindness (metta).',
        themes: [
          'loving-kindness',
          'metta',
          'universal love',
          'compassion',
          'meditation',
          'goodwill',
        ],
        sections: [
          {
            chapter: 'Snp 1.8',
            title: 'The Practice of Loving-Kindness',
            summary:
              'Instructions for cultivating boundless loving-kindness toward all beings without exception, in all directions and in all states of existence.',
            keyVerses: [
              {
                ref: 'Snp 1.8.1',
                text: 'This is what should be done by one who is skilled in goodness, and who knows the path of peace: let them be able and upright, straightforward and gentle in speech, humble and not conceited, contented and easily satisfied.',
              },
              {
                ref: 'Snp 1.8.4',
                text: 'May all beings be happy. May all beings be safe. May all beings be healthy. May all beings live with ease.',
              },
              {
                ref: 'Snp 1.8.6',
                text: 'Whatever living beings there may be — whether they are weak or strong, omitting none, the great or the mighty, medium, short, or small, the seen and the unseen, those living near and far away, those born and to-be-born — may all beings be happy.',
              },
              {
                ref: 'Snp 1.8.7',
                text: 'Let none deceive another, or despise any being in any state. Let none through anger or ill-will wish harm upon another.',
              },
              {
                ref: 'Snp 1.8.8',
                text: 'Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings; radiating kindness over the entire world.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Snp 1.8',
            text: 'Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings; radiating kindness over the entire world — spreading upwards to the skies, and downwards to the depths, outwards and unbounded, freed from hatred and ill-will.',
          },
        ],
      },

      {
        id: 'mangala-sutta',
        name: 'Mangala Sutta (Discourse on Blessings)',
        originalName: 'Mangala Sutta',
        chapters: 1,
        summary:
          'A beloved protective sutta in which the Buddha enumerates the highest blessings for a well-lived life, from practical social ethics to the highest spiritual attainments. It is recited daily in Theravada countries.',
        themes: [
          'blessings',
          'ethics',
          'right livelihood',
          'wisdom',
          'protection',
          'spiritual progress',
        ],
        sections: [
          {
            chapter: 'Snp 2.4',
            title: 'The Highest Blessings',
            summary:
              'A comprehensive listing of the highest blessings, progressing from social and ethical conduct to the deepest spiritual attainments.',
            keyVerses: [
              {
                ref: 'Snp 2.4.3',
                text: 'Not to associate with fools, to associate with the wise, and to honor those who are worthy of honor — this is the highest blessing.',
              },
              {
                ref: 'Snp 2.4.4',
                text: 'To reside in a suitable locality, to have done meritorious actions in the past, and to set oneself in the right course — this is the highest blessing.',
              },
              {
                ref: 'Snp 2.4.5',
                text: 'Much learning, skill in handicraft, a highly trained discipline, and pleasant speech — this is the highest blessing.',
              },
              {
                ref: 'Snp 2.4.9',
                text: 'Patience, obedience, contact with recluses, and timely discussion on the Dhamma — this is the highest blessing.',
              },
              {
                ref: 'Snp 2.4.12',
                text: 'A mind unshaken when touched by the worldly conditions, sorrowless, stainless, and secure — this is the highest blessing.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Snp 2.4',
            text: 'Those who have fulfilled all these are everywhere unconquered, attain happiness everywhere — to them these are the highest blessings.',
          },
        ],
      },

      {
        id: 'sigalovada-sutta',
        name: 'Sigalovada Sutta (Discourse to Sigala on Lay Ethics)',
        originalName: 'Sigalovada Sutta',
        chapters: 1,
        summary:
          'Known as "the layperson\'s code of discipline," this sutta provides comprehensive ethical guidance for householders, covering duties in human relationships: parents and children, teachers and pupils, husbands and wives, friends and companions, employers and employees, and lay people and religious teachers.',
        themes: [
          'lay ethics',
          'social relations',
          'household life',
          'duties',
          'reciprocal responsibilities',
        ],
        sections: [
          {
            chapter: 'DN 31.1',
            title: 'The Six Directions',
            summary:
              'The Buddha reinterprets the ritual of worshipping the six directions as the fulfillment of duties in six key relationships.',
            keyVerses: [
              {
                ref: 'DN 31.2',
                text: 'The East represents parents. The South represents teachers. The West represents wife and children. The North represents friends and companions. The Nadir represents servants and workers. The Zenith represents ascetics and brahmins.',
              },
            ],
          },
          {
            chapter: 'DN 31.2',
            title: 'Avoiding Unwholesome Actions',
            summary:
              'The four defilements of action to be avoided, the four causes of evil action, and the six channels for dissipating wealth.',
            keyVerses: [
              {
                ref: 'DN 31.4',
                text: 'The wise and virtuous shine like a blazing fire. Like a bee collecting nectar without harming the flower, its color, or its scent, so a sage goes through a village.',
              },
              {
                ref: 'DN 31.5',
                text: 'These four defilements of action have been put away: one does no evil action motivated by desire, anger, ignorance, or fear.',
              },
            ],
          },
          {
            chapter: 'DN 31.3',
            title: 'Reciprocal Duties',
            summary:
              'Detailed exposition of mutual duties and responsibilities in each of the six relationships.',
            keyVerses: [
              {
                ref: 'DN 31.28',
                text: 'In five ways should a mother and father as the eastern direction be ministered to: "Having been supported by them I will support them, I will perform their duties for them, I will maintain the family tradition, I will make myself worthy of my inheritance, and after their death I will distribute gifts on their behalf."',
              },
              {
                ref: 'DN 31.32',
                text: 'In five ways should a wife as the western direction be ministered to by her husband: by being courteous to her, by not despising her, by being faithful to her, by handing over authority to her, by providing her with adornments.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'DN 31',
            text: 'The noble disciple, having put away the four defilements of action, not doing evil from the four causes, not following the six channels of dissipating wealth — thus guards the six directions.',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // 2. DHAMMAPADA
  // ──────────────────────────────────────────────
  {
    id: 'dhammapada',
    religionId: 'buddhism',
    name: 'Dhammapada',
    originalName: 'Dhammapada',
    language: 'Pali',
    description:
      'A collection of 423 verses in 26 chapters (vaggas), drawn from the Khuddaka Nikaya of the Pali Canon. The Dhammapada is the most widely read and best-known Buddhist scripture, containing concise, memorable teachings of the Buddha on ethics, mental discipline, and wisdom. Each verse is traditionally associated with a story illustrating the circumstances of its utterance.',
    totalBooks: 26,
    totalChapters: 26,
    totalVerses: 423,
    period: 'c. 3rd century BCE',
    onlineSource: {
      label: 'AccessToInsight.org',
      url: 'https://www.accesstoinsight.org/tipitaka/kn/dhp/',
    },
    books: [
      {
        id: 'dhp-yamaka-vagga',
        name: 'Yamaka Vagga (Pairs)',
        originalName: 'Yamakavagga',
        chapters: 1,
        summary:
          'The opening chapter presents teachings in contrasting pairs — the results of unwholesome versus wholesome mental states. It establishes the primacy of mind in shaping experience and destiny.',
        themes: ['mind', 'intention', 'karma', 'happiness', 'suffering'],
        sections: [
          {
            chapter: 1,
            title: 'Yamaka Vagga (Pairs)',
            summary:
              'Twenty verses on the power of mind and intention. Wholesome and unwholesome thoughts lead to happiness and suffering respectively.',
            keyVerses: [
              {
                ref: 'Dhp 1',
                text: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a corrupt mind, suffering follows, as the wheel follows the hoof of the ox.',
              },
              {
                ref: 'Dhp 2',
                text: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a serene mind, happiness follows, as a shadow that never leaves.',
              },
              {
                ref: 'Dhp 3',
                text: '"He abused me, he struck me, he overpowered me, he robbed me." Those who harbor such thoughts do not still their hatred.',
              },
              {
                ref: 'Dhp 5',
                text: 'Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 1',
            text: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a corrupt mind, suffering follows, as the wheel follows the hoof of the ox.',
          },
          {
            ref: 'Dhp 2',
            text: 'Mind is the forerunner of all actions. All deeds are led by mind, created by mind. If one speaks or acts with a serene mind, happiness follows, as a shadow that never leaves.',
          },
          {
            ref: 'Dhp 5',
            text: 'Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.',
          },
        ],
      },
      {
        id: 'dhp-appamada-vagga',
        name: 'Appamada Vagga (Heedfulness)',
        originalName: 'Appamadavagga',
        chapters: 1,
        summary:
          'Heedfulness (appamada) is praised as the root of all attainments. Diligence leads to the deathless; heedlessness leads to death.',
        themes: ['heedfulness', 'diligence', 'mindfulness', 'spiritual progress'],
        sections: [
          {
            chapter: 2,
            title: 'Appamada Vagga (Heedfulness)',
            summary:
              'Twelve verses extolling the virtue of heedfulness and warning against negligence in spiritual practice.',
            keyVerses: [
              {
                ref: 'Dhp 21',
                text: 'Heedfulness is the path to the deathless. Heedlessness is the path to death. The heedful do not die. The heedless are as if already dead.',
              },
              {
                ref: 'Dhp 25',
                text: 'By effort and heedfulness, discipline and self-mastery, let the wise one make for himself an island which no flood can overwhelm.',
              },
              {
                ref: 'Dhp 26',
                text: 'Fools, the unintelligent, give themselves over to heedlessness, but the wise one guards heedfulness as his greatest treasure.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 21',
            text: 'Heedfulness is the path to the deathless. Heedlessness is the path to death. The heedful do not die. The heedless are as if already dead.',
          },
        ],
      },
      {
        id: 'dhp-citta-vagga',
        name: 'Citta Vagga (Mind)',
        originalName: 'Cittavagga',
        chapters: 1,
        summary:
          'Verses on the nature of mind: its restlessness, its subtlety, and the value of training and guarding the mind.',
        themes: ['mind', 'mental discipline', 'mindfulness', 'self-control'],
        sections: [
          {
            chapter: 3,
            title: 'Citta Vagga (Mind)',
            summary: 'Eleven verses on the fickle, hard-to-restrain mind and the benefits of taming it.',
            keyVerses: [
              {
                ref: 'Dhp 33',
                text: 'The flickering, fickle mind, difficult to guard, difficult to control — the wise person straightens it as a fletcher straightens an arrow.',
              },
              {
                ref: 'Dhp 35',
                text: 'Hard to hold down, nimble, alighting wherever it likes: the mind. Its taming is good. A tamed mind brings happiness.',
              },
              {
                ref: 'Dhp 36',
                text: 'The mind is very hard to perceive, extremely subtle, and wanders at will. Let the wise person guard it; a guarded mind brings happiness.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 33',
            text: 'The flickering, fickle mind, difficult to guard, difficult to control — the wise person straightens it as a fletcher straightens an arrow.',
          },
        ],
      },
      {
        id: 'dhp-puppha-vagga',
        name: 'Puppha Vagga (Flowers)',
        originalName: 'Pupphavagga',
        chapters: 1,
        summary:
          'Using the imagery of flowers, these verses teach about the transience of beauty and life, the gathering of merit, and the fragrance of virtue.',
        themes: ['impermanence', 'virtue', 'merit', 'mindfulness'],
        sections: [
          {
            chapter: 4,
            title: 'Puppha Vagga (Flowers)',
            summary: 'Sixteen verses using floral metaphors to teach about impermanence and virtue.',
            keyVerses: [
              {
                ref: 'Dhp 44',
                text: 'Who shall overcome this earth, and the realm of Yama, and this world together with the realm of the devas? Who shall investigate the well-taught path of virtue, even as an expert garland-maker picks flowers?',
              },
              {
                ref: 'Dhp 47',
                text: 'The man who gathers flowers of sensual pleasure, whose mind is distracted — death carries him away as a great flood sweeps away a sleeping village.',
              },
              {
                ref: 'Dhp 54',
                text: 'The scent of flowers does not travel against the wind, nor that of sandalwood, or of incense; but the fragrance of the good pervades all directions.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 54',
            text: 'The scent of flowers does not travel against the wind, nor that of sandalwood, or of incense; but the fragrance of the good pervades all directions.',
          },
        ],
      },
      {
        id: 'dhp-bala-vagga',
        name: 'Bala Vagga (Fools)',
        originalName: 'Balavagga',
        chapters: 1,
        summary:
          'Verses describing the characteristics of the foolish — those who are heedless, unrestrained, and ignorant of the Dhamma — and the suffering that follows.',
        themes: ['foolishness', 'ignorance', 'suffering', 'consequences of heedlessness'],
        sections: [
          {
            chapter: 5,
            title: 'Bala Vagga (Fools)',
            summary: 'Sixteen verses on the nature and consequences of foolishness.',
            keyVerses: [
              {
                ref: 'Dhp 60',
                text: 'Long is the night to one who is awake; long is a mile to one who is tired; long is samsara to the foolish who do not know the true Dhamma.',
              },
              {
                ref: 'Dhp 61',
                text: 'If a traveler does not meet with one who is his better, or his equal, let him firmly keep to his solitary journey; there is no companionship with a fool.',
              },
              {
                ref: 'Dhp 62',
                text: '"These sons belong to me, and this wealth belongs to me," with such thoughts a fool is tormented. He himself does not belong to himself; how much less sons and wealth?',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 60',
            text: 'Long is the night to one who is awake; long is a mile to one who is tired; long is samsara to the foolish who do not know the true Dhamma.',
          },
        ],
      },
      {
        id: 'dhp-pandita-vagga',
        name: 'Pandita Vagga (The Wise)',
        originalName: 'Panditavagga',
        chapters: 1,
        summary:
          'Verses describing the qualities of the wise — those who admonish, instruct, and guide others on the path, and who are worthy of association.',
        themes: ['wisdom', 'guidance', 'association with the wise', 'self-improvement'],
        sections: [
          {
            chapter: 6,
            title: 'Pandita Vagga (The Wise)',
            summary: 'Fourteen verses on the characteristics and value of the wise.',
            keyVerses: [
              {
                ref: 'Dhp 76',
                text: 'Should one find a man who points out faults and who reproves, let one follow such a wise and sagacious person as one would a guide to hidden treasure. It is always better, and never worse, to cultivate such an association.',
              },
              {
                ref: 'Dhp 78',
                text: 'Do not associate with evil companions, do not seek the fellowship of the vile. Associate with good friends, seek the fellowship of noble persons.',
              },
              {
                ref: 'Dhp 81',
                text: 'Even as a solid rock is unshaken by the wind, so are the wise unshaken by praise or blame.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 76',
            text: 'Should one find a man who points out faults and who reproves, let one follow such a wise and sagacious person as one would a guide to hidden treasure.',
          },
        ],
      },
      {
        id: 'dhp-arahanta-vagga',
        name: 'Arahanta Vagga (The Arahant)',
        originalName: 'Arahantavagga',
        chapters: 1,
        summary:
          'Verses describing the qualities of the arahant — one who has attained full liberation, destroyed all defilements, and will not be reborn.',
        themes: ['liberation', 'arahantship', 'freedom', 'detachment'],
        sections: [
          {
            chapter: 7,
            title: 'Arahanta Vagga (The Arahant)',
            summary: 'Ten verses on the nature and qualities of the fully liberated person.',
            keyVerses: [
              {
                ref: 'Dhp 90',
                text: 'For him who has completed the journey, who is sorrowless, wholly set free, and rid of all bonds — for such a one there is no burning.',
              },
              {
                ref: 'Dhp 93',
                text: 'He whose taints are destroyed, who is not attached to food, whose object is the Void, the Unconditioned Freedom — his path, like that of birds in the air, cannot be traced.',
              },
              {
                ref: 'Dhp 95',
                text: 'Like the earth, a balanced and well-disciplined person resents not. He is like a pool, unsullied by mud. For such a balanced one there is no more journeying in samsara.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 90',
            text: 'For him who has completed the journey, who is sorrowless, wholly set free, and rid of all bonds — for such a one there is no burning.',
          },
        ],
      },
      {
        id: 'dhp-sahassa-vagga',
        name: 'Sahassa Vagga (Thousands)',
        originalName: 'Sahassavagga',
        chapters: 1,
        summary:
          'The value of a single meaningful word, verse, or moment of practice over a thousand empty ones. Quality of spiritual endeavor surpasses mere quantity.',
        themes: ['quality over quantity', 'meaningful practice', 'single words of truth'],
        sections: [
          {
            chapter: 8,
            title: 'Sahassa Vagga (Thousands)',
            summary: 'Sixteen verses on the superiority of quality over quantity in spiritual life.',
            keyVerses: [
              {
                ref: 'Dhp 100',
                text: 'Better than a thousand hollow words is one word that brings peace.',
              },
              {
                ref: 'Dhp 103',
                text: 'Though one may conquer a thousand times a thousand men in battle, yet he indeed is the noblest victor who conquers himself.',
              },
              {
                ref: 'Dhp 108',
                text: 'Whatever a man may sacrifice in this world as an offering or oblation for a whole year in order to gain merit — the whole of it is not worth a quarter of the reverence given to the upright.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 100',
            text: 'Better than a thousand hollow words is one word that brings peace.',
          },
          {
            ref: 'Dhp 103',
            text: 'Though one may conquer a thousand times a thousand men in battle, yet he indeed is the noblest victor who conquers himself.',
          },
        ],
      },
      {
        id: 'dhp-papa-vagga',
        name: 'Papa Vagga (Evil)',
        originalName: 'Papavagga',
        chapters: 1,
        summary:
          'Verses on the nature of evil actions and their consequences, and the urgency of doing good before it is too late.',
        themes: ['evil', 'karma', 'urgency', 'consequences of action'],
        sections: [
          {
            chapter: 9,
            title: 'Papa Vagga (Evil)',
            summary: 'Thirteen verses on avoiding evil and the urgency of wholesome action.',
            keyVerses: [
              {
                ref: 'Dhp 116',
                text: 'Make haste in doing good; restrain your mind from evil. He who is slow in doing good, his mind delights in evil.',
              },
              {
                ref: 'Dhp 117',
                text: 'If a man commits evil, let him not do it again and again. Let him not find pleasure in it. Painful is the accumulation of evil.',
              },
              {
                ref: 'Dhp 121',
                text: 'Think not lightly of evil, saying, "It will not come to me." Drop by drop is the water pot filled. Likewise, the fool, gathering it little by little, fills himself with evil.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 121',
            text: 'Think not lightly of evil, saying, "It will not come to me." Drop by drop is the water pot filled. Likewise, the fool, gathering it little by little, fills himself with evil.',
          },
        ],
      },
      {
        id: 'dhp-danda-vagga',
        name: 'Danda Vagga (Violence)',
        originalName: 'Dandavagga',
        chapters: 1,
        summary:
          'Verses on the fear of violence and punishment, the sanctity of life, and the virtue of non-harming (ahimsa).',
        themes: ['non-violence', 'compassion', 'fear of punishment', 'sanctity of life'],
        sections: [
          {
            chapter: 10,
            title: 'Danda Vagga (Violence)',
            summary: 'Seventeen verses on non-violence and the universal desire for happiness.',
            keyVerses: [
              {
                ref: 'Dhp 129',
                text: 'All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.',
              },
              {
                ref: 'Dhp 130',
                text: 'All tremble at violence; life is dear to all. Putting oneself in the place of another, one should not kill nor cause another to kill.',
              },
              {
                ref: 'Dhp 131',
                text: 'He who, seeking his own happiness, inflicts violence on beings who also desire happiness, will not find happiness after death.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 129',
            text: 'All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.',
          },
        ],
      },
      {
        id: 'dhp-jara-vagga',
        name: 'Jara Vagga (Old Age)',
        originalName: 'Jaravagga',
        chapters: 1,
        summary:
          'Verses reflecting on the inevitability of aging and death, and the urgency of practicing the Dhamma before it is too late.',
        themes: ['aging', 'impermanence', 'death', 'urgency of practice'],
        sections: [
          {
            chapter: 11,
            title: 'Jara Vagga (Old Age)',
            summary: 'Eleven verses on the reality of aging, decay, and the urgency of the spiritual path.',
            keyVerses: [
              {
                ref: 'Dhp 146',
                text: 'What laughter, why joy, when the world is ever burning? Shrouded in darkness, will you not seek a light?',
              },
              {
                ref: 'Dhp 147',
                text: 'Behold this painted body, a body full of wounds, put together, sickly, full of many thoughts in which there is neither permanence nor stability.',
              },
              {
                ref: 'Dhp 148',
                text: 'Fully worn out is this body, a nest of disease, and fragile. This heap of corruption breaks to pieces; life indeed ends in death.',
              },
              {
                ref: 'Dhp 153',
                text: 'Through many a birth in samsara have I wandered in vain, seeking the builder of this house. Repeated birth is indeed suffering!',
              },
              {
                ref: 'Dhp 154',
                text: 'O house-builder, you are seen! You will not build this house again. For your rafters are broken and your ridgepole is destroyed. My mind has reached the Unconditioned; I have attained the destruction of craving.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 153',
            text: 'Through many a birth in samsara have I wandered in vain, seeking the builder of this house. Repeated birth is indeed suffering!',
          },
          {
            ref: 'Dhp 154',
            text: 'O house-builder, you are seen! You will not build this house again. For your rafters are broken and your ridgepole is destroyed. My mind has reached the Unconditioned; I have attained the destruction of craving.',
          },
        ],
      },
      {
        id: 'dhp-atta-vagga',
        name: 'Atta Vagga (Self)',
        originalName: 'Attavagga',
        chapters: 1,
        summary:
          'Verses on self-reliance, self-discipline, and the importance of mastering oneself before teaching others.',
        themes: ['self-mastery', 'self-reliance', 'self-discipline', 'personal responsibility'],
        sections: [
          {
            chapter: 12,
            title: 'Atta Vagga (Self)',
            summary: 'Ten verses on self-mastery and personal responsibility.',
            keyVerses: [
              {
                ref: 'Dhp 157',
                text: 'If one holds oneself dear, one should diligently watch oneself. Let the wise man keep vigil during any of the three watches of the night.',
              },
              {
                ref: 'Dhp 159',
                text: 'One should first establish oneself in what is proper and then instruct others. Such a wise man will not be reproached.',
              },
              {
                ref: 'Dhp 160',
                text: 'One truly is the protector of oneself; who else could the protector be? With oneself fully controlled, one gains a mastery that is hard to gain.',
              },
              {
                ref: 'Dhp 165',
                text: 'By oneself is evil done; by oneself is one defiled. By oneself is evil left undone; by oneself is one made pure. Purity and impurity depend on oneself; no one can purify another.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 160',
            text: 'One truly is the protector of oneself; who else could the protector be? With oneself fully controlled, one gains a mastery that is hard to gain.',
          },
          {
            ref: 'Dhp 165',
            text: 'By oneself is evil done; by oneself is one defiled. By oneself is evil left undone; by oneself is one made pure. Purity and impurity depend on oneself; no one can purify another.',
          },
        ],
      },
      {
        id: 'dhp-loka-vagga',
        name: 'Loka Vagga (The World)',
        originalName: 'Lokavagga',
        chapters: 1,
        summary:
          'Verses on transcending the world, seeing through its illusions, and not being attached to worldly things.',
        themes: ['world', 'illusion', 'transcendence', 'non-attachment'],
        sections: [
          {
            chapter: 13,
            title: 'Loka Vagga (The World)',
            summary: 'Twelve verses on seeing through the illusions of the world.',
            keyVerses: [
              {
                ref: 'Dhp 170',
                text: 'Look upon the world as a bubble, look upon it as a mirage. The king of death sees not him who thus looks down upon the world.',
              },
              {
                ref: 'Dhp 174',
                text: 'Blind is this world. Few are those who clearly see. As birds escape from a net, few go to a blissful state.',
              },
              {
                ref: 'Dhp 178',
                text: 'Better than sole sovereignty over the earth, better than going to heaven, better than lordship over all the worlds, is the fruit of stream-entry.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 170',
            text: 'Look upon the world as a bubble, look upon it as a mirage. The king of death sees not him who thus looks down upon the world.',
          },
        ],
      },
      {
        id: 'dhp-buddha-vagga',
        name: 'Buddha Vagga (The Buddha)',
        originalName: 'Buddhavagga',
        chapters: 1,
        summary:
          'Verses on the Buddha, his qualities, his awakening, and the rareness of encountering a Buddha in the world.',
        themes: ['the Buddha', 'awakening', 'refuge', 'rarity of Buddhas'],
        sections: [
          {
            chapter: 14,
            title: 'Buddha Vagga (The Buddha)',
            summary:
              'Eighteen verses on the qualities of the Buddha and the rarity of his appearance in the world.',
            keyVerses: [
              {
                ref: 'Dhp 183',
                text: 'Not to do any evil, to cultivate good, to purify one\'s mind — this is the teaching of the Buddhas.',
              },
              {
                ref: 'Dhp 184',
                text: 'Patient endurance is the highest austerity. Nibbana is supreme, say the Buddhas. He is not one gone forth who harms another; nor is he an ascetic who oppresses others.',
              },
              {
                ref: 'Dhp 190',
                text: 'He who has gone for refuge to the Buddha, the Dhamma, and the Sangha, penetrates with transcendental wisdom the Four Noble Truths.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 183',
            text: 'Not to do any evil, to cultivate good, to purify one\'s mind — this is the teaching of the Buddhas.',
          },
        ],
      },
      {
        id: 'dhp-sukha-vagga',
        name: 'Sukha Vagga (Happiness)',
        originalName: 'Sukhavagga',
        chapters: 1,
        summary:
          'Verses on the nature of true happiness, which is found not in worldly pleasures but in freedom from hatred, disease, craving, and attachment.',
        themes: ['happiness', 'contentment', 'peace', 'freedom from craving'],
        sections: [
          {
            chapter: 15,
            title: 'Sukha Vagga (Happiness)',
            summary:
              'Twelve verses on the nature of true happiness and where it is to be found.',
            keyVerses: [
              {
                ref: 'Dhp 197',
                text: 'Let us live happily then, not hating those who hate us. Among men who hate us let us dwell free from hatred.',
              },
              {
                ref: 'Dhp 200',
                text: 'Let us live happily then, free from ailments among the ailing. Among men who are ailing let us dwell free from ailments.',
              },
              {
                ref: 'Dhp 202',
                text: 'There is no fire like passion, no evil like hatred, no suffering like the aggregates of existence, no happiness higher than peace.',
              },
              {
                ref: 'Dhp 203',
                text: 'Hunger is the worst disease; conditioned things the worst suffering. Knowing this as it really is, the wise realize Nibbana, the highest happiness.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 202',
            text: 'There is no fire like passion, no evil like hatred, no suffering like the aggregates of existence, no happiness higher than peace.',
          },
          {
            ref: 'Dhp 203',
            text: 'Hunger is the worst disease; conditioned things the worst suffering. Knowing this as it really is, the wise realize Nibbana, the highest happiness.',
          },
        ],
      },
      {
        id: 'dhp-piya-vagga',
        name: 'Piya Vagga (Affection)',
        originalName: 'Piyavagga',
        chapters: 1,
        summary:
          'Verses on the dangers of attachment and affection as sources of sorrow and fear, and the peace that comes from freedom from attachment.',
        themes: ['attachment', 'sorrow', 'fear', 'letting go'],
        sections: [
          {
            chapter: 16,
            title: 'Piya Vagga (Affection)',
            summary: 'Twelve verses on the sorrow and fear that arise from attachment.',
            keyVerses: [
              {
                ref: 'Dhp 210',
                text: 'Seek no intimacy with the beloved and also not with the unloved, for not to see the beloved and to see the unloved, both are painful.',
              },
              {
                ref: 'Dhp 211',
                text: 'Therefore, hold nothing dear, for separation from the dear is painful. There are no bonds for those to whom nothing is dear or not dear.',
              },
              {
                ref: 'Dhp 212',
                text: 'From affection springs grief, from affection springs fear. For one who is wholly free from affection there is no grief, much less fear.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 212',
            text: 'From affection springs grief, from affection springs fear. For one who is wholly free from affection there is no grief, much less fear.',
          },
        ],
      },
      {
        id: 'dhp-kodha-vagga',
        name: 'Kodha Vagga (Anger)',
        originalName: 'Kodhavagga',
        chapters: 1,
        summary:
          'Verses on the destructive nature of anger and the virtue of forbearance, patience, and self-control.',
        themes: ['anger', 'patience', 'forbearance', 'self-control'],
        sections: [
          {
            chapter: 17,
            title: 'Kodha Vagga (Anger)',
            summary: 'Fourteen verses on overcoming anger through patience and forbearance.',
            keyVerses: [
              {
                ref: 'Dhp 222',
                text: 'He who holds back rising anger like a rolling chariot, him I call a real driver; other people are but holding the reins.',
              },
              {
                ref: 'Dhp 223',
                text: 'Overcome anger by non-anger, overcome evil by good. Overcome the miser by giving, overcome the liar by truth.',
              },
              {
                ref: 'Dhp 231',
                text: 'Guard against anger erupting in body; be restrained with the body. Letting go of bodily misconduct, practice good conduct with the body.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 223',
            text: 'Overcome anger by non-anger, overcome evil by good. Overcome the miser by giving, overcome the liar by truth.',
          },
        ],
      },
      {
        id: 'dhp-mala-vagga',
        name: 'Mala Vagga (Impurity)',
        originalName: 'Malavagga',
        chapters: 1,
        summary:
          'Verses on the impurities (taints) of the mind and the methods for their removal.',
        themes: ['impurity', 'purification', 'moral conduct', 'self-reflection'],
        sections: [
          {
            chapter: 18,
            title: 'Mala Vagga (Impurity)',
            summary: 'Twenty-one verses on the taints of the mind and their removal.',
            keyVerses: [
              {
                ref: 'Dhp 239',
                text: 'By degrees, little by little, from moment to moment, a wise man removes his own impurities, as a smith removes the dross from silver.',
              },
              {
                ref: 'Dhp 240',
                text: 'As rust arising from iron eats away the base from which it arises, even so, his own deeds lead the transgressor to states of woe.',
              },
              {
                ref: 'Dhp 243',
                text: 'The greatest of taints is ignorance. Destroy this one taint and become taintless, O bhikkhus!',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 239',
            text: 'By degrees, little by little, from moment to moment, a wise man removes his own impurities, as a smith removes the dross from silver.',
          },
        ],
      },
      {
        id: 'dhp-dhammattha-vagga',
        name: 'Dhammattha Vagga (The Just)',
        originalName: 'Dhammatthavagga',
        chapters: 1,
        summary:
          'Verses on what constitutes a just and righteous person — not one who judges hastily, but one who is guided by the Dhamma.',
        themes: ['justice', 'righteousness', 'discernment', 'impartiality'],
        sections: [
          {
            chapter: 19,
            title: 'Dhammattha Vagga (The Just)',
            summary:
              'Seventeen verses on justice, impartiality, and what it truly means to be established in the Dhamma.',
            keyVerses: [
              {
                ref: 'Dhp 256',
                text: 'He who arbitrates a case by force does not thereby become just. But the wise man is he who carefully discriminates between right and wrong.',
              },
              {
                ref: 'Dhp 258',
                text: 'One is not wise because one speaks much. He who is peaceable, friendly, and fearless is called wise.',
              },
              {
                ref: 'Dhp 261',
                text: 'Not by grey hair does one become an elder. Ripe in age, one is called "old in vain."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 256',
            text: 'He who arbitrates a case by force does not thereby become just. But the wise man is he who carefully discriminates between right and wrong.',
          },
        ],
      },
      {
        id: 'dhp-magga-vagga',
        name: 'Magga Vagga (The Path)',
        originalName: 'Maggavagga',
        chapters: 1,
        summary:
          'Verses on the Noble Eightfold Path and the way leading to liberation, insight, and the end of suffering.',
        themes: ['Eightfold Path', 'insight', 'liberation', 'wisdom'],
        sections: [
          {
            chapter: 20,
            title: 'Magga Vagga (The Path)',
            summary: 'Seventeen verses on the path to liberation.',
            keyVerses: [
              {
                ref: 'Dhp 273',
                text: 'Of all the paths the Eightfold Path is the best; of all the truths the Four Noble Truths are the best; of all things passionlessness is the best; of men the Seeing One (the Buddha) is the best.',
              },
              {
                ref: 'Dhp 274',
                text: 'This is the only path; there is none other for the purification of insight. Follow this path, and Mara will be bewildered.',
              },
              {
                ref: 'Dhp 276',
                text: 'You yourselves must strive; the Buddhas only point the way. Those meditative ones who tread the path are released from the bonds of Mara.',
              },
              {
                ref: 'Dhp 277',
                text: '"All conditioned things are impermanent" — when one sees this with wisdom, one turns away from suffering. This is the path to purification.',
              },
              {
                ref: 'Dhp 278',
                text: '"All conditioned things are unsatisfactory" — when one sees this with wisdom, one turns away from suffering. This is the path to purification.',
              },
              {
                ref: 'Dhp 279',
                text: '"All things are not-self" — when one sees this with wisdom, one turns away from suffering. This is the path to purification.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 276',
            text: 'You yourselves must strive; the Buddhas only point the way. Those meditative ones who tread the path are released from the bonds of Mara.',
          },
          {
            ref: 'Dhp 277',
            text: '"All conditioned things are impermanent" — when one sees this with wisdom, one turns away from suffering. This is the path to purification.',
          },
          {
            ref: 'Dhp 278',
            text: '"All conditioned things are unsatisfactory" — when one sees this with wisdom, one turns away from suffering. This is the path to purification.',
          },
          {
            ref: 'Dhp 279',
            text: '"All things are not-self" — when one sees this with wisdom, one turns away from suffering. This is the path to purification.',
          },
        ],
      },
      {
        id: 'dhp-pakinnaka-vagga',
        name: 'Pakinnaka Vagga (Miscellaneous)',
        originalName: 'Pakinnakavagga',
        chapters: 1,
        summary:
          'A diverse collection of verses covering various topics including the value of the Dhamma, the rarity of human birth, and the importance of right conduct.',
        themes: ['miscellaneous teachings', 'Dhamma', 'human birth', 'virtue'],
        sections: [
          {
            chapter: 21,
            title: 'Pakinnaka Vagga (Miscellaneous)',
            summary: 'Sixteen verses on various topics of spiritual importance.',
            keyVerses: [
              {
                ref: 'Dhp 290',
                text: 'If by renouncing a lesser happiness one may realize a greater happiness, let the wise man renounce the lesser, having regard for the greater.',
              },
              {
                ref: 'Dhp 291',
                text: 'He who seeks happiness by hurting those who seek happiness will never find happiness.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 290',
            text: 'If by renouncing a lesser happiness one may realize a greater happiness, let the wise man renounce the lesser, having regard for the greater.',
          },
        ],
      },
      {
        id: 'dhp-niraya-vagga',
        name: 'Niraya Vagga (Hell)',
        originalName: 'Nirayavagga',
        chapters: 1,
        summary:
          'Verses on the consequences of evil conduct — false speech, hypocrisy, and wrongdoing — which lead to states of woe.',
        themes: ['hell', 'consequences', 'false speech', 'hypocrisy'],
        sections: [
          {
            chapter: 22,
            title: 'Niraya Vagga (Hell)',
            summary: 'Fourteen verses on the consequences of evil conduct.',
            keyVerses: [
              {
                ref: 'Dhp 306',
                text: 'He who speaks untruth goes to a state of woe, and also he who having done something says "I did not do it." Both after death become equal; they are men of base deeds in the next world.',
              },
              {
                ref: 'Dhp 311',
                text: 'As a blade of grass, wrongly grasped, cuts the hand, even so, the ascetic life wrongly practiced drags one to a state of woe.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 306',
            text: 'He who speaks untruth goes to a state of woe, and also he who having done something says "I did not do it."',
          },
        ],
      },
      {
        id: 'dhp-naga-vagga',
        name: 'Naga Vagga (The Elephant)',
        originalName: 'Nagavagga',
        chapters: 1,
        summary:
          'Using the metaphor of the elephant, these verses teach endurance, self-control, and patient forbearance in the face of abuse.',
        themes: ['endurance', 'patience', 'self-control', 'forbearance'],
        sections: [
          {
            chapter: 23,
            title: 'Naga Vagga (The Elephant)',
            summary: 'Fourteen verses using the elephant as a metaphor for noble endurance.',
            keyVerses: [
              {
                ref: 'Dhp 320',
                text: 'As an elephant in the battlefield withstands arrows shot from bows all around, even so shall I endure abuse. There are many, indeed, who lack virtue.',
              },
              {
                ref: 'Dhp 327',
                text: 'Delight in heedfulness! Guard well your thoughts! Draw yourself out of this bog of evil, even as an elephant draws himself out of the mud.',
              },
              {
                ref: 'Dhp 328',
                text: 'If for company you find a wise and prudent friend who leads a good life, you should, overcoming all obstacles, keep his company joyfully and mindfully.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 320',
            text: 'As an elephant in the battlefield withstands arrows shot from bows all around, even so shall I endure abuse.',
          },
        ],
      },
      {
        id: 'dhp-tanha-vagga',
        name: 'Tanha Vagga (Craving)',
        originalName: 'Tanhavagga',
        chapters: 1,
        summary:
          'Verses on the destructive power of craving (tanha) and the freedom that comes from its abandonment.',
        themes: ['craving', 'desire', 'attachment', 'liberation from craving'],
        sections: [
          {
            chapter: 24,
            title: 'Tanha Vagga (Craving)',
            summary: 'Twenty-six verses on the nature of craving and its cessation.',
            keyVerses: [
              {
                ref: 'Dhp 334',
                text: 'The craving of one given to heedless living grows like a creeper. Like the monkey seeking fruits in the forest, he leaps from life to life.',
              },
              {
                ref: 'Dhp 335',
                text: 'Whoever is overcome by this wretched and sticky craving, his sorrows grow like grass after the rains.',
              },
              {
                ref: 'Dhp 336',
                text: 'But whoever overcomes this wretched craving, so difficult to overcome, from him sorrows fall away like water drops from a lotus leaf.',
              },
              {
                ref: 'Dhp 338',
                text: 'Just as a tree, though cut down, sprouts up again if its roots remain uncut and firm, even so, until the craving that lies dormant is rooted out, suffering springs up again and again.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 336',
            text: 'But whoever overcomes this wretched craving, so difficult to overcome, from him sorrows fall away like water drops from a lotus leaf.',
          },
        ],
      },
      {
        id: 'dhp-bhikkhu-vagga',
        name: 'Bhikkhu Vagga (The Monk)',
        originalName: 'Bhikkhuvagga',
        chapters: 1,
        summary:
          'Verses describing the ideal qualities and conduct of a Buddhist monk — restraint, contentment, mindfulness, and devotion to the practice.',
        themes: ['monastic life', 'restraint', 'contentment', 'mindfulness'],
        sections: [
          {
            chapter: 25,
            title: 'Bhikkhu Vagga (The Monk)',
            summary: 'Twenty-three verses on the qualities of the ideal monk.',
            keyVerses: [
              {
                ref: 'Dhp 360',
                text: 'Good is restraint of the eye. Good is restraint of the ear. Good is restraint of the nose. Good is restraint of the tongue.',
              },
              {
                ref: 'Dhp 361',
                text: 'Good is restraint in body. Good is restraint in speech. Good is restraint in mind. Good is restraint in everything. The bhikkhu, restrained in all things, is freed from all suffering.',
              },
              {
                ref: 'Dhp 362',
                text: 'He who is controlled in hand, controlled in foot, controlled in speech, and well-controlled in mind, who delights in inward development, who is collected, solitary, and content — him they call a bhikkhu.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 362',
            text: 'He who is controlled in hand, controlled in foot, controlled in speech, and well-controlled in mind, who delights in inward development, who is collected, solitary, and content — him they call a bhikkhu.',
          },
        ],
      },
      {
        id: 'dhp-brahmana-vagga',
        name: 'Brahmana Vagga (The Holy Man)',
        originalName: 'Brahmanavagga',
        chapters: 1,
        summary:
          'The final and longest chapter redefines the term "brahmana" (holy man) — not by birth or caste but by spiritual attainment, purity, and liberation.',
        themes: ['spiritual attainment', 'caste', 'true holiness', 'liberation'],
        sections: [
          {
            chapter: 26,
            title: 'Brahmana Vagga (The Holy Man)',
            summary:
              'Forty-one verses redefining true holiness as spiritual attainment rather than birth or ritual.',
            keyVerses: [
              {
                ref: 'Dhp 383',
                text: 'Exert yourself, O brahmana! Cut off the stream of craving and discard sense desires. Having known the destruction of the conditioned, you are a knower of the Uncreated, O brahmana.',
              },
              {
                ref: 'Dhp 387',
                text: 'The sun shines by day, the moon shines by night. The warrior shines in armor, the brahmana shines in meditation. But the Buddha shines resplendent all day and night.',
              },
              {
                ref: 'Dhp 393',
                text: 'Not by matted hair, not by lineage, not by birth does one become a brahmana. But the one in whom there is truth and righteousness, he is blessed, he is a brahmana.',
              },
              {
                ref: 'Dhp 423',
                text: 'He who knows his former lives and sees the heavens and the states of woe, who has reached the end of births, who is a sage of perfected knowledge, and who has accomplished all that is to be accomplished — him do I call a brahmana.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Dhp 393',
            text: 'Not by matted hair, not by lineage, not by birth does one become a brahmana. But the one in whom there is truth and righteousness, he is blessed, he is a brahmana.',
          },
          {
            ref: 'Dhp 423',
            text: 'He who knows his former lives and sees the heavens and the states of woe, who has reached the end of births, who is a sage of perfected knowledge, and who has accomplished all that is to be accomplished — him do I call a brahmana.',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // 3. HEART SUTRA (MAHAYANA)
  // ──────────────────────────────────────────────
  {
    id: 'heart-sutra',
    religionId: 'buddhism',
    name: 'Heart Sutra',
    originalName: 'Prajnaparamita Hridaya Sutra',
    language: 'Sanskrit (with Chinese and Tibetan translations)',
    description:
      'The Heart Sutra is the most frequently recited and studied text in all of Mahayana Buddhism. In approximately 260 Chinese characters (in its most popular version), it condenses the vast Prajnaparamita literature into its essential teaching: the emptiness (sunyata) of all phenomena. It is chanted daily in Zen, Tibetan, and other Mahayana traditions worldwide.',
    totalBooks: 1,
    totalChapters: 'Single text',
    totalVerses: 'Approximately 14 verses in standard recitation',
    period: 'c. 1st century CE (earliest Prajnaparamita); Heart Sutra form c. 4th–7th century CE',
    onlineSource: {
      label: 'BuddhaNet',
      url: 'https://www.buddhanet.net/',
    },
    books: [
      {
        id: 'heart-sutra-main',
        name: 'Heart of the Perfection of Wisdom',
        originalName: 'Prajnaparamita Hridaya',
        chapters: 1,
        summary:
          'The essence of the Perfection of Wisdom teaching, in which Avalokiteshvara Bodhisattva reveals to Shariputra that all five aggregates are empty of inherent existence, and that in emptiness there is no form, no feeling, no perception, no formation, no consciousness — and therefore no suffering, no origin, no cessation, no path, and no attainment.',
        themes: [
          'emptiness',
          'sunyata',
          'Prajnaparamita',
          'five aggregates',
          'form and emptiness',
          'non-duality',
        ],
        sections: [
          {
            chapter: 1,
            title: 'Setting and Opening',
            summary:
              'The Buddha enters samadhi on Vulture Peak. Avalokiteshvara, practicing the deep Prajnaparamita, sees that the five aggregates are all empty.',
            keyVerses: [
              {
                ref: 'Heart Sutra 1',
                text: 'Avalokiteshvara Bodhisattva, when practicing deeply the Prajnaparamita, perceived that all five aggregates are empty, and was saved from all suffering and distress.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'Form is Emptiness',
            summary:
              'The central teaching: form is not different from emptiness, and emptiness is not different from form. The same is true of feelings, perceptions, mental formations, and consciousness.',
            keyVerses: [
              {
                ref: 'Heart Sutra 2',
                text: 'Shariputra, form does not differ from emptiness; emptiness does not differ from form. That which is form is emptiness; that which is emptiness is form. The same is true of feelings, perceptions, mental formations, and consciousness.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Characteristics of Emptiness',
            summary:
              'In emptiness there is no arising, no ceasing, no defilement, no purity, no increase, no decrease.',
            keyVerses: [
              {
                ref: 'Heart Sutra 3',
                text: 'Shariputra, all dharmas are marked with emptiness. They are neither produced nor destroyed, neither defiled nor pure, neither increasing nor decreasing.',
              },
            ],
          },
          {
            chapter: 4,
            title: 'Negation of All Categories',
            summary:
              'In emptiness there are no sense organs, no sense objects, no sense consciousnesses, no ignorance and no ending of ignorance, no suffering and no end of suffering, no path, no wisdom, and no attainment.',
            keyVerses: [
              {
                ref: 'Heart Sutra 4',
                text: 'Therefore, in emptiness there is no form, no feeling, no perception, no mental formations, no consciousness; no eyes, no ears, no nose, no tongue, no body, no mind; no color, no sound, no smell, no taste, no touch, no object of mind; no realm of eyes and so forth until no realm of mind-consciousness.',
              },
              {
                ref: 'Heart Sutra 5',
                text: 'There is no ignorance, and no extinction of ignorance, and so forth until there is no old age and death, and no extinction of old age and death. There is no suffering, no origination, no stopping, no path, no cognition, also no attainment with nothing to attain.',
              },
            ],
          },
          {
            chapter: 5,
            title: 'Liberation Through Prajnaparamita',
            summary:
              'Because bodhisattvas rely on Prajnaparamita, their minds are without hindrance. Without hindrance, there is no fear. Far beyond all inverted views, they reach ultimate Nirvana.',
            keyVerses: [
              {
                ref: 'Heart Sutra 6',
                text: 'The Bodhisattva depends on Prajnaparamita, and the mind is no hindrance. Without any hindrance, no fears exist. Far apart from every perverted view, one dwells in Nirvana.',
              },
              {
                ref: 'Heart Sutra 7',
                text: 'In the three worlds, all Buddhas depend on Prajnaparamita, and attain Anuttara Samyak Sambodhi — unsurpassed, complete, perfect Enlightenment.',
              },
            ],
          },
          {
            chapter: 6,
            title: 'The Great Mantra',
            summary:
              'The Prajnaparamita is proclaimed as the great mantra, the mantra of great wisdom, the unsurpassed mantra, the unequaled mantra, which removes all suffering.',
            keyVerses: [
              {
                ref: 'Heart Sutra 8',
                text: 'Therefore, know that Prajnaparamita is the great transcendent mantra, is the great bright mantra, is the utmost mantra, is the supreme mantra, which is able to relieve all suffering and is true, not false.',
              },
              {
                ref: 'Heart Sutra 9',
                text: 'So proclaim the Prajnaparamita mantra, proclaim the mantra which says: Gate, gate, paragate, parasamgate, bodhi svaha! (Gone, gone, gone beyond, gone altogether beyond, O what an awakening, all hail!)',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Heart Sutra',
            text: 'Form does not differ from emptiness; emptiness does not differ from form. That which is form is emptiness; that which is emptiness is form.',
          },
          {
            ref: 'Heart Sutra',
            text: 'Gate, gate, paragate, parasamgate, bodhi svaha!',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // 4. LOTUS SUTRA (MAHAYANA)
  // ──────────────────────────────────────────────
  {
    id: 'lotus-sutra',
    religionId: 'buddhism',
    name: 'Lotus Sutra',
    originalName: 'Saddharma Pundarika Sutra',
    language: 'Sanskrit (with Chinese and Tibetan translations)',
    description:
      'One of the most influential and venerated Mahayana sutras, the Lotus Sutra proclaims the One Vehicle (Ekayana) — that all beings are destined for Buddhahood. It introduces the concept of "skillful means" (upaya), reveals the eternal nature of the Buddha, and contains famous parables that have shaped East Asian Buddhism profoundly, particularly the Tiantai, Nichiren, and Tendai traditions.',
    totalBooks: 28,
    totalChapters: 28,
    totalVerses: 'Prose and verse sections throughout 28 chapters',
    period: 'c. 1st century BCE – 2nd century CE',
    onlineSource: {
      label: 'BDK America (Taisho Tripitaka translations)',
      url: 'https://www.bdkamerica.org/',
    },
    books: [
      {
        id: 'lotus-ch1',
        name: 'Chapter 1: Introduction',
        originalName: 'Nidana-parivarta',
        chapters: 1,
        summary:
          'At Vulture Peak, the Buddha emits a ray of light from between his eyebrows, illuminating eighteen thousand worlds. Maitreya Bodhisattva questions Manjushri about the meaning of this sign. Manjushri recalls a past Buddha who performed the same sign before preaching the Lotus Sutra.',
        themes: ['cosmic vision', 'prelude', 'assembly of beings', 'light'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 1',
            text: 'At that time the World-Honored One, surrounded and attended by the four kinds of believers, received offerings and was honored, praised, and revered. For the sake of the bodhisattvas he preached the great vehicle sutra.',
          },
        ],
      },
      {
        id: 'lotus-ch2',
        name: 'Chapter 2: Expedient Means',
        originalName: 'Upaya-kausalya-parivarta',
        chapters: 1,
        summary:
          'The central chapter: the Buddha reveals that his previous teachings of three vehicles (Shravakayana, Pratyekabuddhayana, Bodhisattvayana) were skillful means (upaya) to guide beings according to their capacities. In reality there is only One Vehicle (Ekayana), and all beings will attain Buddhahood.',
        themes: ['skillful means', 'One Vehicle', 'Ekayana', 'universal Buddhahood'],
        sections: [
          {
            chapter: 2,
            title: 'Revelation of the One Vehicle',
            summary:
              'The Buddha declares that the various teachings were expedient means, and that the true purpose of all Buddhas is to lead all beings to supreme Buddhahood.',
            keyVerses: [
              {
                ref: 'Lotus Sutra 2',
                text: 'The Buddhas, the World-Honored Ones, appear in the world for one great reason alone: to cause living beings to open the door of Buddha-wisdom so they may attain purity.',
              },
              {
                ref: 'Lotus Sutra 2',
                text: 'Shariputra, the Thus Come One has only one Buddha vehicle, but in order to give living beings a respite, he uses expedient means to teach the three vehicles.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Lotus Sutra 2',
            text: 'In the Buddha lands of the ten directions there is only the Law of the one vehicle; there are not two, there are not three, except when the Buddha preaches so as an expedient means.',
          },
        ],
      },
      {
        id: 'lotus-ch3',
        name: 'Chapter 3: Simile and Parable',
        originalName: 'Aupamya-parivarta',
        chapters: 1,
        summary:
          'The famous Parable of the Burning House: a wealthy father lures his playing children out of a burning house by promising them different carts (goat, deer, ox), but gives them all the finest ox-cart. This illustrates the Buddha\'s use of expedient means and the ultimate gift of the One Vehicle.',
        themes: ['parable', 'burning house', 'expedient means', 'salvation'],
        sections: [
          {
            chapter: 3,
            title: 'The Parable of the Burning House',
            summary:
              'A rich man\'s house catches fire. His children are inside, absorbed in play. He lures them out by offering three kinds of carts, then gives them all the greatest cart.',
            keyVerses: [
              {
                ref: 'Lotus Sutra 3',
                text: 'Suppose in a certain town there was a great elder. His house was large and old, and it was on the verge of collapse. The halls were high and dangerous, the bases of the pillars were rotting, the beams and rafters were toppling and dangerous.',
              },
              {
                ref: 'Lotus Sutra 3',
                text: 'The three worlds are not peaceful, they are like a burning house, full of many sufferings, truly to be feared.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Lotus Sutra 3',
            text: 'The three worlds are not peaceful, they are like a burning house, full of many sufferings, truly to be feared, with constant woes of birth, old age, sickness, and death, which are like fires raging unchecked.',
          },
        ],
      },
      {
        id: 'lotus-ch4',
        name: 'Chapter 4: Belief and Understanding',
        originalName: 'Adhimukti-parivarta',
        chapters: 1,
        summary:
          'The Parable of the Prodigal Son: senior disciples, overjoyed at the teaching, tell the story of a man who leaves home, falls into poverty, and eventually returns to his wealthy father, who gradually elevates him. This represents beings who forgot their Buddha-nature and are gradually restored.',
        themes: ['prodigal son', 'faith', 'understanding', 'gradual teaching'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 4',
            text: 'He wandered about in all directions for fifty years. The son of the wealthy man, seeking for a livelihood, went from city to city until finally he came to the town where his father was living.',
          },
        ],
      },
      {
        id: 'lotus-ch5',
        name: 'Chapter 5: The Parable of the Medicinal Herbs',
        originalName: 'Aushadhi-parivarta',
        chapters: 1,
        summary:
          'The Parable of the Rain Cloud: a great cloud rains equally upon all plants — small, medium, and large — yet each absorbs the rain according to its own nature and capacity. So too the Buddha\'s teaching nourishes all beings according to their capacity.',
        themes: ['rain cloud', 'equal compassion', 'different capacities', 'impartiality'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 5',
            text: 'It is like a great cloud that rises above the world and covers it all over, a beneficent cloud full of moisture. The lightning flashes and shines, and the voice of thunder vibrates afar, bringing gladness and ease to all.',
          },
        ],
      },
      {
        id: 'lotus-ch6',
        name: 'Chapter 6: Bestowal of Prophecy',
        originalName: 'Vyakarana-parivarta',
        chapters: 1,
        summary:
          'The Buddha bestows predictions of future Buddhahood upon four great disciples: Mahakashyapa, Subhuti, Mahakatyayana, and Mahamaudgalyayana.',
        themes: ['prophecy', 'Buddhahood', 'predictions', 'encouragement'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch7',
        name: 'Chapter 7: The Parable of the Phantom City',
        originalName: 'Purva-yoga-parivarta',
        chapters: 1,
        summary:
          'The Parable of the Phantom City: a guide leading travelers through a dangerous wilderness conjures up a phantom city for them to rest in, then reveals it is not the final destination. Similarly, the Buddha teaches lesser nirvana as a resting place before the ultimate goal of complete Buddhahood.',
        themes: ['phantom city', 'resting place', 'lesser nirvana', 'ultimate goal'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 7',
            text: 'The Thus Come One likewise in this way acts as a guide for all living beings. He knows that there is a long, steep, evil road in the realm of birth and death and earthly desires that must be traveled and passed over.',
          },
        ],
      },
      {
        id: 'lotus-ch8',
        name: 'Chapter 8: Prophecy of Enlightenment for Five Hundred Disciples',
        originalName: 'Pancabhikshu-sata-vyakarana-parivarta',
        chapters: 1,
        summary:
          'Five hundred arhats receive prophecies of future Buddhahood. They tell the Parable of the Jewel in the Robe: a man sews a priceless jewel into his poor friend\'s robe; the friend wanders in poverty, unaware of the treasure he carries.',
        themes: ['hidden treasure', 'Buddha-nature', 'prophecy', 'inherent potential'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 8',
            text: 'A man went to the house of a close friend and, having drunk wine, lay down to sleep. The friend, having to go out on official business, sewed a priceless jewel in the lining of the man\'s robe and departed. But the man, being drunk and asleep, knew nothing of it.',
          },
        ],
      },
      {
        id: 'lotus-ch9',
        name: 'Chapter 9: Prophecies Conferred on Learners and Adepts',
        originalName: 'Vyakarana-parivarta',
        chapters: 1,
        summary:
          'Ananda, Rahula, and two thousand other monks receive prophecies of future Buddhahood.',
        themes: ['prophecy', 'Buddhahood', 'encouragement'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch10',
        name: 'Chapter 10: The Teacher of the Law',
        originalName: 'Dharma-bhanaka-parivarta',
        chapters: 1,
        summary:
          'The merit of receiving, upholding, reading, reciting, expounding, and copying the Lotus Sutra is immeasurable. Those who teach this sutra are true teachers of the Law.',
        themes: ['teaching the Dharma', 'merit', 'sutra veneration'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 10',
            text: 'If there is a person who seeks the Buddha way and for the space of a kalpa presses his palms together in my presence and recites numberless verses of praise, because of his praise of the Buddha he will gain immeasurable blessings.',
          },
        ],
      },
      {
        id: 'lotus-ch11',
        name: 'Chapter 11: The Emergence of the Treasure Tower',
        originalName: 'Stupa-sandarshana-parivarta',
        chapters: 1,
        summary:
          'A great treasure tower emerges from the earth, and the voice of the Buddha Prabhutaratna (Many Treasures) confirms the truth of the Lotus Sutra from within. Shakyamuni opens the tower and sits beside the ancient Buddha, demonstrating the timelessness of the Dharma.',
        themes: ['treasure tower', 'ancient Buddha', 'verification', 'timelessness'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 11',
            text: 'A loud voice issued from the tower, speaking words of praise: "Excellent, excellent! Shakyamuni, World-Honored One, that you can preach to the great assembly the Lotus Sutra of the Wonderful Law. It is all true!"',
          },
        ],
      },
      {
        id: 'lotus-ch12',
        name: 'Chapter 12: Devadatta',
        originalName: 'Devadatta-parivarta',
        chapters: 1,
        summary:
          'Even Devadatta, the Buddha\'s rival, receives a prediction of future Buddhahood. The Dragon King\'s daughter, a young naga girl, demonstrates instant enlightenment, proving that even those considered unlikely can attain Buddhahood.',
        themes: [
          'universal Buddhahood',
          'redemption',
          'female enlightenment',
          'instant awakening',
        ],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 12',
            text: 'At that time the dragon girl had a precious jewel worth as much as the thousand-millionfold world, which she presented to the Buddha. In an instant she changed into a man, perfected the bodhisattva practices, and went to the World of Spotless and sat on a jeweled lotus flower, attaining impartial and correct enlightenment.',
          },
        ],
      },
      {
        id: 'lotus-ch13',
        name: 'Chapter 13: Encouraging Devotion',
        originalName: 'Utsaha-parivarta',
        chapters: 1,
        summary:
          'Bodhisattvas vow to propagate the Lotus Sutra in the evil age after the Buddha\'s passing, despite hardship and persecution.',
        themes: ['devotion', 'perseverance', 'vows', 'future ages'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch14',
        name: 'Chapter 14: Peaceful Practices',
        originalName: 'Sukha-vihara-parivarta',
        chapters: 1,
        summary:
          'Manjushri asks how a bodhisattva should practice in the evil latter age. The Buddha describes four peaceful practices: right conduct, right speech, right thought, and right vows.',
        themes: ['peaceful practice', 'conduct', 'speech', 'thought', 'vows'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch15',
        name: 'Chapter 15: Emerging from the Earth',
        originalName: 'Rasmi-pratimanditah-parivarta',
        chapters: 1,
        summary:
          'Countless bodhisattvas emerge from beneath the earth — bodhisattvas of the Buddha who have been practicing for immeasurable kalpas. This revelation astonishes the assembly and sets the stage for the revelation of the Buddha\'s eternal lifespan.',
        themes: [
          'bodhisattvas from the earth',
          'eternity of practice',
          'astonishment',
          'timelessness',
        ],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch16',
        name: 'Chapter 16: The Life Span of the Thus Come One',
        originalName: 'Tathagata-ayus-pramana-parivarta',
        chapters: 1,
        summary:
          'The most doctrinally significant chapter: the Buddha reveals that he did not actually attain enlightenment under the Bodhi tree in this lifetime. His awakening occurred immeasurably long ago, and he has been teaching in this world and others ever since. His apparent death and entry into nirvana are themselves skillful means to prevent beings from becoming complacent.',
        themes: [
          'eternal Buddha',
          'cosmic time',
          'skillful means',
          'appearing to die',
          'original enlightenment',
        ],
        sections: [
          {
            chapter: 16,
            title: 'The Parable of the Physician',
            summary:
              'A physician whose sons have been poisoned pretends to die so they will take the medicine he prepared for them.',
            keyVerses: [
              {
                ref: 'Lotus Sutra 16',
                text: 'In immeasurable, boundless hundreds, thousands, ten thousands, millions of asamkhyeya kalpas, I have been constantly dwelling in this world, preaching the Law, teaching and converting. Also in other places, in hundreds, thousands, ten thousands, millions of asamkhyeya lands, I have been guiding and benefiting living beings.',
              },
              {
                ref: 'Lotus Sutra 16',
                text: 'I use the power of expedient means, and say that I will pass into extinction. But in truth I do not pass into extinction. I am always here, preaching the Law.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Lotus Sutra 16',
            text: 'Since I attained Buddhahood, the number of kalpas that have passed is an immeasurable hundreds, thousands, ten thousands, millions, trillions, asamkhyeyas. Constantly I have preached the Law, teaching and converting countless millions of living beings.',
          },
        ],
      },
      {
        id: 'lotus-ch17',
        name: 'Chapter 17: Distinctions in Benefits',
        originalName: 'Punya-vibhanga-parivarta',
        chapters: 1,
        summary:
          'The immeasurable merits gained by those who rejoice in and accept even a single phrase of the Lotus Sutra.',
        themes: ['merit', 'rejoicing', 'benefits'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch18',
        name: 'Chapter 18: The Benefits of Responding with Joy',
        originalName: 'Anumodana-punya-nirdesha-parivarta',
        chapters: 1,
        summary:
          'Even the fiftieth person to hear and rejoice in the Lotus Sutra gains merits beyond measure.',
        themes: ['joy', 'sharing the Dharma', 'merit'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch19',
        name: 'Chapter 19: Benefits of the Teacher of the Law',
        originalName: 'Saddharma-bhanaka-punya-parivarta',
        chapters: 1,
        summary:
          'One who upholds the Lotus Sutra gains purified sense organs: purified eyes, ears, nose, tongue, body, and mind, each with extraordinary powers.',
        themes: ['purified senses', 'teacher of the Law', 'spiritual powers'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch20',
        name: 'Chapter 20: The Bodhisattva Never Disparaging',
        originalName: 'Sadaparibhuta-parivarta',
        chapters: 1,
        summary:
          'The story of Bodhisattva Never Disparaging, who bowed to everyone he met, saying: "I would never dare disparage you, for you are all practicing the bodhisattva way and shall become Buddhas." Though mocked and attacked, his practice was vindicated.',
        themes: ['respect', 'Buddha-nature', 'perseverance', 'humility'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 20',
            text: 'I would never dare disparage you, because you are all practicing the bodhisattva way and shall certainly become Buddhas.',
          },
        ],
      },
      {
        id: 'lotus-ch21',
        name: 'Chapter 21: Supernatural Powers of the Thus Come One',
        originalName: 'Tathagata-riddhi-abhisanskriya-parivarta',
        chapters: 1,
        summary:
          'The Buddha displays supernatural powers and entrusts the Lotus Sutra to the bodhisattvas who emerged from the earth.',
        themes: ['supernatural powers', 'entrustment', 'display of powers'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch22',
        name: 'Chapter 22: Entrustment',
        originalName: 'Anuparindana-parivarta',
        chapters: 1,
        summary:
          'The Buddha places his hand on the heads of all the bodhisattvas, entrusting them with propagating the Lotus Sutra after his passing.',
        themes: ['entrustment', 'transmission', 'future propagation'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch23',
        name: 'Chapter 23: Former Affairs of the Bodhisattva Medicine King',
        originalName: 'Bhaisajya-raja-purva-yoga-parivarta',
        chapters: 1,
        summary:
          'The story of Bodhisattva Medicine King who, in a former life, burned his own body as an offering to the Buddha and the Lotus Sutra, demonstrating supreme devotion.',
        themes: ['self-sacrifice', 'devotion', 'Medicine King', 'offering'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 23',
            text: 'This sutra can save all living beings. This sutra can cause all living beings to free themselves from sufferings and agonies. This sutra can bring great benefits to all living beings and fulfill their desires.',
          },
        ],
      },
      {
        id: 'lotus-ch24',
        name: 'Chapter 24: The Bodhisattva Wonderful Sound',
        originalName: 'Gadgadasvara-parivarta',
        chapters: 1,
        summary:
          'Bodhisattva Wonderful Sound arrives from another world to honor the Buddha and display various transformations to teach the Dharma in different forms.',
        themes: ['transformation', 'teaching forms', 'Wonderful Sound'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch25',
        name: 'Chapter 25: The Universal Gateway of Bodhisattva Avalokiteshvara',
        originalName: 'Avalokiteshvara-vikurvana-parivarta',
        chapters: 1,
        summary:
          'One of the most beloved chapters in East Asian Buddhism: Avalokiteshvara (Guanyin/Kannon) manifests in thirty-three forms to save beings in distress. Whoever calls upon his name will be saved from fire, flood, demons, and every kind of danger.',
        themes: [
          'Avalokiteshvara',
          'compassion',
          'salvation',
          'universal manifestation',
          'calling the name',
        ],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 25',
            text: 'If there are immeasurable hundreds, thousands, ten thousands, millions of living beings who are undergoing various trials and suffering, and they hear of Bodhisattva Avalokiteshvara and single-mindedly call his name, then Bodhisattva Avalokiteshvara will immediately perceive the sound of their voices and they will all gain deliverance from their trials.',
          },
        ],
      },
      {
        id: 'lotus-ch26',
        name: 'Chapter 26: Dharani',
        originalName: 'Dharani-parivarta',
        chapters: 1,
        summary:
          'Various bodhisattvas and protector deities offer dharani (protective spells) to guard those who uphold and propagate the Lotus Sutra.',
        themes: ['dharani', 'protection', 'spells', 'guardianship'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch27',
        name: 'Chapter 27: Former Affairs of King Wonderful Adornment',
        originalName: 'Subhavyuha-raja-purva-yoga-parivarta',
        chapters: 1,
        summary:
          'The story of King Wonderful Adornment, who was converted to the Dharma by his two sons, demonstrating the power of filial devotion and skillful teaching.',
        themes: ['family', 'conversion', 'filial devotion', 'skillful teaching'],
        sections: [],
        keyVerses: [],
      },
      {
        id: 'lotus-ch28',
        name: 'Chapter 28: Encouragements of the Bodhisattva Universal Worthy',
        originalName: 'Samantabhadra-bodhisattva-utsahana-parivarta',
        chapters: 1,
        summary:
          'The closing chapter: Bodhisattva Samantabhadra (Universal Worthy) vows to protect and support anyone who upholds the Lotus Sutra. The Buddha affirms that those who accept this sutra have already made offerings to innumerable Buddhas.',
        themes: ['Samantabhadra', 'protection', 'vow', 'conclusion'],
        sections: [],
        keyVerses: [
          {
            ref: 'Lotus Sutra 28',
            text: 'If there is anyone who accepts and upholds, reads and recites, correctly remembers, practices, and copies the Lotus Sutra, you should know that such a person has already offered alms to a hundred thousand million Buddhas and in the presence of those Buddhas has taken a great vow.',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // 5. DIAMOND SUTRA (MAHAYANA)
  // ──────────────────────────────────────────────
  {
    id: 'diamond-sutra',
    religionId: 'buddhism',
    name: 'Diamond Sutra',
    originalName: 'Vajracchedika Prajnaparamita Sutra',
    language: 'Sanskrit (with Chinese and Tibetan translations)',
    description:
      'The Diamond Sutra is one of the most revered Prajnaparamita texts, famous for its dialectical method of negation. It teaches the perfection of wisdom (prajnaparamita) through a dialogue between the Buddha and his disciple Subhuti. The Chinese translation by Kumarajiva (c. 402 CE) is the earliest dated printed book in the world (868 CE). The sutra systematically deconstructs all concepts, including the concepts of a self, a being, a soul, and even the concept of dharma itself.',
    totalBooks: 1,
    totalChapters: 32,
    totalVerses: '32 sections',
    period: 'c. 2nd–4th century CE',
    onlineSource: {
      label: 'BuddhaNet',
      url: 'https://www.buddhanet.net/',
    },
    books: [
      {
        id: 'diamond-sutra-main',
        name: 'Vajracchedika (Diamond Cutter)',
        originalName: 'Vajracchedika Prajnaparamita',
        chapters: 32,
        summary:
          'A dialogue between the Buddha and Subhuti on the nature of perception, reality, and the perfection of wisdom. Through a series of paradoxical negations, the Buddha shows that all phenomena, all dharmas, and even Buddhahood itself are empty of self-nature.',
        themes: [
          'emptiness',
          'non-attachment',
          'perfection of wisdom',
          'non-abiding mind',
          'diamond-like wisdom',
          'negation',
        ],
        sections: [
          {
            chapter: 1,
            title: 'The Convocation of the Assembly',
            summary:
              'The Buddha, at Jetavana monastery, puts on his robe, takes his bowl, walks to the city for alms, eats, puts away his robe and bowl, washes his feet, and sits down. The everyday action becomes the setting for the deepest teaching.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 1',
                text: 'Thus have I heard. At one time the Buddha was staying in the Jetavana monastery in the garden of Anathapindika, together with a community of twelve hundred and fifty monks.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'Subhuti Makes a Request',
            summary:
              'Subhuti asks the Buddha: "How should one who has set out on the bodhisattva path abide, and how should they control their thoughts?"',
            keyVerses: [
              {
                ref: 'Diamond Sutra 2',
                text: 'World-Honored One, if good men and good women have set their hearts on achieving supreme perfect enlightenment, how should they abide and how should they control their thoughts?',
              },
            ],
          },
          {
            chapter: 3,
            title: 'The Real Teaching of the Great Way',
            summary:
              'The Buddha teaches that a bodhisattva should vow to save all sentient beings while knowing that no sentient beings are actually saved — because anyone who holds the idea of a self, a person, a being, or a life-span is not a bodhisattva.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 3',
                text: 'All the immeasurable, innumerable, and unlimited living beings were caused by me to attain unbounded liberation and nirvana. And yet of all these immeasurable, innumerable, unlimited living beings, not a single being has been liberated. Why? Because if a bodhisattva holds the notion of a self, a person, a being, or a life-span, that one is not a bodhisattva.',
              },
            ],
          },
          {
            chapter: 4,
            title: 'Even the Most Beneficent Practices are Empty',
            summary:
              'True generosity is practiced without attachment to any concept of giving.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 4',
                text: 'Furthermore, Subhuti, a bodhisattva should practice generosity without abiding in anything. That is to say, one should not give abiding in form, nor should one give abiding in sound, smell, taste, touch, or dharmas. Subhuti, a bodhisattva should give in this manner — not abiding in any notion of a sign.',
              },
            ],
          },
          {
            chapter: 5,
            title: 'Real Seeing is Beyond Form',
            summary:
              'The Buddha cannot be seen through form or physical characteristics.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 5',
                text: 'Subhuti, what do you think? Can the Tathagata be seen by means of bodily form? No, World-Honored One. The Tathagata cannot be seen by means of bodily form. Why? Because the bodily form spoken of by the Tathagata is not bodily form.',
              },
              {
                ref: 'Diamond Sutra 5',
                text: 'Wherever there are forms, there is delusion. If you see all forms as non-forms, then you see the Tathagata.',
              },
            ],
          },
          {
            chapter: 6,
            title: 'Rare is True Faith',
            summary:
              'Subhuti asks whether beings in the future will have genuine faith in these teachings. The Buddha assures him that there will be beings who, having planted good roots under countless Buddhas, will give rise to faith upon hearing these words.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 6',
                text: 'You should know that such persons have not planted good roots under just one Buddha, two Buddhas, three, four, or five Buddhas, but have planted good roots under countless thousands and tens of thousands of Buddhas.',
              },
            ],
          },
          {
            chapter: 7,
            title: 'Nothing Has Been Gained, Nothing Has Been Said',
            summary:
              'The Tathagata has gained nothing from supreme perfect enlightenment, and has spoken no fixed dharma.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 7',
                text: 'Subhuti, what do you think? Has the Tathagata attained supreme perfect enlightenment? Has the Tathagata spoken any dharma? Subhuti answered: As I understand the Buddha\'s meaning, there is no fixed dharma called supreme perfect enlightenment, and there is no fixed dharma the Tathagata could speak.',
              },
            ],
          },
          {
            chapter: 8,
            title: 'Enlightenment Comes from This Teaching',
            summary:
              'The merit of even a small portion of this teaching surpasses all other merits.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 8',
                text: 'If someone were to fill the three thousand great thousand worlds with the seven treasures and give them as a gift, and if another person were to receive and uphold even a four-line gatha from this sutra and explain it to others, the merit of the latter would surpass the former.',
              },
              {
                ref: 'Diamond Sutra 8',
                text: 'All Buddhas, and all the supreme perfect enlightenment dharmas of the Buddhas, come forth from this sutra.',
              },
            ],
          },
          {
            chapter: 9,
            title: 'Real Designation is Undesignate',
            summary:
              'Those who have attained the fruits of the path do not think they have attained anything. A stream-enterer does not think "I have attained stream-entry."',
            keyVerses: [
              {
                ref: 'Diamond Sutra 9',
                text: 'Subhuti, what do you think? Does a stream-enterer think "I have attained the fruit of stream-entry"? Subhuti said: No, World-Honored One. Why? Because stream-entry means to enter the stream, yet there is no entering — no entering of form, sound, smell, taste, touch, or dharmas. That is what is called stream-entry.',
              },
            ],
          },
          {
            chapter: 10,
            title: 'Setting Forth Pure Lands',
            summary:
              'The Buddha recalls that when he was with Dipankara Buddha in a past life, he attained nothing. The bodhisattva adorns a Buddha-land while not abiding in the notion of adorning.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 10',
                text: 'A bodhisattva should develop a mind that does not abide in anything. One should develop a mind that does not abide in form. One should develop a mind that does not abide in sound, smell, taste, touch, or dharmas. One should develop a mind that does not abide anywhere.',
              },
            ],
          },
          {
            chapter: 14,
            title: 'Perfect Peace Lies in the Cutting Off of All Notions',
            summary:
              'Subhuti, moved to tears, praises this teaching. The Buddha affirms that whoever hears this sutra and is not filled with alarm or dread is a very rare person.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 14',
                text: 'All conditioned phenomena are like a dream, an illusion, a bubble, a shadow, like dew or a flash of lightning; thus we shall perceive them.',
              },
            ],
          },
          {
            chapter: 21,
            title: 'Words Cannot Express Truth',
            summary:
              'The Tathagata has never spoken a single word of dharma, for there is no dharma to speak.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 21',
                text: 'Subhuti, do not say that the Tathagata conceives the idea: "I must preach a dharma." Do not think that way. Why? If anyone says the Tathagata preaches a dharma, they slander the Buddha because they cannot understand what I am saying.',
              },
            ],
          },
          {
            chapter: 26,
            title: 'The Body of Truth Has No Marks',
            summary:
              'The Tathagata should not be recognized through bodily marks.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 26',
                text: 'If anyone looks for me in form, or seeks me through sound, that person is on a wrong path, and cannot see the Tathagata.',
              },
            ],
          },
          {
            chapter: 32,
            title: 'The Delusion of Appearances',
            summary:
              'The concluding verse that encapsulates the entire sutra: all conditioned phenomena are like dreams, illusions, bubbles, and shadows.',
            keyVerses: [
              {
                ref: 'Diamond Sutra 32',
                text: 'All conditioned phenomena are like a dream, an illusion, a bubble, a shadow, like dew or a flash of lightning; thus we shall perceive them.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Diamond Sutra 32',
            text: 'All conditioned phenomena are like a dream, an illusion, a bubble, a shadow, like dew or a flash of lightning; thus we shall perceive them.',
          },
          {
            ref: 'Diamond Sutra 10',
            text: 'A bodhisattva should develop a mind that does not abide in anything.',
          },
          {
            ref: 'Diamond Sutra 5',
            text: 'Wherever there are forms, there is delusion. If you see all forms as non-forms, then you see the Tathagata.',
          },
          {
            ref: 'Diamond Sutra 26',
            text: 'If anyone looks for me in form, or seeks me through sound, that person is on a wrong path, and cannot see the Tathagata.',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // 6. TIBETAN BOOK OF THE DEAD (BARDO THODOL)
  // ──────────────────────────────────────────────
  {
    id: 'tibetan-book-of-the-dead',
    religionId: 'buddhism',
    name: 'Tibetan Book of the Dead',
    originalName: 'Bardo Thodol',
    language: 'Tibetan',
    description:
      'A terma text attributed to Padmasambhava (8th century) and discovered by the terton Karma Lingpa (14th century). The Bardo Thodol ("Liberation Through Hearing During the Intermediate State") is a guide for the dying and the recently deceased, describing the experiences of consciousness after death through three bardos (intermediate states). It is read aloud to the dying or deceased to help them recognize the true nature of mind and attain liberation, or at least a favorable rebirth.',
    totalBooks: 3,
    totalChapters: 'Multiple sections within three bardos',
    totalVerses: 'Continuous prose with embedded prayers and instructions',
    period:
      'Attributed to Padmasambhava (8th century CE); discovered by Karma Lingpa (14th century CE)',
    onlineSource: {
      label: 'Lotsawa House',
      url: 'https://www.lotsawahouse.org/',
    },
    books: [
      {
        id: 'chikhai-bardo',
        name: 'Chikhai Bardo (Bardo of the Moment of Death)',
        originalName: 'Chikhai Bardo',
        chapters: 'Multiple instructions',
        summary:
          'The first bardo: the experience at and around the moment of death. At the instant of death, the mind encounters the Primary Clear Light of Pure Reality — the fundamental luminosity of one\'s own nature. If this is recognized, liberation is attained immediately. If not recognized, there is a second opportunity as the Secondary Clear Light dawns. This section contains instructions to be read to the dying person.',
        themes: [
          'moment of death',
          'clear light',
          'luminosity',
          'recognition',
          'liberation at death',
          'consciousness transfer',
        ],
        sections: [
          {
            chapter: 1,
            title: 'The Primary Clear Light Seen at the Moment of Death',
            summary:
              'At the exact moment of death, the Ground Luminosity — the fundamental clear light of reality — dawns. This is the most powerful opportunity for liberation. The dying person is instructed to recognize this light as their own true nature.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chikhai Bardo 1',
                text: 'O nobly-born, that which is called death has now come. You are departing from this world, but you are not the only one; death comes to all. Do not cling to this life. Even if you cling, you have not the power to stay.',
              },
              {
                ref: 'Bardo Thodol, Chikhai Bardo 2',
                text: 'O nobly-born, the time has come for you to seek the Path. Your breathing is about to cease. In the past your teacher has set you face to face with the Clear Light; and now you are about to experience it in its Reality in the Bardo state.',
              },
              {
                ref: 'Bardo Thodol, Chikhai Bardo 3',
                text: 'The dharmadhatu, luminous and empty, like the sky, naked, stainless mind: this Clear Light, the very nature of your own awareness — recognize it! This is the great pristine awareness.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'The Secondary Clear Light',
            summary:
              'If the Primary Clear Light is not recognized, the Secondary Clear Light arises shortly after. This is another opportunity for liberation through recognition.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chikhai Bardo 4',
                text: 'O nobly-born, if you have not recognized the first luminosity, recognize now. The innate Clear Light will dawn again. At this moment, let your mind rest in its own natural state, uncontrived and luminous.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Bardo Thodol, Chikhai Bardo',
            text: 'O nobly-born, listen. Now you are experiencing the radiance of the Clear Light of Pure Reality. Recognize it. Your present intellect, in its real nature void, not formed into anything, without substance, luminous — this itself is the very consciousness of the Buddha.',
          },
        ],
      },
      {
        id: 'chonyid-bardo',
        name: 'Chonyid Bardo (Bardo of the Experiencing of Reality)',
        originalName: 'Chonyid Bardo',
        chapters: 'Fourteen days of visions',
        summary:
          'The second bardo: after death, if the clear light was not recognized, consciousness enters a visionary state lasting symbolically fourteen days. During the first seven days, the peaceful deities (the five Dhyani Buddhas and their retinues) appear as brilliant lights. During the second seven days, the wrathful deities appear in terrifying forms. In both cases, the deities are projections of one\'s own mind, and recognition of this truth leads to liberation.',
        themes: [
          'peaceful deities',
          'wrathful deities',
          'Dhyani Buddhas',
          'karmic visions',
          'recognition',
          'illusion',
        ],
        sections: [
          {
            chapter: 'Day 1',
            title: 'Vairochana and the Dazzling Blue Light',
            summary:
              'The Dhyani Buddha Vairochana appears in the center, radiating a brilliant blue light. Simultaneously, a dim white light representing the deva realm appears. The deceased is instructed to go toward the brilliant light and not be drawn to the dim light.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 1',
                text: 'O nobly-born, on the first day, the element of water in its luminous form, as a blue light, will shine. At that time, from the central realm, the Bhagavan Vairochana, white of color, seated upon a lion-throne, bearing an eight-spoked wheel in his hand, embraced by the Mother of the Space of Heaven, will appear to you.',
              },
            ],
          },
          {
            chapter: 'Day 2',
            title: 'Vajrasattva (Akshobhya) and the White Light',
            summary:
              'The Dhyani Buddha Akshobhya appears in the east, radiating a dazzling white light. The dim smoky light of the hell realm also appears.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 2',
                text: 'O nobly-born, on the second day, the purified form of the element water will shine as a white light. At that time, from the eastern realm of Pre-eminent Happiness, the Bhagavan Akshobhya, blue in color, bearing a five-pronged vajra in his hand, seated upon an elephant-throne, embraced by the Mother Mamaki, will appear to you.',
              },
            ],
          },
          {
            chapter: 'Day 3',
            title: 'Ratnasambhava and the Yellow Light',
            summary:
              'The Dhyani Buddha Ratnasambhava appears in the south, radiating a brilliant yellow light. The dim bluish light of the human realm also appears.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 3',
                text: 'O nobly-born, on the third day, the purified form of the element earth will shine as a yellow light. At that time, from the southern realm, the Bhagavan Ratnasambhava, yellow in color, bearing a jewel in his hand, seated upon a horse-throne, embraced by the Mother Mamaki, will appear to you.',
              },
            ],
          },
          {
            chapter: 'Day 4',
            title: 'Amitabha and the Red Light',
            summary:
              'The Dhyani Buddha Amitabha appears in the west, radiating a brilliant red light. The dim yellow light of the hungry ghost realm also appears.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 4',
                text: 'O nobly-born, on the fourth day, the purified form of the element fire will shine as a red light. At that time, from the western realm of Happiness, the Bhagavan Amitabha, red in color, bearing a lotus in his hand, seated upon a peacock-throne, embraced by the Mother Pandaravasini, will appear to you.',
              },
            ],
          },
          {
            chapter: 'Day 5',
            title: 'Amoghasiddhi and the Green Light',
            summary:
              'The Dhyani Buddha Amoghasiddhi appears in the north, radiating a brilliant green light. The dim red light of the jealous god (asura) realm also appears.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 5',
                text: 'O nobly-born, on the fifth day, the purified form of the element air will shine as a green light. At that time, from the northern realm, the Bhagavan Amoghasiddhi, green in color, bearing a crossed-vajra in his hand, seated upon a shang-shang throne, embraced by the Mother, the Faithful Tara, will appear to you.',
              },
            ],
          },
          {
            chapter: 'Days 6-7',
            title: 'The Forty-Two Peaceful Deities and the Knowledge-Holding Deities',
            summary:
              'All forty-two peaceful deities appear simultaneously, along with the Knowledge-Holding deities of the mandala. The six dim lights of the six realms also appear. This is the last opportunity for liberation through the peaceful deities.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 6',
                text: 'O nobly-born, until yesterday, each of the five orders of deities has appeared to you one by one, and you have been set face to face with them. But through the influence of evil karma, you were awed and terrified by them and are still wandering here. Now, all the five orders will come to shine upon you simultaneously.',
              },
            ],
          },
          {
            chapter: 'Days 8-14',
            title: 'The Wrathful Deities',
            summary:
              'The fifty-eight wrathful deities appear — the same five Buddhas in fierce form, blood-drinking, flame-wreathed. Though terrifying, they are the same peaceful deities in a different aspect, projections of one\'s own mind. Recognition brings liberation.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 8',
                text: 'O nobly-born, listen without distraction. There will dawn upon you the wrathful deities. Do not be terrified of them. Whatever may come — sounds, lights, or rays — all are the radiances of your own intellect. Do not be afraid of them. Recognize all of them as the natural manifestations of your own mind.',
              },
              {
                ref: 'Bardo Thodol, Chonyid Bardo Day 8',
                text: 'O nobly-born, the peaceful and wrathful deities are not coming from somewhere outside. They exist from eternity within your own mind. Recognize them as such.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Bardo Thodol, Chonyid Bardo',
            text: 'O nobly-born, whatever terrifying and fearful visions you may see, recognize them to be your own thought-forms. Recognize them to be the luminosity — the natural radiance of your own mind. Do not be afraid. Do not be terrified.',
          },
          {
            ref: 'Bardo Thodol, Chonyid Bardo',
            text: 'O nobly-born, the peaceful and wrathful deities are not coming from somewhere outside. They exist from eternity within your own mind. Recognize them as such.',
          },
        ],
      },
      {
        id: 'sidpa-bardo',
        name: 'Sidpa Bardo (Bardo of Rebirth)',
        originalName: 'Sidpa Bardo',
        chapters: 'Multiple instructions',
        summary:
          'The third bardo: if liberation was not attained during the first two bardos, the consciousness enters the Sidpa Bardo, the intermediate state of becoming and seeking rebirth. Here the consciousness has a mental body that can pass through solid objects, has heightened senses, and is driven by karmic winds toward rebirth. Instructions are given for choosing a favorable rebirth or closing the door to rebirth entirely.',
        themes: [
          'rebirth',
          'karmic winds',
          'mental body',
          'choosing rebirth',
          'closing the womb-door',
          'six realms',
        ],
        sections: [
          {
            chapter: 1,
            title: 'The Dawning of the Sidpa Bardo',
            summary:
              'Consciousness awakens in a mental body and is confused. It can see its relatives mourning. It tries to communicate but cannot. It begins to wander, driven by karmic winds.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Sidpa Bardo 1',
                text: 'O nobly-born, you have been wandering and failing to recognize in the Chonyid Bardo. Now the Sidpa Bardo is dawning upon you. You now have a mental body of karmic propensities. Your present body being a desire-body, whatever you think will come to pass instantly.',
              },
              {
                ref: 'Bardo Thodol, Sidpa Bardo 2',
                text: 'O nobly-born, at this time, you will see the lights of the six realms of existence. The light of the realm in which you are to be born will shine most prominently.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'The Judgment',
            summary:
              'The Lord of Death (Dharmaraja) weighs one\'s good and evil deeds. But this too is a projection of one\'s own mind.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Sidpa Bardo 3',
                text: 'O nobly-born, the Lord of Death will place before you the Mirror of Karma, in which all your good and evil deeds will be vividly reflected. It is of no use to lie, for the Lord of Death looks into the Mirror of Karma, wherein every deed is clearly reflected.',
              },
              {
                ref: 'Bardo Thodol, Sidpa Bardo 4',
                text: 'O nobly-born, the Lord of Death is within you; he is your own hallucination. Your own mind is void. The voidness does not die. Recognize this void as the dharmakaya.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Closing the Door of the Womb',
            summary:
              'Five methods are given for preventing an unfavorable rebirth and choosing a favorable one: meditation on one\'s yidam deity, meditation on illusoriness, meditation on the Clear Light, transferring consciousness to a Pure Land, and choosing a favorable womb-door.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Sidpa Bardo 5',
                text: 'O nobly-born, if you do not know how to meditate, remember the Buddha, the Dharma, and the Sangha, and pray to the Compassionate Lord. Meditate upon your tutelary deity. Even if you do not succeed in this, do not be afraid or terrified of anything that appears to you.',
              },
            ],
          },
          {
            chapter: 4,
            title: 'Choosing the Womb-Door and Rebirth',
            summary:
              'Instructions for selecting a favorable rebirth among the six realms, recognizing signs of each realm, and directing one\'s consciousness toward a human birth in a land where the Dharma flourishes.',
            keyVerses: [
              {
                ref: 'Bardo Thodol, Sidpa Bardo 6',
                text: 'O nobly-born, if you are to be born as a human, the signs of the continent of your birth will appear. Recognize them! Choose the continent carefully. Enter that land where the holy Dharma prevails.',
              },
              {
                ref: 'Bardo Thodol, Sidpa Bardo 7',
                text: 'O nobly-born, whether you are pushed by karma or whether you are choosing, the important thing is to direct your wish and intention. Pray thus: "May I be born in a realm where I can hear the Dharma and practice the path to liberation."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Bardo Thodol, Sidpa Bardo',
            text: 'O nobly-born, the Lord of Death is within you; he is your own hallucination. Your own mind is void. The voidness does not die. Recognize this void as the dharmakaya.',
          },
          {
            ref: 'Bardo Thodol, Sidpa Bardo',
            text: 'O nobly-born, whatever you see, however terrifying it is, recognize it as your own projection. Recognize the natural luminosity of your own mind. If you recognize in this way, you will merge with the clear light and become a Buddha in that very instant.',
          },
        ],
      },
    ],
  },
]
