import { BrandMotif } from "@/components/ui/BrandMotif";

const metrics = [
  { label: "Revenue Growth", value: "+18.4%", trend: "up", width: "78%" },
  { label: "Patient Retention", value: "87.2%", trend: "up", width: "87%" },
  { label: "Marketing ROI", value: "4.2×", trend: "up", width: "72%" },
  { label: "Provider Utilization", value: "76%", trend: "neutral", width: "76%" },
  { label: "Booking Trends", value: "+12%", trend: "up", width: "65%" },
  { label: "Client Lifetime Value", value: "$4,280", trend: "up", width: "82%" },
];

function MiniChart() {
  const points = [32, 38, 35, 48, 44, 58, 54, 68, 62, 74];
  const path = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      return `${i === 0 ? "M" : "L"} ${x} ${100 - y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E5376" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3E5376" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#chartFill)" />
      <path
        d={path}
        fill="none"
        stroke="#3E5376"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative">
      <BrandMotif
        className="absolute -right-6 -top-8 h-32 w-32 sm:h-40 sm:w-40"
        opacity={0.05}
      />
      <div className="glass-panel-strong relative overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-[color-mix(in_srgb,var(--amila-nude-stone)_40%,transparent)] pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-smoked-teal">
              Executive Overview
            </p>
            <p className="mt-1 font-headline text-lg text-espresso sm:text-xl">
              Business Visibility
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--amila-smoked-teal)_15%,white)] px-3 py-1.5 ring-1 ring-[color-mix(in_srgb,var(--amila-smoked-teal)_25%,transparent)]">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-smoked-teal" />
            <span className="text-xs font-semibold text-smoked-teal">Live</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
          <div className="lg:col-span-3">
            <div className="mb-3 flex items-end justify-between">
              <p className="text-sm font-medium text-espresso">Performance Index</p>
              <p className="font-headline text-2xl text-smoked-teal">+14.8%</p>
            </div>
            <div className="h-36 rounded-xl bg-blue-soft/60 p-3 sm:h-44">
              <MiniChart />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-1">
            {metrics.slice(0, 4).map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-blue/10 bg-surface p-3"
              >
                <p className="text-[11px] font-medium text-[color-mix(in_srgb,var(--amila-espresso)_65%,white)]">
                  {m.label}
                </p>
                <p className="mt-1 font-headline text-lg text-espresso">{m.value}</p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-pearl">
                  <div
                    className="h-full rounded-full bg-smoked-teal transition-all duration-1000"
                    style={{ width: m.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {metrics.slice(4).map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-[color-mix(in_srgb,var(--amila-nude-stone)_18%,white)] px-4 py-3"
            >
              <p className="text-[11px] text-[color-mix(in_srgb,var(--amila-espresso)_70%,white)]">
                {m.label}
              </p>
              <p className="font-headline text-base text-espresso">{m.value}</p>
            </div>
          ))}
          <div className="col-span-2 rounded-xl border border-dashed border-[color-mix(in_srgb,var(--amila-smoked-teal)_30%,transparent)] px-4 py-3 sm:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-smoked-teal">
              Insight
            </p>
            <p className="mt-1 text-xs leading-relaxed text-espresso">
              Retention up 6% QoQ. Prioritize re-booking for high-LTV cohort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
