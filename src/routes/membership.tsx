import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, BookOpen, Briefcase, Calendar, IdCard, Network, UploadCloud, Users } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Eyebrow } from "@/components/site/SectionHeader";
import { CHAPTERS } from "@/data/chapters";
import logo from "@/assets/nans-logo.png";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — NANS Ghana" },
      { name: "description", content: "Join the National Association of Nzema Students. Registration 2024/2025 — Free." },
      { property: "og:title", content: "Membership Registration — NANS" },
      { property: "og:description", content: "Secure your identity within the National Association of Nzema Students." },
    ],
  }),
  component: MembershipPage,
});

const BENEFITS = [
  { i: Network, t: "Networking", d: "Connect with thousands of Nzema students across various institutions and professional alumni globally." },
  { i: Award, t: "Scholarships", d: "Gain exclusive access to educational grants, bursaries, and academic merit awards curated for our members." },
  { i: BookOpen, t: "Cultural Heritage", d: "Participate in Kundum festivals and cultural seminars designed to preserve and promote the Nzema identity." },
  { i: Briefcase, t: "Leadership", d: "Develop governance and organizational skills through executive roles and youth advocacy programs." },
  { i: IdCard, t: "Official ID Card", d: "Receive a standardized biometric membership card providing discounts and verifying your professional status." },
  { i: Calendar, t: "Events", d: "Get priority access and discounts to all regional summits, career fairs, and networking nights." },
];

function MembershipPage() {
  const [filename, setFilename] = useState<string | null>(null);
  return (
    <SiteShell>
      {/* Dark hero */}
      <section className="bg-nans-ink-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-2">
              <Eyebrow>Registration 2024/2025</Eyebrow>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white ring-1 ring-white/15">
                Fee: GH₵ 0.00
              </span>
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
              <span className="text-[color:var(--nans-lime)]">Membership</span><br />Registration
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              Join the vanguard of Nzema excellence. Secure your identity within the National Association of Nzema Students and unlock a future of progress and professional growth.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="mx-auto max-w-xs rounded-2xl bg-white p-4 shadow-2xl">
              <img src={logo} alt="" width={400} height={400} className="h-full w-full object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="font-display text-4xl md:text-5xl">
            Why Join <span className="border-b-4 border-[color:var(--nans-lime)] pb-1">NANS?</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ i: I, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-6 text-left shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--nans-green)] text-white">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Registration submitted (frontend only)."); }}
            className="rounded-3xl bg-card p-7 shadow-xl ring-1 ring-border md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl">Registration Form</h2>
              <span className="inline-flex shrink-0 items-center rounded-full bg-[color:var(--nans-lime)]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--nans-green-deep)]">
                Free
              </span>
            </div>
       




        
            <div className="mt-6 grid gap-5">
              {/*
              <Field label="Full Name"><input required placeholder="e.g. Kwame Boateng" className={input} /></Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Student ID"><input placeholder="Enter ID Number" className={input} /></Field>
                <Field label="Gender">
                  <select defaultValue="" className={input}>
                    <option value="" disabled>Select Gender</option>
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                </Field>
              </div>
               */}

                 {/*
              <Field label="Institution"><input placeholder="e.g. University of Ghana" className={input} /></Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Programme"><input placeholder="e.g. BSc. Computer Science" className={input} /></Field>
                <Field label="Year of Study">
                  <select defaultValue="" className={input}>
                    <option value="" disabled>Current year</option>
                    {[1,2,3,4,5,6].map((y) => <option key={y}>Level {y}00</option>)}
                  </select>
                </Field>
              </div>*/}

             {/* <Field label="Hometown"><input placeholder="Your native town in Nzemaland" className={input} /></Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone Number"><input placeholder="+233 ..." className={input} /></Field>
                <Field label="Email Address"><input type="email" placeholder="email@example.com" className={input} /></Field>
              </div>
              <Field label="Chapter">
                <select defaultValue="" className={input}>
                  <option value="" disabled>Select NANS Chapter</option>
                  {CHAPTERS.map((c) => <option key={c.slug + c.location}>{c.name} — {c.location}</option>)}
                </select>
              </Field>*/}

             {/*<Field label="Passport Photo Upload">
                <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/40 p-8 text-center transition-colors hover:border-[color:var(--nans-green)] hover:bg-[color:var(--nans-green-soft)]/40">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--nans-green-soft)] text-[color:var(--nans-green-deep)]">
                    <UploadCloud className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold">{filename ?? "Click to upload or drag and drop"}</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB (must be a clear passport size)</p>
                  <input type="file" accept="image/png,image/jpeg" className="hidden" onChange={(e) => setFilename(e.target.files?.[0]?.name ?? null)} />
                </label>
              </Field> */}

             <a
  href="https://forms.gle/2PQt7UcCM7JxuLWEA"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--nans-green)] px-6 py-4 text-sm font-bold text-white shadow-md transition-colors hover:bg-[color:var(--nans-green-deep)]"
>
  Tap to register <ArrowRight className="h-4 w-4" />
</a>
            </div>
          </form>

          {/* Approval journey */}
          <div className="mt-16">
            <h3 className="text-center font-display text-2xl">Approval Journey</h3>
            <div className="mx-auto mt-8 grid max-w-3xl gap-8 sm:grid-cols-3">
              {[
                { n: 1, t: "Application", d: "Complete the form with your correct details.", lime: false },
                { n: 2, t: "Verification", d: "Chapter executives verify your student status.", lime: true },
                { n: 3, t: "Chapter Group", d: "You will be added to your chapter WhatsApp group.", lime: false },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl ${
                    s.lime ? "bg-[color:var(--nans-lime)] text-[color:var(--nans-ink)]" : "bg-[color:var(--nans-green)] text-white"
                  }`}>{s.n}</div>
                  <p className="mt-3 font-display text-base">{s.t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-6 flex max-w-2xl items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <p className="text-xs">A community member will guide you through every step.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

const input = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-[color:var(--nans-green)] focus:outline-none focus:ring-2 focus:ring-[color:var(--nans-green)]/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/70">{label}</span>
      {children}
    </label>
  );
}
