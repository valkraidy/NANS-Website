import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Globe, ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { EyebrowSoft } from "@/components/site/SectionHeader";
import logo from "@/assets/nans-logo.png";
import nana from "@/assets/images/nana.jpg";
import doc from "@/assets/images/doc.jpg";
import Charlotte from "@/assets/images/Charlotte.JPG";
import Isaac from "@/assets/images/Isaac.JPG";
import Gloria from "@/assets/images/Gloria.JPG";
import PRO from "@/assets/images/PRO.JPG";
import Ernest from "@/assets/images/Ernest.JPG";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NANS Ghana" },
      { name: "description", content: "A legacy of unity and progress: NANS bridges tradition and modern academia for Nzema students across Ghana." },
      { property: "og:title", content: "About NANS Ghana" },
      { property: "og:description", content: "Empowering the Nzema student collective." },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { y: "1997", t: "The Foundation", d: "Establishment of the first student coordination council in the Nzema region, uniting diverse educational blocks." },
  { y: "2010", t: "Academic Integration", d: "Launch of the NANS Scholarship Fund, providing vital support for underprivileged undergraduates pursuing higher education." },
  { y: "2026", t: "Vision 2026", d: "Projected completion of the NANS Regional Academic Excellence Hub, a modern center for research and student development." },
];

const LEADERS = [
  { n: "Nana Ainoo Kwagyan III", r: "Patron", p: "0532388934", grad: "from-amber-300 to-amber-600",image:nana },
  { n: "Dr. Clinton Blay", r: "Patron", p: "0545848236",image:doc },
  { n: "-", r: "Patron", p: "0558082643", grad: "from-emerald-300 to-emerald-600" ,},
  
  { n: "Ernesti Whajah", r: "President", p: "0532388934", grad: "from-amber-300 to-amber-600",image:Ernest },
  { n: "Charlotte Annor", r: "Vice President", p: "0545848236", grad: "from-rose-300 to-rose-600",image:Charlotte  },
  { n: "Gloria O. Mensah", r: "Secretary", p: "0558082643", grad: "from-emerald-300 to-emerald-600" ,image:Gloria},
  { n: "Isaac K. Aboagye", r: "Financial Secretary", p: "0538909282", grad: "from-sky-300 to-sky-600" ,image:Isaac},
  { n: "Richard Blay", r: "P.R.O", p: "0552985941", grad: "from-sky-300 to-sky-600" ,image:PRO},
];

function AboutPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-nans-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 md:grid-cols-12 md:px-8 md:pt-12">
          <div className="md:col-span-7">
            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
              Empowering the<br />
              <span className="text-[color:var(--nans-lime)]">Nzema Student</span><br />
              Collective
            </h1>
            <p className="mt-6 max-w-xl text-white/85">
              Dedicated to fostering academic excellence, cultural preservation, and the collective growth of every Nzema student across the globe.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-2xl">
              <img src={logo} alt="NANS emblem" width={512} height={512} className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <EyebrowSoft>Our History</EyebrowSoft>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A Legacy of Unity and Progress</h2>
            <p className="mt-5 text-muted-foreground">
              The National Association of Nzema Students (NANS) serves as a bridge between tradition and the modern academic landscape. Our foundation is built on the collective ambition of students from across the Western Region of Ghana, committed to growth through intellectual and cultural excellence.
            </p>
            <blockquote className="mt-6 rounded-r-lg border-l-4 border-[color:var(--nans-lime)] bg-muted/60 px-5 py-4 text-sm italic text-foreground/80">
              "Nwoma Ma Anyunluhole — Knowledge for Progress remains our guiding light as we navigate the future."
            </blockquote>
          </div>
          <div className="md:col-span-7">
            <div className="relative space-y-5">
              <div className="absolute bottom-2 left-3 top-2 w-px bg-gradient-to-b from-[color:var(--nans-green)] via-[color:var(--nans-lime)] to-[color:var(--nans-green)]" />
              {TIMELINE.map((t) => (
                <div key={t.y} className="relative pl-10">
                  <div className="absolute left-0 top-6 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[color:var(--nans-green)] bg-background">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--nans-lime)]" />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="font-display text-2xl text-[color:var(--nans-green-deep)]">{t.y}</div>
                    <h3 className="mt-1 font-display text-lg">{t.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="font-display text-4xl md:text-5xl">Our Leadership</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[color:var(--nans-green)]" />
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            The dedicated national executives working tirelessly to implement the vision of NANS and support our regional chapters.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERS.map((l) => (
              <div key={l.n} className="rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border">
                <div className="mx-auto mb-4 inline-block rounded-full p-1 ring-2 ring-[color:var(--nans-lime)]">
  <div className="relative h-24 w-24 overflow-hidden rounded-full">
    <img
      src={l.image}
      alt={l.n}
      className="h-full w-full object-cover"
    />
  </div>
</div>

                <h3 className="font-display text-lg">{l.n}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--nans-green-deep)]">{l.r}</p>
                <div className="mt-4 inline-flex rounded-full bg-[color:var(--nans-lime)]/40 px-3 py-1 text-xs font-semibold text-[color:var(--nans-ink)]">
                  {l.p}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {[
            { i: Phone, t: "+233 (0) 532388934", s: "Available Mon-Fri" },
            { i: Mail, t: "nansghana26@gmail.com", s: "Official Communications" },
            { i: Globe, t: "nansghana@_1 (All socials)", s: "Follow Our Journey" },
          ].map(({ i: I, t, s }) => (
            <div key={t} className="flex flex-col items-center text-center">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--nans-green-soft)] text-[color:var(--nans-green-deep)]">
                <I className="h-5 w-5" />
              </div>
              <p className="mt-3 font-semibold text-foreground">{t}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
