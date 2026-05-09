export type CaseStudy = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  problem: string;
  workedOn: string[];
  technicalDetails: { heading: string; items: string[] }[];
  outcome: string;
  whatItShows: string;
  ctaText: string;
  status: 'ongoing' | 'complete';
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-outback',
    title: 'The Outback — Venue Website, Network, Audio & Technical Systems',
    tags: [
      'Venue Technology',
      'Website',
      'Cloudflare',
      'Networking',
      'UniFi',
      'AV & Audio',
      'Lighting',
      'Technical Operations'
    ],
    summary:
      'Ongoing technical work for The Outback, a bar/club venue on the Isle of Man, covering website development, Cloudflare deployment, network planning, venue audio improvements, AV and lighting support and general technical problem solving.',
    status: 'ongoing',
    problem:
      'The Outback is a live hospitality venue with a lot of systems that need to work in the real world: website, guest Wi-Fi, secure business networking, payment devices, audio systems, DJ equipment, lighting, and venue technical infrastructure. Like many venues, the setup has grown over time — a mixture of older equipment, practical constraints, budget limitations and inherited technical decisions. The brief was not a single project but an ongoing relationship: help make things work better, plan improvements sensibly, and avoid unnecessary spend.',
    workedOn: [
      'Built and improved theoutback.im as a modern Astro website deployed on Cloudflare Pages',
      'Implemented Cloudflare Workers for contact form handling and explored Turnstile and rate limiting concepts for form hardening',
      'Helped improve SEO structure, business descriptions and Google Business Profile visibility',
      'Reviewed and planned network structure using UniFi hardware',
      'Considered guest, staff and secure network separation for different venue needs including payment device reliability',
      'Helped plan and troubleshoot audio system improvements across the venue',
      'Reviewed speaker placement, venue coverage, upstairs and downstairs sound zones, rack layout and DSP routing',
      'Worked with venue AV equipment, DMX lighting basics and DJ booth technical setup',
      'Helped plan phased upgrades rather than unnecessary full replacement',
      'Produced technical documentation to make the setup easier to support long term'
    ],
    technicalDetails: [
      {
        heading: 'Website & deployment',
        items: [
          'Astro — static site framework for fast, maintainable builds',
          'Cloudflare Pages — deployment and CDN',
          'Cloudflare Workers — contact form and server-side logic',
          'Cloudflare Turnstile — bot protection concepts for contact forms',
          'Cloudflare KV / rate limiting — explored for form abuse prevention',
          'Google Business Profile — local listing and description improvements'
        ]
      },
      {
        heading: 'Networking',
        items: [
          'UniFi gateway, switching and access point planning',
          'Guest, staff and secure network separation',
          'VLAN planning and firewall basics',
          'Payment and card machine network path review'
        ]
      },
      {
        heading: 'Audio & AV',
        items: [
          'Venue PA system review and speaker placement planning',
          'DSP routing concepts — Biamp Tesira / Behringer DCX2496 style configuration',
          'Void Acoustics / Fohhn speaker coverage planning',
          'Gain structure and limiter starting points',
          'Multi-zone audio coverage — upstairs and downstairs',
          'Rack layout tidying and signal path documentation',
          'DMX lighting basics and DJ booth technical setup'
        ]
      }
    ],
    outcome:
      'This is an ongoing project. The work has helped build a stronger technical foundation for the venue across web, network, audio and operational systems. The website is faster and more maintainable. Network planning work has laid the groundwork for safer, more reliable connectivity. Audio and AV improvements have been planned and partially implemented in stages. The focus remains on practical, staged improvements that fit the venue environment and operational constraints.',
    whatItShows:
      'This project shows that I can work across multiple connected systems rather than just one narrow category. A venue is not just a website, or a network, or a sound system — all of those things matter together and they affect each other. I can look at the bigger picture, understand the real-world environment and plan improvements that fit the venue, the budget and the operational pressure without overcomplicating things or recommending unnecessary replacements.',
    ctaText: 'Need practical technical help for a venue, bar, club or hospitality business?'
  }
];
