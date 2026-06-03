import type { AmaraIconName } from "@/components/ui/icons/AmaraIcon";

export const HERO_TRUST_ITEMS = [
  { label: "HIPAA-Aligned PHI Workflows", icon: "shield-check" as AmaraIconName },
  { label: "Encrypted Data Handling", icon: "lock-secure" as AmaraIconName },
  { label: "Role-Based Access Controls", icon: "role-access" as AmaraIconName },
  { label: "NDA & Confidentiality First", icon: "file-confidential" as AmaraIconName },
] as const;

export const PRIVACY_SECURITY_CARDS = [
  {
    title: "HIPAA-Conscious PHI Handling",
    description:
      "We design workflows around protected health information, minimum-necessary access, and secure data handling practices.",
    icon: "shield-check" as AmaraIconName,
  },
  {
    title: "Secure Cloud Infrastructure",
    description:
      "Our systems are built with secure cloud architecture principles, encrypted transmission, and controlled access pathways.",
    icon: "cloud-secure" as AmaraIconName,
  },
  {
    title: "Encrypted Data Handling",
    description:
      "We prioritize encryption in transit and at rest for sensitive data wherever PHI may be stored, processed, or transmitted.",
    icon: "lock-secure" as AmaraIconName,
  },
  {
    title: "Role-Based Access Controls",
    description:
      "Dashboards are designed so users only see the information appropriate to their role, team, and operational need.",
    icon: "role-access" as AmaraIconName,
  },
  {
    title: "Audit-Friendly Workflows",
    description:
      "We are building toward clear access logs, traceable data workflows, and documented privacy/security procedures.",
    icon: "audit-trail" as AmaraIconName,
  },
  {
    title: "NDA & Confidentiality First",
    description:
      "We treat patient, provider, revenue, and operational data as confidential business-critical information.",
    icon: "file-confidential" as AmaraIconName,
  },
] as const;

export const TRAINING_BADGES = [
  { label: "HIPAA Awareness Trained", icon: "shield-check" as AmaraIconName },
  { label: "HIPAA Privacy & Security Trained", icon: "lock-secure" as AmaraIconName },
  { label: "Business Associate Training", icon: "file-confidential" as AmaraIconName },
  { label: "Healthcare Data Experience", icon: "healthcare-data" as AmaraIconName },
  { label: "Hospital & Clinic Workflow Experience", icon: "hospital-workflow" as AmaraIconName },
  {
    label: "Applied & Computational Mathematics, Johns Hopkins University",
    icon: "graduation-cap" as AmaraIconName,
  },
] as const;

export type ComplianceStatus = "In Progress" | "Planned" | "Future";

export const COMPLIANCE_ROADMAP = [
  {
    step: 1,
    title: "HIPAA-Aligned Foundation",
    status: "In Progress" as ComplianceStatus,
    items: [
      "PHI handling policies",
      "Business Associate Agreement readiness",
      "Secure data storage",
      "Minimum necessary access",
      "Confidentiality procedures",
    ],
  },
  {
    step: 2,
    title: "Cybersecurity Insurance",
    status: "Planned" as ComplianceStatus,
    items: [
      "Professional liability review",
      "Cyber liability coverage",
      "Incident response planning",
    ],
  },
  {
    step: 3,
    title: "SOC 2 Readiness",
    status: "Planned" as ComplianceStatus,
    items: [
      "Documented controls",
      "Access management",
      "Vendor management",
      "Security monitoring",
      "Audit preparation",
    ],
  },
  {
    step: 4,
    title: "HITRUST Pathway",
    status: "Future" as ComplianceStatus,
    items: [
      "Healthcare-grade security framework",
      "Formalized risk management",
      "External assessor readiness",
      "Long-term enterprise trust",
    ],
  },
] as const;

export const DASHBOARD_TRUST_FEATURES = [
  "Patient-level access controls",
  "Clinic/team permission layers",
  "Secure login foundation",
  "De-identification options where appropriate",
  "Export controls",
  "Future audit log support",
] as const;

export const FOOTER_TRUST_TEXT =
  "Amara Health Analytics is committed to privacy-conscious healthcare analytics, secure data workflows, and HIPAA-aligned practices for organizations handling protected health information.";

export const NADINE_TRAINING_NOTE =
  "Nadine has completed healthcare privacy, HIPAA awareness, privacy/security, and business associate training through her healthcare work experience.";
