export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  audience: string;
  commonProblems: string[];
  exampleJobs: string[];
};

export const services: Service[] = [
  {
    slug: 'it-support',
    title: 'IT & Technical Support',
    shortDescription:
      'Reliable help with Windows, Microsoft 365, devices, updates, business systems and awkward technical problems.',
    intro:
      'Practical support for day-to-day IT problems and the messy issues that stop work getting done. I focus on clear diagnosis, realistic fixes and straightforward advice.',
    audience:
      'Small businesses, home offices, teams with mixed devices, and anyone who needs direct technical help without a long support chain.',
    commonProblems: [
      'Windows machines running slowly or crashing',
      'Microsoft 365 setup issues and account access problems',
      'Intune and device management confusion',
      'Recurring network dropouts and unstable connections',
      'General business IT systems not working together'
    ],
    exampleJobs: [
      'Stabilised a small office setup with failing laptops and patchy updates',
      'Set up Microsoft 365 users, security defaults and mailbox migrations',
      'Improved device management workflow for shared business hardware'
    ]
  },
  {
    slug: 'networking',
    title: 'UniFi & Networking',
    shortDescription:
      'UniFi, Wi-Fi, VLANs, guest networks, secure business networks and practical cabling plans.',
    intro:
      'Network design and troubleshooting for businesses and venues that rely on stable, secure connectivity. I build setups that are maintainable, segmented and practical.',
    audience:
      'Shops, hospitality venues, offices, and growing teams that need reliable Wi-Fi and safe network separation.',
    commonProblems: [
      'Guest and staff traffic mixed on one insecure network',
      'Card machines or POS devices dropping off intermittently',
      'Dead Wi-Fi zones and poor AP placement',
      'No visibility into gateway, switch or AP health',
      'Remote access that is unreliable or unsafe'
    ],
    exampleJobs: [
      'Installed UniFi gateway, managed switches and APs with VLAN structure',
      'Separated POS and card machine traffic from general staff devices',
      'Configured secure remote access VPN for owners and managers'
    ]
  },
  {
    slug: 'websites',
    title: 'Website Development',
    shortDescription:
      'Fast, modern Astro websites hosted on Cloudflare, built for local businesses that need to look credible and load quickly.',
    intro:
      'Websites built with modern standards: fast pages, clean structure, practical SEO basics and secure deployment. No bloat, just well-built pages that do their job.',
    audience:
      'Local businesses, trades, venues and independent professionals who need a trustworthy web presence that is easy to maintain.',
    commonProblems: [
      'Slow legacy websites with poor mobile performance',
      'No clear contact path for new enquiries',
      'Missing SEO basics and weak local search visibility',
      'Outdated hosting and weak security defaults',
      'No process for updates or future content growth'
    ],
    exampleJobs: [
      'Built Astro site deployed to Cloudflare Pages with strong Lighthouse scores',
      'Implemented contact form workflow ready for Cloudflare Workers integration',
      'Added security headers and technical SEO metadata'
    ]
  },
  {
    slug: 'av-audio',
    title: 'AV, Audio & Venue Systems',
    shortDescription:
      'Venue sound, PA systems, racks, DSP, amplifiers, speaker placement and troubleshooting for bars, clubs and events.',
    intro:
      'Hands-on audio and AV support for venues where reliability matters. I help diagnose poor sound, clean up signal flow and make systems easier to run.',
    audience:
      'Bars, clubs, event spaces and small venues that need practical upgrades rather than constant patch fixes.',
    commonProblems: [
      'Inconsistent sound coverage across the room',
      'Feedback and gain staging issues',
      'Untidy racks and unclear patching routes',
      'DSP configuration that nobody trusts',
      'Basic lighting or DMX setup confusion'
    ],
    exampleJobs: [
      'Redesigned speaker placement to improve clarity and reduce hotspots',
      'Rebuilt amplifier and rack layout with labelled signal paths',
      'Retuned DSP routing for more predictable venue performance'
    ]
  },
  {
    slug: 'van-power',
    title: 'Van Electrical & Off-Grid Power',
    shortDescription:
      'Solar, lithium batteries, inverters, DC-DC charging and Victron-style campervan power planning.',
    intro:
      'Power system planning and staged upgrades for vans and off-grid builds. I focus on safe layouts, realistic usage expectations and long-term reliability.',
    audience:
      'Campervan owners, mobile professionals and DIY builders who want clear technical guidance before spending money on hardware.',
    commonProblems: [
      'Undersized batteries for real usage',
      'Poor charging strategy between alternator, solar and mains',
      'Inverter installation uncertainty and cable sizing questions',
      'No visibility on battery health or power draw',
      'Unstructured upgrade plans that waste budget'
    ],
    exampleJobs: [
      'Designed phased lithium upgrade with battery monitor and inverter integration',
      'Planned solar and DC-DC charging around realistic daily load profiles',
      'Resolved grounding and voltage-drop issues in existing installs'
    ]
  },
  {
    slug: 'technical-odd-jobs',
    title: 'General Technical Odd Jobs',
    shortDescription:
      "If it plugs in, connects to something, needs configuring, or keeps breaking, I can probably help.",
    intro:
      'Some problems do not fit a neat service category. I take on practical technical jobs that need troubleshooting, setup and clear outcomes.',
    audience:
      'People and businesses with awkward one-off issues, mixed systems, or technical jobs that keep getting postponed.',
    commonProblems: [
      'Equipment installs with unclear setup steps',
      'Cross-system faults where nobody owns the whole picture',
      'Intermittent failures that are hard to replicate',
      'Messy cabling and undocumented device setups',
      'Need for practical diagnostics and a plan forward'
    ],
    exampleJobs: [
      'Tracked down intermittent connectivity across mixed legacy and new hardware',
      'Set up and documented ad-hoc equipment stacks for small venues',
      'Reworked cabling and power layout to reduce recurring faults'
    ]
  }
];
