import { useMemo, useState } from "react";
import { EVALUATOR_QUESTIONS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** Score = confirmed capabilities (Yes). Fewer Yes answers indicate larger visibility gaps. */
function getResult(yesCount: number) {
  if (yesCount <= 2) {
    return {
      tier: "low",
      title: "Significant blind spots may exist",
      body: "You may be operating with significant blind spots. Amila can help uncover hidden opportunities in your data.",
    };
  }
  if (yesCount <= 4) {
    return {
      tier: "medium",
      title: "Visibility gaps worth addressing",
      body: "You have some visibility, but likely still have gaps in profit, retention, inventory, or growth insight.",
    };
  }
  return {
    tier: "high",
    title: "Strong foundation, room to refine",
    body: "You have a strong foundation. Amila can help refine your reporting and insight layer with forecasting, thoughtful AI support, and executive summaries.",
  };
}

export function NeedsEvaluator() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    () => Array(EVALUATOR_QUESTIONS.length).fill(null),
  );
  const [step, setStep] = useState(0);

  const yesCount = useMemo(
    () => answers.filter((a) => a === true).length,
    [answers],
  );
  const answered = answers.filter((a) => a !== null).length;
  const complete = answered === EVALUATOR_QUESTIONS.length;
  const result = getResult(yesCount);

  const setAnswer = (value: boolean) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = value;
      return next;
    });
    if (step < EVALUATOR_QUESTIONS.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 280);
    }
  };

  const reset = () => {
    setAnswers(Array(EVALUATOR_QUESTIONS.length).fill(null));
    setStep(0);
  };

  return (
    <section id="evaluator" className="section-pad section-tone-teal-rich relative overflow-hidden">
      <div className="ambient-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-narrow relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Quick assessment"
            title="How clearly can you see your business?"
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="glass-panel-strong mx-auto max-w-2xl rounded-3xl p-6 sm:p-8 lg:p-10">
            {!complete ? (
              <div className="transition-opacity duration-300">
                <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-smoked-teal">
                  <span>
                    Question {step + 1} of {EVALUATOR_QUESTIONS.length}
                  </span>
                  <span>{Math.round((answered / EVALUATOR_QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="mb-8 h-2 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--amila-nude-stone)_35%,white)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink via-blue to-blue transition-all duration-500 shadow-sm"
                    style={{
                      width: `${((step + (answers[step] !== null ? 1 : 0)) / EVALUATOR_QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
                <p
                  key={step}
                  className="font-headline text-xl leading-snug text-espresso sm:text-2xl"
                >
                  {EVALUATOR_QUESTIONS[step]}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setAnswer(true)}
                    className="rounded-full bg-smoked-teal px-8 py-3 text-sm font-semibold text-pearl transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smoked-teal"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnswer(false)}
                    className="rounded-full border border-[color-mix(in_srgb,var(--amila-espresso)_25%,transparent)] px-8 py-3 text-sm font-semibold text-espresso transition-colors hover:border-smoked-teal hover:text-smoked-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smoked-teal"
                  >
                    No
                  </button>
                </div>
                {step > 0 && (
                  <button
                    type="button"
                    className="mt-6 text-sm text-smoked-teal underline-offset-4 hover:underline"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                  >
                    Previous question
                  </button>
                )}
              </div>
            ) : (
              <div
                className="text-center transition-all duration-500"
                role="status"
                aria-live="polite"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-smoked-teal">
                  Your score: {yesCount} of {EVALUATOR_QUESTIONS.length} yes
                </p>
                <p className="mt-4 font-headline text-2xl text-espresso">{result.title}</p>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)]">
                  {result.body}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href="#contact">Book a Consultation</Button>
                  <Button variant="secondary" onClick={reset}>
                    Start over
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
