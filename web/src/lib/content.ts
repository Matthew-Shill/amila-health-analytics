export const PROBLEMS = [
  {
    title: "Disconnected Data",
    description:
      "Information lives across scheduling, payments, EMR, inventory, marketing, and spreadsheets.",
  },
  {
    title: "Profit Blind Spots",
    description:
      "Revenue may look strong while margins, product costs, and waste tell a different story.",
  },
  {
    title: "Patient Retention Gaps",
    description:
      "Clinics often discover churn after patients have already stopped returning.",
  },
  {
    title: "Inventory Waste",
    description:
      "Products may be tracked by vial, package, or syringe, but real usage often happens by unit, dose, or treatment.",
  },
  {
    title: "Manual Reporting",
    description:
      "Leaders spend hours compiling reports instead of acting on insights.",
  },
] as const;

export const SOLUTION_POINTS = [
  "Understand true business performance",
  "Identify profit leakage",
  "Track inventory by real usage",
  "Improve patient retention",
  "Reveal provider and service performance",
  "Surface AI-assisted recommendations",
  "Make smarter growth decisions",
] as const;

export const SERVICES = [
  {
    title: "Business Insights",
    features: [
      "KPI dashboards",
      "Profit analysis",
      "Revenue forecasting",
      "Retention analysis",
      "Executive reporting",
      "Trend analysis",
    ],
  },
  {
    title: "Operational Clarity",
    features: [
      "Inventory utilization",
      "Unit-level product tracking",
      "Provider productivity",
      "Scheduling efficiency",
      "Capacity analysis",
      "Workflow optimization",
    ],
  },
  {
    title: "Growth Insights",
    features: [
      "Marketing attribution",
      "Lead source analysis",
      "Campaign ROI",
      "Patient lifetime value",
      "Conversion analysis",
      "Growth strategy support",
    ],
  },
  {
    title: "AI-Assisted Insights",
    features: [
      "Weekly executive summaries",
      "Natural-language data questions",
      "Risk detection",
      "Opportunity detection",
      "Recommendation generation",
      "Forecasting support",
    ],
  },
] as const;

export const DEMOS = [
  {
    id: "retention",
    navLabel: "Retention",
    dashboardTitle: "Patient Retention & Churn Risk",
    insight:
      "24 high-LTV patients show declining visit frequency — prioritize re-engagement this week.",
    title: "Which patients are at risk of not returning?",
    problemSolved:
      "Clinics often cannot identify churn risk until revenue is already lost.",
    keyMetrics: [
      "Retention trends",
      "Churn risk indicators",
      "Appointment frequency",
      "Lifetime value",
    ],
    decisions: [
      "Re-engagement campaigns",
      "Provider follow-up priorities",
      "Membership or package adjustments",
    ],
    variant: "retention" as const,
  },
  {
    id: "profitability",
    navLabel: "Profitability",
    dashboardTitle: "Service Profitability",
    insight:
      "Injectables lead margin at 62% — laser revenue is strong but margin lags after consumables.",
    title: "Which services are actually most profitable?",
    problemSolved:
      "Revenue alone does not reveal margin, product cost, provider cost, or true profitability.",
    keyMetrics: [
      "Service margin",
      "Product cost",
      "Provider contribution",
      "Processing fees",
    ],
    decisions: [
      "Pricing changes",
      "Service mix strategy",
      "Promotion planning",
    ],
    variant: "profitability" as const,
  },
  {
    id: "inventory",
    navLabel: "Inventory",
    dashboardTitle: "Unit-Level Inventory Clarity",
    insight:
      "180-unit variance on Botox — investigate drawer usage and treatment documentation gaps.",
    title: "Where is product inventory being wasted?",
    problemSolved:
      "Many systems track inventory by vial, syringe, or package, while clinics use products by units, doses, or sessions.",
    keyMetrics: [
      "Units purchased",
      "Units administered",
      "Expected inventory",
      "Actual inventory variance",
      "Estimated loss",
    ],
    decisions: [
      "Reorder timing",
      "Waste reduction",
      "Product usage accountability",
    ],
    variant: "inventory" as const,
  },
  {
    id: "provider-value",
    navLabel: "Provider Value",
    dashboardTitle: "Provider Performance & Loyalty",
    insight:
      "Dr. A leads rebooking at 78% with $2.4k average patient value — model scheduling around top performers.",
    title: "Which providers drive the strongest long-term value?",
    problemSolved:
      "Provider production does not always reveal retention, lifetime value, or patient loyalty.",
    keyMetrics: [
      "Provider utilization",
      "Rebooking rate",
      "Average patient value",
      "Service mix",
    ],
    decisions: [
      "Coaching priorities",
      "Scheduling strategy",
      "Hiring or contracting decisions",
    ],
    variant: "provider-value" as const,
  },
  {
    id: "marketing",
    navLabel: "Marketing ROI",
    dashboardTitle: "Channel Attribution & ROI",
    insight:
      "Referral patients deliver 6.1× ROI — shift test budget from paid social toward referral incentives.",
    title: "Which marketing channels create profitable patients?",
    problemSolved:
      "Marketing spend may be tracked, but attribution and patient quality are often unclear.",
    keyMetrics: [
      "Lead source",
      "Campaign ROI",
      "Acquisition cost",
      "Patient lifetime value",
    ],
    decisions: [
      "Budget reallocation",
      "Channel investment",
      "Campaign testing",
    ],
    variant: "marketing" as const,
  },
  {
    id: "executive",
    navLabel: "Executive",
    dashboardTitle: "Monthly Executive Summary",
    insight:
      "Revenue up 14.8% QoQ — address inventory variance and at-risk retention cohort in Q2 priorities.",
    title: "Executive Monthly Insight Summary",
    problemSolved:
      "Owners need one trusted view of performance, risks, opportunities, and recommended next steps.",
    keyMetrics: [
      "Revenue",
      "Profit",
      "Retention",
      "Inventory",
      "Utilization",
      "Growth opportunities",
    ],
    decisions: [
      "Quarterly priorities",
      "Investment timing",
      "Operational focus areas",
    ],
    variant: "executive" as const,
  },
] as const;

export const INVENTORY_DEMO = {
  title: "Track inventory the way clinics actually use it.",
  rows: [
    { label: "Botox Units Purchased", value: "5,500" },
    { label: "Units Administered", value: "4,800" },
    { label: "Expected Remaining", value: "700" },
    { label: "Actual Remaining", value: "520" },
    { label: "Variance", value: "-180 Units", highlight: true },
    { label: "Estimated Revenue Impact", value: "-$2,700", highlight: true },
  ],
  supportingText:
    "Instead of only tracking vials, syringes, or packages, Amara can help clinics understand product usage at the unit, dose, or treatment level, revealing waste, leakage, and reorder timing opportunities.",
} as const;

export const WHO_WE_SERVE_SIZES = [
  {
    shortLabel: "Solo",
    title: "Sole Practitioners & Solo Operators",
    description:
      "One provider, one location, or a lean independent practice that needs clarity without enterprise overhead.",
    help: "We start with the metrics that matter most—profit, retention, and operational gaps—without overbuilding dashboards you will never use.",
  },
  {
    shortLabel: "Small Team",
    title: "Small Teams & Boutique Practices",
    description:
      "Growing practices with a handful of providers, coordinators, and locations starting to outgrow spreadsheets.",
    help: "We connect booking, payments, and service data into reporting your whole team can actually act on.",
  },
  {
    shortLabel: "Startup",
    title: "Growth-Stage Startups",
    description:
      "Health and wellness companies scaling quickly and needing investor-ready, operator-trusted analytics from day one.",
    help: "We design KPI frameworks, reporting infrastructure, and insight workflows that scale with your business.",
  },
  {
    shortLabel: "Multi-Location",
    title: "Multi-Location & Regional Groups",
    description:
      "Organizations with several sites, brands, or service lines that need consistent visibility across the portfolio.",
    help: "We unify location, provider, and service performance so leadership can compare, coach, and prioritize with confidence.",
  },
  {
    shortLabel: "Enterprise",
    title: "Enterprise & Major Corporations",
    description:
      "Large health systems, MSOs, franchise operators, and corporate wellness programs with complex data environments.",
    help: "We build executive-ready reporting, governance-friendly workflows, and analytics that support strategic decisions at scale.",
  },
] as const;

export const WHO_WE_HELP = [
  {
    title: "Aesthetic Clinics",
    challenges:
      "Service mix, provider productivity, product usage, and marketing attribution rarely align in one view.",
    help: "Amara clarifies profit, retention, inventory usage, and growth opportunities.",
  },
  {
    title: "Med Spas",
    challenges:
      "High visit volume and varied offerings make it difficult to identify margin, loyalty, and waste trends.",
    help: "We help reveal which services, providers, and products are driving performance.",
  },
  {
    title: "Private Medical Practices",
    challenges:
      "Clinical and operational data often live in separate systems with limited reporting.",
    help: "Amara connects operational, financial, and patient data into executive-ready insight.",
  },
  {
    title: "Wellness Clinics",
    challenges:
      "Memberships, packages, and multi-touch journeys need analytics beyond basic booking reports.",
    help: "We surface retention, lifetime value, package utilization, and program performance.",
  },
  {
    title: "Therapy Practices",
    challenges:
      "Capacity, cancellations, referrals, and provider availability can be difficult to track consistently.",
    help: "We deliver utilization, referral, retention, and capacity insights.",
  },
  {
    title: "Health Startups",
    challenges:
      "Rapid growth requires metrics investors and operators can trust from day one.",
    help: "We design reporting infrastructure, KPI frameworks, and scalable analytics systems.",
  },
  {
    title: "Multi-Provider Organizations",
    challenges:
      "Comparing performance across locations and teams requires consistent visibility.",
    help: "Amara builds unified reporting so leadership sees profit, retention, and growth opportunities across the organization.",
  },
  {
    title: "Dental Practices",
    challenges:
      "Chair utilization, case acceptance, hygiene recall, and production by provider are often spread across disconnected systems.",
    help: "We connect scheduling, production, and patient flow data into clear performance and growth insight.",
  },
  {
    title: "Dermatology & Skin Care Practices",
    challenges:
      "Medical and cosmetic service lines, product sales, and provider productivity need separate views that still roll up cleanly.",
    help: "We clarify service mix, margin, retention, and inventory usage across clinical and aesthetic offerings.",
  },
  {
    title: "Chiropractic & Physical Therapy",
    challenges:
      "Visit plans, rebooking, payer mix, and provider capacity are hard to monitor without manual reporting.",
    help: "We surface utilization, retention, referral patterns, and revenue per visit in one place.",
  },
  {
    title: "Mental Health & Behavioral Health",
    challenges:
      "Session volume, cancellations, caseload balance, and outcomes tracking rarely connect to business performance.",
    help: "We help teams understand capacity, retention, payer trends, and operational bottlenecks without losing sight of care quality.",
  },
  {
    title: "Functional & Integrative Medicine",
    challenges:
      "Programs, labs, supplements, memberships, and multi-step care plans create data that standard EMR reports miss.",
    help: "We connect program performance, patient journeys, and revenue streams into actionable insight.",
  },
  {
    title: "Fitness, Recovery & Performance Studios",
    challenges:
      "Memberships, class utilization, retail, and retention metrics often live in separate platforms.",
    help: "We unify attendance, revenue, and client lifecycle data so owners know what is driving loyalty and growth.",
  },
  {
    title: "Home Health & In-Home Care",
    challenges:
      "Visit volume, staffing, payer mix, and geographic coverage are difficult to monitor consistently across a mobile workforce.",
    help: "We deliver operational visibility across visits, utilization, and revenue without adding reporting burden to field teams.",
  },
  {
    title: "Urgent Care & Walk-In Clinics",
    challenges:
      "High throughput, variable acuity, and seasonal demand make it hard to spot margin and staffing inefficiencies quickly.",
    help: "We help leadership track volume, service mix, wait times, and profitability trends in near real time.",
  },
  {
    title: "Hospitals & Health Systems",
    challenges:
      "Departmental silos, legacy systems, and executive reporting cycles slow down operational decision-making.",
    help: "We design analytics workflows and dashboards that translate complex data into priorities leaders can act on.",
  },
  {
    title: "Physician Groups & MSOs",
    challenges:
      "Provider productivity, payer performance, and location comparisons require standardized metrics across entities.",
    help: "We build unified reporting frameworks that support benchmarking, coaching, and portfolio-level decisions.",
  },
  {
    title: "Franchise & Multi-Brand Operators",
    challenges:
      "Brand standards, local performance, and franchisee reporting needs vary widely across the network.",
    help: "We create consistent KPI views while preserving the flexibility each location or brand needs to operate.",
  },
  {
    title: "Corporate Wellness & Employer Health",
    challenges:
      "Program participation, engagement, and ROI are often measured differently across vendors and internal teams.",
    help: "We connect program data to participation, outcomes, and business impact so stakeholders see what is working.",
  },
  {
    title: "Telehealth & Virtual Care Providers",
    challenges:
      "Digital visit volume, conversion, retention, and multi-state operations create analytics needs beyond in-person care.",
    help: "We help virtual care teams track funnel performance, provider utilization, and patient lifecycle metrics.",
  },
  {
    title: "Senior Living & Long-Term Care",
    challenges:
      "Occupancy, acuity, staffing ratios, and service utilization must be monitored across residents and care levels.",
    help: "We surface occupancy trends, operational efficiency, and revenue drivers for leadership and operations teams.",
  },
  {
    title: "Occupational & Employer Health Services",
    challenges:
      "Worksite programs, compliance tracking, and employer reporting requirements add complexity to standard clinical metrics.",
    help: "We connect clinical activity, employer contracts, and operational performance into clear reporting for both sides.",
  },
  {
    title: "Plastic & Reconstructive Surgery Centers",
    challenges:
      "Surgical case mix, OR utilization, implant inventory, and post-op follow-up often sit in separate clinical and billing systems.",
    help: "We unify procedure profitability, conversion funnels, and recovery trends into leadership-ready insight.",
  },
  {
    title: "OB/GYN & Women's Health Practices",
    challenges:
      "Preventive visits, procedures, memberships, and recurring care plans create reporting needs beyond standard visit counts.",
    help: "We connect visit patterns, service mix, retention, and program performance across the patient lifecycle.",
  },
  {
    title: "Pediatric & Family Medicine Practices",
    challenges:
      "Well-child schedules, immunizations, chronic care, and payer mix are difficult to monitor across growing patient panels.",
    help: "We surface panel health, visit adherence, provider capacity, and revenue trends in one cohesive view.",
  },
  {
    title: "Ophthalmology & Vision Care",
    challenges:
      "Optical retail, surgical cases, and recurring eye care visits rarely roll up into a single performance picture.",
    help: "We clarify service-line margin, optical attach rates, surgical conversion, and patient retention.",
  },
  {
    title: "Orthopedic & Sports Medicine Clinics",
    challenges:
      "Injections, PT referrals, surgical pipelines, and DME usage span multiple systems and provider types.",
    help: "We connect visit volume, procedure mix, referral conversion, and provider productivity across the care pathway.",
  },
  {
    title: "Addiction Treatment & Recovery Programs",
    challenges:
      "Admissions, length of stay, readmissions, and payer authorization data need careful tracking for both care and compliance.",
    help: "We help programs monitor census, outcomes-oriented metrics, and operational performance without losing clinical context.",
  },
  {
    title: "Hospice & Palliative Care Organizations",
    challenges:
      "Census, length of stay, staffing, and payer mix must be tracked sensitively across changing acuity levels.",
    help: "We deliver operational visibility and trend reporting that supports thoughtful leadership decisions.",
  },
  {
    title: "Medical Laboratories & Diagnostic Imaging",
    challenges:
      "Test volume, turnaround time, payer mix, and equipment utilization are spread across LIS, RIS, and billing platforms.",
    help: "We unify throughput, margin, referral sources, and capacity planning into actionable dashboards.",
  },
  {
    title: "Fertility & Reproductive Health Clinics",
    challenges:
      "Cycle tracking, lab coordination, conversion funnels, and multi-step treatment plans create complex reporting needs.",
    help: "We connect cycle outcomes, pipeline conversion, provider workload, and financial performance in one view.",
  },
  {
    title: "Weight Loss & Metabolic Health Programs",
    challenges:
      "Memberships, medication programs, coaching touchpoints, and retail add-ons rarely align in standard EMR reporting.",
    help: "We surface program retention, service mix, margin, and patient journey performance across offerings.",
  },
  {
    title: "Sleep Medicine Centers",
    challenges:
      "Study volume, DME fulfillment, follow-up adherence, and payer authorization create multi-system tracking challenges.",
    help: "We connect diagnostic volume, treatment conversion, and recurring revenue trends into clear operational insight.",
  },
  {
    title: "Pharmacy & Specialty Dispensing",
    challenges:
      "Fill volume, adherence programs, payer reimbursements, and inventory must be monitored with tight operational precision.",
    help: "We help teams track fulfillment performance, margin, inventory movement, and program-level trends.",
  },
  {
    title: "Health Tech & Digital Health Companies",
    challenges:
      "Product usage, clinical outcomes, customer success, and revenue metrics often live in disconnected SaaS and care platforms.",
    help: "We design analytics that connect user behavior, care delivery, and business performance for operators and investors.",
  },
] as const;

export const EVALUATOR_QUESTIONS = [
  "Could you identify your most profitable service in under 30 seconds?",
  "Do you know which patients are most likely to stop returning?",
  "Can you see inventory waste by unit, dose, or treatment, not just vial or package?",
  "Do you know which providers create the highest long-term patient value?",
  "Can you connect marketing spend to profitable patients?",
  "Do you receive clear monthly recommendations, not just reports?",
] as const;

export type TeamMember = {
  id: string;
  name: string;
  aboutName?: string;
  lastName: string;
  title: string;
  credential: string;
  support: string;
  bio: string;
  image: string | null;
  initials: string;
  aboutImage?: {
    widthPercent: number;
    leftPercent: number;
    topPercent: number;
  };
  aboutHighlights?: readonly string[];
};

export const TEAM_MEMBERS = [
  {
    id: "nadine",
    name: "Nadine",
    lastName: "Shill",
    title: "CEO & Founder",
    credential:
      "Johns Hopkins-trained Applied & Computational Mathematics professional with experience in AI, machine learning, data analytics, and healthcare-focused systems.",
    support:
      "Nadine helps transform complex operational and client data into clear reporting, practical recommendations, and smarter growth decisions.",
    bio: "Nadine brings a strong quantitative and technical foundation to Amara Health Analytics, with graduate training in Applied & Computational Mathematics from Johns Hopkins University and ongoing work in genomic data analysis at the University of Connecticut. Her background spans AI, machine learning, statistical modeling, and production data systems—experience she applies to help healthcare, wellness, and aesthetic businesses turn scattered operational data into clear reporting, practical recommendations, and smarter growth decisions.",
    aboutHighlights: [
      "M.S. Applied & Computational Mathematics, Johns Hopkins University",
      "Genomic Data Analysis Graduate Certificate, University of Connecticut",
      "Data Science Team Lead, Mercor",
      "Deep Learning & Machine Learning Specializations, deeplearning.ai",
      "Production ML workflows with Python, TensorFlow, PyTorch, and Streamlit",
    ],
    image: "/images/Nadine Headshot.jpg",
    initials: "NS",
  },
] as const satisfies readonly TeamMember[];

export const ABOUT_APPROACH_CARDS = [
  {
    title: "Clear Reporting",
    description:
      "We translate scattered data into cohesive reports that are easy to understand.",
  },
  {
    title: "Operational Insight",
    description:
      "We identify patterns in scheduling, client behavior, revenue, retention, and service performance.",
  },
  {
    title: "Practical Recommendations",
    description:
      "We connect the numbers to real next steps your team can actually use.",
  },
] as const;

export const ABOUT_VALUES = [
  {
    title: "Clarity Over Complexity",
    description: "The best analytics should make decisions easier, not harder.",
  },
  {
    title: "Human Expertise First",
    description:
      "We use technology to support thoughtful analysis, not to replace people.",
  },
  {
    title: "Better Care Through Better Systems",
    description:
      "When teams understand their operations clearly, they can create better experiences for providers and clients.",
  },
  {
    title: "Actionable, Not Abstract",
    description:
      "Every insight should connect to a real business or care improvement.",
  },
] as const;

export const ABOUT_CAPABILITIES = [
  "Business Insights",
  "Data Visualization",
  "Profitability Analysis",
  "Inventory Clarity",
  "Operations Strategy",
  "Growth Insights",
  "AI-Assisted Insights",
  "Reporting Infrastructure",
] as const;
