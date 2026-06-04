import { useState, type FormEvent } from "react";
import {
  ANALYTICS_TOOLS,
  CLIENTELE_SIZE_RANGES,
  EMPLOYEE_COUNT_RANGES,
  ORGANIZATION_TYPES,
} from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CollapsibleOnMobile } from "@/components/ui/CollapsibleOnMobile";

export interface ContactFormPayload {
  name: string;
  email: string;
  organization: string;
  website: string;
  organizationType: string;
  bookingPlatform: string;
  retailPlatform: string;
  employeeCount: string;
  averageClienteleSize: string;
  analyticsTool: string;
  needs: string;
  message: string;
}

const initial: ContactFormPayload = {
  name: "",
  email: "",
  organization: "",
  website: "",
  organizationType: "",
  bookingPlatform: "",
  retailPlatform: "",
  employeeCount: "",
  averageClienteleSize: "",
  analyticsTool: "",
  needs: "",
  message: "",
};

const CONTACT_RECIPIENT = "nadine@amilahealthanalytics.com";

async function submitContactForm(
  payload: ContactFormPayload,
): Promise<{ ok: boolean }> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_RECIPIENT)}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _subject: `New Amila inquiry from ${payload.name} (${payload.organization})`,
        _template: "table",
        name: payload.name,
        email: payload.email,
        organization: payload.organization,
        website: payload.website || "—",
        organizationType: payload.organizationType,
        bookingPlatform: payload.bookingPlatform || "—",
        retailPlatform: payload.retailPlatform || "—",
        employeeCount: payload.employeeCount || "—",
        averageClienteleSize: payload.averageClienteleSize || "—",
        analyticsTool: payload.analyticsTool || "—",
        needs: payload.needs,
        message: payload.message || "—",
      }),
    },
  );

  if (!response.ok) return { ok: false };

  const data = (await response.json()) as { success?: string | boolean };
  return { ok: data.success === "true" || data.success === true };
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
    opts?: {
      type?: string;
      as?: "textarea" | "select";
      required?: boolean;
      placeholder?: string;
      hint?: string;
      selectPlaceholder?: string;
      selectOptions?: readonly string[];
    },
  ) => {
    const id = `contact-${key}`;
    const common =
      "mt-2 w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-espresso transition-colors focus:border-smoked-teal focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--amila-smoked-teal)_25%,transparent)]";
    const border = errors[key]
      ? "border-red-400/80"
      : "border-[color-mix(in_srgb,var(--amila-nude-stone)_50%,transparent)]";
    const selectOptions =
      opts?.selectOptions ??
      (key === "organizationType" ? ORGANIZATION_TYPES : []);

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
        {opts?.hint && (
          <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--amila-espresso)_65%,white)]">
            {opts.hint}
          </p>
        )}
        {opts?.as === "textarea" ? (
          <textarea
            id={id}
            name={key}
            rows={4}
            className={`${common} ${border} resize-y`}
            value={form[key]}
            placeholder={opts?.placeholder}
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
            <option value="">
              {opts?.selectPlaceholder ?? "Select an option"}
            </option>
            {selectOptions.map((t) => (
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
            placeholder={opts?.placeholder}
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
              <p className="mt-3 text-sm text-[color-mix(in_srgb,var(--amila-espresso)_75%,white)]">
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
              data-form-provider="formsubmit"
            >
              {field("name", "Name")}
              {field("email", "Email", { type: "email" })}
              {field("organization", "Organization")}
              <div className="sm:col-span-2">
                {field("organizationType", "Organization Type", {
                  as: "select",
                  selectPlaceholder: "Select organization type",
                })}
              </div>
              <div className="sm:col-span-2">
                {field("needs", "What do you need help with?")}
              </div>
              <CollapsibleOnMobile
                label="Additional details (optional)"
                className="sm:col-span-2"
                contentClassName="grid gap-6 sm:grid-cols-2"
                preserveDesktopLayout
              >
                {field("website", "Website", { required: false })}
                {field("bookingPlatform", "What booking platform do you use?", {
                  required: false,
                  placeholder: "e.g. Jane App, Mindbody, Acuity, Boulevard",
                })}
                {field("retailPlatform", "Retail or e-commerce platform", {
                  required: false,
                  placeholder: "e.g. Shopify, Square, WooCommerce — or None",
                  hint: "Online store or point-of-sale tools you use for products and retail.",
                })}
                {field("employeeCount", "How many employees are in your practice?", {
                  as: "select",
                  required: false,
                  selectPlaceholder: "Select a range",
                  selectOptions: EMPLOYEE_COUNT_RANGES,
                })}
                {field("averageClienteleSize", "Average active clientele size", {
                  as: "select",
                  required: false,
                  selectPlaceholder: "Select a range",
                  selectOptions: CLIENTELE_SIZE_RANGES,
                  hint: "Approximate number of active clients or patients you serve.",
                })}
                <div className="sm:col-span-2">
                  {field(
                    "analyticsTool",
                    "Do you already use a data analytics or BI tool?",
                    {
                      as: "select",
                      required: false,
                      selectPlaceholder: "Select one",
                      selectOptions: ANALYTICS_TOOLS,
                      hint: "e.g. Tableau, Power BI, Looker, or spreadsheet-only reporting.",
                    },
                  )}
                </div>
                <div className="sm:col-span-2">
                  {field("message", "Message", { as: "textarea", required: false })}
                </div>
              </CollapsibleOnMobile>
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
