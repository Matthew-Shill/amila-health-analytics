type DemoVariant = "retention" | "revenue" | "marketing" | "utilization" | "executive";

interface DemoPreviewProps {
  variant: DemoVariant;
}

export function DemoPreview({ variant }: DemoPreviewProps) {
  const shared = "rounded-lg bg-white/60 p-2";

  if (variant === "retention") {
    return (
      <div className="space-y-2 p-3">
        <div className="flex justify-between text-[10px] font-medium text-smoked-teal">
          <span>90-day retention</span>
          <span>87%</span>
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
              At risk
            </span>
            <p className="font-semibold">24 patients</p>
          </div>
          <div className={`${shared} text-espresso`}>
            <span className="text-[color-mix(in_srgb,var(--amara-espresso)_60%,white)]">
              Avg visits
            </span>
            <p className="font-semibold">3.4 / quarter</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "revenue") {
    return (
      <div className="space-y-2 p-3">
        <div className="flex gap-2">
          {["Injectables", "Laser", "Skin"].map((s, i) => (
            <div key={s} className={`${shared} flex-1 py-2 text-center text-[9px]`}>
              <div
                className="mx-auto mb-1 h-8 w-8 rounded-full border-4 border-smoked-teal"
                style={{
                  borderColor: i === 0 ? "#43696A" : i === 1 ? "#D8C0A8" : "#4B342B",
                  borderTopColor: "transparent",
                  transform: `rotate(${i * 40}deg)`,
                }}
              />
              {s}
            </div>
          ))}
        </div>
        <div className={`${shared} text-[10px] text-espresso`}>
          <div className="flex justify-between border-b border-pearl pb-1">
            <span>Top provider</span>
            <span className="font-semibold">+$42k MTD</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-pearl">
            <div className="h-full w-[68%] rounded-full bg-nude-stone" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "marketing") {
    return (
      <div className="space-y-2 p-3 text-[10px]">
        {[
          { channel: "Referral", roi: "6.1×", pct: 85 },
          { channel: "Paid Social", roi: "2.8×", pct: 45 },
          { channel: "Email", roi: "4.4×", pct: 62 },
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

  if (variant === "utilization") {
    return (
      <div className="grid grid-cols-7 gap-1 p-3">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{
              backgroundColor:
                i % 5 === 0
                  ? "color-mix(in srgb, var(--amara-smoked-teal) 70%, white)"
                  : i % 3 === 0
                    ? "color-mix(in srgb, var(--amara-nude-stone) 80%, white)"
                    : "color-mix(in srgb, var(--amara-pearl) 90%, white)",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-3 text-[10px]">
      {[
        { kpi: "Revenue", val: "$284k", delta: "+9%" },
        { kpi: "Retention", val: "86%", delta: "+3%" },
        { kpi: "Utilization", val: "74%", delta: "+5%" },
      ].map((row) => (
        <div
          key={row.kpi}
          className={`${shared} flex items-center justify-between text-espresso`}
        >
          <span>{row.kpi}</span>
          <span>
            <strong>{row.val}</strong>{" "}
            <span className="text-smoked-teal">{row.delta}</span>
          </span>
        </div>
      ))}
      <p className={`${shared} leading-relaxed text-espresso`}>
        Recommendation: expand high-margin services with strongest retention cohort.
      </p>
    </div>
  );
}
