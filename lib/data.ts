import type {
  Differentiator,
  EducationEntry,
  ExperienceEntry,
  ImpactMetric,
  Project,
  SkillCategory,
  WorkStage,
} from "./types";

export const person = {
  name: "Naomi Moraa Osoro",
  firstName: "Naomi",
  role: "Business IT & Digital Solutions Professional",
  positioning:
    "Business IT professional turning manual processes into automated, audit-ready digital systems across East and Southern Africa.",
  supporting:
    "2+ years supporting enterprise ICT operations and building Power Platform solutions inside a multinational manufacturing environment — from frontline technical support to full-stack automation delivering measurable efficiency gains in Kenya, Zambia, Zimbabwe and South Africa.",
  email: "missmoraaosoro@gmail.com",
  phone: "+254 748 221 238",
  location: "Nairobi, Kenya",
  linkedin: "https://www.linkedin.com/in/naomi-moraa-95b849242",
  cvFile: "/Naomi-Moraa-Osoro-CV.pdf",
  siteUrl: "https://naomi-moraa-osoro.vercel.app",
  initials: "NO",
};

export const about = {
  heading: "About",
  paragraphs: [
    "Naomi started in frontline IT support — installing systems, managing Active Directory accounts, and keeping hardware, software and networks running for end users at Naivas Supermarket HQ. That grounding in how enterprise technology actually breaks, and what it takes to fix it under pressure, still shapes how she works today.",
    "Since then, her focus has shifted from resolving individual tickets to removing the need for them. At Dimension Data and later at British American Tobacco (BAT) Kenya, she moved into building the applications, dashboards and automations that replace manual, error-prone business processes — using the Microsoft Power Platform (PowerApps, Power Automate, Power BI) alongside SAP, ServiceNow and SharePoint.",
    "As a Factory Support Developer seconded to BAT, she now supports digital channel and ICT operations across East and Southern Africa while designing the automation that sits behind them — dashboards that cut order-processing time, systems that replace costly third-party tools, and processes that hold up under formal IT audit.",
    "What ties this together is a comfort operating at the intersection of business need, data and technical delivery: gathering requirements directly from stakeholders, translating them into a working Power Platform or full-stack solution, and being accountable for whether it actually reduces cost, time or risk once it's live.",
  ],
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "2+",
    label: "Years in Enterprise IT",
    detail: "Frontline support through to full-stack automation delivery",
  },
  {
    value: "4",
    label: "African Markets Supported",
    detail: "Kenya, Zambia, Zimbabwe & South Africa",
  },
  {
    value: "83%",
    label: "Faster Order Processing",
    detail: "OR Optimization Dashboard, South Africa",
  },
  {
    value: "<1 Hr",
    label: "Order Fulfilment Time",
    detail: "Down from several hours, via process automation",
  },
  {
    value: "Satisfactory",
    label: "Zimbabwe IT Audit Rating",
    detail: "Governance & compliance role in audit defense",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Sight and Sound — seconded at British American Tobacco (BAT)",
    role: "Factory Support Developer",
    dates: "July 2025 – Present",
    location: "Kenya",
    scope:
      "Frontline ICT support and Power Platform solution delivery for BAT's digital channels and business applications across East and Southern Africa.",
    achievements: [
      "Delivered first- and second-line ICT support to staff across East and Southern African markets, resolving digital channel, application and system-access incidents via ServiceNow.",
      "Designed and built an OR Optimization Dashboard in Power BI, cutting order processing time by 83% and materially improving operational efficiency in South Africa.",
      "Developed and deployed a full-stack solution for reporting EHS concerns and near misses, removing dependency on a costly third-party system and delivering direct cost savings in Kenya.",
      "Automated defect-tracking processes while preserving historical data integrity, giving the business real-time visibility of quality metrics for continuous improvement in Zambia.",
      "Played a key role in defending the Zimbabwe IT audit, ensuring End Markets processes complied with global operating procedures and contributing to a satisfactory audit rating.",
      "Led the transition from shared folders to SharePoint and used SAP to manage auditable system-access requests, strengthening data governance across departments.",
    ],
  },
  {
    company: "British American Tobacco (BAT)",
    role: "Digital Solutions Intern",
    dates: "June 2024 – June 2025",
    location: "Kenya",
    scope:
      "Built and automated business applications on the Microsoft Power Platform to remove manual bottlenecks from operational processes.",
    achievements: [
      "Designed and implemented an automated mail order process that raised and tracked requests in real time, cutting fulfilment pickup time from several hours to under an hour and reducing manpower cost.",
      "Built a Quality Control Application monitoring environmental conditions, enabling data-driven decisions on product shelf life and supporting consistent product quality.",
      "Developed custom business applications in PowerApps, improving workflow efficiency and accessibility for end users.",
      "Automated manual business processes using Power Automate, improving accuracy and cutting turnaround time.",
      "Designed and deployed Power BI dashboards connected to live business databases, giving stakeholders real-time operational insight.",
    ],
  },
  {
    company: "Dimension Data",
    role: "Data and Applications Intern",
    dates: "February 2024 – May 2024",
    location: "Kenya",
    scope: "Client-facing application development and process automation on the Microsoft Power Platform.",
    achievements: [
      "Developed client applications using PowerApps, translating business requirements into working tools.",
      "Automated manual client processes primarily through the Power Platform, reducing manual effort.",
      "Provided direct support to clients on Microsoft products and platform issues.",
    ],
  },
  {
    company: "Naivas Supermarket HQ",
    role: "IT Intern",
    dates: "May 2023 – January 2024",
    location: "Kenya",
    scope:
      "Enterprise IT support spanning the help desk, ERP, infrastructure, security and ICT asset lifecycle.",
    achievements: [
      "Delivered first-line technical support for hardware, software and network issues, and managed help desk tickets end to end to timely resolution.",
      "Administered Active Directory users, ensuring each account held the correct access rights to complete assigned tasks.",
      "Installed, configured and tested computer hardware and software, including setup of new starter systems and mail accounts.",
      "Supported ERP operations on Microsoft Dynamics AX and contributed to ICT asset and inventory management, including inspecting incoming assets and scheduling equipment maintenance.",
      "Assisted in upholding security compliance by monitoring access controls and applying IT security best practice, and helped build user training materials and IT process documentation.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "or-optimization-dashboard",
    name: "OR Optimization Dashboard",
    organization: "British American Tobacco",
    market: "South Africa",
    dates: "2025",
    categories: ["Data & Analytics", "Automation"],
    featured: true,
    summary:
      "A Power BI dashboard that cut order processing time by 83% by giving the South Africa operations team real-time visibility into order status and bottlenecks.",
    context:
      "BAT's South Africa operation processed orders through a workflow that relied heavily on manual checks and disconnected reporting, making it hard to see where delays were occurring.",
    problem:
      "Order processing was slow and difficult to monitor in real time, which limited the operations team's ability to identify and resolve bottlenecks quickly.",
    role: "Designed and implemented the dashboard as Factory Support Developer, working directly with the operations team to understand where processing time was being lost.",
    approach: [
      "Analyzed the existing order workflow to identify the stages contributing most to processing delays.",
      "Connected Power BI to the relevant enterprise data sources to model order status in real time.",
      "Designed an \"OR Optimization\" dashboard giving operational and management stakeholders live visibility into order flow.",
    ],
    solution:
      "A live Power BI dashboard that surfaces order-processing bottlenecks and status in real time, replacing manual, delayed visibility with a single operational view.",
    impact: [
      "Reduced order processing time by 83%.",
      "Improved operational efficiency for the South Africa order-processing team.",
    ],
    skills: ["Power BI", "Data Analytics", "Process Design", "Stakeholder Management"],
  },
  {
    slug: "ehs-reporting-platform",
    name: "EHS Concerns & Near-Miss Reporting Platform",
    organization: "British American Tobacco",
    market: "Kenya",
    dates: "2025",
    categories: ["Automation", "Governance & Compliance"],
    featured: true,
    summary:
      "A full-stack solution for reporting Environment, Health & Safety concerns and near misses, replacing a costly third-party system and delivering direct cost savings.",
    context:
      "The business was reporting EHS concerns and near-miss incidents through a licensed third-party system, an ongoing cost for functionality that could be built and owned internally.",
    problem:
      "Continued reliance on an external system carried recurring licensing cost and reduced control over how EHS data was captured, stored and reported.",
    role: "Developed and deployed the replacement solution end to end as Factory Support Developer.",
    approach: [
      "Scoped the reporting requirements needed to fully replace the third-party tool.",
      "Built a full-stack internal application covering EHS concern and near-miss capture, storage and reporting.",
      "Deployed the solution and transitioned reporting away from the external system.",
    ],
    solution:
      "A self-built, internally owned platform for logging and tracking EHS concerns and near misses.",
    impact: [
      "Eliminated reliance on a costly third-party system.",
      "Delivered direct cost savings for the Kenya operation.",
    ],
    skills: ["Full-Stack Development", "Business Analysis", "Process Design", "Cost Optimization"],
  },
  {
    slug: "defect-tracking-automation",
    name: "Defect-Tracking Automation",
    organization: "British American Tobacco",
    market: "Zambia",
    dates: "2025",
    categories: ["Automation", "Data & Analytics"],
    featured: true,
    summary:
      "An automated defect-tracking process that preserved historical data while giving the business real-time visibility into quality metrics.",
    context:
      "Defect tracking in Zambia was a manual process, which made it slower to compile and limited real-time visibility into quality trends.",
    problem:
      "The manual process needed to be automated without losing the historical defect data the business relied on for trend analysis.",
    role: "Led the automation of the process as Factory Support Developer, working within BAT's Power Platform environment.",
    approach: [
      "Mapped the existing manual defect-tracking workflow and its historical data structure.",
      "Automated data capture and processing while explicitly preserving historical record integrity.",
      "Enabled real-time reporting on defect and system metrics for the quality team.",
    ],
    solution:
      "An automated defect-tracking system that maintains full historical continuity while updating in real time.",
    impact: [
      "Enabled real-time visibility of system and quality metrics.",
      "Supported data-driven decision-making for continuous improvement in Zambia.",
    ],
    skills: ["Power Automate", "Process Automation", "Data Integrity", "Continuous Improvement"],
  },
  {
    slug: "zimbabwe-it-audit-defense",
    name: "Zimbabwe IT Audit Defense",
    organization: "British American Tobacco",
    market: "Zimbabwe",
    dates: "2025",
    categories: ["Governance & Compliance"],
    featured: true,
    summary:
      "Played a key role in defending BAT's Zimbabwe IT audit, helping the End Markets team achieve a satisfactory rating.",
    context:
      "BAT's End Markets processes in Zimbabwe were subject to a formal IT audit assessing compliance with global operating procedures.",
    problem:
      "The team needed to demonstrate, with evidence, that local processes met global governance and control standards.",
    role: "Played a key role in defending the audit, working to ensure End Markets processes aligned with global operating procedures.",
    approach: [
      "Reviewed End Markets processes against global operating procedure requirements.",
      "Prepared and presented evidence of compliance to auditors.",
      "Addressed gaps and strengthened process documentation ahead of and during the audit.",
    ],
    solution:
      "A defended, evidence-backed audit position demonstrating process compliance with global standards.",
    impact: [
      "Contributed to a satisfactory audit rating.",
      "Strengthened governance standards for the Zimbabwe End Markets operation.",
    ],
    skills: ["Audit Compliance", "Governance", "Risk Management", "Process Documentation"],
  },
  {
    slug: "automated-mail-order-process",
    name: "Automated Mail Order Process",
    organization: "British American Tobacco",
    market: "Kenya",
    dates: "2024 – 2025",
    categories: ["Automation"],
    featured: true,
    summary:
      "An automated request-and-tracking system that cut mail order fulfilment pickup time from several hours to under an hour.",
    context:
      "Mail order requests were raised and tracked manually, creating bottlenecks between request and fulfilment pickup.",
    problem:
      "The manual process was slow and labor-intensive, driving both delay and unnecessary manpower cost.",
    role: "Designed and implemented the automated process as Digital Solutions Intern.",
    approach: [
      "Mapped the existing manual request and fulfilment workflow.",
      "Built an automated system to raise and track mail order requests in real time.",
      "Rolled out the process to remove the manual handling steps causing delay.",
    ],
    solution: "A real-time request-and-tracking system for mail order fulfilment.",
    impact: [
      "Cut fulfilment pickup time from several hours to under one hour.",
      "Eliminated manual bottlenecks and reduced manpower cost.",
    ],
    skills: ["Power Platform", "Process Automation", "Operational Efficiency"],
  },
  {
    slug: "quality-control-application",
    name: "Quality Control Application",
    organization: "British American Tobacco",
    market: "Kenya",
    dates: "2024 – 2025",
    categories: ["Automation", "Data & Analytics"],
    featured: false,
    summary:
      "A PowerApps application monitoring environmental conditions to support data-driven decisions on product shelf life.",
    context:
      "Product quality and shelf life depend on environmental conditions that needed consistent, trackable monitoring.",
    problem:
      "The business needed a reliable way to monitor environmental conditions and turn that data into shelf-life decisions.",
    role: "Designed and implemented the application as Digital Solutions Intern, drawing on existing solutions through knowledge sharing.",
    approach: [
      "Identified the environmental variables relevant to product shelf life.",
      "Built a PowerApps application to capture and monitor these conditions.",
      "Connected monitoring data to shelf-life and quality decisions for the business.",
    ],
    solution: "A Quality Control Application for ongoing environmental monitoring.",
    impact: [
      "Enabled data-driven decisions on product shelf life.",
      "Supported consistent product quality for consumer satisfaction.",
    ],
    skills: ["PowerApps", "Data-Driven Decision Making", "Quality Assurance"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Digital Channel Support & ICT Operations",
    description: "Frontline and second-line support across enterprise digital channels and infrastructure.",
    skills: [
      "First & Second-Line ICT Support",
      "Digital Banking Channels (Mobile, Internet, USSD)",
      "Incident & Access Troubleshooting",
      "Customer Digital Onboarding Support",
      "ServiceNow Ticketing",
      "Active Directory Administration",
    ],
  },
  {
    title: "Data & Reporting",
    description: "Turning raw business data into dashboards and insight that support decisions.",
    skills: [
      "Power BI Dashboards",
      "Management Reporting",
      "Financial Reconciliation & Transaction Monitoring",
      "MySQL Database Management",
      "Business Statistics & Data-Driven Decision-Making",
    ],
  },
  {
    title: "Business Applications & Automation",
    description: "Designing and automating the systems business teams rely on day to day.",
    skills: [
      "Microsoft PowerApps Development",
      "Power Automate Workflow Automation",
      "SharePoint Data Management & Collaboration",
      "SAP & ERP Systems (Microsoft Dynamics AX)",
      "User Acceptance Testing (UAT)",
    ],
  },
  {
    title: "Compliance & Governance",
    description: "Keeping operations audit-ready across multiple regulatory environments.",
    skills: [
      "Audit Compliance & Governance Standards",
      "Risk Identification & Escalation",
      "Multi-Country Regulatory Support (Kenya, Zambia, Zimbabwe)",
      "Security Compliance & Access Control",
    ],
  },
  {
    title: "Technical Foundations",
    description: "Working technical literacy that supports collaboration with engineering and data teams.",
    skills: ["HTML & CSS", "PHP", "Python", "Hardware & Software Deployment"],
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Multi-country enterprise experience",
    description:
      "Supports digital channels and delivers automation across four African markets — Kenya, Zambia, Zimbabwe and South Africa — inside a large multinational manufacturing environment.",
  },
  {
    title: "The full Power Platform stack",
    description:
      "Works across PowerApps, Power Automate and Power BI together, able to design, automate and visualize a process end to end rather than owning just one piece of it.",
  },
  {
    title: "Support fluency plus governance fluency",
    description:
      "Started in frontline ICT support and now helps defend formal IT audits — understands both how enterprise systems break and how they're expected to be controlled.",
  },
  {
    title: "A record of replacing manual with automated",
    description:
      "Repeatedly turns manual, costly or error-prone processes — order processing, defect tracking, EHS reporting, mail order fulfilment — into automated systems with measurable time and cost impact.",
  },
  {
    title: "Technical range beyond one platform",
    description:
      "Combines Power Platform delivery with ERP (SAP, Dynamics AX), databases (MySQL) and core web/scripting (HTML, CSS, PHP, Python) — enough technical range to work directly with engineering and data teams.",
  },
];

export const howIWork: WorkStage[] = [
  {
    stage: "Discover",
    description:
      "Partners directly with business stakeholders and frontline users to understand where a process is manual, slow or error-prone.",
  },
  {
    stage: "Define",
    description:
      "Maps the current workflow and data involved, and defines what the automated or supported version needs to do.",
  },
  {
    stage: "Align",
    description:
      "Coordinates with IT management, business units and — on multi-market issues — teams across different countries to agree the approach.",
  },
  {
    stage: "Deliver",
    description:
      "Builds the solution using the Power Platform, ERP tools or a full-stack build, and runs UAT before rollout.",
  },
  {
    stage: "Measure",
    description:
      "Tracks the result through dashboards and real-time reporting, so impact — like processing time or data accuracy — is visible, not assumed.",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "BSc. Business with Information Technology",
    institution: "Mount Kenya University",
    dates: "2020 – 2023",
  },
];

export const trainingNote =
  "Ongoing applied, on-the-job training in the Microsoft Power Platform (PowerApps, Power Automate, Power BI), ServiceNow and SAP, developed through enterprise delivery work at BAT and Dimension Data.";

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
