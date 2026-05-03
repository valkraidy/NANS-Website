import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Flag, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Eyebrow } from "@/components/site/SectionHeader";
import logo from "@/assets/nans-logo.png";

import card1 from "@/assets/images/card1.jpeg";
import card2 from "@/assets/images/card2.JPG";
import card3 from "@/assets/images/card3.JPG";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NANS Ghana — Uniting Nzema Students Across Ghana" },
      { name: "description", content: "The National Association of Nzema Students advocating, connecting, and empowering students of Nzema heritage through education and cultural pride." },
      { property: "og:title", content: "NANS Ghana — Uniting Nzema Students" },
      { property: "og:description", content: "Empowering the Nzema student collective through education, unity, and heritage." },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { v: "500+", l: "Members" },
  { v: "12", l: "Chapters" },
  { v: "2005", l: "Est. Year" },
  { v: "16", l: "Regions" },
];

const FOCUS = ["Advocacy", "Skill Development", "Heritage Preservation", "Networking", "Scholarships", "Mentorship"];

const UPDATES = [

  { tag: "NEWS",
     date: "April 2026",
      title: "NANS Membership Card Registration",
       body: "The NANS Ghana executives has rolled out NANS Membership Card Registration.", 
        image: card1,},

  { tag: "EVENT", date: "March 2026", title: "Congratulations to Dr. George Sipah Yankey", body: "NANS congratulates Dr. George Sipah Yankey on his appointment as Board Chairman for Tema Shipyard." ,image: card2,},
  { tag: "NEWS", date: "Oct 10, 2025", title: "NANS Industrial Trip to Adamus", body: "NANS is proud to announce the upcoming industrial trip to Adamus Ghana.",image:card3,},

];

function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-nans-hero relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-16 md:grid-cols-12 md:px-8 md:pt-20">
          <div className="md:col-span-7">
            <Eyebrow>Empowering Progress</Eyebrow>
            <h1 className="mt-6 text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
              Uniting Nzema<br />
              Students <span className="text-[color:var(--nans-lime)]">Across<br />Ghana</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              The National Association of Nzema Students advocating, connecting, and empowering students of Nzema heritage through education and cultural pride.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/membership" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--nans-lime)] px-6 py-3 text-sm font-bold text-[color:var(--nans-ink)] shadow-lg transition-transform hover:scale-[1.02]">
                Join NANS Today <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="mx-auto max-w-sm rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 ring-1 ring-black/5">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white">
                <img src={logo} alt="NANS emblem" width={512} height={512} className="h-full w-full object-contain" />
              </div>
              <p className="mt-5 text-center font-display text-2xl text-[color:var(--nans-green-deep)]">Nwoma Ma Anyunluhole</p>
              <p className="mt-1 text-center text-xs italic text-muted-foreground">"Education for Progress"</p>
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="mx-auto -mb-12 max-w-6xl translate-y-12 px-5 md:px-8">
          <div className="grid grid-cols-2 divide-x divide-border rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="px-4 text-center">
                <div className="font-display text-3xl text-[color:var(--nans-green-deep)] md:text-4xl">{s.v}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="bg-background pb-24 pt-32 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-4xl md:text-5xl">Our Foundation</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We are dedicated to building a sustainable network of intellectuals who are deeply rooted in their heritage while excelling in global academic standards.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { i: Flag, t: "Our Mission", d: "To foster unity among Nzema students, promote the rich cultural values of the Nzema people, and provide a support system for academic excellence." },
              { i: Eye, t: "Our Vision", d: "To be the foremost student organization in Ghana, producing world-class leaders who are committed to the socioeconomic development of the Nzema community." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--nans-green)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {FOCUS.map((f) => (
              <span key={f} className="rounded-full bg-card px-4 py-2 text-sm font-semibold text-[color:var(--nans-green-deep)] shadow-sm ring-1 ring-border">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">Latest Updates</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">Stay updated with activities, events, and important notices from our student bodies across various institutions.</p>
            </div>
            <Link to="/news" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[color:var(--nans-green-deep)] hover:underline md:inline-flex">
              View All Stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {UPDATES.map((u) => (
              <article key={u.title} className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-lg">

                <div className={`relative aspect-[4/3] bg-gradient-to-br p-6`}>
                 <img
                  src={u.image}
     
      className="absolute inset-0 h-full w-full object-cover"
    />
               

                  <span className="inline-flex items-center rounded-full bg-[color:var(--nans-lime)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--nans-ink)]">
                    {u.tag}
                  </span>
                  <Sparkles className="absolute bottom-4 right-4 h-16 w-16 text-white/15" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--nans-green-deep)]">{u.date}</p>
                  <h3 className="mt-2 font-display text-lg leading-snug">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-nans-hero relative overflow-hidden rounded-3xl px-8 py-12 text-white md:px-14 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="mx-auto max-w-[220px] rounded-2xl bg-white p-4 shadow-xl">
                  <img src={logo} alt="" width={256} height={256} className="h-full w-full object-contain" loading="lazy" />
                </div>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-4xl md:text-5xl">Ready to lead the future?</h2>
                <p className="mt-4 max-w-xl text-white/85">
                  Join a community that values your heritage as much as your potential. Membership is open to all students of Nzema descent.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/membership" className="rounded-full bg-[color:var(--nans-lime)] px-6 py-3 text-sm font-bold text-[color:var(--nans-ink)] hover:brightness-105">
                    Register Now
                  </Link>
                  <a href="mailto:nansghana26@gmail.com" className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                    Contact Secretary
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
