export const COMPANY_NAME = "Amila Health Analytics";
export const TAGLINE = "Have Your AHA Moment";
export const MISSION = "Don't be the business with wasted data.";

/** Primary web paths — SVG for crisp scaling. PNG copies live alongside in assets/ for export/print. */
export const LOGO = {
  fullStone: "/logos/full/Stone Full Logo.svg",
  fullStonePng: "/logos/full/Stone Full Logo.png",
  fullStoneTransparent: "/logos/full/Stone Full Logo Transparent.png",
  fullTeal: "/logos/full/Teal Full Logo.svg",
  fullTealPng: "/logos/full/Teal Full Logo.png",
  fullTealTransparent: "/logos/full/Teal Full Logo Transparent.png",
  fullEspresso: "/logos/full/Espesso Full Logo.svg",
  fullEspressoPng: "/logos/full/Espesso Full Logo.png",
  fullEspressoTransparent: "/logos/full/Espesso Full Logo Transparent.png",
  iconStone: "/logos/icon/AHA Icon Stone.svg",
  iconTeal: "/logos/icon/AHA Icon Teal.svg",
  iconEspresso: "/logos/icon/AHA Icon Espresso.svg",
  /** PNG icons — preferred for in-app UI; SVGs embed rasters that break on mobile Safari. */
  iconStonePng: "/logos/icon/AHA Icon Stone.png",
  iconTealPng: "/logos/icon/AHA Icon Teal.png",
  iconEspressoPng: "/logos/icon/AHA Icon Espresso.png",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Demo Work", href: "/#demo-work" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy-security" },
] as const;

export const ORGANIZATION_TYPES = [
  "Aesthetic Clinic",
  "Med Spa",
  "Private Medical Practice",
  "Wellness Clinic",
  "Therapy Practice",
  "Health Startup",
  "Multi-Provider Organization",
  "Other",
] as const;

export const EMPLOYEE_COUNT_RANGES = [
  "1–5",
  "6–10",
  "11–25",
  "26–50",
  "51–100",
  "100+",
] as const;

export const CLIENTELE_SIZE_RANGES = [
  "Under 100 active clients",
  "100–250",
  "250–500",
  "500–1,000",
  "1,000+",
  "Not sure",
] as const;

export const ANALYTICS_TOOLS = [
  "No — we don't use a BI/analytics tool yet",
  "Tableau",
  "Power BI",
  "Looker / Looker Studio",
  "Excel or Google Sheets only",
  "Other",
] as const;
