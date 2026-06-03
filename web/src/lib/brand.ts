export const COMPANY_NAME = "Amara Health Analytics";
export const TAGLINE = "Have Your AHA Moment";
export const MISSION =
  "Transforming health data into intelligent growth and better care.";

/** Primary web paths — SVG for crisp scaling. PNG copies live alongside in assets/ for export/print. */
export const LOGO = {
  fullStone: "/logos/full/AHA Full Logo Stone.svg",
  fullTeal: "/logos/full/AHA Full Logo Teal.svg",
  fullEspresso: "/logos/full/AHA Full Logo Espresso.svg",
  iconStone: "/logos/icon/AHA Icon Stone.svg",
  iconTeal: "/logos/icon/AHA Icon Teal.svg",
  iconEspresso: "/logos/icon/AHA Icon Espresso.svg",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Demo Work", href: "#demo-work" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
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
