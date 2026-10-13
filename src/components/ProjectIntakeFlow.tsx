"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Send,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { submitProjectIntake, type IntakeFormData } from "@/app/actions/intake";

const NEXT_STEPS = [
  {
    title: "We review your request",
    body: "Hansen and the team study the exact problem and constraints you shared.",
  },
  {
    title: "We map the likely solution path",
    body: "Lightweight tool, custom system, or phased sprint — whichever makes business sense.",
  },
  {
    title: "We reply to your inbox",
    body: "Thoughtful next questions or a link to talk, sent within 24 hours.",
  },
  {
    title: "We propose the next step",
    body: "Zero obligation. Fixed scope and clear milestones before any commitment.",
  },
];

export default function ProjectIntakeFlow({
  initialPackage,
}: {
  initialPackage?: string;
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [form, setForm] = useState<IntakeFormData>({
    goal: initialPackage ? `Selected package: ${initialPackage.toUpperCase()}` : "",
    problemDescription: "",
    audience: "",
    stage: "",
    timeline: "",
    successMetric: "",
    name: "",
    email: "",
    organization: "",
    phone: "",
  });

  const goalOptions = [
    "Build something brand new",
    "Improve an existing website",
    "Build a custom web application",
    "Build a mobile app / portal",
    "Automate a repetitive process",
    "Add AI or smart workflows",
    "Build an internal business system",
    "Modernize an outdated system",
    "E-commerce or direct ordering",
    "I'm not sure yet (help me figure it out)",
  ];

  const audienceOptions = [
    "My own business / company",
    "My organization / NGO / institution",
    "My clients / customers",
    "A new startup idea",
    "Our internal team & staff",
    "Multiple user types / other",
  ];

  const stageOptions = [
    "Just an initial idea / early concept",
    "Active planning & requirement scoping",
    "Running business ready to upgrade",
    "Existing website needing a complete overhaul",
    "Existing internal system needing replacement",
    "Live product ready to scale up",
  ];

  const timelineOptions = [
    "ASAP (ready right now)",
    "1 – 3 months",
    "3 – 6 months",
    "Flexible timeline",
    "Not sure yet",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim() || !form.email?.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitProjectIntake(form);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          res.error ||
            "Unable to submit at this moment. Please check your details or email kingtenison@gmail.com directly."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection failed. Please check your internet or reach out directly at kingtenison@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const optionClass = (active: boolean) =>
    `p-3.5 rounded-2xl text-left text-xs font-bold transition-all border flex items-center justify-between ${
      active
        ? "bg-ink text-white border-ink"
        : "bg-white text-ink/80 border-ink/15 hover:border-ink"
    }`;

  const inputClass =
    "w-full p-3.5 rounded-2xl border border-ink/15 bg-sky-tint text-sm text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-ink focus:border-ink focus:bg-white";

  const labelClass = "block text-xs font-bold text-ink mb-1.5";

  const backClass =
    "inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-ink/70 hover:text-ink transition-colors";

  if (submitted) {
    return (
      <div className="card p-6 sm:p-12 max-w-3xl mx-auto text-center reveal">
        <div className="w-16 h-16 rounded-full bg-flame border border-flame-deep flex items-center justify-center mx-auto mb-6 text-white">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="pill">Intake received</span>

        <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mt-4">
          You&apos;re on our radar.
        </h2>

        <p className="text-sm sm:text-base text-ink/75 mt-3 max-w-lg mx-auto leading-relaxed">
          Thanks, <strong className="text-ink">{form.name || "friend"}</strong>.
          We&apos;ve got your details and problem overview.
        </p>

        <div className="my-8 text-left p-5 sm:p-7 rounded-[24px] bg-sky-tint border border-ink/10">
          <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 mb-4">
            What happens next
          </h3>
          <ol className="space-y-4">
            {NEXT_STEPS.map((s, i) => (
              <li key={s.title} className="flex items-start gap-3">
                <span
                  className={`w-7 h-7 rounded-full border border-ink text-ink text-xs font-display font-bold flex items-center justify-center shrink-0 ${
                    i === NEXT_STEPS.length - 1 ? "bg-flame" : "bg-white"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{s.title}</p>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    {i === 2 && form.email ? (
                      <>
                        We&apos;ll email <strong className="text-ink">{form.email}</strong>{" "}
                        with next questions or a link to chat.
                      </>
                    ) : (
                      s.body
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Link href="/" className="btn btn-ghost btn-sm">
          <span>Back to homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-10 max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-ink/70 mb-2 gap-4">
          <span className="text-ink">
            Step {step} of 4
            <span className="hidden sm:inline">
              {" — "}
              {step === 1 && "Goal"}
              {step === 2 && "The problem"}
              {step === 3 && "Context"}
              {step === 4 && "Contact"}
            </span>
          </span>
          <span>{Math.round((step / 4) * 100)}%</span>
        </div>
        <div className="w-full h-2.5 bg-ink/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-flame rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4 reveal">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-flame" />
                Step 1 · Goal
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                What are you looking to accomplish?
              </h2>
              <p className="text-xs sm:text-sm text-ink/75 mt-1">
                Pick whatever fits best — we&apos;ll refine it together.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {goalOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setForm({ ...form, goal: option })}
                  className={optionClass(form.goal === option)}
                >
                  <span>{option}</span>
                  {form.goal === option && (
                    <span className="shrink-0 ml-2 grid place-items-center w-4 h-4 rounded-full bg-flame text-ink">
                      <Check className="w-2.5 h-2.5" strokeWidth={4} />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                disabled={!form.goal}
                onClick={() => setStep(2)}
                className="btn btn-primary btn-sm disabled:opacity-40"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4 reveal">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-flame" />
                Step 2 · The problem
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                What&apos;s not working right now?
              </h2>
              <p className="text-xs sm:text-sm text-ink/75 mt-1">
                No technical language needed. What&apos;s slow, confusing, or
                eating your team&apos;s time?
              </p>
            </div>

            <textarea
              rows={4}
              value={form.problemDescription}
              onChange={(e) =>
                setForm({ ...form, problemDescription: e.target.value })
              }
              placeholder="Example: Patients fill 15 minutes of paper clipboards, then staff re-type it all..."
              className={`${inputClass} resize-y`}
            />

            <div>
              <label className={labelClass}>Who is this for?</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {audienceOptions.map((aud) => (
                  <button
                    type="button"
                    key={aud}
                    onClick={() => setForm({ ...form, audience: aud })}
                    className={`p-2.5 rounded-xl text-left text-[11px] font-bold border transition-all ${
                      form.audience === aud
                        ? "bg-ink text-white border-ink"
                        : "bg-white text-ink/75 border-ink/15 hover:border-ink"
                    }`}
                  >
                    {aud}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={backClass}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                disabled={!form.problemDescription}
                onClick={() => setStep(3)}
                className="btn btn-primary btn-sm disabled:opacity-40"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4 reveal">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-flame" />
                Step 3 · Context
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                Where are you right now?
              </h2>
            </div>

            <div>
              <label className={labelClass}>Current state</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {stageOptions.map((stg) => (
                  <button
                    type="button"
                    key={stg}
                    onClick={() => setForm({ ...form, stage: stg })}
                    className={`p-3 rounded-xl text-left text-xs font-bold border transition-all ${
                      form.stage === stg
                        ? "bg-ink text-white border-ink"
                        : "bg-white text-ink/75 border-ink/15 hover:border-ink"
                    }`}
                  >
                    {stg}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className={labelClass}>Approximate timeline</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timelineOptions.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, timeline: t })}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-all ${
                      form.timeline === t
                        ? "bg-ink text-white border-ink"
                        : "bg-white text-ink/75 border-ink/15 hover:border-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className={labelClass}>
                What does success look like? (optional)
              </label>
              <input
                type="text"
                value={form.successMetric}
                onChange={(e) =>
                  setForm({ ...form, successMetric: e.target.value })
                }
                placeholder="Example: cut intake time in half, zero lost tickets, 100 signups/month"
                className={inputClass}
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className={backClass}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="btn btn-primary btn-sm"
              >
                <span>Final step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4 reveal">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-flame" />
                Step 4 · Contact
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                Where should we send our review?
              </h2>
              <p className="text-xs sm:text-sm text-ink/75 mt-1">
                Every inquiry gets a reply within 24 hours. We never share your
                information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className={labelClass}>Your name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Company / organization</label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) =>
                    setForm({ ...form, organization: e.target.value })
                  }
                  placeholder="e.g. Apex Health Clinic"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Phone / WhatsApp (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-sky-tint border border-ink/10 text-xs font-semibold text-ink flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strict privacy. No spam, no unsolicited sales calls.</span>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">{errorMessage}</p>
                  <p className="text-[11px] text-red-600/80">
                    You can also reach Hansen directly via{" "}
                    <a
                      href={`mailto:kingtenison@gmail.com?subject=Project%20Intake%20-%20${encodeURIComponent(form.name || "Client")}`}
                      className="underline font-bold"
                    >
                      kingtenison@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className={backClass}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={!form.name?.trim() || !form.email?.trim() || isSubmitting}
                className="btn btn-primary disabled:opacity-40 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending intake...</span>
                  </>
                ) : (
                  <>
                    <span>Send intake</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
