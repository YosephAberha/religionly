import { ScriptureCollection } from './types'

export const hinduScriptures: ScriptureCollection[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. BHAGAVAD GITA — All 18 Chapters with detailed summaries
  // ─────────────────────────────────────────────────────────────
  {
    id: 'bhagavad-gita',
    religionId: 'hinduism',
    name: 'Bhagavad Gita',
    originalName: 'श्रीमद्भगवद्गीता',
    language: 'Sanskrit',
    description:
      'The Bhagavad Gita ("Song of God") is a 700-verse Hindu scripture that is part of the Mahabharata (Bhishma Parva, chapters 23–40). It is a dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, covering duty, righteousness, devotion, knowledge, and the nature of reality.',
    totalBooks: 1,
    totalChapters: 18,
    totalVerses: 700,
    period: 'c. 200 BCE – 200 CE',
    onlineSource: {
      label: 'Holy-Bhagavad-Gita.org',
      url: 'https://www.holy-bhagavad-gita.org/',
    },
    books: [
      {
        id: 'bhagavad-gita-complete',
        name: 'Bhagavad Gita',
        originalName: 'भगवद्गीता',
        chapters: 18,
        summary:
          'The Bhagavad Gita is set on the battlefield of Kurukshetra just before the great war. Prince Arjuna, overcome with despair at the prospect of fighting his own kinsmen, turns to his charioteer Lord Krishna for guidance. Krishna imparts spiritual wisdom covering karma yoga (path of action), jnana yoga (path of knowledge), bhakti yoga (path of devotion), and the nature of the self, God, and the universe.',
        themes: [
          'Dharma (righteous duty)',
          'Karma Yoga (selfless action)',
          'Jnana Yoga (knowledge)',
          'Bhakti Yoga (devotion)',
          'Atman (the self)',
          'Brahman (ultimate reality)',
          'Detachment',
          'Surrender to God',
        ],
        sections: [
          {
            chapter: 1,
            title: 'Arjuna Vishada Yoga — The Yoga of Arjuna\'s Dejection',
            summary:
              'On the battlefield of Kurukshetra, Arjuna surveys both armies and recognizes teachers, relatives, and friends on both sides. Overwhelmed by grief and moral confusion, he drops his bow and refuses to fight, lamenting the destruction that war will bring to families and social order.',
            keyVerses: [
              {
                ref: '1.1',
                text: 'Dhritarashtra said: O Sanjaya, assembled in the holy field of Kurukshetra, desiring to fight, what did my sons and the sons of Pandu do?',
              },
              {
                ref: '1.28-29',
                text: 'Arjuna said: O Krishna, seeing my own kinsmen arrayed and willing to fight, my limbs give way, my mouth is parching, my body trembles, and my hair stands on end.',
              },
              {
                ref: '1.32-33',
                text: 'O Govinda, of what avail to us are kingdoms, enjoyments, or even life itself, when all those for whom we desire kingdoms, enjoyments, and pleasures are arrayed in battle ready to give up their lives?',
              },
              {
                ref: '1.46',
                text: 'Sanjaya said: Having thus spoken on the battlefield, Arjuna cast aside his bow and arrows and sat down on the chariot, his mind overwhelmed with sorrow.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'Sankhya Yoga — The Yoga of Knowledge',
            summary:
              'Krishna begins his teaching by distinguishing the eternal soul (Atman) from the perishable body. He introduces the core concepts of the Gita: the immortality of the soul, the importance of performing one\'s duty without attachment to results, and equanimity in success and failure. This chapter contains some of the most famous verses of the entire text.',
            keyVerses: [
              {
                ref: '2.11',
                text: 'The Blessed Lord said: You grieve for those who should not be grieved for, yet speak words of wisdom. The wise grieve neither for the living nor for the dead.',
              },
              {
                ref: '2.13',
                text: 'Just as the embodied soul continuously passes from childhood to youth to old age, similarly at death the soul passes into another body. The wise are not deluded by this.',
              },
              {
                ref: '2.20',
                text: 'The soul is never born, nor does it ever die; nor having once existed, does it ever cease to be. The soul is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
              },
              {
                ref: '2.22',
                text: 'As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.',
              },
              {
                ref: '2.47',
                text: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Karma Yoga — The Yoga of Action',
            summary:
              'Krishna explains the path of selfless action. He teaches that no one can remain without action even for a moment, and that one should perform prescribed duties without attachment. Action performed as sacrifice purifies the heart. Krishna emphasizes the danger of desire and anger as enemies of wisdom.',
            keyVerses: [
              {
                ref: '3.5',
                text: 'No one can remain without action even for a moment. Indeed, all beings are compelled to act by their qualities born of material nature.',
              },
              {
                ref: '3.9',
                text: 'Work done as a sacrifice for Vishnu has to be performed; otherwise work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and you shall forever remain free from bondage.',
              },
              {
                ref: '3.19',
                text: 'Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme.',
              },
              {
                ref: '3.27',
                text: 'All actions are performed by the gunas of prakriti (material nature). Deluded by the ego, the soul thinks, "I am the doer."',
              },
              {
                ref: '3.35',
                text: 'It is far better to perform one\'s own duty imperfectly than to perform another\'s duty perfectly. Destruction in the course of performing one\'s own duty is better than engaging in another\'s duty, for to follow another\'s path is dangerous.',
              },
            ],
          },
          {
            chapter: 4,
            title: 'Jnana Karma Sanyasa Yoga — The Yoga of Knowledge and Renunciation of Action',
            summary:
              'Krishna reveals the ancient lineage of this teaching and the doctrine of divine incarnation (avatar). He explains the nature of action, inaction, and wrong action. Various forms of sacrifice are described, and Krishna declares that knowledge (jnana) is the supreme purifier that burns all karmic reactions.',
            keyVerses: [
              {
                ref: '4.7',
                text: 'Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth.',
              },
              {
                ref: '4.8',
                text: 'To protect the righteous, to annihilate the wicked, and to re-establish the principles of dharma, I appear millennium after millennium.',
              },
              {
                ref: '4.18',
                text: 'One who sees inaction in action and action in inaction is wise among men and is a yogi who has accomplished all action.',
              },
              {
                ref: '4.34',
                text: 'Learn the truth by approaching a spiritual master. Inquire from him with reverence and render service unto him. Such an enlightened sage can impart knowledge unto you because he has seen the truth.',
              },
              {
                ref: '4.38',
                text: 'In this world there is nothing so purifying as divine knowledge. One who has attained this in due course of time finds it within the self through the practice of yoga.',
              },
            ],
          },
          {
            chapter: 5,
            title: 'Karma Sanyasa Yoga — The Yoga of Renunciation of Action',
            summary:
              'Krishna reconciles the paths of renunciation (sannyasa) and selfless action (karma yoga), declaring that both lead to liberation but karma yoga is superior for most people. One who performs actions without attachment, offering results to God, is untouched by sin as a lotus leaf is untouched by water.',
            keyVerses: [
              {
                ref: '5.2',
                text: 'The Blessed Lord said: Both renunciation of action and the yoga of action lead to the supreme goal. But of the two, the yoga of action is superior to the renunciation of action.',
              },
              {
                ref: '5.10',
                text: 'One who acts offering all actions to God, abandoning attachment, is untouched by sin, as a lotus leaf by water.',
              },
              {
                ref: '5.18',
                text: 'The wise see with equal vision a learned and humble brahmana, a cow, an elephant, a dog, and an outcaste.',
              },
              {
                ref: '5.29',
                text: 'A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries.',
              },
            ],
          },
          {
            chapter: 6,
            title: 'Dhyana Yoga — The Yoga of Meditation',
            summary:
              'Krishna teaches the practice of meditation and self-discipline. He describes the ideal yogi, the proper posture and technique for meditation, and the importance of moderation in all things. Krishna assures Arjuna that the yogi who fails in this life is not lost but continues spiritual progress in the next life.',
            keyVerses: [
              {
                ref: '6.5',
                text: 'One must elevate, not degrade, oneself by one\'s own mind. The mind is the friend of the conditioned soul, and his enemy as well.',
              },
              {
                ref: '6.17',
                text: 'He who is regulated in his habits of eating, sleeping, recreation, and work can mitigate all material pains by practicing the yoga system.',
              },
              {
                ref: '6.30',
                text: 'For one who sees Me everywhere and sees everything in Me, I am never lost, nor is that person ever lost to Me.',
              },
              {
                ref: '6.34',
                text: 'Arjuna said: O Krishna, the mind is restless, turbulent, obstinate, and very strong; to subdue it is, it seems to me, more difficult than controlling the wind.',
              },
              {
                ref: '6.35',
                text: 'Lord Krishna said: O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible by constant practice and detachment.',
              },
            ],
          },
          {
            chapter: 7,
            title: 'Jnana Vijnana Yoga — The Yoga of Knowledge and Realization',
            summary:
              'Krishna reveals His divine nature and the two aspects of His energy — the material (lower) and spiritual (higher). He explains how the deluded are covered by maya and cannot recognize Him, while four types of virtuous people worship Him. Krishna declares Himself the supreme truth underlying all existence.',
            keyVerses: [
              {
                ref: '7.4-5',
                text: 'Earth, water, fire, air, ether, mind, intellect, and ego — these eight comprise My separated material energy. Beyond this is My superior spiritual energy, the living beings who sustain the universe.',
              },
              {
                ref: '7.7',
                text: 'O Arjuna, there is nothing whatsoever higher than Me. Everything rests upon Me, as pearls are strung on a thread.',
              },
              {
                ref: '7.14',
                text: 'This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who surrender unto Me can easily cross beyond it.',
              },
              {
                ref: '7.19',
                text: 'After many births and deaths, one who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes. Such a great soul is very rare.',
              },
            ],
          },
          {
            chapter: 8,
            title: 'Akshara Brahma Yoga — The Yoga of the Imperishable Brahman',
            summary:
              'Arjuna asks seven questions about Brahman, the self, karma, and the nature of death. Krishna explains the process of remembrance at the time of death, the cosmic cycles of creation and dissolution, and the two paths of departure — the path of light leading to liberation and the path of darkness leading to rebirth.',
            keyVerses: [
              {
                ref: '8.5',
                text: 'And whoever at the end of life quits the body remembering Me alone, at once attains My nature. Of this there is no doubt.',
              },
              {
                ref: '8.6',
                text: 'Whatever state of being one remembers when quitting the body, O son of Kunti, that state one will attain without fail.',
              },
              {
                ref: '8.15',
                text: 'After attaining Me, the great souls, who are yogis in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection.',
              },
              {
                ref: '8.20',
                text: 'Yet there is another unmanifested nature, which is eternal and transcendental to this manifested and unmanifested matter. It is supreme and is never annihilated. When all in this world is annihilated, that part remains as it is.',
              },
            ],
          },
          {
            chapter: 9,
            title: 'Raja Vidya Raja Guhya Yoga — The Yoga of Royal Knowledge and Royal Secret',
            summary:
              'Krishna reveals the most confidential knowledge — His supreme sovereignty over all creation. He explains how He pervades the entire universe yet remains transcendent. Even those of lower birth can attain the supreme destination through devotion. Krishna promises that whoever offers Him a leaf, flower, fruit, or water with love, He accepts it.',
            keyVerses: [
              {
                ref: '9.2',
                text: 'This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of dharma. It is everlasting, and it is joyfully performed.',
              },
              {
                ref: '9.22',
                text: 'To those who worship Me alone, thinking of no other, to those ever-united in devotion, I carry what they lack and preserve what they have.',
              },
              {
                ref: '9.26',
                text: 'If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it.',
              },
              {
                ref: '9.29',
                text: 'I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to them.',
              },
              {
                ref: '9.34',
                text: 'Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me, and worship Me. Being completely absorbed in Me, surely you will come to Me.',
              },
            ],
          },
          {
            chapter: 10,
            title: 'Vibhuti Yoga — The Yoga of Divine Glories',
            summary:
              'Krishna describes His divine opulences and manifestations. He explains that He is the source of all creation and that everything emanates from Him. He then lists His principal manifestations among various categories of beings and phenomena — He is Vishnu among the Adityas, the mind among the senses, the Himalayas among mountains, and the Ganges among rivers.',
            keyVerses: [
              {
                ref: '10.8',
                text: 'I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who perfectly know this engage in My devotional service and worship Me with all their hearts.',
              },
              {
                ref: '10.20',
                text: 'I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.',
              },
              {
                ref: '10.22',
                text: 'Of the Vedas I am the Sama Veda; of the demigods I am Indra; of the senses I am the mind; and in living beings I am the consciousness.',
              },
              {
                ref: '10.41',
                text: 'Know that whatever is endowed with glory, grace, or power is but a spark of My splendor.',
              },
            ],
          },
          {
            chapter: 11,
            title: 'Vishvarupa Darshana Yoga — The Yoga of the Vision of the Universal Form',
            summary:
              'Arjuna requests to see Krishna\'s universal form. Krishna grants him divine vision, and Arjuna beholds the entire cosmos — all beings, gods, and worlds — within Krishna\'s infinite body. Arjuna sees the warriors of both armies rushing into Krishna\'s terrible mouths and is both awestruck and terrified. He begs Krishna to return to His gentle form.',
            keyVerses: [
              {
                ref: '11.12',
                text: 'If a thousand suns were to blaze forth together in the sky, even that would not resemble the splendor of that mighty Being.',
              },
              {
                ref: '11.32',
                text: 'The Blessed Lord said: I am Time, the great destroyer of worlds, and I have come here to engage all people. With the exception of you Pandavas, all the soldiers here on both sides will be slain.',
              },
              {
                ref: '11.33',
                text: 'Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a prosperous kingdom. They are already put to death by My arrangement, and you, O Savyasachin, can be but an instrument in the fight.',
              },
              {
                ref: '11.55',
                text: 'My dear Arjuna, he who engages in My pure devotional service, free from the contaminations of fruitive activities and mental speculation, who works for Me, who makes Me the supreme goal of his life, and who is friendly to every living being — he certainly comes to Me.',
              },
            ],
          },
          {
            chapter: 12,
            title: 'Bhakti Yoga — The Yoga of Devotion',
            summary:
              'Arjuna asks whether it is better to worship the personal form of God or the impersonal Brahman. Krishna declares that devotees who worship His personal form with supreme faith are the most perfect in yoga. He then describes the qualities of the ideal devotee — compassionate, free from ego, equal in joy and sorrow, forgiving, and always content.',
            keyVerses: [
              {
                ref: '12.2',
                text: 'The Blessed Lord said: Those who fix their minds on My personal form and are always engaged in worshiping Me with great and transcendental faith are considered by Me to be most perfect.',
              },
              {
                ref: '12.8',
                text: 'Fix your mind on Me alone, let your intellect dwell in Me. You shall then live in Me alone; of this there is no doubt.',
              },
              {
                ref: '12.13-14',
                text: 'One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is always satisfied and engaged in devotional service with determination, his mind and intelligence fixed on Me — such a devotee is very dear to Me.',
              },
              {
                ref: '12.20',
                text: 'Those who follow this imperishable path of devotional service and who completely engage themselves with faith, making Me the supreme goal, are very, very dear to Me.',
              },
            ],
          },
          {
            chapter: 13,
            title: 'Kshetra Kshetrajna Vibhaga Yoga — The Yoga of the Field and the Knower of the Field',
            summary:
              'Krishna distinguishes between the "field" (the body and material nature) and the "knower of the field" (the soul and the Supreme Soul). He describes the elements that constitute the field, the qualities that lead to knowledge, and the distinction between Purusha (spirit) and Prakriti (matter). One who truly understands this distinction attains liberation.',
            keyVerses: [
              {
                ref: '13.2',
                text: 'This body, O son of Kunti, is called the field, and one who knows this body is called the knower of the field. This is the knowledge of those who know.',
              },
              {
                ref: '13.13',
                text: 'I shall declare that which is to be known, knowing which one attains immortality. Brahman, the Supreme, is beginningless and is said to be neither existent nor non-existent.',
              },
              {
                ref: '13.28',
                text: 'One who sees the Supreme Lord dwelling equally in all beings, the imperishable within the perishable, truly sees.',
              },
              {
                ref: '13.34',
                text: 'Those who thus perceive, with the eye of knowledge, the distinction between the field and the knower of the field, and the liberation of beings from material nature, attain the Supreme.',
              },
            ],
          },
          {
            chapter: 14,
            title: 'Gunatraya Vibhaga Yoga — The Yoga of the Three Gunas',
            summary:
              'Krishna explains the three gunas (qualities) of material nature — sattva (goodness), rajas (passion), and tamas (ignorance) — which bind the soul to the material world. He describes how each guna influences behavior, character, and destiny, and teaches how to transcend all three gunas to attain liberation and divine love.',
            keyVerses: [
              {
                ref: '14.5',
                text: 'Material nature consists of three gunas — goodness, passion, and ignorance. When the eternal living entity comes in contact with nature, O mighty-armed Arjuna, it becomes conditioned by these gunas.',
              },
              {
                ref: '14.10',
                text: 'Sometimes the mode of goodness prevails, defeating passion and ignorance. Sometimes passion prevails, defeating goodness and ignorance. And sometimes ignorance prevails, defeating goodness and passion. In this way there is constant competition for supremacy.',
              },
              {
                ref: '14.22-25',
                text: 'The Blessed Lord said: He who does not hate illumination, attachment, and delusion when they are present, nor longs for them when they disappear; who is seated as if indifferent, undisturbed by the gunas; who is firm, knowing that the gunas alone are active — he is said to have transcended the gunas.',
              },
              {
                ref: '14.26',
                text: 'One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman.',
              },
            ],
          },
          {
            chapter: 15,
            title: 'Purushottama Yoga — The Yoga of the Supreme Person',
            summary:
              'Krishna uses the metaphor of the sacred banyan tree (ashvattha) to describe the material world with its roots above and branches below. He teaches how to cut this tree of attachment with the weapon of detachment. Krishna then reveals Himself as Purushottama — the Supreme Person who transcends both the perishable and the imperishable.',
            keyVerses: [
              {
                ref: '15.1',
                text: 'The Blessed Lord said: It is said that there is an imperishable banyan tree that has its roots upward and its branches down, and whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.',
              },
              {
                ref: '15.7',
                text: 'The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.',
              },
              {
                ref: '15.15',
                text: 'I am seated in everyone\'s heart, and from Me come remembrance, knowledge, and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.',
              },
              {
                ref: '15.17',
                text: 'Besides these two, there is the greatest living personality, the Supreme Soul, the imperishable Lord Himself, who has entered the three worlds and is maintaining them.',
              },
            ],
          },
          {
            chapter: 16,
            title: 'Daivasura Sampad Vibhaga Yoga — The Yoga of the Division Between the Divine and the Demonic',
            summary:
              'Krishna enumerates the divine qualities (daivi sampat) such as fearlessness, purity, charity, self-control, and non-violence, and the demonic qualities (asuri sampat) such as hypocrisy, arrogance, anger, and cruelty. The divine qualities lead to liberation, while the demonic qualities lead to bondage. Krishna warns against lust, anger, and greed — the three gates to hell.',
            keyVerses: [
              {
                ref: '16.1-3',
                text: 'The Blessed Lord said: Fearlessness, purification of one\'s existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the Vedas, austerity, simplicity, nonviolence, truthfulness, freedom from anger, renunciation, tranquility, compassion for all living entities, freedom from covetousness, gentleness, modesty, and steady determination — these transcendental qualities belong to godly men endowed with divine nature.',
              },
              {
                ref: '16.4',
                text: 'Pride, arrogance, conceit, anger, harshness, and ignorance — these qualities belong to those of demonic nature, O son of Pritha.',
              },
              {
                ref: '16.21',
                text: 'There are three gates leading to hell — lust, anger, and greed. Every sane man should give these up, for they lead to the degradation of the soul.',
              },
              {
                ref: '16.24',
                text: 'One should therefore understand what is duty and what is not duty by the regulations of the scriptures. Knowing such rules and regulations, one should act so that one may gradually be elevated.',
              },
            ],
          },
          {
            chapter: 17,
            title: 'Shraddhatraya Vibhaga Yoga — The Yoga of the Threefold Division of Faith',
            summary:
              'Krishna explains the three types of faith corresponding to the three gunas and how they influence worship, food, sacrifice, austerity, and charity. He describes the significance of "Om Tat Sat" — the threefold designation of Brahman — and teaches that acts performed without faith are fruitless in this life and the next.',
            keyVerses: [
              {
                ref: '17.3',
                text: 'O Arjuna, the faith of each is in accordance with one\'s own nature. A person is known by their faith. As one\'s faith is, so one truly is.',
              },
              {
                ref: '17.8-10',
                text: 'Foods dear to those in the mode of goodness increase the duration of life, purify one\'s existence, and give strength, health, happiness, and satisfaction. Foods that are too bitter, too sour, salty, hot, pungent, dry, and burning are dear to those in the mode of passion and cause distress, misery, and disease.',
              },
              {
                ref: '17.20',
                text: 'Charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person is considered to be in the mode of goodness.',
              },
              {
                ref: '17.23',
                text: '"Om Tat Sat" — this has been declared as the triple designation of Brahman. By that were formerly ordained the brahmanas, the Vedas, and the sacrifices.',
              },
            ],
          },
          {
            chapter: 18,
            title: 'Moksha Sanyasa Yoga — The Yoga of Liberation through Renunciation',
            summary:
              'The concluding chapter synthesizes the entire teaching. Krishna distinguishes between renunciation (sannyasa) and relinquishment (tyaga), re-explains the three gunas in relation to knowledge, action, and the doer, and reveals the supreme secret of surrender. He urges Arjuna to abandon all varieties of dharma and simply surrender to Him, promising to deliver him from all sin. Arjuna\'s delusion is destroyed and he resolves to fight.',
            keyVerses: [
              {
                ref: '18.20',
                text: 'That knowledge by which one undivided spiritual nature is seen in all living entities, though they are divided into innumerable forms, you should understand to be in the mode of goodness.',
              },
              {
                ref: '18.54',
                text: 'One who is thus transcendentally situated at once realizes the Supreme Brahman and becomes fully joyful. He never laments or desires to have anything. He is equally disposed toward every living entity. In that state he attains pure devotional service unto Me.',
              },
              {
                ref: '18.61',
                text: 'The Supreme Lord is situated in everyone\'s heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.',
              },
              {
                ref: '18.66',
                text: 'Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.',
              },
              {
                ref: '18.78',
                text: 'Wherever there is Krishna, the master of all yogis, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '2.47',
            text: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.',
          },
          {
            ref: '2.22',
            text: 'As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.',
          },
          {
            ref: '4.7-8',
            text: 'Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth. To protect the righteous, to annihilate the wicked, and to re-establish the principles of dharma, I appear millennium after millennium.',
          },
          {
            ref: '9.22',
            text: 'To those who worship Me alone, thinking of no other, to those ever-united in devotion, I carry what they lack and preserve what they have.',
          },
          {
            ref: '11.32',
            text: 'I am Time, the great destroyer of worlds, and I have come here to engage all people.',
          },
          {
            ref: '18.66',
            text: 'Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. RIG VEDA — 10 Mandalas
  // ─────────────────────────────────────────────────────────────
  {
    id: 'rig-veda',
    religionId: 'hinduism',
    name: 'Rig Veda',
    originalName: 'ऋग्वेद',
    language: 'Vedic Sanskrit',
    description:
      'The Rig Veda is the oldest and most important of the four Vedas. It is a collection of 1,028 hymns (suktas) organized into ten books (mandalas), composed in Vedic Sanskrit. These hymns are dedicated to various deities — Indra, Agni, Soma, Varuna, and others — and contain philosophical speculations on the origin of the universe, the nature of the divine, and the cosmic order (Rita).',
    totalBooks: 10,
    totalChapters: '1,028 suktas',
    totalVerses: '10,552 mantras',
    period: 'c. 1500–1200 BCE',
    onlineSource: {
      label: 'Sacred-Texts.com',
      url: 'https://www.sacred-texts.com/hin/rigveda/',
    },
    books: [
      {
        id: 'rig-veda-mandala-1',
        name: 'Mandala 1',
        originalName: 'प्रथम मण्डल',
        chapters: '191 suktas',
        summary:
          'The first and one of the longest mandalas, containing hymns attributed to various rishis including Madhucchandas, Vishvamitra, and Dirghatamas. It addresses Agni (the fire god), Indra (king of gods), Varuna, the Ashvins, and others. It opens with a hymn to Agni, setting the liturgical tone for the entire collection.',
        themes: ['Agni worship', 'Indra\'s might', 'Cosmic order (Rita)', 'Sacrificial ritual', 'Dawn (Ushas)'],
        sections: [
          {
            chapter: '1.1',
            title: 'Hymn to Agni',
            summary: 'The very first hymn of the Rig Veda, an invocation to Agni as the divine priest, the invoker of the gods, and the bestower of wealth.',
            keyVerses: [
              {
                ref: '1.1.1',
                text: 'I praise Agni, the chosen priest, god, minister of sacrifice, the hotar, lavisher of wealth.',
              },
              {
                ref: '1.1.5',
                text: 'To thee, dispeller of the night, O Agni, day by day with prayer, bringing thee reverence, we come.',
              },
            ],
          },
          {
            chapter: '1.32',
            title: 'Indra\'s Slaying of Vritra',
            summary: 'The famous hymn recounting Indra\'s cosmic battle against the serpent-demon Vritra, who had imprisoned the waters. This is the central myth of the Rig Veda.',
            keyVerses: [
              {
                ref: '1.32.1',
                text: 'I will declare the manly deeds of Indra, the first that he achieved, the thunder-wielder. He slew the dragon, then disclosed the waters, and cleft the channels of the mountain torrents.',
              },
              {
                ref: '1.32.2',
                text: 'He slew the dragon lying on the mountain; his heavenly bolt of thunder Tvashtar fashioned. Like lowing cows in rapid flow descending, the waters glided downward to the ocean.',
              },
            ],
          },
          {
            chapter: '1.164',
            title: 'Riddle Hymn of Dirghatamas',
            summary: 'One of the most philosophically rich hymns of the Rig Veda, filled with cosmic riddles about the nature of speech, time, the sun, and ultimate reality.',
            keyVerses: [
              {
                ref: '1.164.20',
                text: 'Two birds, inseparable companions, perch on the same tree. One eats the fruit, the other looks on without eating.',
              },
              {
                ref: '1.164.46',
                text: 'They call it Indra, Mitra, Varuna, Agni, and it is the heavenly bird Garutman. To what is One, sages give many a name — they call it Agni, Yama, Matarishvan.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '1.1.1',
            text: 'I praise Agni, the chosen priest, god, minister of sacrifice, the hotar, lavisher of wealth.',
          },
          {
            ref: '1.164.46',
            text: 'They call it Indra, Mitra, Varuna, Agni, and it is the heavenly bird Garutman. To what is One, sages give many a name.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-2',
        name: 'Mandala 2',
        originalName: 'द्वितीय मण्डल',
        chapters: '43 suktas',
        summary:
          'Attributed to the sage Gritsamada and his family. Contains hymns to Indra, Agni, the Maruts (storm gods), and Brihaspati (lord of prayer). Notable for hymns praising the ritual fire and the power of sacred speech.',
        themes: ['Indra', 'Brihaspati', 'Maruts', 'Ritual invocations', 'Sacred speech'],
        sections: [
          {
            chapter: '2.12',
            title: 'Hymn to Indra — "He, O men, is Indra"',
            summary: 'A celebrated hymn cataloguing the mighty deeds of Indra, each verse ending with the refrain "He, O men, is Indra."',
            keyVerses: [
              {
                ref: '2.12.1',
                text: 'He who, just born, chief god of lofty spirit, by power and might became the gods\' protector, before whose breath through greatness of his valour the two worlds trembled — He, O men, is Indra.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '2.12.1',
            text: 'He who, just born, chief god of lofty spirit, by power and might became the gods\' protector — He, O men, is Indra.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-3',
        name: 'Mandala 3',
        originalName: 'तृतीय मण्डल',
        chapters: '62 suktas',
        summary:
          'Attributed to the sage Vishvamitra and his clan. This mandala contains the famous Gayatri Mantra (3.62.10), the most sacred mantra of Hinduism. It also includes hymns to Agni, Indra, and the Vishvedevas (all-gods).',
        themes: ['Gayatri Mantra', 'Agni', 'Indra', 'Vishvamitra\'s hymns', 'Solar worship'],
        sections: [
          {
            chapter: '3.62',
            title: 'The Gayatri Mantra',
            summary: 'Contains the most celebrated verse of all Vedic literature — the Gayatri Mantra, a meditation on the radiance of the divine sun (Savitar).',
            keyVerses: [
              {
                ref: '3.62.10',
                text: 'We meditate upon the glorious splendor of the divine Light (Savitar). May that Light illuminate our intellect.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '3.62.10',
            text: 'We meditate upon the glorious splendor of the divine Light (Savitar). May that Light illuminate our intellect. (Gayatri Mantra)',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-4',
        name: 'Mandala 4',
        originalName: 'चतुर्थ मण्डल',
        chapters: '58 suktas',
        summary:
          'Attributed to the sage Vamadeva. Contains hymns to Agni, Indra, the Ribhus (divine craftsmen), and hymns of cosmological speculation. Notable for its description of the celestial craftsmen and the mysteries of creation.',
        themes: ['Agni', 'Indra', 'Ribhus (divine artisans)', 'Cosmological hymns', 'Ritual praise'],
        sections: [
          {
            chapter: '4.26-27',
            title: 'Hymn of Vamadeva — "I was Manu and the Sun"',
            summary: 'A remarkable hymn in which the sage Vamadeva, attaining cosmic consciousness, identifies himself with the gods and all of creation.',
            keyVerses: [
              {
                ref: '4.26.1',
                text: 'I was Manu, I was the Sun. I am the wise sage Kakshivat. I have adorned the son of Kutsa, Arjuni. I am the seer Ushanas — behold me.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '4.26.1',
            text: 'I was Manu, I was the Sun. I am the wise sage Kakshivat.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-5',
        name: 'Mandala 5',
        originalName: 'पञ्चम मण्डल',
        chapters: '87 suktas',
        summary:
          'Attributed to the Atri family of sages. Contains extensive hymns to Agni, Indra, the Maruts, Mitra-Varuna, and the Vishvedevas. Notable for the Atri clan\'s devotional hymns and descriptions of natural phenomena.',
        themes: ['Atri family hymns', 'Agni', 'Maruts', 'Mitra and Varuna', 'Natural phenomena'],
        sections: [
          {
            chapter: '5.40',
            title: 'Eclipse Hymn of Atri',
            summary: 'A hymn describing a solar eclipse and the sage Atri\'s role in restoring the sun, demonstrating early astronomical observation.',
            keyVerses: [
              {
                ref: '5.40.5',
                text: 'O Surya, when the Asura\'s offspring Svarbhanu struck thee and hid with darkness, all creatures looked like one bewildered, not knowing where they stood.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '5.40.5',
            text: 'O Surya, when Svarbhanu struck thee and hid with darkness, all creatures looked like one bewildered.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-6',
        name: 'Mandala 6',
        originalName: 'षष्ठ मण्डल',
        chapters: '75 suktas',
        summary:
          'Attributed to the Bharadvaja family. Contains hymns to Agni, Indra, Pushan (god of journeys), and the Maruts. The Bharadvajas were a prominent priestly family, and their hymns reflect deep ritual knowledge.',
        themes: ['Bharadvaja family', 'Agni', 'Pushan', 'Indra', 'Ritual knowledge'],
        sections: [
          {
            chapter: '6.9',
            title: 'Hymn to Agni as the One God',
            summary: 'A hymn expressing an early form of monotheistic or henotheistic thought, describing Agni as the one divine principle appearing in many forms.',
            keyVerses: [
              {
                ref: '6.9.5',
                text: 'One is the fire, kindled in numerous ways; one is the sun, pervading all; one is the dawn, illuminating all. That which is One has become all this.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '6.9.5',
            text: 'One is the fire, kindled in numerous ways; one is the sun, pervading all. That which is One has become all this.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-7',
        name: 'Mandala 7',
        originalName: 'सप्तम मण्डल',
        chapters: '104 suktas',
        summary:
          'Attributed to the sage Vasishtha. Contains the famous Battle of the Ten Kings (Dasharajna) hymn, one of the earliest historical narratives in Indian literature. Also includes beautiful hymns to Varuna, Indra, and the goddess of dawn (Ushas).',
        themes: ['Vasishtha\'s hymns', 'Battle of Ten Kings', 'Varuna', 'Ushas (Dawn)', 'Historical narrative'],
        sections: [
          {
            chapter: '7.18',
            title: 'Battle of the Ten Kings (Dasharajna)',
            summary: 'One of the most historically significant hymns, describing King Sudas\' victory in the Battle of the Ten Kings on the banks of the river Parushni (Ravi), with the help of sage Vasishtha and god Indra.',
            keyVerses: [
              {
                ref: '7.18.5',
                text: 'Indra at once with conquering might demolished all their strong places and their seven castles. The goods of Anu\'s son he gave to Tritsu. May we in sacrifice conquer scorning Puru.',
              },
            ],
          },
          {
            chapter: '7.86',
            title: 'Vasishtha\'s Hymn to Varuna',
            summary: 'A deeply personal hymn in which Vasishtha confesses his sins to Varuna, the guardian of cosmic order, and seeks forgiveness — one of the most emotionally moving hymns in the Rig Veda.',
            keyVerses: [
              {
                ref: '7.86.2',
                text: 'Let me not yet, O Varuna, enter into the house of clay. Have mercy, spare me, mighty lord.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '7.86.2',
            text: 'Let me not yet, O Varuna, enter into the house of clay. Have mercy, spare me, mighty lord.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-8',
        name: 'Mandala 8',
        originalName: 'अष्टम मण्डल',
        chapters: '103 suktas',
        summary:
          'Attributed primarily to the Kanva family of sages. Contains hymns to Indra, Agni, the Ashvins (divine horsemen and healers), and Soma. Known for the Valakhilya hymns, a supplementary group of 11 hymns added later.',
        themes: ['Kanva family', 'Ashvins', 'Soma', 'Indra', 'Valakhilya hymns'],
        sections: [
          {
            chapter: '8.48',
            title: 'Hymn to Soma',
            summary: 'A celebrated hymn praising Soma, the divine elixir, and its power to grant immortality and divine vision.',
            keyVerses: [
              {
                ref: '8.48.3',
                text: 'We have drunk the Soma; we have become immortal; we have gone to the light; we have found the gods. What can hostility now do to us, and what the malice of mortal man, O immortal one?',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '8.48.3',
            text: 'We have drunk the Soma; we have become immortal; we have gone to the light; we have found the gods.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-9',
        name: 'Mandala 9',
        originalName: 'नवम मण्डल',
        chapters: '114 suktas',
        summary:
          'Entirely dedicated to Soma Pavamana (purified Soma). This unique mandala is organized by deity rather than by author family. The hymns describe the preparation and purification of the sacred Soma juice and its mystical, transformative power.',
        themes: ['Soma Pavamana', 'Purification rituals', 'Immortality', 'Divine intoxication', 'Mystical experience'],
        sections: [
          {
            chapter: '9.1',
            title: 'Hymn to Soma Pavamana',
            summary: 'Opening hymn to purified Soma, invoking the divine juice as it flows through the filter during the pressing ritual.',
            keyVerses: [
              {
                ref: '9.1.1',
                text: 'In sweetest and most gladdening stream, flow pure, O Soma, on thy way, pressed out for Indra, for his drink.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '9.1.1',
            text: 'In sweetest and most gladdening stream, flow pure, O Soma, on thy way, pressed out for Indra, for his drink.',
          },
        ],
      },
      {
        id: 'rig-veda-mandala-10',
        name: 'Mandala 10',
        originalName: 'दशम मण्डल',
        chapters: '191 suktas',
        summary:
          'The latest and most philosophically sophisticated mandala. Contains the famous Nasadiya Sukta (Hymn of Creation), the Purusha Sukta (Cosmic Man), hymns on the origin of speech, funeral hymns, marriage hymns, and dialogue hymns. It represents the pinnacle of Vedic philosophical speculation.',
        themes: ['Creation', 'Philosophy', 'Purusha (Cosmic Person)', 'Funeral rites', 'Speech and language', 'Cosmic speculation'],
        sections: [
          {
            chapter: '10.90',
            title: 'Purusha Sukta — Hymn of the Cosmic Person',
            summary: 'One of the most important hymns in all of Hindu scripture, describing the sacrifice of the primordial cosmic being (Purusha) from whose dismembered body the entire universe, including the four varnas, was created.',
            keyVerses: [
              {
                ref: '10.90.1',
                text: 'The Purusha (Cosmic Person) has a thousand heads, a thousand eyes, a thousand feet. He pervades the earth on every side and extends beyond it by ten fingers\' breadth.',
              },
              {
                ref: '10.90.2',
                text: 'The Purusha is all this — all that has been and all that is to be. He is the lord of immortality, and he grows greater still through food.',
              },
            ],
          },
          {
            chapter: '10.129',
            title: 'Nasadiya Sukta — Hymn of Creation',
            summary: 'The most celebrated philosophical hymn of the Rig Veda, questioning the origin of existence itself — whether even the gods know how creation came about. It is one of the earliest expressions of philosophical skepticism.',
            keyVerses: [
              {
                ref: '10.129.1',
                text: 'Then even nothingness was not, nor existence. There was no air then, nor the heavens beyond it. What covered it? Where was it? In whose keeping? Was there then cosmic water, in depths unfathomed?',
              },
              {
                ref: '10.129.6-7',
                text: 'Who really knows? Who will here proclaim it? Whence was it produced? Whence is this creation? The gods came afterwards, with the creation of this universe. Who then knows whence it has arisen? Whether God\'s will created it, or whether He was mute; perhaps it formed itself, or perhaps it did not — the one who looks down on it, in the highest heaven, only He knows — or perhaps He does not know.',
              },
            ],
          },
          {
            chapter: '10.191',
            title: 'Samjnana Sukta — Hymn of Unity',
            summary: 'The final hymn of the Rig Veda, a call for unity, harmony, and common purpose among all people.',
            keyVerses: [
              {
                ref: '10.191.2',
                text: 'Come together, speak together, let your minds be in harmony, as the gods of old together sat in harmony to worship.',
              },
              {
                ref: '10.191.4',
                text: 'One and common be your aspiration, united be your hearts, common be your mind — so that there may be thorough union among you.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: '10.129.1',
            text: 'Then even nothingness was not, nor existence. There was no air then, nor the heavens beyond it.',
          },
          {
            ref: '10.90.1',
            text: 'The Purusha has a thousand heads, a thousand eyes, a thousand feet. He pervades the earth on every side.',
          },
          {
            ref: '10.191.2',
            text: 'Come together, speak together, let your minds be in harmony.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. UPANISHADS — Major 13
  // ─────────────────────────────────────────────────────────────
  {
    id: 'upanishads',
    religionId: 'hinduism',
    name: 'Principal Upanishads',
    originalName: 'उपनिषद्',
    language: 'Sanskrit',
    description:
      'The Upanishads are the concluding portion of the Vedas (Vedanta) and form the philosophical foundation of Hinduism. They explore the nature of ultimate reality (Brahman), the individual soul (Atman), and their identity. The 13 principal Upanishads are considered the most authoritative and are commented upon by all major schools of Vedanta.',
    totalBooks: 13,
    totalChapters: 'Varies by Upanishad',
    totalVerses: 'Varies',
    period: 'c. 800–200 BCE',
    onlineSource: {
      label: 'Sacred-Texts.com',
      url: 'https://www.sacred-texts.com/hin/upan/',
    },
    books: [
      {
        id: 'isha-upanishad',
        name: 'Isha Upanishad',
        originalName: 'ईशोपनिषद्',
        chapters: 1,
        summary:
          'The shortest of the principal Upanishads with only 18 verses, yet one of the most profound. It opens with the declaration that the entire universe is pervaded by the Lord (Isha) and teaches the reconciliation of action and knowledge, the visible and the invisible, the mortal and the immortal.',
        themes: ['God pervading all', 'Detachment', 'Knowledge and ignorance', 'Immortality'],
        sections: [
          {
            chapter: 1,
            title: 'Complete Text',
            summary: 'Eighteen verses on the all-pervading nature of the Lord and the path to immortality through wisdom and renunciation.',
            keyVerses: [
              {
                ref: 'Isha 1',
                text: 'The Lord pervades all that exists in this universe. Renounce it and enjoy it. Do not covet the wealth of any man.',
              },
              {
                ref: 'Isha 6',
                text: 'He who sees all beings in the Self and the Self in all beings never shrinks from anything.',
              },
              {
                ref: 'Isha 7',
                text: 'When a man realizes that all beings are but the Self, what delusion, what sorrow can there be for that seer of oneness?',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Isha 1',
            text: 'The Lord pervades all that exists in this universe. Renounce it and enjoy it. Do not covet the wealth of any man.',
          },
        ],
      },
      {
        id: 'kena-upanishad',
        name: 'Kena Upanishad',
        originalName: 'केनोपनिषद्',
        chapters: 4,
        summary:
          'Named after its opening word "Kena" (by whom?), this Upanishad investigates the power behind all perception and cognition. It teaches that Brahman is the unseen seer, the unheard hearer, the unknown knower — the power behind all the senses and the mind. It includes the famous parable of Brahman humbling the gods.',
        themes: ['Source of consciousness', 'Brahman beyond perception', 'Humility of the gods', 'True knowledge'],
        sections: [
          {
            chapter: 1,
            title: 'The Question',
            summary: 'The student asks: Who directs the mind, the breath, the senses? The teacher reveals Brahman as the power behind all faculties.',
            keyVerses: [
              {
                ref: 'Kena 1.1',
                text: 'By whom directed does the mind go toward its objects? Commanded by whom does the vital breath proceed? At whose will do men utter speech? What god directs the eyes and ears?',
              },
              {
                ref: 'Kena 1.3',
                text: 'The eye does not go there, nor speech, nor mind. We do not know, we do not understand, how one can teach this.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Kena 1.1',
            text: 'By whom directed does the mind go toward its objects? Commanded by whom does the vital breath proceed?',
          },
        ],
      },
      {
        id: 'katha-upanishad',
        name: 'Katha Upanishad',
        originalName: 'कठोपनिषद्',
        chapters: 6,
        summary:
          'Set as a dialogue between the young boy Nachiketa and Yama (Death), this Upanishad explores the nature of death, the soul, and liberation. Yama teaches Nachiketa the secret of the self, the distinction between the pleasant (preya) and the good (shreya), and the famous analogy of the chariot representing the body, senses, and soul.',
        themes: ['Death and immortality', 'Atman', 'The pleasant vs. the good', 'The chariot analogy', 'Self-realization'],
        sections: [
          {
            chapter: 1,
            title: 'Nachiketa and Death',
            summary: 'Young Nachiketa arrives at the house of Death and receives three boons. For the third, he asks about the mystery of what happens after death.',
            keyVerses: [
              {
                ref: 'Katha 1.2.2',
                text: 'The good is one thing, the pleasant another. Both approach a man; the wise examines them and distinguishes between them. The wise prefers the good to the pleasant, but the fool chooses the pleasant through greed and avarice.',
              },
              {
                ref: 'Katha 1.2.20',
                text: 'The Atman, smaller than the small, greater than the great, is hidden in the hearts of all living creatures. A man who is free from desire beholds the majesty of the Self through the tranquility of the senses and the mind, and becomes free from grief.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'The Chariot Analogy',
            summary: 'Yama presents the famous analogy of the chariot, comparing the body to a chariot, the intellect to the charioteer, the mind to the reins, the senses to the horses, and the soul to the passenger.',
            keyVerses: [
              {
                ref: 'Katha 1.3.3-4',
                text: 'Know the Self as the lord of the chariot, the body as the chariot itself, the intellect as the charioteer, and the mind as the reins. The senses, they say, are the horses; the objects of the senses are the roads.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Katha 1.2.20',
            text: 'The Atman, smaller than the small, greater than the great, is hidden in the hearts of all living creatures.',
          },
          {
            ref: 'Katha 1.3.3',
            text: 'Know the Self as the lord of the chariot, the body as the chariot itself, the intellect as the charioteer, and the mind as the reins.',
          },
        ],
      },
      {
        id: 'prashna-upanishad',
        name: 'Prashna Upanishad',
        originalName: 'प्रश्नोपनिषद्',
        chapters: 6,
        summary:
          'Structured as six questions (prashna) posed by six students to the sage Pippalada. The questions address: the origin of beings, the vital forces (pranas), the nature of prana, dream and deep sleep, meditation on Om, and the sixteen parts of the Person (Purusha).',
        themes: ['Six questions', 'Prana (vital force)', 'Om meditation', 'Creation', 'Purusha'],
        sections: [
          {
            chapter: 1,
            title: 'First Question: Origin of Beings',
            summary: 'Kabandhi asks about the origin of creatures. Pippalada answers that Prajapati created a pair — Rayi (matter) and Prana (life-force).',
            keyVerses: [
              {
                ref: 'Prashna 1.4',
                text: 'Prajapati desired: "Let me multiply." He performed austerity. Having performed austerity, he created a pair — matter (rayi) and life (prana), thinking "These two will produce creatures for me in many ways."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Prashna 1.4',
            text: 'Prajapati created a pair — matter and life — thinking "These two will produce creatures for me in many ways."',
          },
        ],
      },
      {
        id: 'mundaka-upanishad',
        name: 'Mundaka Upanishad',
        originalName: 'मुण्डकोपनिषद्',
        chapters: 3,
        summary:
          'Distinguished for its clear distinction between higher knowledge (para vidya) of Brahman and lower knowledge (apara vidya) of rituals and sciences. It contains the famous metaphor of two birds on a tree and declares that Brahman is attained not by rituals or learning but by the one whom the Self chooses.',
        themes: ['Higher and lower knowledge', 'Two birds metaphor', 'Brahman as target', 'Grace and self-effort'],
        sections: [
          {
            chapter: 1,
            title: 'Higher and Lower Knowledge',
            summary: 'Distinguishes between lower knowledge (the four Vedas, phonetics, ritual, grammar, etc.) and higher knowledge by which the Imperishable is known.',
            keyVerses: [
              {
                ref: 'Mundaka 1.1.4-5',
                text: 'Two kinds of knowledge must be known — the higher and the lower. The lower knowledge is the Rig Veda, the Yajur Veda, the Sama Veda, the Atharva Veda, phonetics, ritual, grammar, etymology, meter, and astronomy. But the higher knowledge is that by which the Imperishable is apprehended.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'The Two Birds',
            summary: 'The famous parable of two birds perched on the same tree — one eats the fruit while the other simply watches, symbolizing the individual soul and the Supreme Self.',
            keyVerses: [
              {
                ref: 'Mundaka 3.1.1-2',
                text: 'Two birds, inseparable friends, cling to the same tree. One of them eats the sweet fruit; the other looks on without eating. On the same tree, the individual soul remains drowned in grief on account of its helplessness. But when it sees the other, the Lord, contented and knows His glory — then its grief passes away.',
              },
              {
                ref: 'Mundaka 3.2.3',
                text: 'The Self cannot be attained by the study of the Vedas, or by intelligence, or by much learning. It can be attained only by the one whom It chooses. To such a one the Self reveals Its own nature.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Mundaka 3.1.1',
            text: 'Two birds, inseparable friends, cling to the same tree. One eats the sweet fruit; the other looks on without eating.',
          },
          {
            ref: 'Mundaka 3.2.3',
            text: 'The Self cannot be attained by study of the Vedas, or by intelligence, or by much learning. It can be attained only by the one whom It chooses.',
          },
        ],
      },
      {
        id: 'mandukya-upanishad',
        name: 'Mandukya Upanishad',
        originalName: 'माण्डूक्योपनिषद्',
        chapters: 1,
        summary:
          'The shortest of the principal Upanishads with only 12 verses, yet Gaudapada and Shankara considered it the essence of Vedantic teaching. It analyzes the sacred syllable Om (AUM) and its correspondence to the four states of consciousness: waking, dreaming, deep sleep, and Turiya (the fourth, transcendental state).',
        themes: ['Om (AUM)', 'Four states of consciousness', 'Turiya', 'Atman is Brahman'],
        sections: [
          {
            chapter: 1,
            title: 'Complete Text — AUM and the Four States',
            summary: 'Analysis of the syllable AUM and its correspondence to waking (A), dreaming (U), deep sleep (M), and the transcendent fourth state (Turiya).',
            keyVerses: [
              {
                ref: 'Mandukya 1',
                text: 'Om — this syllable is the whole universe. Its further explanation is: the past, the present, the future — everything is just the word Om. And whatever else that transcends threefold time — that too is just the word Om.',
              },
              {
                ref: 'Mandukya 2',
                text: 'All this is Brahman. This Self (Atman) is Brahman. This same Self has four quarters.',
              },
              {
                ref: 'Mandukya 7',
                text: 'Turiya is not that which is conscious of the inner world, nor that which is conscious of the outer world, nor that which is conscious of both, nor that which is a mass of consciousness. It is unseen, transcendent, the sole essence of the consciousness of self, the cessation of all phenomena; it is peace, it is bliss, it is non-dual. This is the Atman, and this is to be realized.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Mandukya 2',
            text: 'All this is Brahman. This Self (Atman) is Brahman. This same Self has four quarters.',
          },
          {
            ref: 'Mandukya 7',
            text: 'Turiya is unseen, transcendent, the sole essence of consciousness of self, the cessation of all phenomena; it is peace, it is bliss, it is non-dual.',
          },
        ],
      },
      {
        id: 'taittiriya-upanishad',
        name: 'Taittiriya Upanishad',
        originalName: 'तैत्तिरीयोपनिषद्',
        chapters: 3,
        summary:
          'Divided into three sections (vallis): Shiksha Valli (education and phonetics), Brahmananda Valli (the bliss of Brahman and the five sheaths), and Bhrigu Valli (Bhrigu\'s progressive realization of Brahman). Famous for the doctrine of the five sheaths (pancha kosha) and the ecstatic exclamation on realizing Brahman.',
        themes: ['Five sheaths (koshas)', 'Bliss of Brahman', 'Education', 'Progressive realization', 'Brahman as bliss'],
        sections: [
          {
            chapter: 1,
            title: 'Shiksha Valli — Section on Education',
            summary: 'Teachings on phonetics, meditation on conjunctions, a teacher\'s instruction to departing students on dharma, truth, and self-study.',
            keyVerses: [
              {
                ref: 'Taittiriya 1.11.1',
                text: 'Speak the truth. Practice dharma. Do not neglect the study of the Vedas. Do not cut the thread of offspring. Do not swerve from truth. Do not swerve from dharma. Do not neglect your welfare. Do not neglect your prosperity. Do not neglect learning and teaching.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'Brahmananda Valli — Section on the Bliss of Brahman',
            summary: 'Description of the five sheaths (food, vital breath, mind, intellect, bliss) and the progressive bliss at each level culminating in Brahman.',
            keyVerses: [
              {
                ref: 'Taittiriya 2.1.1',
                text: 'Brahman is truth, knowledge, and infinity. He who knows Brahman hidden in the cave of the heart in the highest heaven realizes all desires together with the all-knowing Brahman.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Bhrigu Valli — Bhrigu\'s Realization',
            summary: 'The sage Bhrigu, taught by his father Varuna, progressively discovers that food, breath, mind, knowledge, and finally bliss are Brahman.',
            keyVerses: [
              {
                ref: 'Taittiriya 3.6.1',
                text: 'He understood that Bliss is Brahman. For truly, beings here are born from bliss, when born they live by bliss, and into bliss when departing they enter.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Taittiriya 2.1.1',
            text: 'Brahman is truth, knowledge, and infinity.',
          },
          {
            ref: 'Taittiriya 3.6.1',
            text: 'Bliss is Brahman. From bliss beings are born, by bliss they live, into bliss they enter.',
          },
        ],
      },
      {
        id: 'aitareya-upanishad',
        name: 'Aitareya Upanishad',
        originalName: 'ऐतरेयोपनिषद्',
        chapters: 3,
        summary:
          'Explores the process of creation, the entry of the self into the body, and the nature of consciousness (Prajnanam Brahma — "Consciousness is Brahman"). It describes how the Atman created the universe, entered into it, and how it manifests as the different levels of consciousness in beings.',
        themes: ['Creation', 'Consciousness (Prajnana)', 'Atman entering creation', 'Birth and rebirth'],
        sections: [
          {
            chapter: 1,
            title: 'Creation of the Universe',
            summary: 'The Atman, being alone, decided to create the worlds and then created the cosmic person, into whom the gods entered as sense faculties.',
            keyVerses: [
              {
                ref: 'Aitareya 1.1.1',
                text: 'In the beginning, the Self alone existed — nothing else whatsoever blinked. He thought: "Let me create the worlds."',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Consciousness is Brahman',
            summary: 'The culminating teaching that consciousness (prajnana) is the essence of all, the ground of the universe.',
            keyVerses: [
              {
                ref: 'Aitareya 3.1.3',
                text: 'Consciousness is Brahman (Prajnanam Brahma). It is consciousness that guides all. It is established in consciousness. Consciousness is Brahman.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Aitareya 3.1.3',
            text: 'Consciousness is Brahman (Prajnanam Brahma).',
          },
        ],
      },
      {
        id: 'chandogya-upanishad',
        name: 'Chandogya Upanishad',
        originalName: 'छान्दोग्योपनिषद्',
        chapters: 8,
        summary:
          'One of the oldest and largest Upanishads, belonging to the Sama Veda. Famous for the dialogue between Uddalaka Aruni and his son Shvetaketu, containing the great declaration "Tat Tvam Asi" (Thou art That) — repeated nine times. Also contains teachings on Om, the five fires, the honey doctrine, and the nature of the Self.',
        themes: ['Tat Tvam Asi', 'Om meditation', 'Five fires', 'Honey doctrine', 'Self-knowledge', 'Brahman as all'],
        sections: [
          {
            chapter: 1,
            title: 'Meditation on Om (Udgitha)',
            summary: 'Teaching on the sacred syllable Om as the essence of all the Vedas and the highest meditation.',
            keyVerses: [
              {
                ref: 'Chandogya 1.1.1',
                text: 'One should meditate on the syllable Om, the udgitha, for one sings the udgitha beginning with Om. The essence of all beings is earth; the essence of the earth is water; the essence of water is plants; the essence of plants is man; the essence of man is speech; the essence of speech is the Rig Veda; the essence of the Rig Veda is the Sama Veda; the essence of the Sama Veda is the udgitha — which is Om.',
              },
            ],
          },
          {
            chapter: 6,
            title: 'Tat Tvam Asi — "Thou Art That"',
            summary: 'The famous dialogue between the sage Uddalaka Aruni and his son Shvetaketu, culminating in the great Mahavakya "Tat Tvam Asi" — the identity of the individual self with the ultimate reality.',
            keyVerses: [
              {
                ref: 'Chandogya 6.2.1',
                text: 'In the beginning, dear one, this was Being alone, one only without a second. Some say that in the beginning this was non-being alone, one only without a second. But how could that be? How could being arise from non-being?',
              },
              {
                ref: 'Chandogya 6.8.7',
                text: 'That which is the finest essence — this whole world has that as its soul. That is Reality. That is the Self. That art thou, Shvetaketu (Tat Tvam Asi).',
              },
              {
                ref: 'Chandogya 6.12.3',
                text: '"Place this salt in water and come to me in the morning." He did so. The father said: "Sip from the surface. How is it?" "Salty." "Sip from the middle. How is it?" "Salty." "Sip from the bottom. How is it?" "Salty." "Though you do not see it, the subtle essence pervades the whole — and that is the Self. That art thou, Shvetaketu."',
              },
            ],
          },
          {
            chapter: 3,
            title: 'The Honey Doctrine (Madhu Vidya)',
            summary: 'A teaching that the sun is the honey of the gods, and that all elements of creation are interconnected as parts of a cosmic whole.',
            keyVerses: [
              {
                ref: 'Chandogya 3.14.1',
                text: 'Verily, all this is Brahman. One should meditate on it calmly as that from which one came forth, as that into which one will be dissolved, as that in which one breathes.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Chandogya 6.8.7',
            text: 'That which is the finest essence — this whole world has that as its soul. That is Reality. That is the Self. That art thou, Shvetaketu (Tat Tvam Asi).',
          },
          {
            ref: 'Chandogya 3.14.1',
            text: 'Verily, all this is Brahman. One should meditate on it calmly.',
          },
        ],
      },
      {
        id: 'brihadaranyaka-upanishad',
        name: 'Brihadaranyaka Upanishad',
        originalName: 'बृहदारण्यकोपनिषद्',
        chapters: 6,
        summary:
          'The largest and oldest Upanishad, belonging to the Shukla Yajur Veda. Contains the teachings of the great sage Yajnavalkya, including his debates in King Janaka\'s court, dialogues with his wife Maitreyi, and the famous Mahavakya "Aham Brahmasmi" (I am Brahman). It covers creation, the nature of the self, karma, and liberation.',
        themes: ['Aham Brahmasmi', 'Yajnavalkya\'s teaching', 'Neti-neti', 'Self-knowledge', 'Maitreyi dialogue', 'Janaka\'s court'],
        sections: [
          {
            chapter: 1,
            title: 'Ashvamedha (Horse Sacrifice) and Creation',
            summary: 'Opens with a mystical interpretation of the horse sacrifice and a creation narrative — in the beginning, there was only the Self, which created the universe out of itself.',
            keyVerses: [
              {
                ref: 'Brihadaranyaka 1.3.28',
                text: 'Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality. (Asato ma sadgamaya, tamaso ma jyotirgamaya, mrityor ma amritam gamaya.)',
              },
              {
                ref: 'Brihadaranyaka 1.4.10',
                text: 'I am Brahman (Aham Brahmasmi). Whoever knows thus — "I am Brahman" — becomes this whole universe. Even the gods cannot prevent his becoming so, for he has become their Self.',
              },
            ],
          },
          {
            chapter: 2,
            title: 'Maitreyi Dialogue',
            summary: 'The sage Yajnavalkya, about to renounce the world, teaches his wife Maitreyi about the nature of the Self and love — that all love is ultimately love of the Self.',
            keyVerses: [
              {
                ref: 'Brihadaranyaka 2.4.5',
                text: 'Verily, not for the sake of the husband is the husband dear, but for the sake of the Self is the husband dear. Not for the sake of the wife is the wife dear, but for the sake of the Self is the wife dear. Not for the sake of all is all dear, but for the sake of the Self is all dear.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Yajnavalkya in Janaka\'s Court — Neti Neti',
            summary: 'Yajnavalkya debates and defeats all other sages in King Janaka\'s court, teaching the nature of Brahman through the method of negation (neti neti — "not this, not this").',
            keyVerses: [
              {
                ref: 'Brihadaranyaka 3.9.26',
                text: 'That Self is described as "not this, not this" (neti, neti). It is incomprehensible, for it is not comprehended; indestructible, for it is never destroyed; unattached, for it does not attach itself; unfettered, for it does not suffer and is not injured.',
              },
            ],
          },
          {
            chapter: 4,
            title: 'Teaching to King Janaka',
            summary: 'Yajnavalkya\'s private teachings to King Janaka about the nature of Brahman, the states of consciousness, and the nature of the self in deep sleep.',
            keyVerses: [
              {
                ref: 'Brihadaranyaka 4.4.5',
                text: 'You are what your deep, driving desire is. As your desire is, so is your will. As your will is, so is your deed. As your deed is, so is your destiny.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Brihadaranyaka 1.3.28',
            text: 'Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality.',
          },
          {
            ref: 'Brihadaranyaka 1.4.10',
            text: 'I am Brahman (Aham Brahmasmi).',
          },
          {
            ref: 'Brihadaranyaka 4.4.5',
            text: 'You are what your deep, driving desire is. As your desire is, so is your will. As your will is, so is your deed. As your deed is, so is your destiny.',
          },
        ],
      },
      {
        id: 'shvetashvatara-upanishad',
        name: 'Shvetashvatara Upanishad',
        originalName: 'श्वेताश्वतरोपनिषद्',
        chapters: 6,
        summary:
          'Named after the sage Shvetashvatara, this Upanishad is unique for combining personal theism with Vedantic non-dualism. It presents God (referred to as Rudra/Shiva) as the supreme personal being who creates, sustains, and dissolves the universe. It also introduces concepts of maya, grace, and devotion alongside Upanishadic knowledge.',
        themes: ['Personal God (Rudra/Shiva)', 'Maya', 'Grace (prasada)', 'Yoga', 'Devotion and knowledge'],
        sections: [
          {
            chapter: 1,
            title: 'The Cosmic Question',
            summary: 'Sages ask: What is the cause of the universe? Is it Brahman, time, nature, necessity, chance, the elements, or a person? The answer points to the power of God hidden by His own maya.',
            keyVerses: [
              {
                ref: 'Shvetashvatara 1.1',
                text: 'The seekers of Brahman ask: What is the cause? Is it Brahman? Whence are we born? Whereby do we live? And on what are we established?',
              },
            ],
          },
          {
            chapter: 3,
            title: 'The Supreme Lord',
            summary: 'Describes the supreme Person (Purusha) as the one God who pervades all and is the inner self of all beings.',
            keyVerses: [
              {
                ref: 'Shvetashvatara 3.8',
                text: 'I know that great Person of the brightness of the sun beyond the darkness. Only by knowing Him does one pass over death. There is no other path to go.',
              },
            ],
          },
          {
            chapter: 6,
            title: 'God, Nature, and the Soul',
            summary: 'Reveals the Lord as the creator of all, the source of the Vedas, and the one who grants liberation through knowledge and grace.',
            keyVerses: [
              {
                ref: 'Shvetashvatara 6.23',
                text: 'These truths, when taught, shine forth only in that high-souled one who has supreme devotion to God, and an equal devotion to the spiritual teacher. They shine forth in that high-souled one only.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Shvetashvatara 3.8',
            text: 'I know that great Person of the brightness of the sun beyond the darkness. Only by knowing Him does one pass over death.',
          },
          {
            ref: 'Shvetashvatara 6.23',
            text: 'These truths shine forth in one who has supreme devotion to God and equal devotion to the teacher.',
          },
        ],
      },
      {
        id: 'kaushitaki-upanishad',
        name: 'Kaushitaki Upanishad',
        originalName: 'कौषीतकि उपनिषद्',
        chapters: 4,
        summary:
          'Named after the sage Kaushitaki, this Upanishad discusses the path of the soul after death, the nature of Brahman as pure consciousness, and the importance of prana (life-breath). It includes a dialogue between the sage Ajatashatru and the brahmin Gargya on the nature of the self.',
        themes: ['Path after death', 'Prana (life-breath)', 'Consciousness', 'Brahman realization', 'Ajatashatru dialogue'],
        sections: [
          {
            chapter: 1,
            title: 'Path of the Soul After Death',
            summary: 'Describes the journey of the departing soul along the path of the gods (devayana) to Brahman.',
            keyVerses: [
              {
                ref: 'Kaushitaki 1.2',
                text: 'On reaching the moon, the soul is asked: "Who are you?" One should answer: "I am you." Then the moon lets the soul pass onward to the world of Brahman.',
              },
            ],
          },
          {
            chapter: 3,
            title: 'Brahman as Consciousness',
            summary: 'Teaches that prana and prajna (consciousness) are inseparable and that through consciousness one attains Brahman.',
            keyVerses: [
              {
                ref: 'Kaushitaki 3.3',
                text: 'Speech is not what one should seek to know; one should know the speaker. Sight is not what one should seek to know; one should know the seer. One should know the Self, the knower.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Kaushitaki 3.3',
            text: 'Speech is not what one should seek to know; one should know the speaker. One should know the Self, the knower.',
          },
        ],
      },
      {
        id: 'maitri-upanishad',
        name: 'Maitri Upanishad',
        originalName: 'मैत्र्युपनिषद्',
        chapters: 7,
        summary:
          'Also known as Maitrayaniya Upanishad, this is one of the later principal Upanishads. It synthesizes earlier Upanishadic thought and introduces concepts that bridge Vedanta, Samkhya, and Yoga philosophies. King Brihadratha renounces his kingdom to seek truth from the sage Shakayanya, who teaches about the nature of the self, the three gunas, time, and meditation.',
        themes: ['Synthesis of philosophies', 'Three gunas', 'Time', 'Meditation', 'Renunciation', 'Inner self'],
        sections: [
          {
            chapter: 1,
            title: 'King Brihadratha\'s Renunciation',
            summary: 'King Brihadratha reflects on the impermanence of the world and seeks spiritual instruction from the sage Shakayanya.',
            keyVerses: [
              {
                ref: 'Maitri 1.4',
                text: 'In this ill-smelling, unsubstantial body, which is a mass of bone, skin, sinew, muscle, marrow, flesh, blood, mucus, tears, rheum, feces, urine, wind, bile, and phlegm — what is the good of enjoyment of desires? In this body, which is afflicted with desire, anger, greed, delusion, fear, despondency, envy, separation from the desired, union with the undesired, hunger, thirst, old age, death, disease, sorrow, and the like — what is the good of enjoyment of desires?',
              },
            ],
          },
          {
            chapter: 6,
            title: 'Meditation and the Inner Self',
            summary: 'Teaching on meditation, the nature of the inner self, and the realization that the self within is identical with the supreme Brahman.',
            keyVerses: [
              {
                ref: 'Maitri 6.17',
                text: 'In the beginning, Brahman was all this. He was one, and infinite — infinite in the East, infinite in the South, infinite in the West, infinite in the North, above and below and everywhere infinite. For Him, east and the other directions exist not, nor across, nor below, nor above.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Maitri 6.17',
            text: 'In the beginning, Brahman was all this. He was one, and infinite — infinite in every direction.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. RAMAYANA — 7 Kandas
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ramayana',
    religionId: 'hinduism',
    name: 'Ramayana',
    originalName: 'रामायणम्',
    language: 'Sanskrit',
    description:
      'The Ramayana, composed by the sage Valmiki, is one of the two great Indian epics. It narrates the life and journey of Prince Rama of Ayodhya — his exile to the forest, the abduction of his wife Sita by the demon-king Ravana, and his war to rescue her with the help of the monkey-god Hanuman and the vanara army. It is a profound exploration of dharma, devotion, loyalty, and the ideal life.',
    totalBooks: 7,
    totalChapters: '500 sargas (cantos)',
    totalVerses: '24,000 shlokas',
    period: 'c. 500 BCE – 100 BCE',
    onlineSource: {
      label: 'Sacred-Texts.com',
      url: 'https://www.sacred-texts.com/hin/rama/',
    },
    books: [
      {
        id: 'ramayana-bala-kanda',
        name: 'Bala Kanda',
        originalName: 'बालकाण्ड',
        chapters: '77 sargas',
        summary:
          'The Book of Youth. Narrates the birth and childhood of Rama and his three brothers in Ayodhya. The sage Vishvamitra takes young Rama and Lakshmana to protect his sacrifice from demons. Rama slays the demoness Tataka, receives celestial weapons, and wins Sita\'s hand by breaking Lord Shiva\'s great bow at her swayamvara in Mithila.',
        themes: ['Divine birth', 'Youth and training', 'Rama\'s valor', 'Swayamvara of Sita', 'Guru-disciple relationship'],
        sections: [
          {
            chapter: 1,
            title: 'Valmiki and the Origin of the Ramayana',
            summary: 'The sage Narada narrates Rama\'s story to Valmiki. Moved by the sight of a hunter killing a mating bird, Valmiki composes the first shloka of poetry, and Brahma instructs him to compose the Ramayana.',
            keyVerses: [
              {
                ref: 'Bala Kanda 1.2.14',
                text: 'O hunter, since you have slain one of this pair of birds at the height of their passion, you shall find no rest for endless years. (Ma nishada pratistham tvam — the first shloka of Sanskrit poetry)',
              },
            ],
          },
          {
            chapter: 66,
            title: 'Rama Breaks the Bow',
            summary: 'At King Janaka\'s court in Mithila, Rama lifts and strings the great bow of Shiva, which no other prince could even move, winning Sita\'s hand in marriage.',
            keyVerses: [
              {
                ref: 'Bala Kanda 1.66',
                text: 'Rama grasped the great bow of Shiva, strung it effortlessly, and drew it to its full extent. The mighty bow snapped in two with a sound like the crash of thunder, and the earth trembled.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Bala Kanda 1.2.14',
            text: 'Ma nishada — the first shloka of Sanskrit poetry, born from Valmiki\'s compassion.',
          },
        ],
      },
      {
        id: 'ramayana-ayodhya-kanda',
        name: 'Ayodhya Kanda',
        originalName: 'अयोध्याकाण्ड',
        chapters: '119 sargas',
        summary:
          'The Book of Ayodhya. King Dasharatha prepares Rama\'s coronation, but Queen Kaikeyi, manipulated by her maid Manthara, demands that Rama be exiled for fourteen years and her son Bharata be crowned instead. Bound by his word, Dasharatha agrees with a broken heart. Rama accepts exile with equanimity. Sita and Lakshmana insist on accompanying him. Dasharatha dies of grief. Bharata refuses the throne and rules as Rama\'s regent, placing Rama\'s sandals on the throne.',
        themes: ['Dharma and duty', 'Sacrifice', 'Filial obedience', 'Grief of separation', 'Bharata\'s devotion'],
        sections: [
          {
            chapter: 19,
            title: 'Rama Accepts Exile',
            summary: 'Rama learns of his exile and accepts it calmly, demonstrating perfect adherence to dharma and respect for his father\'s word.',
            keyVerses: [
              {
                ref: 'Ayodhya Kanda 2.19.7',
                text: 'If my father has pledged this to you in accordance with dharma, I shall certainly carry it out. Let Bharata rule. I shall retire to the forest wearing bark garments and matted hair.',
              },
            ],
          },
          {
            chapter: 112,
            title: 'Bharata Places Rama\'s Sandals on the Throne',
            summary: 'Bharata, unable to persuade Rama to return, takes Rama\'s sandals to Ayodhya and places them on the throne, ruling as Rama\'s regent for fourteen years from the village of Nandigrama.',
            keyVerses: [
              {
                ref: 'Ayodhya Kanda 2.112',
                text: 'Bharata placed Rama\'s golden sandals on the throne and declared: "I shall live as an ascetic at Nandigrama, awaiting your return. If you do not return at the end of fourteen years, I shall enter fire."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Ayodhya Kanda 2.19.7',
            text: 'Rama said: I shall certainly carry out my father\'s pledge. Let Bharata rule.',
          },
        ],
      },
      {
        id: 'ramayana-aranya-kanda',
        name: 'Aranya Kanda',
        originalName: 'आरण्यकाण्ड',
        chapters: '75 sargas',
        summary:
          'The Book of the Forest. Rama, Sita, and Lakshmana live in the Dandaka forest, encountering sages and demons. Rama destroys the demon Khara and his army. Surpanakha, Ravana\'s sister, is disfigured by Lakshmana after she attacks Sita. Enraged, Ravana plots revenge. Using the golden deer (Maricha) as a decoy, Ravana abducts Sita while Rama is away. The great vulture Jatayu fights Ravana heroically but is mortally wounded.',
        themes: ['Forest life', 'Encounters with demons', 'Sita\'s abduction', 'Jatayu\'s sacrifice', 'Surpanakha\'s revenge'],
        sections: [
          {
            chapter: 46,
            title: 'The Golden Deer and Sita\'s Abduction',
            summary: 'Maricha, disguised as a golden deer, lures Rama away. Ravana appears disguised as an ascetic and carries Sita away in his aerial chariot to Lanka.',
            keyVerses: [
              {
                ref: 'Aranya Kanda 3.47',
                text: 'Sita said to Ravana in disguise: "My husband is Rama, son of Dasharatha, famed throughout the world for His righteousness. I am Sita, daughter of Janaka. You should not think of harming me."',
              },
            ],
          },
          {
            chapter: 68,
            title: 'Jatayu\'s Sacrifice',
            summary: 'The aged vulture king Jatayu fights Ravana to protect Sita but is fatally wounded. He lives long enough to tell Rama of Sita\'s abduction before dying in Rama\'s arms.',
            keyVerses: [
              {
                ref: 'Aranya Kanda 3.68',
                text: 'The dying Jatayu spoke to Rama: "O Rama, Sita has been taken southward by Ravana, the king of Lanka. Search in that direction. I have fought him with my last breath."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Aranya Kanda 3.68',
            text: 'Jatayu spoke his last words to Rama: "Sita has been taken by Ravana toward the south."',
          },
        ],
      },
      {
        id: 'ramayana-kishkindha-kanda',
        name: 'Kishkindha Kanda',
        originalName: 'किष्किन्धाकाण्ड',
        chapters: '67 sargas',
        summary:
          'The Book of Kishkindha. Rama and Lakshmana reach the Rishyamukha mountain and form an alliance with the exiled vanara (monkey) king Sugriva and his minister Hanuman. Rama helps Sugriva defeat his brother Vali and reclaim his kingdom. In return, Sugriva sends search parties in all directions to find Sita. The southern party, led by Angada and guided by Hanuman, learns from the dying vulture Sampati that Sita is held in Lanka across the ocean.',
        themes: ['Rama-Sugriva alliance', 'Vali\'s death', 'Hanuman\'s emergence', 'Search for Sita', 'Friendship and loyalty'],
        sections: [
          {
            chapter: 4,
            title: 'Meeting Hanuman',
            summary: 'Rama and Lakshmana meet Hanuman for the first time. Hanuman, disguised as a brahmachari, greets them, and Rama is deeply impressed by his speech and devotion.',
            keyVerses: [
              {
                ref: 'Kishkindha Kanda 4.3',
                text: 'Rama said to Lakshmana: "Whoever this person may be, he is a master of the Rig Veda, the Yajur Veda, and the Sama Veda. He has studied grammar thoroughly, for his speech is flawless."',
              },
            ],
          },
          {
            chapter: 18,
            title: 'The Death of Vali',
            summary: 'Rama kills Vali during his duel with Sugriva, restoring the kingdom of Kishkindha to Sugriva. Vali\'s death raises moral questions about Rama\'s method.',
            keyVerses: [
              {
                ref: 'Kishkindha Kanda 4.18',
                text: 'Rama explained to the dying Vali: "You have transgressed dharma by taking your brother\'s wife and kingdom. As a king who upholds dharma, it was my duty to punish you."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Kishkindha Kanda 4.3',
            text: 'Rama praised Hanuman\'s mastery of the Vedas and flawless speech upon their first meeting.',
          },
        ],
      },
      {
        id: 'ramayana-sundara-kanda',
        name: 'Sundara Kanda',
        originalName: 'सुन्दरकाण्ड',
        chapters: '68 sargas',
        summary:
          'The Beautiful Book — considered the heart of the Ramayana and the most spiritually potent section. It is devoted entirely to Hanuman\'s heroic leap across the ocean to Lanka, his search for Sita, his discovery of her in the Ashoka grove, his delivering of Rama\'s ring and message, his capture and the burning of Lanka, and his triumphant return. It celebrates Hanuman\'s devotion, courage, intelligence, and humility.',
        themes: ['Hanuman\'s devotion', 'Courage and strength', 'Hope and faith', 'Sita\'s steadfastness', 'Lanka burning'],
        sections: [
          {
            chapter: 1,
            title: 'Hanuman\'s Leap Across the Ocean',
            summary: 'Hanuman expands to an enormous size and leaps across the ocean to Lanka, overcoming obstacles sent by various beings along the way.',
            keyVerses: [
              {
                ref: 'Sundara Kanda 5.1',
                text: 'Then the mighty Hanuman, son of the Wind God, the greatest among those who could leap, sprang forth from the mountain peak toward Lanka, his mind set upon Rama\'s mission.',
              },
            ],
          },
          {
            chapter: 33,
            title: 'Hanuman Finds Sita',
            summary: 'Hanuman discovers Sita in the Ashoka grove, surrounded by rakshasa guards, thin with fasting but unwavering in her devotion to Rama.',
            keyVerses: [
              {
                ref: 'Sundara Kanda 5.33',
                text: 'There Hanuman saw Sita, emaciated by fasting, sorrowful, yet radiant with devotion to her lord Rama, like a flame dimmed by smoke but not extinguished.',
              },
            ],
          },
          {
            chapter: 36,
            title: 'Hanuman Delivers Rama\'s Message',
            summary: 'Hanuman reveals himself to Sita, presents Rama\'s ring, and assures her of rescue. Sita gives Hanuman her jewel as a token for Rama.',
            keyVerses: [
              {
                ref: 'Sundara Kanda 5.36',
                text: 'Hanuman said to Sita: "O noble queen, I am Hanuman, the messenger of Rama. He is well and will come to you soon with a great army. Take heart, for your sufferings shall end."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Sundara Kanda 5.1',
            text: 'The mighty Hanuman sprang from the mountain peak toward Lanka, his mind set upon Rama\'s mission.',
          },
          {
            ref: 'Sundara Kanda 5.33',
            text: 'Hanuman saw Sita — emaciated but radiant with devotion, like a flame dimmed by smoke but not extinguished.',
          },
        ],
      },
      {
        id: 'ramayana-yuddha-kanda',
        name: 'Yuddha Kanda',
        originalName: 'युद्धकाण्ड',
        chapters: '128 sargas',
        summary:
          'The Book of War. Rama\'s vanara army builds a bridge (Rama Setu) across the ocean to Lanka. A massive battle ensues between the forces of Rama and Ravana. Ravana\'s brother Vibhishana defects to Rama\'s side. Great warriors on both sides fall — Kumbhakarna, Indrajit, and finally Ravana himself is slain by Rama. Sita undergoes the trial by fire (Agni Pariksha) to prove her purity. Rama is crowned king of Ayodhya, ushering in Rama Rajya — the ideal reign.',
        themes: ['Dharma vs. adharma', 'Bridge to Lanka', 'Great battle', 'Ravana\'s fall', 'Sita\'s ordeal', 'Rama Rajya'],
        sections: [
          {
            chapter: 22,
            title: 'Building the Bridge to Lanka',
            summary: 'Nala, the divine architect among the vanaras, builds a bridge across the ocean to Lanka with the help of the vanara army, each stone floating because Rama\'s name is written upon it.',
            keyVerses: [
              {
                ref: 'Yuddha Kanda 6.22',
                text: 'The vanaras built the great bridge across the ocean, placing rocks and trees upon the waters. By the grace of Rama, the stones floated on the sea, and the bridge stretched from shore to shore.',
              },
            ],
          },
          {
            chapter: 111,
            title: 'Ravana\'s Death',
            summary: 'After a fierce battle lasting many days, Rama slays the ten-headed Ravana with the Brahmastra, ending the reign of terror over the three worlds.',
            keyVerses: [
              {
                ref: 'Yuddha Kanda 6.111',
                text: 'Rama took up the great Brahma weapon, consecrated it with Vedic mantras, and released it at Ravana. The weapon, blazing like the fire of cosmic dissolution, struck Ravana in the chest, and the lord of Lanka fell lifeless from his chariot.',
              },
            ],
          },
          {
            chapter: 116,
            title: 'Sita\'s Trial by Fire',
            summary: 'After her rescue, Rama asks Sita to prove her purity. Sita enters the fire, and Agni, the fire god, returns her unharmed, testifying to her fidelity.',
            keyVerses: [
              {
                ref: 'Yuddha Kanda 6.116',
                text: 'Sita said: "O fire, if I have been faithful to Rama in thought, word, and deed, then protect me." She entered the blazing fire, and Agni arose, bearing Sita unharmed, declaring her purity before all.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Yuddha Kanda 6.111',
            text: 'Rama released the Brahma weapon at Ravana, and the lord of Lanka fell lifeless from his chariot.',
          },
          {
            ref: 'Yuddha Kanda 6.116',
            text: 'Sita entered the fire and Agni bore her unharmed, declaring her purity.',
          },
        ],
      },
      {
        id: 'ramayana-uttara-kanda',
        name: 'Uttara Kanda',
        originalName: 'उत्तरकाण्ड',
        chapters: '111 sargas',
        summary:
          'The Last Book. Chronicles events after Rama\'s coronation — the history of Ravana and his family, Rama\'s rule as the ideal king (Rama Rajya), and the tragic exile of Sita due to public rumor. Sita takes refuge in Valmiki\'s ashram, where she gives birth to twins Lava and Kusha. The twins learn and recite the Ramayana. Sita, asked to prove her purity once more, calls upon Mother Earth, who opens up and receives her. Rama eventually departs from the world by entering the river Sarayu.',
        themes: ['Rama Rajya', 'Public duty vs. personal love', 'Sita\'s exile', 'Lava and Kusha', 'Departure and legacy'],
        sections: [
          {
            chapter: 48,
            title: 'Sita\'s Banishment',
            summary: 'Though personally convinced of Sita\'s purity, Rama sends her into exile to uphold his duty as king after hearing rumors among his subjects.',
            keyVerses: [
              {
                ref: 'Uttara Kanda 7.48',
                text: 'Rama, with anguish in his heart, said to Lakshmana: "The people speak ill of Sita. Though I know her to be pure, as a king I must uphold dharma. Take Sita to the forest near Valmiki\'s hermitage."',
              },
            ],
          },
          {
            chapter: 97,
            title: 'Sita Returns to the Earth',
            summary: 'When asked to undergo another trial, Sita calls upon the Earth, her mother, to receive her. The ground opens and Sita descends on a celestial throne, disappearing forever.',
            keyVerses: [
              {
                ref: 'Uttara Kanda 7.97',
                text: 'Sita said: "If I have been faithful to Rama in mind, word, and deed, let Mother Earth receive me." The earth opened, a divine throne arose, and the Earth Goddess received Sita into her bosom.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Uttara Kanda 7.97',
            text: 'Sita called upon Mother Earth, and the ground opened to receive her into its embrace.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. MAHABHARATA — 18 Parvas
  // ─────────────────────────────────────────────────────────────
  {
    id: 'mahabharata',
    religionId: 'hinduism',
    name: 'Mahabharata',
    originalName: 'महाभारतम्',
    language: 'Sanskrit',
    description:
      'The Mahabharata, attributed to the sage Vyasa, is the longest epic poem in the world with approximately 100,000 shlokas. It tells the story of the dynastic struggle between the five Pandava brothers and their one hundred Kaurava cousins for the throne of Hastinapura, culminating in the catastrophic Kurukshetra War. Within it lies the Bhagavad Gita and a vast collection of philosophy, law, mythology, and ethics. Vyasa himself declares: "What is found herein may be found elsewhere; what is not found herein exists nowhere."',
    totalBooks: 18,
    totalChapters: 'c. 2,000 chapters',
    totalVerses: 'c. 100,000 shlokas',
    period: 'c. 400 BCE – 400 CE (compilation)',
    onlineSource: {
      label: 'Sacred-Texts.com',
      url: 'https://www.sacred-texts.com/hin/maha/',
    },
    books: [
      {
        id: 'mahabharata-adi-parva',
        name: 'Adi Parva',
        originalName: 'आदिपर्व',
        chapters: '227 chapters',
        summary:
          'The Book of the Beginning. Introduces the Kuru dynasty, the births of the Pandavas and Kauravas, the childhood rivalries, Drona\'s military academy, Arjuna\'s unmatched archery skill, the house of lac plot to kill the Pandavas, their escape, Draupadi\'s swayamvara won by Arjuna, the marriage of Draupadi to all five Pandavas, and the division of the kingdom with the founding of Indraprastha.',
        themes: ['Origins of the Kuru dynasty', 'Pandava-Kaurava rivalry', 'Draupadi\'s swayamvara', 'Indraprastha', 'Karma and destiny'],
        sections: [
          {
            chapter: 1,
            title: 'Origins and Genealogy',
            summary: 'Narrates the story of the Bharata dynasty from its origins through the birth of Dhritarashtra, Pandu, and Vidura.',
            keyVerses: [
              {
                ref: 'Adi Parva 1.56.33',
                text: 'What is found herein may be found elsewhere; what is not found herein exists nowhere. (Yad ihasti tad anyatra, yan nehasti na tat kvachit.)',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Adi Parva 1.56.33',
            text: 'What is found herein may be found elsewhere; what is not found herein exists nowhere.',
          },
        ],
      },
      {
        id: 'mahabharata-sabha-parva',
        name: 'Sabha Parva',
        originalName: 'सभापर्व',
        chapters: '81 chapters',
        summary:
          'The Book of the Assembly Hall. The Pandavas build the magnificent assembly hall at Indraprastha. Yudhishthira performs the Rajasuya sacrifice. Duryodhana, humiliated by the illusions of the hall, plots revenge. Shakuni challenges Yudhishthira to the infamous game of dice, in which Yudhishthira loses his kingdom, his brothers, himself, and Draupadi. Draupadi is dragged into the assembly and publicly humiliated. The Pandavas are exiled for thirteen years.',
        themes: ['Game of dice', 'Draupadi\'s humiliation', 'Duryodhana\'s envy', 'Dharma\'s failure', 'Exile'],
        sections: [
          {
            chapter: 67,
            title: 'The Dice Game and Draupadi\'s Humiliation',
            summary: 'Yudhishthira loses everything in the dice game. Draupadi is dragged by her hair into the assembly and Dushasana tries to disrobe her. Krishna miraculously protects her.',
            keyVerses: [
              {
                ref: 'Sabha Parva 2.67',
                text: 'Draupadi cried out: "O elders of the Kuru assembly, I ask you one question: did Yudhishthira, having already lost himself, have the right to stake me? Answer me!" The hall fell silent, and no elder could answer.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Sabha Parva 2.67',
            text: 'Draupadi asked the silent assembly: "Did Yudhishthira, having lost himself, have the right to stake me?"',
          },
        ],
      },
      {
        id: 'mahabharata-vana-parva',
        name: 'Vana Parva',
        originalName: 'वनपर्व',
        chapters: '313 chapters',
        summary:
          'The Book of the Forest. The Pandavas spend twelve years in exile in the forests. This parva is the longest and contains many sub-stories, including the tale of Nala and Damayanti, the story of Savitri and Satyavan, Arjuna\'s penance to obtain divine weapons (Pashupatastra from Shiva), and the Yaksha Prashna — Yudhishthira\'s answers to the crane-spirit\'s riddles.',
        themes: ['Exile and endurance', 'Sub-stories and parables', 'Divine weapons', 'Dharma tested', 'Patience'],
        sections: [
          {
            chapter: 313,
            title: 'Yaksha Prashna — Questions of the Crane',
            summary: 'A mysterious yaksha (spirit) disguised as a crane challenges Yudhishthira with philosophical riddles before reviving his fallen brothers.',
            keyVerses: [
              {
                ref: 'Vana Parva 3.313',
                text: 'The Yaksha asked: "What is the greatest wonder?" Yudhishthira answered: "Day after day, countless beings enter the temple of death, yet those who remain behind believe themselves to be immortal. What can be a greater wonder than this?"',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Vana Parva 3.313',
            text: '"What is the greatest wonder?" — "Day after day, beings enter death, yet those remaining believe themselves immortal."',
          },
        ],
      },
      {
        id: 'mahabharata-virata-parva',
        name: 'Virata Parva',
        originalName: 'विराटपर्व',
        chapters: '72 chapters',
        summary:
          'The Book of Virata. The Pandavas spend their thirteenth year of exile in disguise at the court of King Virata. Yudhishthira serves as a courtier, Bhima as a cook, Arjuna as a dance teacher (Brihannala), Nakula as a horse trainer, Sahadeva as a cowherd, and Draupadi as a queen\'s maid. Their identities are nearly exposed when Kichaka harasses Draupadi and is killed by Bhima. The Kauravas attack Virata\'s kingdom and are repelled by Arjuna, revealing his identity at the end of the exile period.',
        themes: ['Disguise and identity', 'Patience in adversity', 'Kichaka incident', 'Arjuna\'s revelation', 'End of exile'],
        sections: [
          {
            chapter: 36,
            title: 'Arjuna Reveals Himself',
            summary: 'When the Kauravas attack Virata\'s kingdom, Arjuna casts off his disguise, takes up the Gandiva bow, and single-handedly defeats the entire Kaurava army.',
            keyVerses: [
              {
                ref: 'Virata Parva 4.36',
                text: 'Arjuna said: "I am Arjuna, son of Pandu. Let the Kauravas behold the Gandiva bow once again." He took up his weapons and the very gods watched from above as he drove back the hosts of Hastinapura.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Virata Parva 4.36',
            text: 'Arjuna cast off his disguise: "I am Arjuna, son of Pandu. Let the Kauravas behold the Gandiva bow."',
          },
        ],
      },
      {
        id: 'mahabharata-udyoga-parva',
        name: 'Udyoga Parva',
        originalName: 'उद्योगपर्व',
        chapters: '199 chapters',
        summary:
          'The Book of the Effort. Preparations for war begin. Krishna serves as a peace ambassador to the Kaurava court but Duryodhana refuses all compromise. Both sides form alliances and prepare their armies. Krishna gives Arjuna and Duryodhana the choice between His unarmed self and His vast army — Arjuna chooses Krishna, Duryodhana takes the army. Vidura, Bhishma, and Sanjaya make final attempts at peace.',
        themes: ['Diplomacy and failure', 'Krishna\'s peace mission', 'War preparations', 'Alliance building', 'Inevitability of conflict'],
        sections: [
          {
            chapter: 124,
            title: 'Krishna\'s Peace Mission Fails',
            summary: 'Krishna speaks in the Kaurava assembly, warning of destruction if peace is not accepted. Duryodhana attempts to capture Krishna, who reveals his cosmic form.',
            keyVerses: [
              {
                ref: 'Udyoga Parva 5.124',
                text: 'Krishna said: "O Duryodhana, make peace with the Pandavas while there is still time. Give them even five villages. Otherwise, you will be the cause of the destruction of the entire Kuru race."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Udyoga Parva 5.124',
            text: 'Krishna warned: "Make peace while there is time. Otherwise, you will cause the destruction of the entire Kuru race."',
          },
        ],
      },
      {
        id: 'mahabharata-bhishma-parva',
        name: 'Bhishma Parva',
        originalName: 'भीष्मपर्व',
        chapters: '124 chapters',
        summary:
          'The Book of Bhishma. The first phase of the Kurukshetra War with Bhishma as the commander of the Kaurava forces. This parva contains the Bhagavad Gita (chapters 23-40), Krishna\'s discourse to Arjuna on the battlefield. Bhishma fights for ten days with devastating power. On the tenth day, Arjuna, with Shikhandi as his shield, fells Bhishma with a rain of arrows. Bhishma lies on a bed of arrows, choosing to die later at an auspicious time.',
        themes: ['Bhagavad Gita', 'Bhishma\'s command', 'Kurukshetra War begins', 'Duty and morality', 'Bed of arrows'],
        sections: [
          {
            chapter: 23,
            title: 'Bhagavad Gita Begins',
            summary: 'As the armies face each other, Arjuna\'s despair triggers the divine discourse of the Bhagavad Gita, contained within chapters 23-40 of this parva.',
            keyVerses: [
              {
                ref: 'Bhishma Parva 6.23 (BG 1.1)',
                text: 'Dhritarashtra said: O Sanjaya, assembled in the holy field of Kurukshetra, desiring to fight, what did my sons and the sons of Pandu do?',
              },
            ],
          },
          {
            chapter: 119,
            title: 'Fall of Bhishma',
            summary: 'On the tenth day, Arjuna attacks Bhishma with Shikhandi in front. Bhishma, who has vowed not to fight Shikhandi, lowers his weapons and is pierced by countless arrows, falling from his chariot onto a bed of arrows.',
            keyVerses: [
              {
                ref: 'Bhishma Parva 6.119',
                text: 'Bhishma, the grandsire, fell from his chariot, pierced by innumerable arrows, and lay upon a bed of shafts. The earth trembled, the sky darkened, and both armies paused in sorrow at the fall of the greatest warrior.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Bhishma Parva 6.119',
            text: 'Bhishma fell upon a bed of arrows. Both armies paused in sorrow at the fall of the greatest warrior.',
          },
        ],
      },
      {
        id: 'mahabharata-drona-parva',
        name: 'Drona Parva',
        originalName: 'द्रोणपर्व',
        chapters: '170 chapters',
        summary:
          'The Book of Drona. Dronacharya assumes command of the Kaurava forces. The war intensifies with Drona employing deadly formations. Abhimanyu, Arjuna\'s young son, enters the chakravyuha (wheel formation) but is trapped and killed by seven warriors simultaneously — one of the most tragic episodes. To end Drona\'s rampage, the Pandavas resort to deception: Yudhishthira announces "Ashvatthama is dead" (referring to an elephant), and the grief-stricken Drona lays down his arms and is killed.',
        themes: ['Drona\'s command', 'Abhimanyu\'s death', 'Chakravyuha', 'Moral compromise', 'Deception in war'],
        sections: [
          {
            chapter: 40,
            title: 'Death of Abhimanyu',
            summary: 'The sixteen-year-old Abhimanyu penetrates the chakravyuha formation but is surrounded by Drona, Karna, Duryodhana, and others who kill him in an unjust group attack.',
            keyVerses: [
              {
                ref: 'Drona Parva 7.40',
                text: 'Abhimanyu, alone and disarmed, fought with a chariot wheel against the greatest warriors of the Kaurava army. Seven great maharathas surrounded the youth and slew him, violating every code of righteous warfare.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Drona Parva 7.40',
            text: 'Abhimanyu fought alone against seven maharathas, who slew him in violation of every code of warfare.',
          },
        ],
      },
      {
        id: 'mahabharata-karna-parva',
        name: 'Karna Parva',
        originalName: 'कर्णपर्व',
        chapters: '96 chapters',
        summary:
          'The Book of Karna. Karna assumes command of the Kaurava forces after Drona\'s death. The parva details the final confrontation between Karna and Arjuna — two of the greatest warriors ever born, secretly brothers. Karna fights valiantly but is undone by the curses upon him: his chariot wheel sinks into the earth at the crucial moment, and Arjuna slays him while he struggles to free it.',
        themes: ['Karna\'s tragic fate', 'Karna vs. Arjuna', 'Curses and destiny', 'Warrior\'s honor', 'Brotherhood unknown'],
        sections: [
          {
            chapter: 90,
            title: 'Death of Karna',
            summary: 'In the climactic duel, Karna\'s chariot wheel sinks into the ground. He asks Arjuna to pause, but Krishna reminds Arjuna of all the injustices Karna supported. Arjuna releases the fatal arrow.',
            keyVerses: [
              {
                ref: 'Karna Parva 8.90',
                text: 'Karna cried out: "O Arjuna, wait! My wheel has sunk. The rules of dharma forbid you to strike an unarmed warrior." Krishna replied: "Where was your dharma when Draupadi was humiliated? Where was dharma when Abhimanyu was slain by seven?" Arjuna released his arrow, and Karna, the son of Surya, fell.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Karna Parva 8.90',
            text: 'Krishna to Karna: "Where was dharma when Draupadi was humiliated? Where when Abhimanyu was slain?"',
          },
        ],
      },
      {
        id: 'mahabharata-shalya-parva',
        name: 'Shalya Parva',
        originalName: 'शल्यपर्व',
        chapters: '65 chapters',
        summary:
          'The Book of Shalya. King Shalya of Madra takes command of the diminished Kaurava forces on the eighteenth and final day. Yudhishthira kills Shalya. Sahadeva slays Shakuni, the mastermind of the dice game. Duryodhana, the last surviving Kaurava, flees and hides in a lake. The Pandavas find him and challenge him. In the final mace duel, Bhima breaks Duryodhana\'s thigh — a foul blow but one Bhima had vowed to deliver.',
        themes: ['Final day of war', 'Shalya\'s death', 'Shakuni\'s end', 'Duryodhana\'s last stand', 'Bhima\'s vow fulfilled'],
        sections: [
          {
            chapter: 61,
            title: 'Bhima vs. Duryodhana — The Final Mace Duel',
            summary: 'Duryodhana, found hiding in a lake, accepts Bhima\'s challenge. In the final mace duel, Bhima strikes Duryodhana\'s thigh, shattering it — fulfilling his vow from the dice game.',
            keyVerses: [
              {
                ref: 'Shalya Parva 9.61',
                text: 'Bhima struck Duryodhana a mighty blow upon the thigh with his mace. Duryodhana fell like a great tree uprooted by the wind. Bhima said: "I swore on that day in the assembly that I would break your thigh. My vow is fulfilled."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Shalya Parva 9.61',
            text: 'Bhima struck Duryodhana\'s thigh and said: "I swore in the assembly that I would break it. My vow is fulfilled."',
          },
        ],
      },
      {
        id: 'mahabharata-sauptika-parva',
        name: 'Sauptika Parva',
        originalName: 'सौप्तिकपर्व',
        chapters: '18 chapters',
        summary:
          'The Book of the Sleeping Warriors. In the night following the war\'s end, Ashvatthama (Drona\'s son), Kripa, and Kritavarma launch a treacherous night raid on the sleeping Pandava camp. Ashvatthama slaughters the Pandava army, including the five sons of Draupadi, believing them to be the Pandavas. He then unleashes the Narayanastra and the Brahmastra against the unborn child in Uttara\'s womb. Krishna saves the child (Parikshit), and Ashvatthama is cursed to wander the earth for eternity.',
        themes: ['Night massacre', 'Ashvatthama\'s rage', 'Brahmastra', 'Curse and consequence', 'Destruction beyond war'],
        sections: [
          {
            chapter: 16,
            title: 'Ashvatthama\'s Brahmastra',
            summary: 'Ashvatthama releases the Brahmastra aimed at the womb of Uttara to end the Pandava line. Krishna intervenes to protect the unborn Parikshit.',
            keyVerses: [
              {
                ref: 'Sauptika Parva 10.16',
                text: 'Krishna said: "This weapon shall not succeed. I will protect the child in Uttara\'s womb. He shall be named Parikshit and shall rule after the Pandavas. As for you, Ashvatthama, you shall wander the earth in misery for three thousand years, bearing your sins."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Sauptika Parva 10.16',
            text: 'Krishna cursed Ashvatthama to wander the earth for three thousand years in misery for his crime.',
          },
        ],
      },
      {
        id: 'mahabharata-stri-parva',
        name: 'Stri Parva',
        originalName: 'स्त्रीपर्व',
        chapters: '27 chapters',
        summary:
          'The Book of the Women. The aftermath of the war. Gandhari, Dhritarashtra, and the women of the Kuru clan lament over the dead. Gandhari, who has lost all one hundred sons, curses Krishna for not preventing the war, declaring that his own clan (the Yadavas) will destroy themselves in a similar manner. This is one of the most emotionally devastating sections of the epic.',
        themes: ['Grief and lamentation', 'Women\'s suffering', 'Gandhari\'s curse on Krishna', 'Cost of war', 'Consequences'],
        sections: [
          {
            chapter: 25,
            title: 'Gandhari\'s Curse',
            summary: 'Gandhari, mother of the slain Kauravas, curses Krishna, blaming him for not preventing the war despite having the power to do so.',
            keyVerses: [
              {
                ref: 'Stri Parva 11.25',
                text: 'Gandhari said: "O Krishna, you had the power to prevent this war but you did not. Therefore, thirty-six years hence, your own kinsmen, the Yadavas, shall destroy each other. You yourself shall perish alone in the wilderness, and your city shall be swallowed by the sea."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Stri Parva 11.25',
            text: 'Gandhari cursed Krishna: "Your own kinsmen shall destroy each other, and you shall perish alone."',
          },
        ],
      },
      {
        id: 'mahabharata-shanti-parva',
        name: 'Shanti Parva',
        originalName: 'शान्तिपर्व',
        chapters: '365 chapters',
        summary:
          'The Book of Peace. The longest parva, containing Bhishma\'s extensive teachings to Yudhishthira from his bed of arrows. Bhishma discourses on raja-dharma (duties of a king), apaddharma (duty in times of distress), moksha-dharma (path of liberation), and the nature of the soul, God, and the universe. It is a vast compendium of political science, ethics, philosophy, and spiritual wisdom.',
        themes: ['Raja-dharma (kingship)', 'Apaddharma (emergency ethics)', 'Moksha-dharma (liberation)', 'Bhishma\'s wisdom', 'Philosophy and governance'],
        sections: [
          {
            chapter: 1,
            title: 'Yudhishthira\'s Grief',
            summary: 'Yudhishthira, overcome with remorse at the carnage of the war, wishes to renounce the world. His brothers and Krishna persuade him to accept the throne and rule with dharma.',
            keyVerses: [
              {
                ref: 'Shanti Parva 12.1',
                text: 'Yudhishthira said: "What use is a kingdom won through the blood of kinsmen? I have slain my own teachers and relatives. I shall retire to the forest and live as an ascetic."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Shanti Parva 12.1',
            text: 'Yudhishthira: "What use is a kingdom won through the blood of kinsmen?"',
          },
        ],
      },
      {
        id: 'mahabharata-anushasana-parva',
        name: 'Anushasana Parva',
        originalName: 'अनुशासनपर्व',
        chapters: '168 chapters',
        summary:
          'The Book of Instructions. Continuation of Bhishma\'s teachings, focusing on dana-dharma (duty of charity), the duties of individuals in various stages of life, the nature of righteousness, and stories illustrating moral principles. Bhishma concludes his teachings and chooses the auspicious moment of Uttarayana (the sun\'s northern course) to depart from his body.',
        themes: ['Dana-dharma (charity)', 'Moral instruction', 'Stories of virtue', 'Bhishma\'s departure', 'Ahimsa (nonviolence)'],
        sections: [
          {
            chapter: 167,
            title: 'Bhishma\'s Departure',
            summary: 'Having waited for the auspicious time, Bhishma concentrates his mind on the Supreme and relinquishes his body on the bed of arrows.',
            keyVerses: [
              {
                ref: 'Anushasana Parva 13.167',
                text: 'Bhishma, his mind fixed on the Supreme Lord, his body pierced by a hundred arrows, gave up his mortal frame at the appointed hour of Uttarayana, and his soul ascended to the highest heaven.',
              },
            ],
          },
          {
            chapter: 116,
            title: 'The Essence of Dharma',
            summary: 'Bhishma summarizes the essence of all dharma in a single principle.',
            keyVerses: [
              {
                ref: 'Anushasana Parva 13.116',
                text: 'This is the sum of all dharma: do not do unto others what would cause pain if done to you. (Shruyatam dharma-sarvasvam, shrutva chaiva-anuvartyatam; atmana pratikulani paresham na samaacharet.)',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Anushasana Parva 13.116',
            text: 'The sum of all dharma: do not do unto others what would cause pain if done to you.',
          },
          {
            ref: 'Anushasana Parva 13.167',
            text: 'Bhishma departed his body at the hour of Uttarayana, his mind fixed on the Lord.',
          },
        ],
      },
      {
        id: 'mahabharata-ashvamedhika-parva',
        name: 'Ashvamedhika Parva',
        originalName: 'आश्वमेधिकपर्व',
        chapters: '96 chapters',
        summary:
          'The Book of the Horse Sacrifice. Yudhishthira performs the Ashvamedha (horse sacrifice) to purify himself of the sins of war and establish his sovereignty. The sacrificial horse wanders through various kingdoms, and Arjuna follows to defend it, fighting battles along the way. This parva also contains the Anugita, a second discourse by Krishna to Arjuna on spiritual matters.',
        themes: ['Ashvamedha sacrifice', 'Purification from war', 'Arjuna\'s battles', 'Anugita discourse', 'Sovereignty established'],
        sections: [
          {
            chapter: 1,
            title: 'The Ashvamedha Begins',
            summary: 'Yudhishthira commences the horse sacrifice to atone for the sins of the great war and to establish dharmic rule over the earth.',
            keyVerses: [
              {
                ref: 'Ashvamedhika Parva 14.1',
                text: 'Krishna advised Yudhishthira: "Perform the Ashvamedha sacrifice. It will purify you of all sins accumulated during the war and establish your righteous sovereignty over the earth."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Ashvamedhika Parva 14.1',
            text: 'Krishna counseled the Ashvamedha sacrifice to purify Yudhishthira of the sins of war.',
          },
        ],
      },
      {
        id: 'mahabharata-ashramvasika-parva',
        name: 'Ashramvasika Parva',
        originalName: 'आश्रमवासिकपर्व',
        chapters: '47 chapters',
        summary:
          'The Book of the Hermitage. After fifteen years of Yudhishthira\'s rule, the aged Dhritarashtra, Gandhari, Kunti, Vidura, and Sanjaya retire to a hermitage in the forest to live as ascetics. Vidura dies first, merging his life-force into Yudhishthira. Later, a forest fire engulfs the hermitage, and Dhritarashtra, Gandhari, and Kunti perish, attaining heaven through their austerities.',
        themes: ['Retirement to the forest', 'Old age and renunciation', 'Vidura\'s death', 'Forest fire', 'Departure of elders'],
        sections: [
          {
            chapter: 26,
            title: 'Vidura\'s Departure',
            summary: 'Vidura, emaciated from austerity, transfers his life-force to Yudhishthira through yogic power and departs his body.',
            keyVerses: [
              {
                ref: 'Ashramvasika Parva 15.26',
                text: 'Vidura, having attained the highest state through yoga and austerity, cast off his body and entered into Yudhishthira, for they were both born of Dharma.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Ashramvasika Parva 15.26',
            text: 'Vidura cast off his body and merged into Yudhishthira, for both were born of Dharma.',
          },
        ],
      },
      {
        id: 'mahabharata-mausala-parva',
        name: 'Mausala Parva',
        originalName: 'मौसलपर्व',
        chapters: '9 chapters',
        summary:
          'The Book of the Clubs. Thirty-six years after the war, Gandhari\'s curse comes to fruition. The Yadavas — Krishna\'s own clan — become intoxicated and destroy each other in a fratricidal brawl with iron clubs (musala) grown from a cursed iron pestle. Balarama dies in yogic meditation. Krishna, sitting alone in the forest, is mistakenly shot in the foot by the hunter Jara and departs from the mortal world.',
        themes: ['Gandhari\'s curse fulfilled', 'Self-destruction of the Yadavas', 'Krishna\'s departure', 'Impermanence', 'Karma\'s return'],
        sections: [
          {
            chapter: 7,
            title: 'Krishna\'s Departure',
            summary: 'Krishna, his divine mission complete, sits in meditation in the forest. The hunter Jara, mistaking his foot for a deer, shoots an arrow. Krishna forgives him and departs to his eternal abode.',
            keyVerses: [
              {
                ref: 'Mausala Parva 16.7',
                text: 'Krishna, struck by the hunter\'s arrow, said: "O Jara, do not grieve. This was ordained. You are but the instrument." And the Blessed Lord, withdrawing his yoga-maya, departed from the mortal world to his eternal abode.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Mausala Parva 16.7',
            text: 'Krishna told the hunter: "Do not grieve. This was ordained." And He departed to His eternal abode.',
          },
        ],
      },
      {
        id: 'mahabharata-mahaprasthanika-parva',
        name: 'Mahaprasthanika Parva',
        originalName: 'महाप्रस्थानिकपर्व',
        chapters: '3 chapters',
        summary:
          'The Book of the Great Journey. After learning of Krishna\'s departure and the destruction of the Yadavas, the Pandavas renounce their kingdom, install Parikshit on the throne, and set out on their final journey northward toward Mount Meru. One by one, Draupadi, Sahadeva, Nakula, Arjuna, and Bhima fall along the way. Only Yudhishthira, accompanied by a faithful dog, reaches the gates of heaven.',
        themes: ['Final renunciation', 'Great journey', 'Falling of the Pandavas', 'Yudhishthira\'s righteousness', 'The faithful dog'],
        sections: [
          {
            chapter: 3,
            title: 'Yudhishthira and the Dog',
            summary: 'At the gates of heaven, Indra tells Yudhishthira to leave the dog behind. Yudhishthira refuses to abandon a faithful being. The dog reveals himself as Dharma (Yama), Yudhishthira\'s celestial father.',
            keyVerses: [
              {
                ref: 'Mahaprasthanika Parva 17.3',
                text: 'Yudhishthira said: "I shall not abandon this faithful dog who has followed me from the beginning. To abandon one who is devoted, who is frightened, who seeks refuge — this is a sin equal to slaying a brahmana. I shall never do it."',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Mahaprasthanika Parva 17.3',
            text: 'Yudhishthira refused to abandon the dog: "To abandon a devoted being who seeks refuge is a sin I shall never commit."',
          },
        ],
      },
      {
        id: 'mahabharata-svargarohana-parva',
        name: 'Svargarohana Parva',
        originalName: 'स्वर्गारोहणपर्व',
        chapters: '5 chapters',
        summary:
          'The Book of the Ascent to Heaven. The final parva. Yudhishthira enters heaven but finds Duryodhana in a place of honor and his own brothers and Draupadi in a hellish realm. Outraged, he refuses to leave them. This proves to be a final test — the vision of hell dissolves, and Yudhishthira is reunited with all his loved ones. All attain their eternal rewards, and the great story reaches its conclusion.',
        themes: ['Final test', 'Illusion of heaven and hell', 'Justice and mercy', 'Reunion', 'Eternal resolution'],
        sections: [
          {
            chapter: 5,
            title: 'Yudhishthira\'s Final Test',
            summary: 'Yudhishthira chooses to remain in hell with his brothers rather than enjoy heaven alone. The illusion dissolves, revealing that this was the final test of his righteousness.',
            keyVerses: [
              {
                ref: 'Svargarohana Parva 18.5',
                text: 'Yudhishthira said: "Where my brothers and Draupadi are, there is my heaven. I will not dwell in paradise while they suffer. Let me remain with them." At these words, the illusion vanished, and Yudhishthira beheld his loved ones in celestial glory.',
              },
            ],
          },
        ],
        keyVerses: [
          {
            ref: 'Svargarohana Parva 18.5',
            text: 'Yudhishthira: "Where my brothers are, there is my heaven. I will not enjoy paradise while they suffer."',
          },
        ],
      },
    ],
  },
]
