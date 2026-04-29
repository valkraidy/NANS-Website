import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, GraduationCap, MapPin, Search, SlidersHorizontal, User, X } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Eyebrow, EyebrowSoft } from "@/components/site/SectionHeader";
import { CHAPTERS, REGIONS, type Chapter } from "@/data/chapters";
import logo from "@/assets/nans-logo.png";

export const Route = createFileRoute("/chapters")({
  head: () => ({
    meta: [
      { title: "Chapters — NANS Ghana" },
      { name: "description", content: "Find your local NANS chapter across Ghana's tertiary institutions." },
      { property: "og:title", content: "NANS Chapters" },
      { property: "og:description", content: "Network of excellence across institutions in Ghana." },
    ],
  }),
  component: ChaptersPage,
});

function ChaptersPage() {
  const [region, setRegion] = useState<string>("All");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Chapter | null>(null);

  const filtered = useMemo(() => {
    return CHAPTERS.filter((c) => (region === "All" || c.region === region))
      .filter((c) => !q || (c.name + c.location + c.president).toLowerCase().includes(q.toLowerCase()));
  }, [region, q]);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-nans-hero text-white">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8">
          <Eyebrow>Network of Excellence</Eyebrow>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
            Our<br /><span className="text-[color:var(--nans-lime)]">Chapters</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/85">
            NANS maintains a robust presence across tertiary institutions, unifying Nzema students through localized representation and national solidarity.
          </p>
        </div>

        {/* Scope card */}
        <div className="mx-auto -mb-12 max-w-7xl translate-y-12 px-5 md:px-8">
          <div className="grid gap-5 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <h3 className="font-display text-xl text-[color:var(--nans-ink)]">The Scope of Our Mission</h3>
              <p className="mt-1 text-sm text-muted-foreground">Building educational progress across the entire Nzema land and beyond.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 md:col-span-7">
              {[{ v: "19", l: "Active Chapters", lime: false }, { v: "3", l: "Key Regions", lime: false }, { v: "500+", l: "Active Members", lime: true }].map((s) => (
                <div key={s.l} className={`flex items-center gap-3 rounded-full px-4 py-2.5 ${s.lime ? "bg-[color:var(--nans-ink)] text-white" : "bg-muted"}`}>
                  <span className={`font-display text-xl ${s.lime ? "text-[color:var(--nans-lime)]" : "text-[color:var(--nans-green-deep)]"}`}>{s.v}</span>
                  <span className={`text-[11px] font-semibold uppercase leading-tight tracking-wider ${s.lime ? "text-white/80" : "text-muted-foreground"}`}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background pb-20 pt-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-[color:var(--nans-green-deep)] md:text-4xl">INSTITUTIONAL CHAPTERS</h2>
              <p className="mt-1 text-sm text-muted-foreground">Find your local representative body and get involved.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search chapters..."
                  className="w-56 rounded-full border border-border bg-card py-2 pl-9 pr-3 text-sm focus:border-[color:var(--nans-green)] focus:outline-none"
                />
              </div>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground" aria-label="Filter">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Region pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  region === r ? "bg-[color:var(--nans-green)] text-white" : "bg-card text-muted-foreground ring-1 ring-border hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => {
              const isFeatured = !!c.featured;
              return (
                <article
                  key={c.slug + c.location}
                  className={`group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                    isFeatured ? "ring-[color:var(--nans-green)]" : "ring-border"
                  }`}
                >
                  <div className="h-1.5 w-full bg-[color:var(--nans-green)]" />
                  <div className="flex items-start justify-between p-5 pb-3">
                    <EyebrowSoft>{c.region}</EyebrowSoft>
                    <GraduationCap className="h-5 w-5 text-[color:var(--nans-green-deep)]" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5">
                    <h3 className="font-display text-lg leading-tight">{c.name}</h3>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {c.location}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <User className="h-3.5 w-3.5" /> President: {c.president}
                    </p>
                    <button
                      onClick={() => setActive(c)}
                      className={`mt-5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                        isFeatured
                          ? "bg-[color:var(--nans-green)] text-white hover:bg-[color:var(--nans-green-deep)]"
                          : "border border-[color:var(--nans-green)] text-[color:var(--nans-green-deep)] hover:bg-[color:var(--nans-green-soft)]"
                      }`}
                    >
                      {isFeatured ? "Current Focus" : "View Chapter"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">No chapters match your filters.</p>
          )}
        </div>
      </section>

      <ChapterDrawer chapter={active} onClose={() => setActive(null)} />
    </SiteShell>
  );
}

function ChapterDrawer({ chapter, onClose }: { chapter: Chapter | null; onClose: () => void }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity ${chapter ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-background shadow-2xl transition-transform duration-300 ${
          chapter ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {chapter && (
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full bg-white object-contain ring-1 ring-border" loading="lazy" />
                <Eyebrow>Chapter Spotlight</Eyebrow>
              </div>
              <button onClick={onClose} aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
            </div>

            <h2 className="mt-7 font-display text-3xl leading-tight text-[color:var(--nans-ink)]">
              {chapter.name.replace(" Chapter", "")}<br />
              <span className="text-[color:var(--nans-green-deep)]">({chapter.shortName})</span>
            </h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-[color:var(--nans-green)]" /> {chapter.location}, {chapter.region}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-8 bg-foreground" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Leadership Team</span>
            </div>
            <div className="mt-4 space-y-3">
              {(chapter.leadership.length ? chapter.leadership : [{ name: chapter.president, role: "Chapter President", level: "—" }]).map((m) => (
                <div key={m.name} className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--nans-green)] to-[color:var(--nans-green-deep)] font-display text-white">
                    {m.name.split(" ").map((p) => p[0]).join("").slice(0,2)}
                  </div>
                  <div>
                    <p className="font-display text-base">{m.name}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--nans-green-deep)]">{m.role}</p>
                    <p className="text-xs text-muted-foreground">{m.level}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-muted/60 p-5 text-center">
                <div className="font-display text-3xl text-[color:var(--nans-green-deep)]">{chapter.members}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Members</div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-5 text-center">
                <div className="font-display text-3xl text-[color:var(--nans-green-deep)]">{chapter.events.toString().padStart(2, "0")}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Annual Events</div>
              </div>
            </div>

            <Link
              to="/membership"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--nans-green)] px-6 py-3.5 text-sm font-bold text-white hover:bg-[color:var(--nans-green-deep)]"
            >
              Join {chapter.shortName} Network <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
