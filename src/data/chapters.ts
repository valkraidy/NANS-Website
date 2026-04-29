export type Chapter = {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  location: string;
  president: string;
  members: number;
  events: number;
  featured?: boolean;
  leadership: { name: string; role: string; level: string }[];
};

export const CHAPTERS: Chapter[] = [
  { slug: "ug", name: "University of Ghana Chapter", shortName: "UG-NANS", region: "Greater Accra Region", location: "Legon, Accra", president: "Emanuel Yankey", members: 124, events: 8,
    leadership: [
      { name: "Emanuel Yankey", role: "Chapter President", level: "Level 400 | Political Science" },
      { name: "Mercy Ndidi", role: "General Secretary", level: "Level 300 | Law" },
    ] },
  { slug: "umat", name: "UMaT Chapter", shortName: "UMaT", region: "Western Region", location: "Tarkwa", president: "Emanuel Yankey", members: 92, events: 6,
    leadership: [{ name: "Emanuel Yankey", role: "Chapter President", level: "Level 300 | Mining Eng." }] },
  { slug: "uew", name: "UEW Chapter", shortName: "UEW", region: "Central Region", location: "Winneba", president: "Emanuel Yankey", members: 78, events: 5,
    leadership: [{ name: "Emanuel Yankey", role: "Chapter President", level: "Level 400 | Education" }] },
  { slug: "usted", name: "USTED Chapter", shortName: "USTED", region: "Ashanti Region", location: "Kumasi", president: "Emanuel Yankey", members: 54, events: 4, leadership: [] },
  { slug: "uew-aj", name: "UEW Chapter", shortName: "UEW-AJ", region: "Central Region", location: "Adjumako", president: "Emanuel Yankey", members: 41, events: 3, leadership: [] },
  { slug: "atu", name: "ATU Chapter", shortName: "ATU", region: "Greater Accra Region", location: "Accra", president: "Emanuel Yankey", members: 67, events: 4, leadership: [] },
  { slug: "ttu", name: "TTU Chapter", shortName: "TTU", region: "Western Region", location: "Takoradi", president: "Emanuel Yankey", members: 88, events: 5, leadership: [] },
  { slug: "kstu", name: "KsTU Chapter", shortName: "KsTU", region: "Ashanti Region", location: "Kumasi", president: "Emanuel Yankey", members: 49, events: 3, leadership: [] },
  { slug: "cctu", name: "CCTU Chapter", shortName: "CCTU", region: "Central Region", location: "Cape Coast", president: "Emanuel Yankey", members: 36, events: 2, leadership: [] },
  { slug: "uenr", name: "UENR Chapter", shortName: "UENR", region: "Bono Region", location: "Sunyani", president: "Emanuel Yankey", members: 28, events: 2, leadership: [] },
  { slug: "asanta-nmtc", name: "Asanta NMTC Chapter", shortName: "Asanta NMTC", region: "Western Region", location: "Asanta", president: "Emanuel Yankey", members: 22, events: 2, leadership: [] },
  { slug: "knust", name: "KNUST Chapter", shortName: "KNUST", region: "Ashanti Region", location: "Kumasi, Ashanti", president: "Abigail Nyameke", members: 71, events: 5, leadership: [] },
  { slug: "esiama-nmtc", name: "Esiama NMTC Chapter", shortName: "Esiama NMTC", region: "Western Region", location: "Esiama", president: "Justice Kojo Erzuah", members: 24, events: 2, leadership: [] },
  { slug: "ucc", name: "UCC Chapter", shortName: "UCC", region: "Central Region", location: "Cape Coast, Central", president: "Sarah Ackah", members: 58, events: 4, leadership: [] },
  { slug: "utas", name: "UTAS Chapter", shortName: "UTAS", region: "Upper East Region", location: "Navrongo", president: "Sarah Ackah", members: 19, events: 1, leadership: [] },
  { slug: "usted-am", name: "USTED Chapter", shortName: "USTED-AM", region: "Central Region", location: "Asante Mampong", president: "Sarah Ackah", members: 26, events: 2, leadership: [] },
  { slug: "hcce", name: "HCCE Chapter", shortName: "HCCE", region: "Western Region", location: "Sekondi", president: "Sarah Ackah", members: 21, events: 2, leadership: [] },
  { slug: "umat-essikado", name: "UMaT Chapter", shortName: "UMaT-Essikado", region: "Western Region", location: "Essikado", president: "Kwesi Amissah", members: 18, events: 1, featured: true, leadership: [] },
  { slug: "unimac", name: "UNiMAC", shortName: "UNiMAC", region: "Greater Accra Region", location: "Accra", president: "Ebenezer Amihere", members: 23, events: 2, leadership: [] },
];

export const REGIONS = ["All", "Greater Accra Region", "Western Region", "Central Region", "Ashanti Region", "Bono Region", "Upper East Region"];
