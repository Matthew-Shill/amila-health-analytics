import type { ReactNode } from "react";

type DemoVariant =
  | "retention"
  | "profitability"
  | "inventory"
  | "provider-value"
  | "marketing"
  | "executive";

interface DemoPreviewProps {
  variant: DemoVariant;
  featured?: boolean;
  dashboardTitle?: string;
  insight?: string;
}

function PreviewShell({
  dashboardTitle,
  insight,
  children,
}: {
  dashboardTitle: string;
  insight?: string;
  children: ReactNode;
}) {
  return (
    <div className="glass-panel-strong relative overflow-hidden rounded-2xl p-4 sm:p-5 lg:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] pb-3 sm:mb-5 sm:pb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-smoked-teal">
            Amara insight view
          </p>
          <p className="mt-1 font-headline text-base text-espresso sm:text-lg">
            {dashboardTitle}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--amara-smoked-teal)_12%,white)] px-3 py-1.5 ring-1 ring-[color-mix(in_srgb,var(--amara-smoked-teal)_22%,transparent)]">
          <span className="h-2 w-2 animate-pulse-soft rounded-full bg-smoked-teal" />
          <span className="text-[11px] font-semibold text-smoked-teal">Sample data</span>
        </div>
      </div>
      {children}
      {insight ? (
        <div className="mt-4 rounded-xl border border-dashed border-[color-mix(in_srgb,var(--amara-smoked-teal)_28%,transparent)] bg-[color-mix(in_srgb,var(--amara-smoked-teal)_6%,white)] px-4 py-3 sm:mt-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
            Recommended action
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-espresso sm:text-sm">{insight}</p>
        </div>
      ) : null}
    </div>
  );
}

function KpiTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/55 p-3">
      <p className="text-[10px] font-medium text-[color-mix(in_srgb,var(--amara-espresso)_65%,white)] sm:text-[11px]">
        {label}
      </p>
      <p className="mt-1 font-headline text-lg text-espresso">{value}</p>
      {sub ? (
        <p className="mt-0.5 text-[10px] font-semibold text-smoked-teal">{sub}</p>
      ) : null}
    </div>
  );
}

function RetentionFeatured({ insight, dashboardTitle }: { insight?: string; dashboardTitle: string }) {
  const bars = [40, 52, 48, 61, 58, 72, 68, 74, 70, 78];
  return (
    <PreviewShell dashboardTitle={dashboardTitle} insight={insight}>
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="mb-2 flex items-end justify-between">
            <p className="text-xs font-medium text-espresso">90-day retention trend</p>
            <p className="font-headline text-xl text-smoked-teal">+6.2%</p>
          </div>
          <div className="flex h-36 items-end gap-1.5 rounded-xl bg-[color-mix(in_srgb,white_55%,var(--amara-pearl))] p-3 sm:h-44">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm transition-all ${
                  i >= bars.length - 2
                    ? "bg-smoked-teal"
                    : "bg-[color-mix(in_srgb,var(--amara-smoked-teal)_55%,var(--amara-pearl))]"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:col-span-2 lg:grid-cols-1">
          <KpiTile label="At-risk patients" value="24" sub="High LTV cohort" />
          <KpiTile label="Avg lifetime value" value="$1,840" sub="+8% vs prior quarter" />
          <KpiTile label="Visit frequency" value="2.1 / 90d" sub="Below target for 18%" />
          <KpiTile label="Re-engagement ROI" value="4.8×" sub="Projected on win-back" />
        </div>
      </div>
    </PreviewShell>
  );
}

function ProfitabilityFeatured({
  insight,
  dashboardTitle,
}: {
  insight?: string;
  dashboardTitle: string;
}) {
  const rows = [
    { service: "Injectables", margin: 62, revenue: "$84k", cost: "$32k" },
    { service: "Laser", margin: 41, revenue: "$52k", cost: "$31k" },
    { service: "Skin / Facials", margin: 38, revenue: "$31k", cost: "$19k" },
    { service: "Wellness", margin: 29, revenue: "$18k", cost: "$13k" },
  ];
  return (
    <PreviewShell dashboardTitle={dashboardTitle} insight={insight}>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.service}
            className="rounded-xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] bg-white/50 p-3 sm:p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-espresso">{row.service}</span>
              <span className="font-headline text-lg text-smoked-teal">{row.margin}% margin</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-gradient-to-r from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))]"
                style={{ width: `${row.margin}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-[color-mix(in_srgb,var(--amara-espresso)_68%,white)]">
              <span>Revenue {row.revenue}</span>
              <span>Loaded cost {row.cost}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        <KpiTile label="Blended margin" value="44%" />
        <KpiTile label="Top contributor" value="Injectables" />
        <KpiTile label="Fee drag" value="3.2%" sub="Processing" />
      </div>
    </PreviewShell>
  );
}

function InventoryFeatured({ insight, dashboardTitle }: { insight?: string; dashboardTitle: string }) {
  const rows = [
    { label: "Units purchased", value: "5,500", tone: "default" as const },
    { label: "Units administered", value: "4,800", tone: "default" as const },
    { label: "Expected remaining", value: "700", tone: "default" as const },
    { label: "Actual remaining", value: "520", tone: "warn" as const },
    { label: "Variance", value: "-180 units", tone: "alert" as const },
  ];
  return (
    <PreviewShell dashboardTitle={dashboardTitle} insight={insight}>
      <p className="mb-3 text-xs text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
        Botox tracked in units — not vials — aligned to how your team administers product.
      </p>
      <dl className="space-y-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 sm:px-4 ${
              row.tone === "alert"
                ? "border border-[color-mix(in_srgb,var(--amara-smoked-teal)_25%,transparent)] bg-[color-mix(in_srgb,var(--amara-smoked-teal)_10%,white)]"
                : row.tone === "warn"
                  ? "bg-[color-mix(in_srgb,var(--amara-nude-stone)_18%,white)]"
                  : "bg-white/50 ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_25%,transparent)]"
            }`}
          >
            <dt className="text-xs text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)] sm:text-sm">
              {row.label}
            </dt>
            <dd
              className={`text-sm font-semibold ${
                row.tone === "alert" ? "text-smoked-teal" : "text-espresso"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        <KpiTile label="Est. loss" value="$4.2k" sub="At current unit cost" />
        <KpiTile label="Shrink rate" value="3.3%" sub="vs 1.5% target" />
        <KpiTile label="Days to reorder" value="12" sub="At current pace" />
      </div>
    </PreviewShell>
  );
}

function ProviderFeatured({ insight, dashboardTitle }: { insight?: string; dashboardTitle: string }) {
  const providers = [
    { name: "Dr. A", rebook: 78, value: "$2.4k", util: 82 },
    { name: "Dr. B", rebook: 71, value: "$2.1k", util: 76 },
    { name: "NP C", rebook: 64, value: "$1.7k", util: 68 },
  ];
  return (
    <PreviewShell dashboardTitle={dashboardTitle} insight={insight}>
      <div className="space-y-3">
        {providers.map((p, i) => (
          <div
            key={p.name}
            className="rounded-xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] bg-white/50 p-3 sm:p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-espresso">{p.name}</span>
              {i === 0 ? (
                <span className="rounded-full bg-[color-mix(in_srgb,var(--amara-smoked-teal)_12%,white)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-smoked-teal">
                  Top performer
                </span>
              ) : null}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-[10px] text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
                  Rebook
                </p>
                <p className="font-headline text-base text-smoked-teal">{p.rebook}%</p>
              </div>
              <div>
                <p className="text-[10px] text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
                  Avg value
                </p>
                <p className="font-headline text-base text-espresso">{p.value}</p>
              </div>
              <div>
                <p className="text-[10px] text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
                  Utilization
                </p>
                <p className="font-headline text-base text-espresso">{p.util}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function MarketingFeatured({ insight, dashboardTitle }: { insight?: string; dashboardTitle: string }) {
  const channels = [
    { channel: "Referral", roi: "6.1×", pct: 85, ltv: "$5.2k" },
    { channel: "Email", roi: "4.4×", pct: 62, ltv: "$3.8k" },
    { channel: "Paid Social", roi: "2.8×", pct: 45, ltv: "$2.1k" },
  ];
  return (
    <PreviewShell dashboardTitle={dashboardTitle} insight={insight}>
      <div className="space-y-3">
        {channels.map((row) => (
          <div
            key={row.channel}
            className="rounded-xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] bg-white/50 p-3 sm:p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-espresso">{row.channel}</span>
              <span className="font-headline text-lg text-smoked-teal">{row.roi} ROI</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-smoked-teal"
                style={{ width: `${row.pct}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-[color-mix(in_srgb,var(--amara-espresso)_68%,white)]">
              Avg patient LTV {row.ltv}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        <KpiTile label="CAC (blended)" value="$186" />
        <KpiTile label="Best channel" value="Referral" />
        <KpiTile label="Payback" value="38 days" />
      </div>
    </PreviewShell>
  );
}

function ExecutiveFeatured({ insight, dashboardTitle }: { insight?: string; dashboardTitle: string }) {
  const kpis = [
    { label: "Revenue", value: "$284k", width: "78%" },
    { label: "Profit", value: "$96k", width: "52%" },
    { label: "Retention", value: "86%", width: "86%" },
    { label: "Utilization", value: "76%", width: "76%" },
  ];
  const points = [32, 38, 35, 48, 44, 58, 54, 68, 62, 74];
  const path = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      return `${i === 0 ? "M" : "L"} ${x} ${100 - y}`;
    })
    .join(" ");

  return (
    <PreviewShell dashboardTitle={dashboardTitle} insight={insight}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 flex items-end justify-between">
            <p className="text-xs font-medium text-espresso">Performance index</p>
            <p className="font-headline text-xl text-smoked-teal">+14.8%</p>
          </div>
          <div className="h-32 rounded-xl bg-[color-mix(in_srgb,white_55%,var(--amara-pearl))] p-2 sm:h-36">
            <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="demoExecFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#43696A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#43696A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#demoExecFill)" />
              <path
                d={path}
                fill="none"
                stroke="#43696A"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/50 p-3"
            >
              <p className="text-[10px] font-medium text-[color-mix(in_srgb,var(--amara-espresso)_65%,white)]">
                {k.label}
              </p>
              <p className="mt-1 font-headline text-base text-espresso">{k.value}</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-pearl">
                <div className="h-full rounded-full bg-smoked-teal" style={{ width: k.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-[color-mix(in_srgb,var(--amara-nude-stone)_15%,white)] px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
          Q2 focus areas
        </p>
        <ul className="mt-2 space-y-1 text-xs text-espresso sm:text-sm">
          <li>→ Close inventory variance (-180 units)</li>
          <li>→ Re-engage 24 at-risk high-LTV patients</li>
          <li>→ Shift marketing test budget toward referral</li>
        </ul>
      </div>
    </PreviewShell>
  );
}

export function DemoPreview({
  variant,
  featured = false,
  dashboardTitle = "Insight view",
  insight,
}: DemoPreviewProps) {
  if (featured) {
    switch (variant) {
      case "retention":
        return <RetentionFeatured insight={insight} dashboardTitle={dashboardTitle} />;
      case "profitability":
        return <ProfitabilityFeatured insight={insight} dashboardTitle={dashboardTitle} />;
      case "inventory":
        return <InventoryFeatured insight={insight} dashboardTitle={dashboardTitle} />;
      case "provider-value":
        return <ProviderFeatured insight={insight} dashboardTitle={dashboardTitle} />;
      case "marketing":
        return <MarketingFeatured insight={insight} dashboardTitle={dashboardTitle} />;
      case "executive":
        return <ExecutiveFeatured insight={insight} dashboardTitle={dashboardTitle} />;
    }
  }

  const shared = "rounded-lg bg-white/60 p-2";

  if (variant === "retention") {
    return (
      <div className="space-y-2 p-3">
        <div className="flex justify-between text-[10px] font-medium text-smoked-teal">
          <span>90-day retention trend</span>
          <span className="text-espresso">At-risk cohort</span>
        </div>
        <div className={`${shared} h-16`}>
          <div className="flex h-full items-end gap-1">
            {[40, 52, 48, 61, 58, 72, 68].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-smoked-teal/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className={`${shared} text-espresso`}>
            <span className="text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
              Churn risk
            </span>
            <p className="font-semibold">24 patients</p>
          </div>
          <div className={`${shared} text-espresso`}>
            <span className="text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
              Lifetime value
            </span>
            <p className="font-semibold">$1,840 avg</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "profitability") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { service: "Injectables", margin: "62%", revenue: "$84k" },
          { service: "Laser", margin: "41%", revenue: "$52k" },
          { service: "Skin", margin: "38%", revenue: "$31k" },
        ].map((row) => (
          <div key={row.service} className={`${shared} flex items-center gap-2 text-espresso`}>
            <span className="w-16 shrink-0 font-medium">{row.service}</span>
            <div className="h-1.5 flex-1 rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-smoked-teal"
                style={{ width: row.margin }}
              />
            </div>
            <span className="w-10 text-right font-semibold text-smoked-teal">{row.margin}</span>
            <span className="w-12 text-right">{row.revenue}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "inventory") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { label: "Purchased", value: "5,500 units" },
          { label: "Administered", value: "4,800 units" },
          { label: "Variance", value: "-180 units" },
        ].map((row) => (
          <div key={row.label} className={`${shared} flex justify-between text-espresso`}>
            <span>{row.label}</span>
            <span className="font-semibold">{row.value}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "provider-value") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { provider: "Dr. A", rebook: "78%", value: "$2.4k" },
          { provider: "Dr. B", rebook: "71%", value: "$2.1k" },
        ].map((row) => (
          <div key={row.provider} className={`${shared} flex justify-between text-espresso`}>
            <span className="font-medium">{row.provider}</span>
            <span>Rebook {row.rebook}</span>
            <span className="font-semibold text-smoked-teal">{row.value}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "marketing") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { channel: "Referral", roi: "6.1×", pct: 85 },
          { channel: "Paid Social", roi: "2.8×", pct: 45 },
        ].map((row) => (
          <div key={row.channel} className={`${shared} flex items-center gap-2`}>
            <span className="w-16 shrink-0 text-espresso">{row.channel}</span>
            <div className="h-1.5 flex-1 rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-smoked-teal"
                style={{ width: `${row.pct}%` }}
              />
            </div>
            <span className="font-semibold text-smoked-teal">{row.roi}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-3 text-[10px]">
      {[
        { kpi: "Revenue", val: "$284k" },
        { kpi: "Retention", val: "86%" },
      ].map((row) => (
        <div
          key={row.kpi}
          className={`${shared} flex items-center justify-between text-espresso`}
        >
          <span>{row.kpi}</span>
          <strong>{row.val}</strong>
        </div>
      ))}
    </div>
  );
}
