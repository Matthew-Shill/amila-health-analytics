export const PROBLEMS = [
  {
    title: "Disconnected Data",
    description:
      "Information lives across platforms with no unified view.",
  },
  {
    title: "Unclear Marketing ROI",
    description:
      "You know you're spending money, but not always what's driving results.",
  },
  {
    title: "Patient Retention Blind Spots",
    description:
      "Opportunities to improve retention often go unnoticed.",
  },
  {
    title: "Manual Reporting",
    description:
      "Hours are wasted compiling reports instead of acting on insights.",
  },
  {
    title: "Operational Inefficiencies",
    description:
      "Hidden bottlenecks quietly impact growth and patient experience.",
  },
] as const;

export const SOLUTION_POINTS = [
  "Understand business performance",
  "Improve patient retention",
  "Identify revenue opportunities",
  "Streamline operations",
  "Build meaningful reporting systems",
  "Create executive dashboards",
  "Make smarter growth decisions",
] as const;

export const SERVICES = [
  {
    title: "Analytics & Business Intelligence",
    features: [
      "KPI Dashboards",
      "Executive Reporting",
      "Revenue Analysis",
      "Retention Analysis",
      "Forecasting",
      "Trend Analysis",
    ],
  },
  {
    title: "Operations Optimization",
    features: [
      "Workflow Evaluation",
      "Capacity Analysis",
      "Scheduling Efficiency",
      "Process Improvement",
      "Automation Opportunities",
    ],
  },
  {
    title: "Marketing & Growth Analytics",
    features: [
      "Campaign Reporting",
      "Lead Tracking",
      "Conversion Analysis",
      "Marketing ROI",
      "Growth Strategy Support",
    ],
  },
  {
    title: "Technology & Digital Systems",
    features: [
      "Website Performance",
      "CRM Optimization",
      "Data Infrastructure",
      "Reporting Systems",
      "Automation Planning",
    ],
  },
] as const;

export const DEMOS = [
  {
    id: "retention",
    title: "Patient Retention Dashboard",
    problemSolved:
      "Teams couldn't see who was at risk of churning or which cohorts were slipping.",
    keyMetrics: [
      "Retention trends",
      "Churn risk indicators",
      "Appointment frequency",
    ],
    decisions: [
      "Re-engagement campaigns",
      "Membership or package adjustments",
      "Provider follow-up priorities",
    ],
    variant: "retention" as const,
  },
  {
    id: "revenue",
    title: "Aesthetic Clinic Revenue Snapshot",
    problemSolved:
      "Leadership lacked a clear view of service mix, provider contribution, and margin drivers.",
    keyMetrics: [
      "Service performance",
      "Provider productivity",
      "Revenue breakdowns",
    ],
    decisions: [
      "Pricing and bundling",
      "Staffing and capacity",
      "High-value service focus",
    ],
    variant: "revenue" as const,
  },
  {
    id: "marketing",
    title: "Marketing ROI Tracker",
    problemSolved:
      "Marketing spend was tracked, but attribution across channels remained unclear.",
    keyMetrics: ["Lead sources", "Campaign ROI", "Acquisition cost"],
    decisions: [
      "Budget reallocation",
      "Channel investment",
      "Campaign creative testing",
    ],
    variant: "marketing" as const,
  },
  {
    id: "utilization",
    title: "Provider Utilization Report",
    problemSolved:
      "Scheduling gaps and uneven demand made it hard to optimize provider time.",
    keyMetrics: [
      "Scheduling efficiency",
      "Utilization trends",
      "Capacity opportunities",
    ],
    decisions: [
      "Schedule templates",
      "Hiring or contracting",
      "Peak-hour staffing",
    ],
    variant: "utilization" as const,
  },
  {
    id: "executive",
    title: "Executive Monthly Summary",
    problemSolved:
      "Owners needed one trusted view of performance—not a folder of spreadsheets.",
    keyMetrics: ["KPI overview", "Trends", "Business recommendations"],
    decisions: [
      "Quarterly priorities",
      "Investment timing",
      "Operational focus areas",
    ],
    variant: "executive" as const,
  },
] as const;

export const WHO_WE_HELP = [
  {
    title: "Aesthetic Clinics",
    challenges:
      "Service mix, provider productivity, and marketing attribution rarely align in one view.",
    help: "Amara unifies revenue, retention, and campaign data so leaders can grow with precision.",
  },
  {
    title: "Med Spas",
    challenges:
      "High visit volume and varied offerings make it hard to spot margin and loyalty trends.",
    help: "We build dashboards that clarify performance by service, location, and provider.",
  },
  {
    title: "Private Medical Practices",
    challenges:
      "Clinical and operational data often live in separate systems with limited reporting.",
    help: "Amara connects the dots—helping practices run efficiently while improving patient experience.",
  },
  {
    title: "Wellness Clinics",
    challenges:
      "Memberships, packages, and multi-touch journeys need analytics beyond basic booking reports.",
    help: "We surface retention, lifetime value, and program performance in executive-ready formats.",
  },
  {
    title: "Therapy Practices",
    challenges:
      "Capacity, cancellations, and referral sources are difficult to track consistently.",
    help: "Amara delivers utilization and pipeline insights that support sustainable growth.",
  },
  {
    title: "Health Startups",
    challenges:
      "Rapid growth demands metrics investors and operators can trust from day one.",
    help: "We design reporting infrastructure and KPI frameworks that scale with the business.",
  },
  {
    title: "Multi-Provider Organizations",
    challenges:
      "Comparing performance across locations and teams requires standardized intelligence.",
    help: "Amara builds unified reporting so leadership sees the full picture—not fragmented snapshots.",
  },
] as const;

export const EVALUATOR_QUESTIONS = [
  "Do you know which services generate your highest profit?",
  "Can you clearly identify where your best patients come from?",
  "Do you know your patient retention rate?",
  "Are your reports consistent and reliable?",
  "Can you easily connect data across systems?",
  "Do you make decisions using trusted metrics?",
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description: "Understand goals, systems, and challenges.",
  },
  {
    step: 2,
    title: "Assessment",
    description: "Review data sources and workflows.",
  },
  {
    step: 3,
    title: "Intelligence Buildout",
    description: "Develop dashboards, reporting, and insights.",
  },
  {
    step: 4,
    title: "Strategic Recommendations",
    description: "Identify opportunities and priorities.",
  },
  {
    step: 5,
    title: "Ongoing Optimization",
    description: "Measure results and refine continuously.",
  },
] as const;

export const ABOUT_CAPABILITIES = [
  "Analytics",
  "Data Visualization",
  "Operations Strategy",
  "Technology Consulting",
  "Digital Systems",
  "Reporting Infrastructure",
  "Growth Intelligence",
] as const;
