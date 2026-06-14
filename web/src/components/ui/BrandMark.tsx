import { COMPANY_NAME } from "@/lib/brand";
import { BRAND_FULL_LOGO_WEB, BRAND_MARK_LAYOUT, type BrandMarkLayout } from "@/lib/logo";

type BrandMarkProps = {
  /** `compact` for the fixed header; `comfortable` for footer and open layouts. */
  layout?: BrandMarkLayout;
};

export function BrandMark({ layout = "comfortable" }: BrandMarkProps) {
  const config = BRAND_MARK_LAYOUT[layout];

  return (
    <div className={config.containerClass}>
      <img
        src={BRAND_FULL_LOGO_WEB.blue}
        alt={COMPANY_NAME}
        className={config.logoClass}
        width={240}
        height={72}
      />
    </div>
  );
}
