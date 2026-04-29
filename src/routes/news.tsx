import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Eyebrow } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — NANS Ghana" },
      { name: "description", content: "The pulse of the Nzema student community: cultural milestones, academic breakthroughs, and upcoming events." },
      { property: "og:title", content: "News & Events — NANS" },
      { property: "og:description", content: "Cultural milestones and academic breakthroughs." },
    ],
  }),
  component: NewsPage,
});

const TABS = ["All Stories", "Upcoming", "Past Events"] as const;
type Tab = typeof TABS[number];

const STORIES = [
  { tab: "Past Events", tag: "Announcements", date: "Aug 2026", title: "Meet Our Electoral Commission", body: "Meet NANS electoral commission for this year's general election. From chairperson to the members.", grad: "from-slate-700 to-slate-900" },
  { tab: "Past Events", tag: "Past Events", date: "March 2026", title: "NANS celebrates Independence Day", body: "A thrilling week of athletics concluded in Takoradi, with the Tarkwa chapter taking home the championship trophy.", grad: "from-emerald-700 to-emerald-900" },
  { tab: "Upcoming", tag: "Upcoming", date: "Nov 15, 2024", title: "NANS Membership Card Registration", body: "The NANS Ghana executives has rolled out NANS Membership Card Registration.", grad: "from-amber-500 to-amber-700" },
];

function NewsPage() {
  const [tab, setTab] = useState<Tab>("All Stories");
  const list = tab === "All Stories" ? STORIES : STORIES.filter((s) => s.tab === tab);

  return (
    <SiteShell>
      <section className="bg-nans-hero text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-28">
          <Eyebrow>Official Media Hub</Eyebrow>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">News & Events</h1>
          <p className="mx-auto mt-5 max-w-xl text-white/85">
            Stay connected with the pulse of the Nzema student community. From cultural milestones to academic breakthroughs.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 md:px-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                tab === t ? "bg-[color:var(--nans-green)] text-white" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Featured event */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <article className="grid overflow-hidden rounded-3xl bg-card shadow-xl ring-1 ring-border md:grid-cols-2">
            <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-950 p-10">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 50%)" }} />
              <div className="relative flex h-full flex-col justify-between">
                <Sparkles className="h-8 w-8 text-yellow-300" />
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 font-display text-5xl text-[color:var(--nans-ink)]">
                    GS
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">National Association of Nzema Students</p>
                  <p className="mt-3 font-display text-3xl text-yellow-300 italic">Congratulations</p>
                </div>
                <div />
              </div>
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-flex items-center rounded-full bg-[color:var(--nans-green-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--nans-green-deep)]">
                Featured Event
              </span>
              <h2 className="mt-5 font-display text-3xl md:text-4xl">Congratulations to Dr. George Sipah Yankey</h2>
              <blockquote className="mt-5 border-l-4 border-[color:var(--nans-lime)] pl-4 text-sm italic text-muted-foreground">
                Congratulations on your appointment as Board Chairman for Tema Shipping Yard and Dry-Dock Company Limited.
              </blockquote>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[color:var(--nans-green)]" /><div><p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Event Date</p><p className="font-semibold">January 2026</p></div></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--nans-green)]" /><div><p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Location</p><p className="font-semibold">Tema</p></div></div>
              </div>
              <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--nans-green)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[color:var(--nans-green-deep)]">
                Read more <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Latest updates */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl text-[color:var(--nans-green-deep)] md:text-4xl">LATEST UPDATES</h2>
          <p className="mt-1 text-sm text-muted-foreground">Recent news and media from our regional chapters</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {list.map((s) => (
              <article key={s.title} className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${s.grad} p-5`}>
                  <span className="inline-flex items-center rounded-full bg-[color:var(--nans-lime)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--nans-ink)]">
                    {s.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--nans-green-deep)]">{s.date}</p>
                  <h3 className="mt-2 font-display text-lg leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-1.5">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3].map((n) => (
              <button key={n} className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                n === 1 ? "bg-[color:var(--nans-green)] text-white" : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}>{n}</button>
            ))}
            <span className="px-1 text-muted-foreground">…</span>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-muted-foreground hover:text-foreground">12</button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
