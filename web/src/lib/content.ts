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

export const AI_INSIGHTS = {
  title: "AI-assisted insights, not AI for show.",
  body: "Amara can use AI-assisted summaries, forecasting, anomaly detection, and natural-language data exploration to help leaders understand what changed, why it matters, and what to do next.",
  cards: [
    {
      title: "Weekly Executive Summaries",
      description: "Automatically summarize wins, risks, and opportunities.",
    },
    {
      title: "Ask Your Data",
      description:
        "Explore questions like “Why did revenue decline?” or “Which services retain patients best?”",
    },
    {
      title: "Forecasting",
      description:
        "Project revenue, demand, inventory needs, and capacity based on historical trends.",
    },
    {
      title: "Opportunity Detection",
      description:
        "Surface hidden patterns in retention, profitability, marketing, and operations.",
    },
  ],
} as const;

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
] as const;

export const EVALUATOR_QUESTIONS = [
  "Could you identify your most profitable service in under 30 seconds?",
  "Do you know which patients are most likely to stop returning?",
  "Can you see inventory waste by unit, dose, or treatment, not just vial or package?",
  "Do you know which providers create the highest long-term patient value?",
  "Can you connect marketing spend to profitable patients?",
  "Do you receive clear monthly recommendations, not just reports?",
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
    title: "Insights Buildout",
    description: "Develop dashboards, reporting, and actionable insight.",
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
  "Business Insights",
  "Data Visualization",
  "Profitability Analysis",
  "Inventory Clarity",
  "Operations Strategy",
  "Growth Insights",
  "AI-Assisted Insights",
  "Reporting Infrastructure",
] as const;
