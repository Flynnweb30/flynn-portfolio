import { ServiceItem, ExperienceItem, ToolCategory, WorkStep, CaseStudy, Testimonial, FaqItem, WorkSample } from '../types';

export const PERSONAL_INFO = {
  name: "Flynn James Q. Pontino",
  shortName: "Flynn James",
  role: "Senior B2B SDR, Appointment Setter & Outbound Specialist",
  tagline: "I Turn Cold Outbound Into Predictable Qualified Pipeline",
  email: "va.flynnjames@gmail.com",
  phone: "+63 930 635 9306",
  location: "Remote Global (Serving US, UK, ANZ, CA & SG)",
  linkedin: "https://www.linkedin.com/in/fjpontino",
  resumeUrl: "https://drive.google.com/file/d/1MIN-epAamM3280J2Qv9LwWoQ1w_b15Fd/view?usp=sharing",
  availabilityStatus: "Available for Remote Roles & High-Impact B2B Contracts",
  headlineBio: "11+ years of battle-tested B2B appointment-setting and outbound sales experience. Over $1.8M+ in pipeline sourced, consistent 120–150% quota attainment, and 30+ qualified discovery meetings booked per month across US, UK, ANZ, and Singapore.",
  experienceYears: "11+",
  totalPipelineSourced: "$1.8M+",
  monthlyMeetings: "30+",
  avgQuotaAttainment: "120-150%",
  dailyDials: "150+",
  showUpRate: "70%+",
  marketsServed: "5 Global Markets"
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "lead-generation",
    title: "B2B Lead Generation & Account Targeting",
    tagline: "Laser-focused prospect lists with verified commercial intent",
    badge: "High-Intent Targeting",
    description: "I build pristine, verified prospect lists mapped to your Ideal Customer Profile (ICP). No bloated, outdated databases—only active decision-makers with direct-dial phones and validated email addresses.",
    metrics: "98% data validity · 0% bounce rate target",
    features: [
      "Account-Based Marketing (ABM) list development",
      "Technographic & firmographic intent filtering",
      "C-Suite & VP stakeholder mapping",
      "Continuous list verification via Apollo, Sales Nav, and ZoomInfo"
    ],
    toolsUsed: ["Apollo.io", "LinkedIn Sales Navigator", "ZoomInfo", "Lusha", "Clay"],
    deliverableSummary: "Custom enriched prospect matrices segmented by buying tier, company revenue, and priority trigger events."
  },
  {
    id: "appointment-setting",
    title: "B2B Appointment Setting",
    tagline: "Converting cold interest into confirmed, high-attendance meetings",
    badge: "Core Superpower",
    description: "Securing high-intent discovery calls and product demos directly on your Account Executives' calendars. Every meeting is confirmed with value expectations and pre-call context so show-up rates remain high.",
    metrics: "30+ qualified meetings/mo · 70%+ show-up rate",
    features: [
      "Strategic calendar scheduling & direct calendar invites",
      "Pre-call reminder sequences to slash no-shows",
      "Live transfers for urgent enterprise buyers",
      "Thorough discovery notes provided before every AE call"
    ],
    toolsUsed: ["Calendly", "HubSpot Meetings", "Google Workspace", "Chili Piper"],
    deliverableSummary: "Confirmed calendar events synced to your CRM complete with company revenue, tech stack, and pain points."
  },
  {
    id: "cold-calling",
    title: "High-Volume Cold Calling",
    tagline: "150–500 dials/day backed by consultative phone presence",
    badge: "Relentless Outbound",
    description: "High-volume, high-conviction outbound calling that bypasses gatekeepers and commands attention in the first 7 seconds. I don't read robotic scripts—I hold natural, problem-centric commercial conversations.",
    metrics: "150+ dials/day · 12-18% connect-to-conversation rate",
    features: [
      "Power dialer mastery (Aircall, RingCentral, Five9, PhoneBurner)",
      "Instant objection pivoting ('send an email', 'not interested', 'no budget')",
      "Pattern-interrupt cold openers that gain immediate permission",
      "Active listening and rapid pain identification"
    ],
    toolsUsed: ["Aircall", "RingCentral", "Five9", "PhoneBurner", "Kixie"],
    deliverableSummary: "High daily outbound call volume logged directly with call recordings, disposition notes, and callbacks."
  },
  {
    id: "sdr-support",
    title: "SDR Support, Coaching & Floor Leadership",
    tagline: "Elevating rep productivity, call execution, and onboarding velocity",
    badge: "Sales Leadership",
    description: "Mentoring and leading junior SDRs, auditing live calls, refining objection scripts, and establishing daily accountability to help teams exceed monthly appointment quotas.",
    metrics: "+20% team productivity · 25% faster ramp time",
    features: [
      "Call recording reviews & tactical 1-on-1 coaching",
      "Custom objection turnaround playbooks",
      "New hire onboarding & script shadowing programs",
      "KPI pacing and weekly outbound sprint management"
    ],
    toolsUsed: ["Gong", "HubSpot", "Slack", "Loom", "Notion"],
    deliverableSummary: "Structured SDR onboarding guides, objection cheat sheets, and call quality scorecards."
  },
  {
    id: "linkedin-outreach",
    title: "LinkedIn Social Selling & Sales Navigator Outreach",
    tagline: "Building warm executive rapport across the world's top B2B network",
    badge: "Social Selling",
    description: "Hyper-personalized LinkedIn touches that cut through inbox noise. Combining content engagement, profile visits, tailored connection notes, and multi-touch messaging sequences.",
    metrics: "28% higher connection rate · 5-10 meetings/week",
    features: [
      "Boolean search mastery on Sales Navigator",
      "Trigger-based outreach (funding rounds, executive hiring, promotions)",
      "Non-salesy consultative conversation starters",
      "Integration with cold call touches for multi-channel dominance"
    ],
    toolsUsed: ["LinkedIn Sales Navigator", "Expandi", "Dux-Soup", "HubSpot"],
    deliverableSummary: "Optimized connection sequences and direct message frameworks tailored to your specific industry."
  },
  {
    id: "pipeline-management",
    title: "Prospecting, Follow-Up & CRM Pipeline Hygiene",
    tagline: "Zero lost leads, flawless deal stages, and accurate forecasting data",
    badge: "Data Integrity",
    description: "Managing the full prospect lifecycle from cold reach to handoff. Ensuring every conversation is logged, tasks are scheduled, and stalled leads receive systematic re-engagement sequences.",
    metrics: "100% CRM data accuracy · 30% improved forecast accuracy",
    features: [
      "HubSpot, Salesforce, Pipedrive, and GoHighLevel configuration",
      "Lifecycle stage mapping and automated task cadences",
      "Cold contact resuscitation campaigns",
      "Lead status hygiene and executive reporting"
    ],
    toolsUsed: ["HubSpot CRM", "Salesforce", "Pipedrive", "GoHighLevel"],
    deliverableSummary: "Pristine CRM pipelines with transparent activity logs, stage tracking, and executive visibility."
  }
];

export const WORK_PROCESS_STEPS: WorkStep[] = [
  {
    step: "01",
    title: "Prospect & Research",
    subtitle: "Identify High-Intent Accounts",
    description: "We filter target accounts by strict criteria: company headcount, technology stack, hiring triggers, and geographic focus. Using Apollo and Sales Navigator, I pinpoint verified decision-makers.",
    actionItems: [
      "Define & validate the Ideal Customer Profile (ICP)",
      "Build verified contact lists with direct mobile numbers and business emails",
      "Uncover recent company triggers (funding, new leadership, tool adoption)"
    ],
    outcome: "Clean, verified list of 250–500 targeted decision-makers ready for outreach."
  },
  {
    step: "02",
    title: "Engage & Multi-Touch",
    subtitle: "Coordinate Phone, Email & LinkedIn",
    description: "Executing a synchronized 7-touch cadence over 14 business days. Cold calls are prioritized during peak buyer hours, supported by personalized LinkedIn connection touches and value-driven emails.",
    actionItems: [
      "Execute 150+ daily dials with power dialers",
      "Deploy personalized LinkedIn touches and custom email hooks",
      "Engage gatekeepers politely to navigate directly to decision-makers"
    ],
    outcome: "High connect rate and live conversations with senior buyers."
  },
  {
    step: "03",
    title: "Qualify (BANT & MEDDIC)",
    subtitle: "Diagnose Pain & Verify Purchasing Power",
    description: "I don't push appointments on unqualified leads. I ask diagnostic, open-ended questions to uncover true operational bottlenecks, verify budget authority, and confirm active project timelines.",
    actionItems: [
      "Uncover current tools and commercial pain points",
      "Confirm decision-making authority and buying committee members",
      "Verify budget availability and timeline to implement a solution"
    ],
    outcome: "Only genuinely qualified prospects move to the scheduling phase."
  },
  {
    step: "04",
    title: "Book & Confirm",
    subtitle: "Lock In Dedicated Discovery Time",
    description: "Securing a firm calendar slot directly on your Account Executive's schedule. Providing the prospect with a clear agenda, value proposition summary, and mutual commitment.",
    actionItems: [
      "Direct calendar booking via integrated scheduling tools",
      "Send immediate confirmation email with meeting agenda",
      "Agree on specific topics and materials to be reviewed on the call"
    ],
    outcome: "Locked calendar meeting with high prospect commitment."
  },
  {
    step: "05",
    title: "Follow-Up & Show-Up Optimization",
    subtitle: "Protect Your AE's Calendar Against No-Shows",
    description: "A meeting booked is only valuable if the prospect attends. I execute a proactive 24-hour and 1-hour confirmation sequence with tailored context to keep attendance rates consistently above 70%.",
    actionItems: [
      "24-hour pre-call briefing reminder with agenda re-confirmation",
      "1-hour SMS / email nudge for active engagement",
      "Instant re-scheduling workflow if an executive has an urgent conflict"
    ],
    outcome: "70%+ show-up rate with highly engaged attendees."
  },
  {
    step: "06",
    title: "Frictionless Handoff",
    subtitle: "Detailed Discovery Briefing for Closers",
    description: "Before your AE enters the meeting, they receive a comprehensive briefing document: verbatim pain quotes, competitor mentions, tech stack context, and suggested talk tracks to accelerate deal closure.",
    actionItems: [
      "Log full call recording, notes, and BANT scorecard into CRM",
      "Deliver executive briefing document to AE 15 minutes before meeting",
      "Tag opportunities accurately for pipeline reporting"
    ],
    outcome: "AE enters the discovery call fully armed to close."
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: "Prospecting & Intelligence",
    description: "Tools I use daily to build verified lead lists and uncover buying intent signals.",
    tools: [
      { name: "Apollo.io", level: "Expert", iconName: "Database", useCase: "Verified emails, direct dials, and cadence automation" },
      { name: "LinkedIn Sales Navigator", level: "Expert", iconName: "Linkedin", useCase: "Advanced Boolean filters, account tracking & lead lists" },
      { name: "ZoomInfo", level: "Advanced", iconName: "Search", useCase: "Enterprise intelligence & org chart stakeholder mapping" },
      { name: "Lusha", level: "Advanced", iconName: "Phone", useCase: "Direct dial phone discovery and B2B enrichment" },
      { name: "Clay", level: "Proficient", iconName: "Cpu", useCase: "Automated AI enrichment and waterfall data aggregation" }
    ]
  },
  {
    category: "CRMs & Pipeline Architecture",
    description: "Platforms where I maintain 100% data hygiene, stage tracking, and clean forecasting.",
    tools: [
      { name: "HubSpot CRM", level: "Expert", iconName: "Layers", useCase: "Lifecycle tracking, email templates, meeting scheduler & tasks" },
      { name: "Salesforce", level: "Advanced", iconName: "Cloud", useCase: "Enterprise opportunity management and lead dispositions" },
      { name: "Pipedrive", level: "Expert", iconName: "CheckCircle", useCase: "Visual sales pipeline and deal velocity tracking" },
      { name: "GoHighLevel", level: "Advanced", iconName: "Zap", useCase: "Multi-channel automated marketing & SMS outreach" }
    ]
  },
  {
    category: "Calling & Telephony Infrastructure",
    description: "High-speed power dialers and VoIP solutions to maintain 150–500 dials per day.",
    tools: [
      { name: "Aircall", level: "Expert", iconName: "PhoneCall", useCase: "Power dialing, call tagging, and CRM integration" },
      { name: "RingCentral", level: "Expert", iconName: "Radio", useCase: "Global enterprise outbound calling & call logging" },
      { name: "Five9", level: "Advanced", iconName: "Headphones", useCase: "Predictive & power dialing with automated dispositions" },
      { name: "PhoneBurner", level: "Expert", iconName: "Flame", useCase: "Rapid dialing velocity with zero audio delay" }
    ]
  },
  {
    category: "Outbound Sales Frameworks",
    description: "Proven sales methodologies that ensure conversations convert into qualified opportunities.",
    tools: [
      { name: "BANT Qualification", level: "Expert", iconName: "Target", useCase: "Budget, Authority, Need, and Timeline verification" },
      { name: "MEDDIC Fundamentals", level: "Advanced", iconName: "Award", useCase: "Metrics, Economic Buyer, Decision Criteria alignment" },
      { name: "Consultative Discovery", level: "Expert", iconName: "MessageSquare", useCase: "Active listening, diagnostic questioning & pain exploration" },
      { name: "Objection Inversion", level: "Expert", iconName: "RefreshCw", useCase: "Flipping knee-jerk brush-offs into engaging discussions" }
    ]
  }
];

export const CAREER_EXPERIENCES: ExperienceItem[] = [
  {
    id: "regen-lead",
    period: "Jul 2026 — Present",
    company: "Regen Digital US",
    role: "Junior Sales Team Lead",
    location: "Remote · Dover, DE",
    type: "Full-Time Remote",
    industry: "Web Design, SEO & Digital Marketing",
    highlightMetric: "+15% Monthly KPI Exceedance",
    responsibilities: [
      "Coach and mentor SDRs on objection handling, qualification depth, and closing techniques.",
      "Monitor sales floor metrics, call recordings, and team KPIs using data-driven coaching.",
      "Lead structured SDR onboarding, mock calls, and live shadowing sessions to cut ramp time.",
      "Foster a culture of high performance and resilience across global time zones."
    ],
    achievements: [
      "Accelerated team-wide monthly quota attainment by 15%+ above baseline.",
      "Reduced junior SDR onboarding ramp time by 25% through structured playbooks.",
      "Recognized for top operational coaching and consistent floor morale."
    ]
  },
  {
    id: "regen-sdr",
    period: "May 2026 — Present",
    company: "Regen Digital US",
    role: "Sales Development Representative (SDR)",
    location: "Remote · Dover, DE",
    type: "Full-Time Remote",
    industry: "Web Design, SEO & Digital Marketing",
    highlightMetric: "Level 4 Top Tier in 3 Weeks",
    responsibilities: [
      "Generate qualified sales opportunities through multi-channel cold outbound prospecting.",
      "Engage C-level decision-makers, diagnose digital marketing bottlenecks, and qualify with BANT.",
      "Book high-value appointments for senior digital marketing strategists.",
      "Maintain 100% CRM accuracy in HubSpot with complete discovery notes."
    ],
    achievements: [
      "Promoted to Level 4 (highest company tier) within 3 weeks of joining.",
      "Exceeded 60+ individual KPIs spanning dials, connects, and qualified bookings.",
      "Maintained an average meeting show-up rate of 74%."
    ]
  },
  {
    id: "seek-marketing",
    period: "Nov 2025 — Apr 2026",
    company: "Seek Marketing Partners",
    role: "Outbound Sales Representative",
    location: "Remote · Bury, UK",
    type: "Contract Remote",
    industry: "Marketing & Performance Advertising",
    highlightMetric: "$1.8M Pipeline Sourced · 120% Quota",
    responsibilities: [
      "Conducted 150+ daily cold calls combined with personalized LinkedIn Sales Navigator outreach.",
      "Generated 30+ qualified discovery meetings per month for UK and European account executives.",
      "Owned the full top-of-funnel pipeline in HubSpot from cold contact to confirmed appointment.",
      "Developed new objection-handling scripts for common UK business gatekeepers."
    ],
    achievements: [
      "Crushed monthly quota consistently by 120%, generating $1.8M in pipeline value.",
      "Boosted prospect response rates by 18% with tailored multi-channel cadences.",
      "Improved pipeline forecasting accuracy by 30% through strict CRM stage tracking."
    ]
  },
  {
    id: "averps",
    period: "Feb 2025 — Nov 2025",
    company: "Averps Pte Ltd",
    role: "Sales Development Representative",
    location: "Remote · Singapore",
    type: "Full-Time Remote",
    industry: "Enterprise SaaS & Cloud IT Solutions",
    highlightMetric: "$1.2M Qualified Pipeline · 22% Demo Rate",
    responsibilities: [
      "Executed targeted outbound campaigns to enterprise CTOs, CIOs, and IT Directors in APAC.",
      "Built multi-touch email and LinkedIn cadences customized for enterprise technology buyers.",
      "Pioneered a strict BANT qualification matrix to filter tire-kickers before booking demos.",
      "Collaborated with marketing to refine Ideal Customer Profiles (ICP) and intent data triggers."
    ],
    achievements: [
      "Achieved 100% SQL targets with an exceptional 22% cold-to-demo conversion rate.",
      "Sourced $1.2M in qualified opportunities directly handed off to Account Executives.",
      "Improved enterprise opportunity-to-close rate by 15% through rigorous qualification."
    ]
  },
  {
    id: "psn",
    period: "Nov 2022 — Jan 2025",
    company: "Public Sector Network",
    role: "Delegate Sales Acquisition Representative",
    location: "Remote · Toronto, Canada",
    type: "Full-Time Remote",
    industry: "B2B Events, Government & Technology Summits",
    highlightMetric: "+15% YoY Growth · Top 5% Rep",
    responsibilities: [
      "Targeted public sector leaders, government CIOs, and technology directors across North America.",
      "Leveraged LinkedIn Sales Navigator and phone outreach for high-level delegate acquisition.",
      "Piloted AI personalization strategies that boosted email open and reply rates.",
      "Delivered weekly client acquisition reports and market intelligence to senior stakeholders."
    ],
    achievements: [
      "Exceeded annual acquisition targets by 15% YoY, finishing in the top 5% company-wide.",
      "Achieved a 28% higher connection-to-meeting rate via Sales Navigator.",
      "Lifted cold email open rates by 22% and reply rates by 12% via personalized hooks."
    ]
  },
  {
    id: "pacific-outsource",
    period: "Mar 2015 — Jan 2022",
    company: "Pacific Outsource Teleservices",
    role: "Client Acquisition Manager | Senior SDR",
    location: "Office-based · Philippines",
    type: "Full-Time On-site",
    industry: "BPO, Telemarketing & Lead Generation",
    highlightMetric: "120–150% Quota across 30+ Clients",
    responsibilities: [
      "Managed outbound appointment setting campaigns for 30+ international client accounts in US, UK, and AU.",
      "Consistently generated 100+ leads/week and 30–40 confirmed appointments/month.",
      "Led, mentored, and coached a team of 5 SDRs on call delivery, scripts, and phone pacing.",
      "Engineered automated KPI tracking systems that reduced reporting errors by 40%."
    ],
    achievements: [
      "Exceeded outbound sales quota by 120–150% continuously over a 6-year tenure.",
      "Increased SDR team productivity by 20% and reduced onboarding cycle by 25%.",
      "Successfully expanded campaign execution into US, UK, Australia, and Singapore markets."
    ]
  },
  {
    id: "global-empire",
    period: "Sep 2014 — Sep 2015",
    company: "Global Empire Corporation",
    role: "Sales Specialist",
    location: "Office-based · Cebu, Philippines",
    type: "Full-Time",
    industry: "Customer Acquisition & Retail Services",
    highlightMetric: "150% Quota · 2x Employee of the Month",
    responsibilities: [
      "Executed outbound calls to prospective customers, pitching product value and closing sales.",
      "Proactively managed customer relationships to minimize early cancellations and refunds.",
      "Trained and shadowed 8 newly hired sales agents during their initial call cycles."
    ],
    achievements: [
      "Achieved 150% of individual sales quota within the first 6 months on the floor.",
      "Earned 'Employee of the Month' twice and recognized for 95%+ customer satisfaction scores.",
      "Reduced customer churn by 14% through proactive follow-up calls."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Scaling Outbound Pipeline for a High-Growth UK Agency",
    clientType: "B2B Marketing & Advertising Agency",
    region: "United Kingdom (Bury, UK)",
    industry: "Digital Marketing & Performance Media",
    period: "6-Month Sprint (Nov 2025 – Apr 2026)",
    headlineMetric: "$1.8M Pipeline Sourced",
    secondaryMetrics: [
      { label: "Quota Attainment", value: "120%" },
      { label: "Qualified Meetings/Mo", value: "30+" },
      { label: "Daily Dials", value: "150+" },
      { label: "Response Rate Lift", value: "+18%" }
    ],
    challenge: "The agency relied on inconsistent word-of-mouth and paid ads that were experiencing soaring customer acquisition costs (CAC). They needed a predictable, high-velocity outbound engine targeting CMOs and marketing directors without damaging brand reputation.",
    action: [
      "Rebuilt the Ideal Customer Profile targeting mid-market e-commerce and retail brands with £5M–£50M turnover.",
      "Deployed a multi-channel cadence: 150+ daily cold calls via power dialer, coordinated with LinkedIn Sales Navigator touches.",
      "Wrote custom pattern-interrupt objection scripts addressing common UK gatekeeper blocks ('Send me an email' and 'We have an agency already').",
      "Integrated HubSpot deal tracking with strict BANT qualification to ensure Account Executives only met with decision-makers possessing live marketing budget."
    ],
    result: [
      "Generated $1.8M in pipeline value within 6 months, contributing directly to several 6-figure client contracts.",
      "Consistently beat monthly booking quota by 120%, delivering an average of 32 qualified discovery calls every month.",
      "Increased cold response rates by 18% through consultative phone messaging.",
      "Delivered 100% CRM hygiene with complete discovery notes, leading to a 30% boost in revenue forecasting accuracy."
    ],
    toolsUsed: ["HubSpot CRM", "Aircall", "LinkedIn Sales Navigator", "Apollo.io"],
    quote: {
      text: "Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%.",
      author: "Toby Whitaker",
      role: "Head of Sales, Seek Marketing Partners (UK)"
    }
  },
  {
    id: "case-2",
    title: "Enterprise SaaS & Cloud IT Pipeline Acceleration",
    clientType: "Enterprise Cloud & Infrastructure Software",
    region: "Singapore & Southeast Asia",
    industry: "Enterprise SaaS & Cloud IT",
    period: "10-Month Campaign (Feb 2025 – Nov 2025)",
    headlineMetric: "22% Demo Conversion Rate",
    secondaryMetrics: [
      { label: "Pipeline Generated", value: "$1.2M" },
      { label: "SQL Target Met", value: "100%" },
      { label: "Close Rate Lift", value: "+15%" },
      { label: "Target Audience", value: "Enterprise CIOs/CTOs" }
    ],
    challenge: "Enterprise technology decision-makers in Singapore and Southeast Asia are bombarded by generic software pitches. Averps was struggling to get past executive assistants and experiencing a high drop-off between cold interest and confirmed software demonstrations.",
    action: [
      "Mapped complex organizational charts across regional enterprises using ZoomInfo and Sales Navigator.",
      "Crafted problem-centric, non-aggressive cold call scripts focusing on cloud security vulnerabilities and legacy migration costs.",
      "Implemented a rigid BANT qualification questionnaire before booking: confirming budget authority, active cloud projects, and timeline within 6 months.",
      "Sent customized pre-demo briefs to prospective clients with custom architecture comparisons to build curiosity and commitment."
    ],
    result: [
      "Delivered a 22% demo conversion rate from cold outbound sequences—well above industry averages.",
      "Sourced $1.2M in qualified enterprise opportunities for Senior Account Executives.",
      "Increased the ultimate opportunity-to-close rate by 15% due to high qualification standards.",
      "Achieved 100% of Sales Qualified Lead (SQL) quotas for 10 straight months."
    ],
    toolsUsed: ["HubSpot", "ZoomInfo", "LinkedIn Sales Navigator", "RingCentral"],
    quote: {
      text: "A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs.",
      author: "Van Ng",
      role: "Account Manager, Averps Pte Ltd (Singapore)"
    }
  },
  {
    id: "case-3",
    title: "Rapid Ramp & Sales Floor Leadership in US Marketing Services",
    clientType: "High-Growth US Web Design & Digital Services",
    region: "United States (Dover, DE / Remote)",
    industry: "Web Design, SEO & Custom Web Applications",
    period: "Ongoing (May 2026 – Present)",
    headlineMetric: "Level 4 Attained in 3 Weeks",
    secondaryMetrics: [
      { label: "KPIs Exceeded", value: "60+" },
      { label: "Team Quota Boost", value: "+15%" },
      { label: "Show-Up Rate", value: "74%" },
      { label: "Promotion", value: "Junior Team Lead" }
    ],
    challenge: "Regen Digital US required immediate pipeline momentum in an intensely competitive US market where business owners screen all unknown callers. They needed someone who could achieve top-tier performance quickly and mentor incoming SDRs.",
    action: [
      "Hit the ground running with zero ramp-up time, executing high-volume outbound calling on Day 2.",
      "Refined phone opening hooks to lead with tangible website speed and mobile conversion flaws observed on prospect sites.",
      "Achieved Level 4 (the company's highest performance tier) in just 3 weeks by exceeding 60+ individual KPIs.",
      "Promoted to Junior Sales Team Lead: initiated weekly call listening labs, script teardowns, and objection handling workshops."
    ],
    result: [
      "Exceeded monthly booking targets consistently while maintaining a 74% show-up rate on all booked discovery calls.",
      "Helped junior SDRs increase their own booking rates by an average of 15% through structured mentorship.",
      "Reduced new SDR onboarding time by 25% by writing step-by-step objection handling playbooks."
    ],
    toolsUsed: ["HubSpot", "Apollo.io", "PhoneBurner", "Slack"],
    quote: {
      text: "Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor.",
      author: "TL Dee",
      role: "Sr. Operations Sales Lead, Regen Digital US"
    }
  },
  {
    id: "case-4",
    title: "Public Sector & Government Executive Delegate Acquisition",
    clientType: "International B2B Conference & Executive Summits",
    region: "North America (Toronto, Canada)",
    industry: "Government Technology & Executive Summits",
    period: "2-Year Initiative (Nov 2022 – Jan 2025)",
    headlineMetric: "+15% YoY Target Growth",
    secondaryMetrics: [
      { label: "Rank", value: "Top 5% Company-Wide" },
      { label: "Attendee Conversion", value: "20%" },
      { label: "Sales Nav Connect", value: "+28%" },
      { label: "Email Open Rate Lift", value: "+22%" }
    ],
    challenge: "Selling attendance and executive roundtables to high-level public sector officials (state CIOs, deputy ministers, city managers) who are traditionally insulated behind strict communication gatekeepers.",
    action: [
      "Leveraged LinkedIn Sales Navigator with specialized Boolean search queries to identify relevant public sector committees.",
      "Developed high-respect consultative conversation scripts focused on legislative mandates and digital transformation challenges.",
      "Piloted personalized video/email hooks that increased open rates by 22% and reply rates by 12%.",
      "Mentored 3 junior sales acquisition reps on telephone poise and executive gatekeeper navigation."
    ],
    result: [
      "Finished in the top 5% of sales acquisition reps company-wide for two consecutive years.",
      "Consistently achieved a 20% lead-to-attendee conversion rate across high-profile summits.",
      "Achieved 28% higher connection-to-meeting rates compared to the team baseline."
    ],
    toolsUsed: ["LinkedIn Sales Navigator", "Salesforce", "Outreach", "ZoomInfo"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor. Any team looking for immediate outbound revenue should hire him.",
    author: "TL Dee",
    title: "Sr. Operations Sales Lead",
    company: "Regen Digital US",
    location: "United States",
    verifiedMetric: "Level 4 Tier in 3 Weeks · 60+ KPIs Exceeded",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "test-2",
    quote: "Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%. His reliability and work ethic are world-class.",
    author: "Toby Whitaker",
    title: "Head of Sales",
    company: "Seek Marketing Partners",
    location: "United Kingdom",
    verifiedMetric: "$1.8M Pipeline · 120% Quota Attainment",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "test-3",
    quote: "A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs. He genuinely understands how to talk to enterprise buyers.",
    author: "Van Ng",
    title: "Account Manager",
    company: "Averps Pte Ltd",
    location: "Singapore",
    verifiedMetric: "22% Demo Conversion · $1.2M Enterprise Pipeline",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "test-4",
    quote: "Over the years Flynn worked across our client campaigns, he was consistently our highest producer. Booking 30–40 appointments every month across 30+ client accounts requires unmatched stamina, phone confidence, and CRM discipline.",
    author: "Marcus Vance",
    title: "Managing Director",
    company: "Pacific Outsource Teleservices",
    location: "Philippines / Australia",
    verifiedMetric: "30-40 Appointments/Month across 30+ Clients",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: "sample-script",
    title: "High-Converting Cold Call Script & Objection Playbook",
    category: "Cold Calling Playbook",
    summary: "The exact 7-second permission-based cold call opener and 4 objection turnarounds that yield 12–18% conversation-to-meeting conversions.",
    tags: ["Cold Calling", "Objection Handling", "Phone Script"],
    details: {
      overview: "Traditional pushy pitches fail because they trigger prospect defensiveness immediately. This permission-based framework lowers resistance, gains 30 seconds of voluntary attention, and transitions straight to commercial diagnosis.",
      framework: [
        "Phase 1: Permission Opener — 'Hi [Name], I know I called you out of the blue. You have 30 seconds for me to tell you why, and then you can tell me whether to hang up?'",
        "Phase 2: Acute Business Problem — 'The reason for my call: we're speaking with [Title]s in [Industry] who are frustrated by [Specific Pain A] and the rising cost of [Pain B].'",
        "Phase 3: The Low-Friction Diagnostic Hook — 'How are you guys currently solving [Specific Bottleneck]?'",
        "Phase 4: The Low-Risk Calendar Close — 'I'm not asking you to buy anything today. Would it be ridiculous to grab 15 minutes next Tuesday at 2 PM to see if this is even relevant for your roadmap?'"
      ],
      sampleText: "Objection Pivot: 'Just send me an email' → 'I'd be happy to, [Name]. But honestly, my marketing team gives me 50-page PDFs that nobody reads. If I can ask two quick questions right now, I'll only send the 3 bullet points that actually apply to your team. Fair enough?'",
      tips: [
        "Match the prospect's vocal tone and cadence within the first 3 seconds.",
        "Never argue with an objection—acknowledge first ('That makes total sense'), isolate second, pivot third.",
        "Aim for a conversation, not a pitch recital."
      ]
    }
  },
  {
    id: "sample-cadence",
    title: "7-Touch Multi-Channel Outbound Cadence",
    category: "Cadence Architecture",
    summary: "Synchronized 14-day phone, LinkedIn, and email sequencing engineered to reach busy C-Level executives across multiple time zones.",
    tags: ["Cadence", "Multi-Channel", "Email & LinkedIn"],
    details: {
      overview: "Single-channel outreach is dead. High-value B2B buyers respond to multi-threaded persistence. This cadence combines voice calls with social touches and short, problem-focused emails.",
      framework: [
        "Day 1: Call 1 (Morning) + Blank LinkedIn Profile View + Email 1 (Short, 65 words max, focused on 1 acute problem)",
        "Day 3: Call 2 (Late Afternoon) + LinkedIn Connection Request with personalized note",
        "Day 5: Email 2 (Case Study Snippet: How we helped [Similar Company] solve [Problem])",
        "Day 7: Call 3 (Midday) + Leave a short, 18-second pattern-interrupt voicemail",
        "Day 9: LinkedIn Message / Voice Note commenting on a recent post or company milestone",
        "Day 11: Call 4 (Morning) + Email 3 (Quick 2-line diagnostic question)",
        "Day 14: Final Call 5 + Breakup Email ('Should I close your file?')"
      ],
      tips: [
        "Never send emails longer than 85 words—executives read emails on mobile screens.",
        "Call at least twice during alternate time windows (e.g. 8:30 AM vs 4:45 PM).",
        "The breakup email routinely captures a 15–20% reply rate from busy prospects."
      ]
    }
  },
  {
    id: "sample-bant",
    title: "BANT & MEDDIC Lead Qualification Scorecard",
    category: "Lead Qualification",
    summary: "The standardized scorecard applied to every prospect before locking a discovery call on your AE's calendar.",
    tags: ["BANT", "MEDDIC", "Qualification"],
    details: {
      overview: "Nothing demoralizes an Account Executive faster than showing up to a meeting with an intern or someone with zero budget. This framework guarantees meeting quality.",
      framework: [
        "Budget: Has the prospect allocated budget or does this solve an existing line-item cost? Confirmed financial range.",
        "Authority: Is the prospect the sole economic decision-maker, or who else joins the evaluation committee?",
        "Need: Can the prospect clearly articulate the cost of doing nothing? What happens if they don't solve this within 6 months?",
        "Timeline: When is their desired implementation date? Must be within the active buying window (typically <90–180 days)."
      ],
      sampleText: "Scorecard Criteria: [A] = Confirmed Decision Maker + Budget + Urgency (<30 days). [B] = Strong Influencer + Budget + Evaluation in progress. Anything below [B] is placed into nurturing rather than passed to an AE.",
      tips: [
        "Ask 'What happens if you leave things as they are?' to test genuine emotional and commercial urgency.",
        "Verify who signs the contract before concluding the call."
      ]
    }
  },
  {
    id: "sample-handoff",
    title: "Account Executive Handoff & Discovery Briefing Template",
    category: "CRM Handoff",
    summary: "The exact executive summary sheet generated in HubSpot/Salesforce before an Account Executive hops on a discovery call.",
    tags: ["CRM Hygiene", "AE Handoff", "Discovery Notes"],
    details: {
      overview: "A seamless handoff ensures the closing AE doesn't ask repetitive questions that annoy the prospect. It sets up the AE to look like an expert immediately.",
      framework: [
        "1. Executive Summary: Company name, revenue, headcount, core product, and main website URL.",
        "2. Stakeholder Profile: Name, exact title, LinkedIn profile, communication style, and personality notes.",
        "3. Current Tech Stack & Competitor Usage: Existing tools, contract renewal dates, and known frustrations.",
        "4. Exact Pain Quotes: Verbatim phrases spoken by the prospect during the cold call.",
        "5. Next Step Agreed: Calendar time, Zoom link, and specific demo topics requested."
      ],
      tips: [
        "Include 1-click link to the recorded call audio so the AE can listen at 1.5x speed before the demo.",
        "Never leave blank fields in the CRM—100% data integrity is non-negotiable."
      ]
    }
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Calling & Volume",
    question: "What is your typical daily cold call volume?",
    answer: "Using modern power dialers (such as Aircall, PhoneBurner, or RingCentral), I consistently average 150+ dials per day while maintaining quality conversations, taking detailed notes, and properly qualifying each lead. For specialized high-velocity dialer campaigns, volume can scale to 250–500 dials per day."
  },
  {
    category: "Quality & Show-ups",
    question: "How do you ensure high show-up rates on booked appointments?",
    answer: "A booked meeting is worthless if the prospect doesn't show up. I maintain a 70%+ show-up rate by: (1) confirming clear mutual value during the initial call, (2) sending a direct calendar invite with an agreed agenda, (3) sending a personalized 24-hour pre-call briefing reminder, and (4) sending a quick 1-hour SMS/email nudge."
  },
  {
    category: "Engagement",
    question: "How fast can you ramp up on our product and market?",
    answer: "Zero ramp-up time. With 11+ years of sales experience, I am accustomed to immersing myself in a new company's ICP, value proposition, and competitor landscape within 48 to 72 hours. By Day 3 or 4, I am actively building lists, refining scripts, and dialing live prospects."
  },
  {
    category: "Engagement",
    question: "What global markets and time zones do you support?",
    answer: "I have deep, verified outbound sales experience across 5 global markets: United States (EST, CST, MST, PST), United Kingdom & Europe (GMT/BST), Australia & New Zealand (AEST/NZST), Canada, and Singapore (SGT). I adjust my working hours to align with your buyers' peak active phone windows."
  },
  {
    category: "Tools & Stack",
    question: "What CRMs and sales tools are you comfortable working with?",
    answer: "I am an expert in HubSpot CRM, Salesforce, Pipedrive, and GoHighLevel. On the data and dialing side, I work daily with Apollo.io, LinkedIn Sales Navigator, ZoomInfo, Lusha, Aircall, RingCentral, Five9, and PhoneBurner. If your company uses a different stack, I adapt immediately."
  },
  {
    category: "Engagement",
    question: "Can you work with our existing lead lists or do you build them?",
    answer: "Both! If you have an existing CRM database with cold contacts or past leads that need re-engagement, I will scrub, qualify, and resuscitate them. If you need greenfield prospecting, I build fresh, verified lists from scratch using Apollo, Sales Navigator, and ZoomInfo."
  },
  {
    category: "Calling & Volume",
    question: "How do you handle gatekeepers and tough executive objections?",
    answer: "Gatekeepers are not obstacles—they are valuable sources of internal intelligence. I treat them with professional respect, ask direct diagnostic questions, and use conversational authority to earn warm transfers. For objections ('Send me an email', 'Not interested', 'No budget'), I use pattern-interrupt pivots that disarm tension and redirect the conversation back to their operational challenges."
  },
  {
    category: "Quality & Show-ups",
    question: "What qualification criteria do you use before booking an appointment?",
    answer: "I enforce strict BANT (Budget, Authority, Need, Timeline) and MEDDIC criteria. We agree in advance on your non-negotiables (e.g. minimum company size, specific decision-maker titles, existing tech stack). If a prospect does not qualify, I do not book them on your AE's calendar."
  }
];