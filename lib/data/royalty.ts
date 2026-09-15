import { RoyalFamily, TreeNode } from './types';
export type { RoyalFamily, TreeNode };

export const royalFamiliesData: RoyalFamily[] = [
  {
    id: 'rf-saud',
    name: 'House of Saud',
    arabicName: 'آل سعود',
    slug: 'house-of-saud',
    country: 'Saudi Arabia',
    countrySlug: 'saudi-arabia',
    foundedYear: 1727,
    founder: 'Imam Muhammad bin Saud',
    currentHead: 'King Salman bin Abdulaziz Al Saud',
    currentTitle: 'King of Saudi Arabia & Custodian of the Two Holy Mosques',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Saud is the ruling royal dynasty of Saudi Arabia. Tracing its lineage back to Mani\' ibn Rabi\'a al-Muraydi who settled in Diriyah around 1446, the dynasty has governed three historical sovereign states: the First Saudi State (Emirate of Diriyah, 1727–1818), the Second Saudi State (Emirate of Nejd, 1824–1891), and the modern Kingdom of Saudi Arabia, founded in 1932 by King Abdulaziz Al Saud (Ibn Saud).',
    history: 'In 1727, Imam Muhammad bin Saud became ruler of Diriyah, laying the political foundation of the first state. Despite Ottoman campaigns that destroyed Diriyah in 1818, Imam Turki bin Abdullah resurrected the dynasty in Riyadh in 1824. Following exile in Kuwait in the late 19th century, King Abdulaziz executed the legendary recapture of Masmak Fortress in Riyadh in 1902, embarking on three decades of unification diplomacy across the Arabian Peninsula.',
    residences: [
      'Al-Yamamah Palace (Riyadh)',
      'Rawdat Khuraim Royal Compound',
      'Al-Salam Palace (Jeddah)',
      'Murabba Palace (Historic)',
      'At-Turaif Palace (Diriyah - Historic)'
    ],
    crownPrince: {
      name: 'Mohammed bin Salman Al Saud',
      arabicName: 'محمد بن سلمان آل سعود',
      slug: 'mohammed-bin-salman',
      title: 'Crown Prince and Prime Minister of Saudi Arabia',
      portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'King Salman bin Abdulaziz',
        arabicName: 'الملك سلمان بن عبد العزيز',
        slug: 'king-salman',
        reign: '2015 — Present',
        title: 'King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'King Abdullah bin Abdulaziz',
        arabicName: 'الملك عبد الله بن عبد العزيز',
        slug: 'king-abdullah',
        reign: '2005 — 2015',
        title: 'King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'King Fahd bin Abdulaziz',
        arabicName: 'الملك فهد بن عبد العزيز',
        slug: 'king-fahd',
        reign: '1982 — 2005',
        title: 'King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'King Khalid bin Abdulaziz',
        arabicName: 'الملك خالد بن عبد العزيز',
        slug: 'king-khalid',
        reign: '1975 — 1982',
        title: 'King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'King Faisal bin Abdulaziz',
        arabicName: 'الملك فيصل بن عبد العزيز',
        slug: 'king-faisal',
        reign: '1964 — 1975',
        title: 'King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'King Saud bin Abdulaziz',
        arabicName: 'الملك سعود بن عبد العزيز',
        slug: 'king-saud',
        reign: '1953 — 1964',
        title: 'King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'King Abdulaziz Al Saud',
        arabicName: 'الملك عبد العزيز بن عبد الرحمن آل سعود',
        slug: 'king-abdulaziz',
        reign: '1932 — 1953',
        title: 'Founder & First King of Saudi Arabia',
        portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-saud-founder',
      name: 'King Abdulaziz Al Saud',
      arabicName: 'الملك عبد العزيز آل سعود',
      slug: 'king-abdulaziz',
      title: 'Founder of Modern Saudi Arabia (1875–1953)',
      reign: '1932–1953',
      birthYear: 1875,
      deathYear: 1953,
      portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
      children: [
        {
          id: 'tree-saud-saud',
          name: 'King Saud',
          arabicName: 'الملك سعود',
          slug: 'king-saud',
          title: '2nd King of Saudi Arabia (1902–1969)',
          reign: '1953–1964',
          birthYear: 1902,
          deathYear: 1969
        },
        {
          id: 'tree-saud-faisal',
          name: 'King Faisal',
          arabicName: 'الملك فيصل',
          slug: 'king-faisal',
          title: '3rd King of Saudi Arabia (1906–1975)',
          reign: '1964–1975',
          birthYear: 1906,
          deathYear: 1975,
          children: [
            {
              id: 'tree-saud-saud-faisal',
              name: 'Prince Saud Al Faisal',
              arabicName: 'الأمير سعود الفيصل',
              title: 'Foreign Minister of Saudi Arabia (1975–2015)',
              birthYear: 1940,
              deathYear: 2015
            }
          ]
        },
        {
          id: 'tree-saud-khalid',
          name: 'King Khalid',
          arabicName: 'الملك خالد',
          slug: 'king-khalid',
          title: '4th King of Saudi Arabia (1913–1982)',
          reign: '1975–1982',
          birthYear: 1913,
          deathYear: 1982
        },
        {
          id: 'tree-saud-fahd',
          name: 'King Fahd',
          arabicName: 'الملك فهد',
          slug: 'king-fahd',
          title: '5th King of Saudi Arabia (1921–2005)',
          reign: '1982–2005',
          birthYear: 1921,
          deathYear: 2005
        },
        {
          id: 'tree-saud-abdullah',
          name: 'King Abdullah',
          arabicName: 'الملك عبد الله',
          slug: 'king-abdullah',
          title: '6th King of Saudi Arabia (1924–2015)',
          reign: '2005–2015',
          birthYear: 1924,
          deathYear: 2015
        },
        {
          id: 'tree-saud-salman',
          name: 'King Salman',
          arabicName: 'الملك سلمان',
          slug: 'king-salman',
          title: '7th King of Saudi Arabia (b. 1935)',
          reign: '2015–Present',
          isCurrent: true,
          birthYear: 1935,
          portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
          children: [
            {
              id: 'tree-saud-mbs',
              name: 'Crown Prince Mohammed bin Salman',
              arabicName: 'ولي العهد الأمير محمد بن سلمان',
              slug: 'mohammed-bin-salman',
              title: 'Crown Prince & Prime Minister (b. 1985)',
              isCurrent: true,
              birthYear: 1985,
              portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
            }
          ]
        }
      ]
    },
    citations: [
      {
        id: 'cit-rf-saud-1',
        citationNumber: 1,
        text: 'Darah Official Genealogical Register of the Royal Family of Saudi Arabia, King Abdulaziz Foundation for Research and Archives, Riyadh.',
        sourceId: 'src-1'
      }
    ]
  },
  {
    id: 'rf-al-nahyan',
    name: 'House of Al Nahyan',
    arabicName: 'آل نهيان',
    slug: 'house-of-al-nahyan',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    foundedYear: 1761,
    founder: 'Sheikh Dhiyab bin Isa Al Nahyan',
    currentHead: 'Sheikh Mohamed bin Zayed Al Nahyan',
    currentTitle: 'President of the UAE & Ruler of Abu Dhabi',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Al Nahyan is the ruling family of the Emirate of Abu Dhabi and the presidential dynasty of the United Arab Emirates. Branching from the historic Bani Yas tribal confederation, the Al Nahyan established Abu Dhabi Island as their capital in the 1790s centered around Qasr Al Hosn fortress.',
    history: 'Sheikh Zayed the Great (Zayed bin Khalifa, reigned 1855–1909) expanded Abu Dhabi\'s maritime and regional preeminence. In 1966, Sheikh Zayed bin Sultan Al Nahyan assumed governance, orchestrating the formation of the United Arab Emirates federation in 1971 and pioneering visionary humanitarian and cultural patronage.',
    residences: [
      'Qasr Al Watan (Presidential Palace, Abu Dhabi)',
      'Qasr Al Bahr (Abu Dhabi)',
      'Qasr Al Hosn (Historic Fort, Abu Dhabi)'
    ],
    crownPrince: {
      name: 'Sheikh Khaled bin Mohamed bin Zayed Al Nahyan',
      arabicName: 'الشيخ خالد بن محمد بن زايد آل نهيان',
      slug: 'khaled-bin-mohamed',
      title: 'Crown Prince of Abu Dhabi',
      portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'Sheikh Mohamed bin Zayed Al Nahyan',
        arabicName: 'الشيخ محمد بن زايد آل نهيان',
        slug: 'mohamed-bin-zayed',
        reign: '2022 — Present',
        title: 'President of the UAE & Ruler of Abu Dhabi',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'Sheikh Khalifa bin Zayed Al Nahyan',
        arabicName: 'الشيخ خليفة بن زايد آل نهيان',
        slug: 'khalifa-bin-zayed',
        reign: '2004 — 2022',
        title: 'President of the UAE & Ruler of Abu Dhabi',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Zayed bin Sultan Al Nahyan',
        arabicName: 'الشيخ زايد بن سلطان آل نهيان',
        slug: 'zayed-bin-sultan',
        reign: '1966 — 2004',
        title: 'Founding Father of the UAE & Ruler of Abu Dhabi',
        portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-nahyan-zayed-1',
      name: 'Sheikh Zayed bin Khalifa (Zayed the Great)',
      arabicName: 'الشيخ زايد بن خليفة آل نهيان',
      title: 'Ruler of Abu Dhabi (1855–1909)',
      birthYear: 1835,
      deathYear: 1909,
      children: [
        {
          id: 'tree-nahyan-sultan',
          name: 'Sheikh Sultan bin Zayed',
          arabicName: 'الشيخ سلطان بن زايد',
          title: 'Ruler of Abu Dhabi (1922–1926)',
          birthYear: 1881,
          deathYear: 1926,
          children: [
            {
              id: 'tree-nahyan-zayed-founder',
              name: 'Sheikh Zayed bin Sultan Al Nahyan',
              arabicName: 'الشيخ زايد بن سلطان آل نهيان',
              slug: 'zayed-bin-sultan',
              title: 'Founding President of UAE (1918–2004)',
              reign: '1966–2004 (Abu Dhabi) / 1971–2004 (UAE)',
              birthYear: 1918,
              deathYear: 2004,
              children: [
                {
                  id: 'tree-nahyan-khalifa',
                  name: 'Sheikh Khalifa bin Zayed',
                  arabicName: 'الشيخ خليفة بن زايد',
                  title: '2nd President of UAE (1948–2022)',
                  reign: '2004–2022',
                  birthYear: 1948,
                  deathYear: 2022
                },
                {
                  id: 'tree-nahyan-mbz',
                  name: 'Sheikh Mohamed bin Zayed',
                  arabicName: 'الشيخ محمد بن زايد',
                  slug: 'mohamed-bin-zayed',
                  title: '3rd President of UAE (b. 1961)',
                  reign: '2022–Present',
                  isCurrent: true,
                  birthYear: 1961,
                  children: [
                    {
                      id: 'tree-nahyan-khaled',
                      name: 'Sheikh Khaled bin Mohamed',
                      arabicName: 'الشيخ خالد بن محمد',
                      slug: 'khaled-bin-mohamed',
                      title: 'Crown Prince of Abu Dhabi (b. 1982)',
                      isCurrent: true,
                      birthYear: 1982
                    }
                  ]
                },
                {
                  id: 'tree-nahyan-mansour',
                  name: 'Sheikh Mansour bin Zayed',
                  arabicName: 'الشيخ منصور بن زايد',
                  title: 'Vice President & Deputy Prime Minister',
                  birthYear: 1970
                },
                {
                  id: 'tree-nahyan-tahnoun',
                  name: 'Sheikh Tahnoun bin Zayed',
                  arabicName: 'الشيخ طحنون بن زايد',
                  title: 'Deputy Ruler of Abu Dhabi & National Security Advisor',
                  birthYear: 1968
                }
              ]
            }
          ]
        }
      ]
    },
    citations: [
      {
        id: 'cit-rf-nahyan-1',
        citationNumber: 1,
        text: 'The National Library and Archives of the United Arab Emirates, Abu Dhabi Historical Monograph Series.',
        sourceId: 'src-2'
      }
    ]
  },
  {
    id: 'rf-al-maktoum',
    name: 'House of Al Maktoum',
    arabicName: 'آل مكتوم',
    slug: 'house-of-al-maktoum',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    foundedYear: 1833,
    founder: 'Sheikh Maktoum bin Butti Al Falasi',
    currentHead: 'Sheikh Mohammed bin Rashid Al Maktoum',
    currentTitle: 'Vice President & Prime Minister of UAE, Ruler of Dubai',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Al Maktoum has ruled the Emirate of Dubai since 1833, when members of the Al Bu Falasa clan migrated from Abu Dhabi to Dubai Creek. Under visionary leadership spanning Sheikh Rashid bin Saeed and Sheikh Mohammed bin Rashid, Dubai transformed into a global nexus of trade, logistics, and innovation.',
    history: 'In 1833, 800 members of the Bani Yas led by Sheikh Maktoum bin Butti settled around Dubai Creek, declaring sovereign autonomy. In 1958, Sheikh Rashid bin Saeed initiated the dredging of the Creek and construction of Port Rashid and Jebel Ali (the world’s largest man-made harbor). In 1971, Sheikh Rashid co-founded the UAE federation alongside Sheikh Zayed.',
    residences: [
      'Za\'abeel Palace (Dubai)',
      'Al Shindagha Historical Palace (Dubai)',
      'Nad Al Sheba Palace'
    ],
    crownPrince: {
      name: 'Sheikh Hamdan bin Mohammed Al Maktoum (Fazza)',
      arabicName: 'الشيخ حمدان بن محمد آل مكتوم (فزاع)',
      slug: 'hamdan-bin-mohammed',
      title: 'Crown Prince of Dubai & Deputy Prime Minister / Minister of Defence of UAE',
      portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'Sheikh Mohammed bin Rashid Al Maktoum',
        arabicName: 'الشيخ محمد بن راشد آل مكتوم',
        slug: 'mohammed-bin-rashid',
        reign: '2006 — Present',
        title: 'Vice President & Prime Minister of UAE, Ruler of Dubai',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'Sheikh Maktoum bin Rashid Al Maktoum',
        arabicName: 'الشيخ مكتوم بن راشد آل مكتوم',
        slug: 'maktoum-bin-rashid',
        reign: '1990 — 2006',
        title: 'Ruler of Dubai & Prime Minister of UAE',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Rashid bin Saeed Al Maktoum',
        arabicName: 'الشيخ راشد بن سعيد آل مكتوم',
        slug: 'rashid-bin-saeed',
        reign: '1958 — 1990',
        title: 'Architect of Modern Dubai & Co-Founder of UAE',
        portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-maktoum-rashid',
      name: 'Sheikh Rashid bin Saeed Al Maktoum',
      arabicName: 'الشيخ راشد بن سعيد آل مكتوم',
      slug: 'rashid-bin-saeed',
      title: 'Ruler of Dubai (1912–1990)',
      birthYear: 1912,
      deathYear: 1990,
      children: [
        {
          id: 'tree-maktoum-maktoum',
          name: 'Sheikh Maktoum bin Rashid',
          arabicName: 'الشيخ مكتوم بن راشد',
          title: 'Ruler of Dubai (1943–2006)',
          birthYear: 1943,
          deathYear: 2006
        },
        {
          id: 'tree-maktoum-mbr',
          name: 'Sheikh Mohammed bin Rashid',
          arabicName: 'الشيخ محمد بن راشد',
          slug: 'mohammed-bin-rashid',
          title: 'Ruler of Dubai (b. 1949)',
          reign: '2006–Present',
          isCurrent: true,
          birthYear: 1949,
          children: [
            {
              id: 'tree-maktoum-hamdan',
              name: 'Sheikh Hamdan bin Mohammed (Fazza)',
              arabicName: 'الشيخ حمدان بن محمد',
              slug: 'hamdan-bin-mohammed',
              title: 'Crown Prince of Dubai (b. 1982)',
              isCurrent: true,
              birthYear: 1982
            },
            {
              id: 'tree-maktoum-maktoum-jr',
              name: 'Sheikh Maktoum bin Mohammed',
              arabicName: 'الشيخ مكتوم بن محمد',
              title: 'First Deputy Ruler of Dubai & Deputy Prime Minister',
              birthYear: 1983
            }
          ]
        }
      ]
    }
  },
  {
    id: 'rf-al-thani',
    name: 'House of Al Thani',
    arabicName: 'آل ثاني',
    slug: 'house-of-al-thani',
    country: 'Qatar',
    countrySlug: 'qatar',
    foundedYear: 1825,
    founder: 'Sheikh Thani bin Mohammed Al Thani',
    currentHead: 'Sheikh Tamim bin Hamad Al Thani',
    currentTitle: 'Emir of the State of Qatar',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Al Thani has governed Qatar since the early 19th century. Descending from the ancient Ma\'adhid clan of the Banu Tamim tribe originating in the Najd, the family consolidated Qatari political identity in Doha and spearheaded the transformation into a global energy and diplomatic powerhouse.',
    history: 'Under Sheikh Jassim bin Mohammed Al Thani ("The Founder", reigned 1878–1913), Qatar secured sovereign autonomy following the pivotal Battle of Al Wajbah in 1893. In 1995, Father Emir Sheikh Hamad bin Khalifa launched revolutionary modernization, developing the world\'s largest LNG infrastructure and international diplomacy.',
    residences: [
      'Amiri Diwan (Doha)',
      'Al Wajbah Palace (Historic)',
      'Lusail Palace'
    ],
    rulers: [
      {
        name: 'Sheikh Tamim bin Hamad Al Thani',
        arabicName: 'الشيخ تميم بن حمد آل ثاني',
        slug: 'tamim-bin-hamad',
        reign: '2013 — Present',
        title: 'Emir of the State of Qatar',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'Sheikh Hamad bin Khalifa Al Thani (Father Emir)',
        arabicName: 'الشيخ حمد بن خليفة آل ثاني',
        slug: 'hamad-bin-khalifa',
        reign: '1995 — 2013',
        title: 'Father Emir of Qatar',
        portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Khalifa bin Hamad Al Thani',
        arabicName: 'الشيخ خليفة بن حمد آل ثاني',
        slug: 'khalifa-bin-hamad',
        reign: '1972 — 1995',
        title: 'Emir of Qatar',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Jassim bin Mohammed Al Thani',
        arabicName: 'الشيخ جاسم بن محمد آل ثاني',
        slug: 'jassim-bin-mohammed',
        reign: '1878 — 1913',
        title: 'Founder of the State of Qatar',
        portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-thani-jassim',
      name: 'Sheikh Jassim bin Mohammed Al Thani',
      arabicName: 'الشيخ جاسم بن محمد آل ثاني',
      title: 'Founder of Qatar (1825–1913)',
      birthYear: 1825,
      deathYear: 1913,
      children: [
        {
          id: 'tree-thani-abdullah',
          name: 'Sheikh Abdullah bin Jassim',
          arabicName: 'الشيخ عبد الله بن جاسم',
          title: 'Ruler of Qatar (1880–1957)',
          birthYear: 1880,
          deathYear: 1957,
          children: [
            {
              id: 'tree-thani-hamad-1',
              name: 'Sheikh Hamad bin Abdullah',
              arabicName: 'الشيخ حمد بن عبد الله',
              title: 'Crown Prince of Qatar',
              birthYear: 1896,
              deathYear: 1948,
              children: [
                {
                  id: 'tree-thani-khalifa-1',
                  name: 'Sheikh Khalifa bin Hamad',
                  arabicName: 'الشيخ خليفة بن حمد',
                  title: 'Emir of Qatar (1932–2016)',
                  reign: '1972–1995',
                  birthYear: 1932,
                  deathYear: 2016,
                  children: [
                    {
                      id: 'tree-thani-hamad-father',
                      name: 'Sheikh Hamad bin Khalifa (Father Emir)',
                      arabicName: 'الشيخ حمد بن خليفة (الأمير الوالد)',
                      slug: 'hamad-bin-khalifa',
                      title: 'Emir of Qatar (1995–2013, b. 1952)',
                      reign: '1995–2013',
                      birthYear: 1952,
                      children: [
                        {
                          id: 'tree-thani-tamim',
                          name: 'Sheikh Tamim bin Hamad Al Thani',
                          arabicName: 'الشيخ تميم بن حمد آل ثاني',
                          slug: 'tamim-bin-hamad',
                          title: 'Emir of Qatar (b. 1980)',
                          reign: '2013–Present',
                          isCurrent: true,
                          birthYear: 1980
                        },
                        {
                          id: 'tree-thani-jassim-jr',
                          name: 'Sheikh Jassim bin Hamad',
                          arabicName: 'الشيخ جاسم بن حمد',
                          title: 'Former Heir Apparent (b. 1978)',
                          birthYear: 1978
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    citations: [
      {
        id: 'cit-rf-thani-1',
        citationNumber: 1,
        text: 'Qatar National Library Archives: The Lineage and Records of the Al Thani Dynasty.',
        sourceId: 'src-3'
      }
    ]
  },
  {
    id: 'rf-al-sabah',
    name: 'House of Al Sabah',
    arabicName: 'آل صباح',
    slug: 'house-of-al-sabah',
    country: 'Kuwait',
    countrySlug: 'kuwait',
    foundedYear: 1752,
    founder: 'Sheikh Sabah I bin Jaber',
    currentHead: 'Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah',
    currentTitle: 'Emir of the State of Kuwait',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Al Sabah has ruled Kuwait since 1752. Originating from the Bani Utbah tribal confederation of Najd, the family was chosen unanimously by Kuwait’s early community of merchant families and sea captains to administer civic and diplomatic affairs.',
    history: 'Sheikh Mubarak Al-Sabah ("Mubarak the Great", reigned 1896–1915) consolidated Kuwait\'s sovereign independence through strategic diplomacy. In 1961, Sheikh Abdullah Al-Salim Al-Sabah declared full independence and established Kuwait’s landmark 1962 Constitution and National Assembly.',
    residences: [
      'Bayan Palace (Kuwait City)',
      'Seif Palace (Historic Seat of Governance)',
      'Dar Salwa Palace'
    ],
    crownPrince: {
      name: 'Sheikh Sabah Khaled Al-Hamad Al-Sabah',
      arabicName: 'الشيخ صباح خالد الحمد الصباح',
      slug: 'sabah-khaled-al-sabah',
      title: 'Crown Prince of the State of Kuwait',
      portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah',
        arabicName: 'الشيخ مشعل الأحمد الجابر الصباح',
        slug: 'mishal-al-ahmad',
        reign: '2023 — Present',
        title: 'Emir of the State of Kuwait',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'Sheikh Nawaf Al-Ahmad Al-Jaber Al-Sabah',
        arabicName: 'الشيخ نواف الأحمد الجابر الصباح',
        slug: 'nawaf-al-ahmad',
        reign: '2020 — 2023',
        title: 'Emir of Kuwait',
        portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Sabah Al-Ahmad Al-Jaber Al-Sabah',
        arabicName: 'الشيخ صباح الأحمد الجابر الصباح',
        slug: 'sabah-al-ahmad',
        reign: '2006 — 2020',
        title: 'Emir of Kuwait & UN Humanitarian Leader',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Jaber Al-Ahmad Al-Jaber Al-Sabah',
        arabicName: 'الشيخ جابر الأحمد الجابر الصباح',
        slug: 'jaber-al-ahmad',
        reign: '1977 — 2006',
        title: 'Emir of Kuwait & Co-Founder of GCC',
        portraitUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Mubarak Al-Sabah (Mubarak the Great)',
        arabicName: 'الشيخ مبارك الصباح (مبارك الكبير)',
        slug: 'mubarak-al-sabah',
        reign: '1896 — 1915',
        title: 'Ruler of Kuwait',
        portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-sabah-mubarak',
      name: 'Sheikh Mubarak Al-Sabah (Mubarak the Great)',
      arabicName: 'الشيخ مبارك الصباح (مبارك الكبير)',
      slug: 'mubarak-al-sabah',
      title: '7th Ruler of Kuwait (1837–1915)',
      birthYear: 1837,
      deathYear: 1915,
      children: [
        {
          id: 'tree-sabah-jaber-ii',
          name: 'Sheikh Jaber II Al-Mubarak',
          arabicName: 'الشيخ جابر الثاني المبارك',
          title: '8th Ruler of Kuwait (1860–1917)',
          birthYear: 1860,
          deathYear: 1917,
          children: [
            {
              id: 'tree-sabah-ahmad',
              name: 'Sheikh Ahmad Al-Jaber Al-Sabah',
              arabicName: 'الشيخ أحمد الجابر الصباح',
              title: '10th Ruler of Kuwait (1885–1950)',
              birthYear: 1885,
              deathYear: 1950,
              children: [
                {
                  id: 'tree-sabah-jaber-iii',
                  name: 'Sheikh Jaber Al-Ahmad',
                  arabicName: 'الشيخ جابر الأحمد',
                  title: '13th Ruler / 3rd Emir (1926–2006)',
                  reign: '1977–2006',
                  birthYear: 1926,
                  deathYear: 2006
                },
                {
                  id: 'tree-sabah-sabah-iv',
                  name: 'Sheikh Sabah Al-Ahmad',
                  arabicName: 'الشيخ صباح الأحمد',
                  title: '15th Ruler / 5th Emir (1929–2020)',
                  reign: '2006–2020',
                  birthYear: 1929,
                  deathYear: 2020
                },
                {
                  id: 'tree-sabah-nawaf',
                  name: 'Sheikh Nawaf Al-Ahmad',
                  arabicName: 'الشيخ نواف الأحمد',
                  title: '16th Ruler / 6th Emir (1937–2023)',
                  reign: '2020–2023',
                  birthYear: 1937,
                  deathYear: 2023
                },
                {
                  id: 'tree-sabah-mishal',
                  name: 'Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah',
                  arabicName: 'الشيخ مشعل الأحمد الجابر الصباح',
                  slug: 'mishal-al-ahmad',
                  title: '17th Ruler / 7th Emir (b. 1940)',
                  reign: '2023–Present',
                  isCurrent: true,
                  birthYear: 1940
                }
              ]
            }
          ]
        },
        {
          id: 'tree-sabah-salim',
          name: 'Sheikh Salim Al-Mubarak',
          arabicName: 'الشيخ سالم المبارك',
          title: '9th Ruler of Kuwait (1864–1921)',
          birthYear: 1864,
          deathYear: 1921,
          children: [
            {
              id: 'tree-sabah-abdullah-salim',
              name: 'Sheikh Abdullah Al-Salim',
              arabicName: 'الشيخ عبد الله السالم',
              title: '11th Ruler / 1st Emir (Father of Constitution, 1895–1965)',
              reign: '1950–1965',
              birthYear: 1895,
              deathYear: 1965
            }
          ]
        }
      ]
    },
    citations: [
      {
        id: 'cit-rf-sabah-1',
        citationNumber: 1,
        text: 'Kuwait Center for Research and Studies: Monograph on the House of Al Sabah and Modern Kuwaiti Sovereignty.',
        sourceId: 'src-5'
      }
    ]
  },
  {
    id: 'rf-al-khalifa',
    name: 'House of Al Khalifa',
    arabicName: 'آل خليفة',
    slug: 'house-of-al-khalifa',
    country: 'Bahrain',
    countrySlug: 'bahrain',
    foundedYear: 1766,
    founder: 'Sheikh Khalifa bin Mohammed Al Khalifa',
    currentHead: 'King Hamad bin Isa Al Khalifa',
    currentTitle: 'King of the Kingdom of Bahrain',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Al Khalifa has ruled Bahrain since 1783. Emerging from the Bani Utbah confederation, the family initially settled in Zubarah before Sheikh Ahmed bin Muhammad Al Khalifa ("Ahmed Al-Fateh") established sovereignty over the Bahraini archipelago.',
    history: 'In 1783, Sheikh Ahmed Al-Fateh repelled regional incursions and established Al Khalifa governance. In 1999, King Hamad bin Isa assumed the throne, introducing the National Action Charter in 2001 and establishing a modern constitutional monarchy in 2002.',
    residences: [
      'Al-Sakhir Palace (Manama)',
      'Gudaibiya Palace (Manama)',
      'Riffa Palace (Historic)'
    ],
    crownPrince: {
      name: 'Prince Salman bin Hamad Al Khalifa',
      arabicName: 'الأمير سلمان بن حمد آل خليفة',
      slug: 'salman-bin-hamad',
      title: 'Crown Prince and Prime Minister of Bahrain',
      portraitUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'King Hamad bin Isa Al Khalifa',
        arabicName: 'الملك حمد بن عيسى آل خليفة',
        slug: 'hamad-bin-isa',
        reign: '1999 — Present',
        title: 'King of Bahrain',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'Sheikh Isa bin Salman Al Khalifa',
        arabicName: 'الشيخ عيسى بن سلمان آل خليفة',
        slug: 'isa-bin-salman',
        reign: '1961 — 1999',
        title: 'Emir of Bahrain & Co-Founder of GCC',
        portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sheikh Salman bin Hamad Al Khalifa I',
        arabicName: 'الشيخ سلمان بن حمد آل خليفة الأول',
        slug: 'salman-bin-hamad-i',
        reign: '1942 — 1961',
        title: 'Ruler of Bahrain',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-khalifa-salman-i',
      name: 'Sheikh Salman bin Hamad Al Khalifa I',
      arabicName: 'الشيخ سلمان بن حمد آل خليفة الأول',
      title: 'Ruler of Bahrain (1894–1961)',
      birthYear: 1894,
      deathYear: 1961,
      children: [
        {
          id: 'tree-khalifa-isa',
          name: 'Sheikh Isa bin Salman Al Khalifa',
          arabicName: 'الشيخ عيسى بن سلمان آل خليفة',
          title: 'Emir of Bahrain (1933–1999)',
          reign: '1961–1999',
          birthYear: 1933,
          deathYear: 1999,
          children: [
            {
              id: 'tree-khalifa-hamad',
              name: 'King Hamad bin Isa Al Khalifa',
              arabicName: 'الملك حمد بن عيسى آل خليفة',
              slug: 'hamad-bin-isa',
              title: 'King of Bahrain (b. 1950)',
              reign: '1999–Present',
              isCurrent: true,
              birthYear: 1950,
              children: [
                {
                  id: 'tree-khalifa-salman-jr',
                  name: 'Prince Salman bin Hamad Al Khalifa',
                  arabicName: 'الأمير سلمان بن حمد آل خليفة',
                  slug: 'salman-bin-hamad',
                  title: 'Crown Prince & Prime Minister (b. 1969)',
                  isCurrent: true,
                  birthYear: 1969
                },
                {
                  id: 'tree-khalifa-nasser',
                  name: 'Sheikh Nasser bin Hamad Al Khalifa',
                  arabicName: 'الشيخ ناصر بن حمد آل خليفة',
                  title: 'National Security Advisor & Royal Guard Commander',
                  birthYear: 1987
                }
              ]
            }
          ]
        },
        {
          id: 'tree-khalifa-khalifa-salman',
          name: 'Prince Khalifa bin Salman Al Khalifa',
          arabicName: 'الأمير خليفة بن سلمان آل خليفة',
          title: 'Prime Minister of Bahrain (1935–2020)',
          birthYear: 1935,
          deathYear: 2020
        }
      ]
    }
  },
  {
    id: 'rf-al-said',
    name: 'House of Al Said',
    arabicName: 'آل سعيد (البوسعيد)',
    slug: 'house-of-al-said',
    country: 'Oman',
    countrySlug: 'oman',
    foundedYear: 1744,
    founder: 'Imam Ahmad bin Said Al Busaidi',
    currentHead: 'Sultan Haitham bin Tariq',
    currentTitle: 'Sultan of Oman',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    overview: 'The House of Al Said (Al Busaidi) is the ruling dynasty of the Sultanate of Oman. Established in 1744 after Imam Ahmad bin Said expelled foreign occupation from Sohar and Muscat, the dynasty created a flourishing oceanic empire spanning the Arabian Gulf, East Africa, and Zanzibar during the 18th and 19th centuries.',
    history: 'Under Sultan Said bin Sultan ("Said the Great", reigned 1804–1856), Oman commanded maritime commerce across the Indian Ocean. Sultan Qaboos bin Said (reigned 1970–2020) spearheaded Oman\'s modern renaissance and peace diplomacy. In January 2020, Sultan Haitham bin Tariq ascended the throne to advance Oman Vision 2040.',
    residences: [
      'Al Alam Palace (Old Muscat)',
      'Bait Al Baraka (Seeb, Muscat)',
      'Hisn Al Shumookh (Manah)'
    ],
    crownPrince: {
      name: 'Sayyid Theyazin bin Haitham Al Said',
      arabicName: 'السيد ذي يزن بن هيثم آل سعيد',
      slug: 'theyazin-bin-haitham',
      title: 'Crown Prince of Oman & Minister of Culture, Sports and Youth',
      portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'Sultan Haitham bin Tariq',
        arabicName: 'السلطان هيثم بن طارق',
        slug: 'haitham-bin-tariq',
        reign: '2020 — Present',
        title: 'Sultan of Oman',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'Sultan Qaboos bin Said',
        arabicName: 'السلطان قابوس بن سعيد',
        slug: 'qaboos-bin-said',
        reign: '1970 — 2020',
        title: 'Father of Modern Oman & Diplomat of Peace',
        portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sultan Said bin Taimur',
        arabicName: 'السلطان سعيد بن تيمور',
        slug: 'said-bin-taimur',
        reign: '1932 — 1970',
        title: 'Sultan of Muscat and Oman',
        portraitUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-said-taimur',
      name: 'Sultan Taimur bin Feisal',
      arabicName: 'السلطان تيمور بن فيصل',
      title: 'Sultan of Oman (1886–1965)',
      birthYear: 1886,
      deathYear: 1965,
      children: [
        {
          id: 'tree-said-said-taimur',
          name: 'Sultan Said bin Taimur',
          arabicName: 'السلطان سعيد بن تيمور',
          title: 'Sultan of Oman (1910–1972)',
          birthYear: 1910,
          deathYear: 1972,
          children: [
            {
              id: 'tree-said-qaboos',
              name: 'Sultan Qaboos bin Said',
              arabicName: 'السلطان قابوس بن سعيد',
              slug: 'qaboos-bin-said',
              title: 'Sultan of Oman (1940–2020)',
              reign: '1970–2020',
              birthYear: 1940,
              deathYear: 2020
            }
          ]
        },
        {
          id: 'tree-said-tariq',
          name: 'Sayyid Tariq bin Taimur',
          arabicName: 'السيد طارق بن تيمور',
          title: 'Prime Minister of Oman (1921–1980)',
          birthYear: 1921,
          deathYear: 1980,
          children: [
            {
              id: 'tree-said-haitham',
              name: 'Sultan Haitham bin Tariq',
              arabicName: 'السلطان هيثم بن طارق',
              slug: 'haitham-bin-tariq',
              title: 'Sultan of Oman (b. 1954)',
              reign: '2020–Present',
              isCurrent: true,
              birthYear: 1954,
              children: [
                {
                  id: 'tree-said-theyazin',
                  name: 'Sayyid Theyazin bin Haitham',
                  arabicName: 'السيد ذي يزن بن هيثم',
                  slug: 'theyazin-bin-haitham',
                  title: 'Crown Prince of Oman (b. 1990)',
                  isCurrent: true,
                  birthYear: 1990
                }
              ]
            },
            {
              id: 'tree-said-shihab',
              name: 'Sayyid Shihab bin Tariq',
              arabicName: 'السيد شهاب بن طارق',
              title: 'Deputy Prime Minister for Defence Affairs',
              birthYear: 1956
            },
            {
              id: 'tree-said-asaad',
              name: 'Sayyid Asaad bin Tariq',
              arabicName: 'السيد أسعد بن طارق',
              title: 'Deputy Prime Minister for International Relations',
              birthYear: 1954
            }
          ]
        }
      ]
    }
  },
  {
    id: 'rf-hashemite',
    name: 'Hashemite Dynasty',
    arabicName: 'الأسرة الهاشمية',
    slug: 'hashemite-dynasty',
    country: 'Jordan',
    countrySlug: 'jordan',
    foundedYear: 1916,
    founder: 'Sharif Hussein bin Ali (Sharif of Mecca)',
    currentHead: 'King Abdullah II bin Al-Hussein',
    currentTitle: 'King of the Hashemite Kingdom of Jordan & Custodian of Jerusalem Holy Sites',
    crestUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1579606032834-a74bdc18151f?auto=format&fit=crop&w=1600&q=85',
    overview: 'The Hashemites are the royal family of Jordan and historically of Hejaz, Syria, and Iraq. Tracing direct patrilineal descent from the Prophet Muhammad through his daughter Fatimah and grandson Hasan, the Hashemites served as the hereditary Grand Sharifs of Mecca for centuries before leading the Great Arab Revolt in 1916.',
    history: 'In 1916, Sharif Hussein bin Ali launched the Great Arab Revolt against Ottoman authority. His son Abdullah I founded the Emirate of Transjordan in 1921. King Hussein bin Talal (reigned 1952–1999) guided Jordan through turbulent regional decades. King Abdullah II succeeded the throne in 1999, upholding the Hashemite Custodianship of Muslim and Christian holy sites in Jerusalem.',
    residences: [
      'Raghadan Palace (Amman)',
      'Basman Palace (Amman)',
      'Al-Husseiniya Palace (Amman)'
    ],
    crownPrince: {
      name: 'Crown Prince Hussein bin Abdullah',
      arabicName: 'الأمير الحسين بن عبد الله الثاني',
      slug: 'hussein-bin-abdullah',
      title: 'Crown Prince of the Hashemite Kingdom of Jordan',
      portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    rulers: [
      {
        name: 'King Abdullah II bin Al-Hussein',
        arabicName: 'الملك عبد الله الثاني بن الحسين',
        slug: 'king-abdullah-ii',
        reign: '1999 — Present',
        title: 'King of Jordan',
        portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        isCurrent: true
      },
      {
        name: 'King Hussein bin Talal',
        arabicName: 'الملك الحسين بن طلال',
        slug: 'king-hussein',
        reign: '1952 — 1999',
        title: 'King of Jordan & Peacemaker',
        portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'King Abdullah I bin Al-Hussein',
        arabicName: 'الملك عبد الله الأول بن الحسين',
        slug: 'king-abdullah-i',
        reign: '1921 — 1951',
        title: 'Founder of Modern Jordan',
        portraitUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
      }
    ],
    familyTree: {
      id: 'tree-hash-hussein-sharif',
      name: 'Sharif Hussein bin Ali',
      arabicName: 'الشريف حسين بن علي',
      title: 'Leader of Great Arab Revolt (1853–1931)',
      birthYear: 1853,
      deathYear: 1931,
      children: [
        {
          id: 'tree-hash-abdullah-i',
          name: 'King Abdullah I',
          arabicName: 'الملك عبد الله الأول',
          title: 'Founder of Jordan (1882–1951)',
          reign: '1921–1951',
          birthYear: 1882,
          deathYear: 1951,
          children: [
            {
              id: 'tree-hash-talal',
              name: 'King Talal',
              arabicName: 'الملك طلال',
              title: 'King of Jordan (1909–1972)',
              reign: '1951–1952',
              birthYear: 1909,
              deathYear: 1972,
              children: [
                {
                  id: 'tree-hash-hussein-king',
                  name: 'King Hussein',
                  arabicName: 'الملك الحسين بن طلال',
                  title: 'King of Jordan (1935–1999)',
                  reign: '1952–1999',
                  birthYear: 1935,
                  deathYear: 1999,
                  children: [
                    {
                      id: 'tree-hash-abdullah-ii',
                      name: 'King Abdullah II',
                      arabicName: 'الملك عبد الله الثاني',
                      slug: 'king-abdullah-ii',
                      title: 'King of Jordan (b. 1962)',
                      reign: '1999–Present',
                      isCurrent: true,
                      birthYear: 1962,
                      children: [
                        {
                          id: 'tree-hash-hussein-cp',
                          name: 'Crown Prince Hussein bin Abdullah',
                          arabicName: 'الأمير الحسين بن عبد الله',
                          slug: 'hussein-bin-abdullah',
                          title: 'Crown Prince of Jordan (b. 1994)',
                          isCurrent: true,
                          birthYear: 1994
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'tree-hash-faisal-iraq',
          name: 'King Faisal I of Iraq & Syria',
          arabicName: 'الملك فيصل الأول',
          title: 'King of Iraq (1885–1933)',
          birthYear: 1885,
          deathYear: 1933
        }
      ]
    }
  }
];

export const getRoyalFamilyBySlug = (slug: string): RoyalFamily | undefined => {
  return royalFamiliesData.find(rf => rf.slug === slug);
};
