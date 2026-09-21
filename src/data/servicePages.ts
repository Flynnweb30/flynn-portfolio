import { ServiceItem } from '../types';

export interface ServicePage extends ServiceItem {
  slug: string;
  h1: string;
  intro: string;
  longDescription: string;
  targetMarkets: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const SERVICE_PAGES: Record<string, ServicePage> = {
  'appointment-setting': {
    slug: 'appointment-setting',
    id: 'appointment-setting',
    h1: 'B2B Appointment Setting Services',
    title: 'B2B Appointment Setting',
    tagline: 'Book qualified decision-maker meetings directly on your AE calendars',
    badge: 'Core Service',
    intro: 'I book 30+ qualified B2B appointments every month for SaaS, IT, agency, and professional services teams — with a 70%+ show-up rate because every meeting is confirmed, briefed, and value-aligned.',
    description: 'Done-for-you B2B appointment setting that puts your Account Executives in front of verified decision-makers.',
    longDescription: 'Most SDR teams book meetings that never convert. I book appointments that do. Every call I schedule begins with strict BANT qualification, direct calendar booking, and a pre-call briefing document so your AE enters the room fully armed. I handle the cold outreach, the objection handling, the confirmation sequence, and the CRM hygiene — you focus on closing.',
    metrics: '30+ qualified meetings/month · 70%+ show-up rate',
    features: [
      'Strict BANT/MEDDIC qualification before booking',
      'Direct calendar integration (Calendly, HubSpot Meetings)',
      '24-hour pre-call briefing reminders',
      '1-hour confirmation SMS/email nudges',
      'Detailed discovery notes and pain quotes sent to AE',
      'Instant rescheduling workflows for conflicts',
    ],
    toolsUsed: ['Calendly', 'HubSpot', 'Salesforce', 'Chili Piper'],
    deliverableSummary: 'Confirmed calendar events with full pre-call context and BANT scorecards.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'New Zealand', 'Singapore'],
    faqs: [
      {
        q: 'How many appointment setting meetings can you book per month?',
        a: 'Typically 25–35 qualified meetings per month depending on your ICP and target market. For enterprise SaaS with long sales cycles, 15–20 high-quality meetings; for SMB-focused offers, 40+.',
      },
      {
        q: 'What happens if a prospect no-shows?',
        a: 'I run a 24-hour and 1-hour confirmation sequence to protect attendance. If a prospect no-shows, I immediately re-engage and either reschedule or disqualify. My show-up rate consistently stays above 70%.',
      },
      {
        q: 'Do you book directly on our AE calendars?',
        a: 'Yes. I integrate with Calendly, HubSpot Meetings, Salesforce, or Google Calendar and book directly into your AE availability — no double-booking, no manual coordination.',
      },
      {
        q: 'How do you qualify prospects before booking?',
        a: 'Every prospect passes through a BANT qualification framework (Budget, Authority, Need, Timeline). If they don\'t meet your minimum criteria, they don\'t get a meeting. I never pad pipeline with unqualified leads.',
      },
      {
        q: 'Which markets do you cover for appointment setting?',
        a: 'US, UK, ANZ, Canada, and Singapore time zones. I adjust calling hours to match peak buyer windows in each market.',
      },
    ],
    relatedSlugs: ['cold-calling', 'lead-generation', 'sdr-services', 'sales-development'],
  },

  'cold-calling': {
    slug: 'cold-calling',
    id: 'cold-calling',
    h1: 'High-Volume Cold Calling Services',
    title: 'Cold Calling',
    tagline: '150+ dials per day with consultative, permission-based phone openers',
    badge: 'Signature Service',
    intro: 'I average 150+ cold dials per day and hold natural, problem-centric conversations that bypass gatekeepers and reach C-level decision-makers in under seven seconds.',
    description: 'High-volume B2B cold calling backed by 11+ years of phone experience.',
    longDescription: 'Cold calling isn\'t dead — bad cold calling is. My approach uses permission-based openers, pattern interrupts, and consultative diagnostic questioning to disarm prospect defensiveness within seconds. I don\'t read scripts; I have conversations. Then I qualify hard and book the meeting or disqualify fast.',
    metrics: '150+ dials/day · 12–18% connect-to-conversation rate',
    features: [
      'Permission-based cold openers that gain 30 seconds of attention',
      'Instant objection pivoting ("send an email", "no budget", "not interested")',
      'Power dialer mastery (Aircall, PhoneBurner, Five9, RingCentral)',
      'Gatekeeper navigation and warm transfers',
      'Live call recordings and disposition notes in CRM',
      'Callback scheduling and stale lead re-engagement',
    ],
    toolsUsed: ['Aircall', 'RingCentral', 'Five9', 'PhoneBurner', 'Kixie'],
    deliverableSummary: '150+ daily outbound calls logged with recordings, dispositions, and callbacks.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'How many cold calls do you make per day?',
        a: '150+ dials per day as a baseline. For high-velocity campaigns, 250–500 dials per day is achievable with the right power dialer.',
      },
      {
        q: 'Can you handle gatekeepers and executive assistants?',
        a: 'Yes. Gatekeepers are often the best source of internal intelligence. I treat them with respect, ask direct diagnostic questions, and use conversational authority to earn warm transfers.',
      },
      {
        q: 'Do you cold call internationally?',
        a: 'Yes — US, UK, Australia, Canada, and Singapore. I adjust my accent-adaptation, calling hours, and objection handling based on regional buying culture.',
      },
      {
        q: 'What is your typical cold call connect-to-meeting rate?',
        a: '12–18% of live conversations convert to a booked meeting. For high-intent lists with warm signals, that can reach 22%+.',
      },
      {
        q: 'What tools do you use for cold calling?',
        a: 'Aircall, RingCentral, Five9, PhoneBurner, and Kixie. I adapt to whatever power dialer your team uses.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'lead-generation', 'sales-development'],
  },

  'lead-generation': {
    slug: 'lead-generation',
    id: 'lead-generation',
    h1: 'B2B Lead Generation & Account Targeting',
    title: 'Lead Generation',
    tagline: 'Verified prospect lists mapped to your Ideal Customer Profile',
    badge: 'Data Foundation',
    intro: 'I build clean, verified B2B prospect lists with direct dials, validated work emails, and buying-intent signals — no bloated databases, no bounced emails, no wasted dials.',
    description: 'Laser-targeted B2B lead generation with verified contact data and intent signals.',
    longDescription: 'Every outbound campaign lives or dies on the quality of the list. I build account-based prospect lists using Apollo, LinkedIn Sales Navigator, ZoomInfo, and Clay — then enrich them with technographic, firmographic, and trigger-event signals so outreach lands at the right moment.',
    metrics: '98% data validity · <1% bounce rate target',
    features: [
      'Account-Based Marketing (ABM) list development',
      'Technographic and firmographic filtering',
      'C-suite and VP stakeholder mapping',
      'Continuous list verification and enrichment',
      'Trigger-event monitoring (funding, hiring, tool adoption)',
      'CRM-ready CSV exports with custom fields',
    ],
    toolsUsed: ['Apollo.io', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Lusha', 'Clay'],
    deliverableSummary: 'Custom prospect lists segmented by buying tier with verified direct dials and emails.',
    targetMarkets: ['United States', 'United Kingdom', 'Europe', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'What is included in a lead generation engagement?',
        a: 'ICP definition, account list building, contact discovery, data enrichment, email and phone verification, and CRM-ready delivery. I can also handle the outreach itself if you need a full managed service.',
      },
      {
        q: 'How do you verify emails and phone numbers?',
        a: 'I use Apollo, Lusha, ZoomInfo, and Clay for waterfall enrichment, plus NeverBounce or ZeroBounce for email verification. My data validity target is 98% with a <1% bounce rate.',
      },
      {
        q: 'How many leads do you typically deliver?',
        a: 'Depends on your ICP. For a niche B2B SaaS targeting CTOs at Series B companies, 250–500 verified leads. For broader SMB targets, 2,000+ per month.',
      },
      {
        q: 'Can you build lists for enterprise ABM campaigns?',
        a: 'Yes. I map full buying committees (economic buyer, champion, technical evaluator, procurement) with direct contact data for each stakeholder.',
      },
      {
        q: 'How often are lists refreshed?',
        a: 'Monthly for active campaigns, or on-demand for new segments. I re-verify all contacts before every campaign launch.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'sdr-services', 'sales-development'],
  },

  'sdr-services': {
    slug: 'sdr-services',
    id: 'sdr-services',
    h1: 'SDR Services & Outbound Sales Support',
    title: 'SDR Services',
    tagline: 'Full-time or fractional senior SDR for B2B sales teams',
    badge: 'Team Extension',
    intro: 'I work as an embedded senior SDR for B2B teams — running cold outreach, booking qualified meetings, and managing your CRM with the discipline of a 11-year veteran.',
    description: 'Senior SDR services for SaaS, IT, agency, and professional services teams.',
    longDescription: 'Hiring and ramping a junior SDR takes 3–6 months. Bringing me on takes 48 hours. I plug into your CRM, learn your ICP, and start booking qualified meetings within a week. Available full-time, part-time, or project-based.',
    metrics: '48-hour ramp · 30+ qualified meetings/month',
    features: [
      'Full ownership of outbound prospecting pipeline',
      'Cold calling, email, and LinkedIn multi-channel outreach',
      'Strict BANT qualification on every booked meeting',
      'Complete CRM hygiene (HubSpot, Salesforce, Pipedrive)',
      'Weekly pipeline reporting and forecast visibility',
      'Optional SDR coaching and team enablement',
    ],
    toolsUsed: ['HubSpot', 'Salesforce', 'Apollo.io', 'Aircall', 'LinkedIn Sales Navigator'],
    deliverableSummary: 'Embedded senior SDR producing qualified pipeline and clean CRM data.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore', 'Global'],
    faqs: [
      {
        q: 'What is the difference between SDR services and appointment setting?',
        a: 'Appointment setting focuses specifically on booking meetings. SDR services are broader — covering cold calling, email cadences, LinkedIn outreach, list building, qualification, CRM hygiene, and pipeline reporting.',
      },
      {
        q: 'How quickly can you ramp up?',
        a: 'Within 48–72 hours I understand your ICP, value proposition, and competitive landscape. I start live outreach within the first week and typically book qualified meetings by week two.',
      },
      {
        q: 'Are you available full-time or part-time?',
        a: 'Both. I offer full-time embedded engagements, part-time contracts, and project-based sprints depending on your team\'s needs.',
      },
      {
        q: 'Do you work with our existing CRM and tools?',
        a: 'Yes. I adapt to HubSpot, Salesforce, Pipedrive, GoHighLevel, Outreach, Salesloft, Apollo, and any standard B2B sales stack.',
      },
      {
        q: 'What markets and time zones do you cover?',
        a: 'US (all four mainland time zones), UK/EU, Australia (AEST/AEDT), New Zealand, and Singapore. I align working hours to your buyers\' peak activity windows.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'sales-coaching'],
  },

  'digital-marketing-appointment-setting': {
    slug: 'digital-marketing-appointment-setting',
    id: 'digital-marketing-appointment-setting',
    h1: 'Digital Marketing Appointment Setting',
    title: 'Digital Marketing Appointment Setting',
    tagline: 'Booked meetings with CMOs, marketing directors, and e-commerce brands',
    badge: 'Agency-Specialized',
    intro: 'I help digital marketing agencies, SEO firms, and web design studios fill their calendars with qualified conversations with marketing decision-makers.',
    description: 'Specialized appointment setting for digital marketing, SEO, and web design agencies.',
    longDescription: 'Selling marketing services requires a different playbook. CMOs and marketing directors get hundreds of agency pitches every month. I cut through by leading with a specific diagnostic — a website speed issue, a paid-ads waste pattern, a content gap — then scheduling a working session.',
    metrics: '25–40 agency meetings/month · 18% reply rate on multi-channel',
    features: [
      'ICP targeting for e-commerce, SaaS, and mid-market brands',
      'Diagnostic-first phone openers (site speed, ad waste, SEO gaps)',
      'Multi-channel cadence across phone, email, and LinkedIn',
      'Direct booking with agency founders or account leads',
      'Pre-call audit brief delivered to the AE',
      'Full agency-style CRM discipline',
    ],
    toolsUsed: ['HubSpot', 'Apollo.io', 'LinkedIn Sales Navigator', 'Aircall', 'Calendly'],
    deliverableSummary: 'Booked discovery calls with marketing decision-makers, complete with pre-call audit notes.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'What kinds of marketing agencies do you work with?',
        a: 'SEO agencies, paid-ads agencies, web design studios, content marketing firms, and full-service B2B marketing agencies.',
      },
      {
        q: 'Who do you typically book meetings with at target companies?',
        a: 'CMOs, VPs of Marketing, Heads of Growth, Marketing Directors, E-commerce Managers, and Founders at mid-market brands.',
      },
      {
        q: 'How do you differentiate one agency from the next?',
        a: 'I lead every call with a specific diagnostic tied to your agency\'s specialty — e.g., a website speed score, a paid-ads efficiency benchmark, or a content gap analysis.',
      },
      {
        q: 'Do you offer a trial period?',
        a: 'Yes. For agency engagements I typically suggest a 30-day pilot focused on one ICP segment before committing to a longer contract.',
      },
      {
        q: 'How do you handle the "we already have an agency" objection?',
        a: 'I don\'t argue. I pivot to a diagnostic question: "That\'s great to hear. Curious — are you seeing [specific issue] on your current setup?" Nine times out of ten the answer is yes, and the conversation opens up.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'lead-generation'],
  },

  'sales-development': {
    slug: 'sales-development',
    id: 'sales-development',
    h1: 'Sales Development & B2B Prospecting',
    title: 'Sales Development',
    tagline: 'Multi-channel prospecting that builds predictable pipeline',
    badge: 'Pipeline Engine',
    intro: 'Sales development is more than cold calling. I build multi-channel prospecting motions — phone, email, LinkedIn, and intent-based targeting — that consistently produce qualified pipeline.',
    description: 'Sales development and B2B prospecting services for SaaS, IT, and professional services.',
    longDescription: 'Predictable pipeline comes from repeatable process. I build sales development engines that combine list building, sequencing, cold calling, LinkedIn touches, and CRM reporting into a system that doesn\'t depend on luck.',
    metrics: '30+ meetings/month · $1.8M+ pipeline historically generated',
    features: [
      'ICP definition and account list building',
      '7-touch multi-channel cadence design (phone, email, LinkedIn)',
      'Email deliverability management and domain warming',
      'Intent-based targeting from ZoomInfo and Bombora signals',
      'Full pipeline reporting with weekly executive summaries',
      'CRM architecture and lifecycle stage setup',
    ],
    toolsUsed: ['Apollo.io', 'LinkedIn Sales Navigator', 'HubSpot', 'Outreach', 'Salesloft', 'ZoomInfo'],
    deliverableSummary: 'A repeatable, documented sales development motion with weekly pipeline visibility.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore'],
    faqs: [
      {
        q: 'What is included in a sales development engagement?',
        a: 'ICP definition, list building, cadence design, cold calling, email sequencing, LinkedIn outreach, CRM hygiene, and weekly pipeline reporting. Everything needed to run a modern B2B SDR motion.',
      },
      {
        q: 'Do you build the cadences from scratch?',
        a: 'Yes. I design multi-touch sequences based on your buyer\'s actual decision journey — including the specific objections, triggers, and value props that matter to them.',
      },
      {
        q: 'How do you measure success?',
        a: 'Primary KPIs: qualified meetings booked, pipeline value created, and meeting-to-opportunity conversion. Secondary KPIs: dials, connects, reply rates, and CRM data accuracy.',
      },
      {
        q: 'Can you work alongside an existing SDR team?',
        a: 'Yes. I often work as the senior SDR on the team, taking the more complex enterprise accounts or the toughest segments while helping coach junior reps.',
      },
      {
        q: 'What makes your sales development approach different?',
        a: 'Discipline and data. I don\'t rely on tricks or gimmicks. I execute a documented process, measure what matters, and iterate based on real conversation data.',
      },
    ],
    relatedSlugs: ['appointment-setting', 'cold-calling', 'lead-generation', 'sdr-services'],
  },

  'sales-coaching': {
    slug: 'sales-coaching',
    id: 'sales-coaching',
    h1: 'Sales Coaching & SDR Team Leadership',
    title: 'Sales Coaching',
    tagline: 'Reduce ramp time by 25% and lift team quota attainment by 15%+',
    badge: 'Leadership Service',
    intro: 'As Junior Sales Team Lead at Regen Digital US, I mentor SDR teams through call shadowing, objection-handling workshops, and structured onboarding — cutting ramp time and lifting quota attainment.',
    description: 'Sales coaching and SDR team leadership for B2B outbound teams.',
    longDescription: 'Great SDRs aren\'t born — they\'re coached. I work with sales leaders to build structured onboarding programs, run call listening labs, refine objection-handling playbooks, and establish KPI pacing cadences. The result: faster ramp, higher quota attainment, and lower turnover.',
    metrics: '25% faster ramp · 15%+ team quota lift',
    features: [
      'Structured SDR onboarding program design',
      'Call listening labs and one-on-one coaching',
      'Objection-handling workshop facilitation',
      'Custom playbook development (cold call + email + LinkedIn)',
      'KPI dashboard and pacing accountability',
      'New hire shadowing and mock-call programs',
    ],
    toolsUsed: ['Gong', 'HubSpot', 'Slack', 'Loom', 'Notion'],
    deliverableSummary: 'Structured SDR playbooks, onboarding guides, and call quality scorecards.',
    targetMarkets: ['United States', 'United Kingdom', 'Australia', 'Singapore', 'Global'],
    faqs: [
      {
        q: 'What does an SDR coaching engagement look like?',
        a: 'Typically a 30-day intensive covering onboarding design, call listening labs, objection-handling workshops, and playbook development. Then ongoing monthly coaching as needed.',
      },
      {
        q: 'How much does ramp time improve?',
        a: 'Teams I\'ve coached have seen ramp time drop from 8 weeks to 5 weeks (a 25% reduction) through structured onboarding and shadowing programs.',
      },
      {
        q: 'Can you coach remote SDR teams?',
        a: 'Yes. I coach remote teams across US, UK, ANZ, and Singapore time zones using Gong, Slack, and structured video reviews.',
      },
      {
        q: 'Do you provide the playbooks or work with existing ones?',
        a: 'Both. I can build playbooks from scratch or audit and refine your existing cold call scripts, email templates, and objection-handling matrices.',
      },
      {
        q: 'What results have your coached teams achieved?',
        a: 'At Regen Digital US, my coaching contributed to a 15% team-wide quota lift and 25% faster onboarding for new SDRs.',
      },
    ],
    relatedSlugs: ['sdr-services', 'cold-calling', 'sales-development'],
  },
};