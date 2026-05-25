import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Download, ExternalLink, FileText, Link2, SearchX } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Eyebrow } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — NANS Ghana" },
      { name: "description", content: "Official documents, application forms, and learning materials for Nzema students." },
      { property: "og:title", content: "NANS Resources & Archive" },
      { property: "og:description", content: "Constitution, scholarships, and academic resources." },
    ],
  }),
  component: ResourcesPage,
});

type Kind = "pdf" | "doc" | "link";
type Resource = {
  kind: Kind;
  size?: string;
  title: string;
  body: string;
  link: string;
};


const RESOURCES: Resource[] = [
  {
    kind: "pdf",
    size: "2.4 MB",
    title: "Constitution of NANS 2024",
    body: "Official governing document outlining the mission, rules, and structures of the National Association of Nzema Students.",
    link: "https://drive.google.com/drive/folders/1McHarSrnbhFdWHoVZKXFmxXS5IngxKk9?usp=drive_link",
  },

  {
    kind: "doc",
    size: "450 KB",
    title: "Membership Application Form",
    body: "Editable document for new students wishing to register with their local and national NANS chapters.",
    link: "https://drive.google.com/drive/folders/1McHarSrnbhFdWHoVZKXFmxXS5IngxKk9?usp=drive_link",
  },

  {
    kind: "link",
    title: "Nzema History Portal",
    body: "An external educational archive focused on the cultural heritage and history of the Nzema people.",
    link: "https://drive.google.com/drive/folders/1McHarSrnbhFdWHoVZKXFmxXS5IngxKk9?usp=drive_link",
  },

  {
    kind: "pdf",
    size: "1.1 MB",
    title: "Scholarship Guide 2024",
    body: "A comprehensive guide on available bursaries and financial aid for Nzema students in tertiary institutions.",
    link: "https://drive.google.com/drive/folders/1McHarSrnbhFdWHoVZKXFmxXS5IngxKk9?usp=drive_link",
  },

  {
    kind: "doc",
    size: "120 KB",
    title: "Event Proposal Template",
    body: "Standardized template for student leaders to propose new academic or cultural events for review.",
    link: "https://drive.google.com/drive/folders/1McHarSrnbhFdWHoVZKXFmxXS5IngxKk9?usp=drive_link",
  },

  {
    kind: "pdf",
    size: "3.8 MB",
    title: "Academic Excellence Report",
    body: "Yearly overview of student achievements and academic progress within the Nzema community.",
    link: "https://drive.google.com/drive/folders/1McHarSrnbhFdWHoVZKXFmxXS5IngxKk9?usp=drive_link",
  },
];

const TABS = ["All Resources", "Documents", "External Links"] as const;
type Tab = typeof TABS[number];

function ResourcesPage() {
  const [tab, setTab] = useState<Tab>("All Resources");
  const list = RESOURCES.filter((r) => {
    if (tab === "All Resources") return true;
    if (tab === "Documents") return r.kind !== "link";
    return r.kind === "link";
  });

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-nans-hero text-white">
        <div className="pointer-events-none absolute inset-0 opacity-15" style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <Eyebrow>Archive & Knowledge</Eyebrow>
          <h1 className="mt-6 font-display text-6xl leading-none md:text-8xl">Resources.</h1>
          <p className="mt-6 max-w-xl text-white/85">
            Access official documents, application forms, and curated learning materials designed to support Nzema students in their academic journey.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 md:px-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative shrink-0 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                tab === t ? "text-[color:var(--nans-green-deep)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
              {tab === t && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-[color:var(--nans-green)]" />}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((r) => <ResourceCard key={r.title} r={r} />)}
          </div>

          <div className="mx-auto mt-20 max-w-md text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <SearchX className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-4 font-display text-2xl">No specific results?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We are constantly updating our archive. If you can't find a specific form or document, please reach out to the communications department.
            </p>
            <a href="mailto:nansghana26@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--nans-green-deep)] hover:underline">
              Request a Resource <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ResourceCard({ r }: { r: Resource }) {
  const meta = {
    pdf:  { icon: FileText, tint: "bg-rose-100 text-rose-700",     btn: "Download PDF", btnIcon: Download,    label: r.size ?? "" },
    doc:  { icon: FileText, tint: "bg-sky-100 text-sky-700",       btn: "Download Doc", btnIcon: Download,    label: r.size ?? "" },
    link: { icon: Link2,    tint: "bg-[color:var(--nans-green-soft)] text-[color:var(--nans-green-deep)]", btn: "Open Link",    btnIcon: ExternalLink, label: "External" },
  }[r.kind];
  const Icon = meta.icon;
  const Btn = meta.btnIcon;

  return (
    <article className="flex flex-col rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${meta.tint}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{meta.label}</span>
      </div>
      <h3 className="mt-5 font-display text-lg leading-snug">{r.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.body}</p>
      <a
  href={r.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--nans-green)] py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--nans-green-deep)] transition-colors hover:bg-[color:var(--nans-green-soft)]"
>
  {meta.btn} <Btn className="h-3.5 w-3.5" />
</a>
    </article>
  );
}
