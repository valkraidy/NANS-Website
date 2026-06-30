import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/internship")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SiteShell>
      <div>Hello "/internship"!</div>

      {/* Internship form */}

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
    </SiteShell>
  );
}
