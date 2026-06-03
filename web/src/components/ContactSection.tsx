import { useState, type FormEvent } from "react";
import { ORGANIZATION_TYPES } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export interface ContactFormPayload {
  name: string;
  email: string;
  organization: string;
  website: string;
  organizationType: string;
  needs: string;
  message: string;
}

const initial: ContactFormPayload = {
  name: "",
  email: "",
  organization: "",
  website: "",
  organizationType: "",
  needs: "",
  message: "",
};

/**
 * Submit handler stub — wire to HubSpot, Formspree, Supabase, or API routes.
 * Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
 */
async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ ok: boolean }> {
  void payload;
  await new Promise((r) => setTimeout(r, 800));
  return { ok: true };
}

export function ContactSection() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const next: Partial<Record<keyof ContactFormPayload, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.organization.trim()) next.organization = "Organization is required.";
    if (!form.organizationType) next.organizationType = "Please select a type.";
    if (!form.needs.trim()) next.needs = "Tell us what you need help with.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await submitContactForm(form);
      if (res.ok) {
        setStatus("success");
        setForm(initial);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const field = (
    key: keyof ContactFormPayload,
    label: string,
    opts?: { type?: string; as?: "textarea" | "select"; required?: boolean },
  ) => {
    const id = `contact-${key}`;
    const common =
      "mt-2 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-espresso transition-colors focus:border-smoked-teal focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--amara-smoked-teal)_25%,transparent)]";
    const border = errors[key]
      ? "border-red-400/80"
      : "border-[color-mix(in_srgb,var(--amara-nude-stone)_50%,transparent)]";

    return (
      <div>
        <label htmlFor={id} className="text-sm font-medium text-espresso">
          {label}
          {opts?.required !== false && (
            <span className="text-smoked-teal" aria-hidden>
              {" "}
              *
            </span>
          )}
        </label>
        {opts?.as === "textarea" ? (
          <textarea
            id={id}
            name={key}
            rows={4}
            className={`${common} ${border} resize-y`}
            value={form[key]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            aria-invalid={!!errors[key]}
            aria-describedby={errors[key] ? `${id}-error` : undefined}
          />
        ) : opts?.as === "select" ? (
          <select
            id={id}
            name={key}
            className={`${common} ${border}`}
            value={form[key]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            aria-invalid={!!errors[key]}
          >
            <option value="">Select organization type</option>
            {ORGANIZATION_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={key}
            type={opts?.type ?? "text"}
            className={`${common} ${border}`}
            value={form[key]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            aria-invalid={!!errors[key]}
          />
        )}
        {errors[key] && (
          <p id={`${id}-error`} className="mt-1 text-xs text-red-700" role="alert">
            {errors[key]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="section-pad section-tone-teal relative overflow-hidden">
      <div className="ambient-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-narrow relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's uncover your next AHA moment."
          />
        </Reveal>

        <Reveal delay={1}>
          {status === "success" ? (
            <div
              className="glass-panel-strong rounded-3xl px-8 py-12 text-center"
              role="status"
            >
              <p className="font-headline text-2xl text-espresso">Thank you.</p>
              <p className="mt-3 text-sm text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)]">
                Your inquiry has been received. We will be in touch shortly.
              </p>
              <Button className="mt-8" variant="secondary" onClick={() => setStatus("idle")}>
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="glass-panel-strong grid gap-6 rounded-3xl p-6 sm:grid-cols-2 sm:p-8 lg:gap-8 lg:p-10"
              noValidate
              data-form-provider="stub"
            >
              {field("name", "Name")}
              {field("email", "Email", { type: "email" })}
              {field("organization", "Organization")}
              {field("website", "Website", { required: false })}
              <div className="sm:col-span-2">{field("organizationType", "Organization Type", { as: "select" })}</div>
              <div className="sm:col-span-2">
                {field("needs", "What do you need help with?")}
              </div>
              <div className="sm:col-span-2">
                {field("message", "Message", { as: "textarea", required: false })}
              </div>
              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-700" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
