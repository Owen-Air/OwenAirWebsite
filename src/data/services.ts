export type Service = {
  slug: string;
  title: string;
  contactLabel: string;
  shortDescription: string;
  intro: string;
  audience: string;
  whatItCovers: string[];
  commonProblems: string[];
  exampleJobs: string[];
  goodFitFor: string[];
};

export const services: Service[] = [
  {
    slug: 'it-support',
    title: 'IT & Technical Support',
    contactLabel: 'IT support',
    shortDescription:
      'Help with Windows, Microsoft 365, devices, updates, accounts, email, business systems and awkward technical problems that need proper investigation.',
    intro:
      'Practical help with business and personal technology when things need diagnosing properly, not guessed at.',
    audience:
      'Small businesses, home users, and small teams without internal IT who need direct technical help that is clear and honest.',
    whatItCovers: [
      'Windows troubleshooting and device performance issues',
      'Microsoft 365 accounts, email, sync and access problems',
      'Intune and practical device management',
      'Software issues, updates, and office tech where appropriate',
      'Remote or onsite support depending on the job'
    ],
    commonProblems: [
      'Devices not behaving, updates failing, and accounts not syncing',
      'Email issues and Microsoft 365 setup that keeps blocking work',
      'Recurring faults in mixed business IT environments',
      'Systems nobody wants to touch because they are poorly documented',
      'Small teams needing practical help without a call-centre script'
    ],
    exampleJobs: [
      'Set up and troubleshoot Microsoft 365 user accounts and email access',
      'Diagnose Windows and device issues that were slowing a team down',
      'Clean up messy device setups and write simple user guidance',
      'Investigate recurring business IT problems and document what to do next'
    ],
    goodFitFor: [
      'Businesses with recurring IT faults and no clear owner',
      'Home users with awkward problems that need proper diagnosis',
      'Small teams that need practical support and plain-English explanation'
    ]
  },
  {
    slug: 'networking',
    title: 'UniFi & Networking',
    contactLabel: 'Wi-Fi/networking',
    shortDescription:
      'Separate guest, staff and secure card machine networks using UniFi. VLANs, access points, switches, coverage planning and troubleshooting for Wi-Fi that needs to hold up under real load.',
    intro:
      'Reliable Wi-Fi and proper network separation for businesses and venues that cannot afford connectivity failures during busy periods. Built around UniFi hardware with clear documentation when the job is done.',
    audience:
      'Businesses and venues that need stable Wi-Fi, proper segmentation, and straightforward network documentation.',
    whatItCovers: [
      'UniFi gateways, switches, and access point installs',
      'Guest, staff, and secure POS/device network separation',
      'VLAN setup, firewall basics, and bandwidth controls',
      'Coverage design, interference checks, roaming and channel planning',
      'Remote access and troubleshooting of existing installs'
    ],
    commonProblems: [
      'Guest Wi-Fi and business traffic mixed on one network',
      'Card machines sharing the wrong network path',
      'Wi-Fi that works until the venue gets busy',
      'Dropouts caused by AP placement, channels, VLAN or DHCP issues',
      'No usable notes for future network changes'
    ],
    exampleJobs: [
      'Set up separate guest, staff and secure device networks for hospitality',
      'Configured UniFi AP placement and VLANs for better reliability',
      'Investigated dropouts, poor coverage and roaming issues in live environments',
      'Produced basic network documentation for easier support later'
    ],
    goodFitFor: [
      'Venues with busy customer Wi-Fi and payment systems',
      'Small businesses needing clear network separation',
      'Sites with recurring connectivity faults and no clear root cause'
    ]
  },
  {
    slug: 'websites',
    title: 'Website Development',
    contactLabel: 'Website',
    shortDescription:
      'Fast Astro and Cloudflare websites with clear service pages, local SEO basics, practical contact paths and content that makes sense.',
    intro:
      'Fast, credible websites for local businesses that need to look trustworthy and generate enquiries.',
    audience:
      'Isle of Man businesses and practical service providers who need a site that loads quickly and helps customers get in touch.',
    whatItCovers: [
      'Astro websites on Cloudflare Pages',
      'Cloudflare Workers-ready contact form handling',
      'Performance, security headers, canonicals and useful 404 handling',
      'SEO basics and Google Business Profile support',
      'Clear copy structure and local service page planning'
    ],
    commonProblems: [
      'Sites that look fine but do not generate enquiries',
      'Slow mobile performance and weak trust signals',
      'Confusing service structure and vague copy',
      'Missing local SEO basics and poor contact flow',
      'No clear deployment or maintenance process'
    ],
    exampleJobs: [
      'Rebuilt slow websites into fast Astro/Cloudflare builds',
      'Improved homepage structure, service pages and CTA clarity',
      'Added secure contact form pathways with spam protection readiness',
      'Implemented local SEO fundamentals and clearer trust content'
    ],
    goodFitFor: [
      'Local businesses needing a credible online presence',
      'Outdated sites that are hard to update and slow to load',
      'Teams that want a practical, maintainable web setup'
    ]
  },
  {
    slug: 'av-audio',
    title: 'AV, Audio & Venue Systems',
    contactLabel: 'AV/audio/venue system',
    shortDescription:
      'PA systems, speaker placement, racks, DSP processing, amplifiers and troubleshooting for venue sound that is loud in some areas but unclear or uneven across the room.',
    intro:
      'Practical audio work for bars, clubs, venues and event spaces. If the system sounds different in every corner, rattles at volume, or the DSP has never been set up properly, that is the kind of job I take on.',
    audience:
      'Venue operators and event teams who need practical audio and AV improvements without unnecessary replacement.',
    whatItCovers: [
      'PA systems, speaker placement and room coverage checks',
      'Amplifier racks, DSP routing, crossover and delay basics',
      'Gain structure, limiter starting points and troubleshooting',
      'DJ booth technical setup and DMX lighting basics',
      'Pre-event checks and phased upgrade planning'
    ],
    commonProblems: [
      'Systems that are loud in places but unclear when busy',
      'Bad routing, poor gain structure and unclear rack layouts',
      'Speaker placement and coverage gaps that hurt intelligibility',
      'Old cabling and undocumented DSP configuration',
      'Event setup stress caused by fragile technical workflows'
    ],
    exampleJobs: [
      'Mapped existing signal path and identified weak points',
      'Improved speaker placement and DSP starting setup for clarity',
      'Tidied and documented racks to reduce troubleshooting time',
      'Planned phased improvements instead of replacing everything'
    ],
    goodFitFor: [
      'Bars and clubs with inconsistent audio coverage',
      'Venues with inherited AV systems and poor documentation',
      'Teams wanting practical improvements before major spend'
    ]
  },
  {
    slug: 'venues-hospitality',
    title: 'Venues & Hospitality',
    contactLabel: 'Venues & hospitality',
    shortDescription:
      'Separate guest, staff and card machine networks. Venue sound that works across the room. A website that gets bookings. Practical documentation so future changes are less risky. Technical help across the full hospitality stack.',
    intro:
      'Bars, clubs, cafes and event spaces rely on systems that have to work when the room is full and the card machine is processing. I deal with the practical technical stack \u2014 Wi-Fi, sound, websites and documentation \u2014 so you are not firefighting during service.',
    audience:
      'Bars, clubs, cafes, restaurants and event spaces that need systems to behave during busy periods.',
    whatItCovers: [
      'Guest Wi-Fi, staff Wi-Fi and secure POS/card network separation',
      'Venue websites, contact form pathways and local listing hygiene',
      'Sound system and event tech reliability checks',
      'Lighting basics, cabling and practical onsite troubleshooting',
      'Documentation and staged upgrade planning'
    ],
    commonProblems: [
      'Guest Wi-Fi collapsing on busy nights',
      'Card machines sharing customer traffic paths',
      'Old racks and systems nobody can explain',
      'Website and listing details not helping customers',
      'No clear plan for improving systems over time'
    ],
    exampleJobs: [
      'Separated public, staff and payment traffic for safer operation',
      'Diagnosed venue service-hour dropouts and stabilised network behavior',
      'Improved website and contact path for bookings and enquiries',
      'Created practical notes so future changes are less risky'
    ],
    goodFitFor: [
      'Hospitality venues that cannot afford technical chaos during service',
      'Operators needing one practical person across multiple systems',
      'Sites where urgent fixes and long-term planning both matter'
    ]
  },
  {
    slug: 'van-power',
    title: 'Van Electrical & Off-Grid Power',
    contactLabel: 'Van power',
    shortDescription:
      'Planning and upgrades for campervan systems including solar, lithium batteries, inverters, DC-DC charging and Victron-style layouts.',
    intro:
      'Planning and improvement for campervan and mobile power setups, with safety and practical staged upgrades in mind.',
    audience:
      'Campervan owners and van conversion builders who want clear guidance before spending money on hardware changes.',
    whatItCovers: [
      'Lithium battery upgrades and solar charging planning',
      'DC-DC charging, inverter sizing and monitoring approach',
      'Cable, fuse and protection planning for sensible layouts',
      'Victron-style and Renogy-adjacent upgrade paths',
      'System reviews and staged plans based on actual usage'
    ],
    commonProblems: [
      'Setups that grew over time and became hard to trust',
      'Charging systems not matched to daily usage',
      'Inverter and cable sizing uncertainty',
      'Weak monitoring and unclear fault visibility',
      'Upgrade plans that risk wasting money on the wrong step'
    ],
    exampleJobs: [
      'Created phased lithium and solar upgrade plans around real loads',
      'Mapped DC-DC, inverter and monitoring changes in safe order',
      'Reviewed existing setups and highlighted priority fixes first'
    ],
    goodFitFor: [
      'Owners moving from basic leisure battery systems to lithium',
      'Builds that need safer documentation and clearer future planning',
      'People who want practical guidance without overcomplication'
    ]
  },
  {
    slug: 'technical-rescue',
    title: 'Technical Rescue',
    contactLabel: 'Technical rescue / not sure',
    shortDescription:
      'Half-finished installs, inherited setups, mystery cabling and cross-system faults that nobody has properly owned. I trace what is actually happening, stabilise the system, and hand back something with clear documentation.',
    intro:
      'Most systems that need rescuing have been touched by multiple people and have no current documentation. Faults tend to be intermittent, cross-category and poorly understood. I find the actual cause \u2014 not just the most visible symptom \u2014 and leave things in a state you can support going forward.',
    audience:
      'People and businesses dealing with undocumented systems, inherited problems, and mixed IT/AV/network faults.',
    whatItCovers: [
      'Practical fault investigation across multiple systems',
      'Tracing and documenting unknown setups',
      'Stabilising unreliable equipment and workflows',
      'Prioritised fix-now versus fix-later recommendations',
      'Plain-English fault summaries and next-step plans'
    ],
    commonProblems: [
      'Half-installed systems with no useful handover',
      'Intermittent failures that nobody has traced properly',
      'Mixed IT, network and AV issues with shared root causes',
      'Unclear power, cabling or account access dependencies',
      'A system that mostly works until it suddenly does not'
    ],
    exampleJobs: [
      'Traced what connects to what in undocumented setups',
      'Identified likely fault paths and stabilised recurring dropouts',
      'Simplified messy racks and produced practical handover notes',
      'Created clear "fix first" and "improve later" recommendation lists'
    ],
    goodFitFor: [
      'Jobs that cross IT, networking, AV, web or power categories',
      'Inherited systems with mystery faults and poor documentation',
      'Anyone unsure what service category the issue belongs to'
    ]
  },
  {
    slug: 'ai-workflow',
    title: 'AI & Workflow Support',
    contactLabel: 'AI/workflow/documentation',
    shortDescription:
      'Practical AI for documentation, support replies and admin workflows \u2014 with clear rules about what should and should not go into AI tools. Useful results without unnecessary risk.',
    intro:
      'AI tools can save real time on repetitive documentation and admin tasks. The problem is usually knowing where they are genuinely useful and where they introduce risk. I help with both, and I do not overclaim what the tools can do.',
    audience:
      'Small teams and operators who want AI to save time on real work without creating new risk or confusion.',
    whatItCovers: [
      'Prompt templates for common support and admin tasks',
      'Documentation and internal knowledge workflow design',
      'Support reply drafting and process note generation',
      'AI policy basics and safe usage boundaries',
      'Copilot-style adoption planning without overcomplication'
    ],
    commonProblems: [
      'Unsure where AI is genuinely useful day to day',
      'Teams pasting sensitive data into random tools',
      'No structure for prompt quality and consistency',
      'Knowledge trapped in chat threads and individual heads',
      'AI usage creating noise rather than saving time'
    ],
    exampleJobs: [
      'Built support-response and admin prompt templates',
      'Turned messy procedures into usable internal documentation',
      'Defined what should and should not go into AI tooling',
      'Planned practical rollout for small-team AI usage'
    ],
    goodFitFor: [
      'Businesses that want practical AI without the hype cycle',
      'Teams needing clearer documentation and repeatable workflows',
      'Owners who want sensible guardrails before wider AI adoption'
    ]
  }
];

export const systemsIWorkWith = [
  'UniFi / Ubiquiti',
  'Cloudflare Pages',
  'Cloudflare Workers',
  'Astro',
  'Microsoft 365',
  'Windows',
  'Intune',
  'Azure',
  'Fortinet',
  'VMware',
  'Veeam',
  'Victron-style power systems',
  'Renogy',
  'Lithium battery systems',
  'Solar charging',
  'Void Acoustics',
  'Fohhn',
  'Biamp Tesira',
  'Behringer DCX2496',
  'DMX lighting',
  'DJ equipment',
  'PA systems',
  'Network switches',
  'Routers',
  'Access points',
  'NAS / storage',
  'General cabling'
];
