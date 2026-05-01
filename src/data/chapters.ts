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
  { slug: "ug", name: "University of Ghana Chapter", shortName: "UG-NANS", region: "Greater Accra Region", location: "Legon, Accra", president: "-", members: 124, events: 8,
    leadership: [{ name: "-", role: "Chapter President",level:''}] },

  { slug: "umat", name: "UMaT Chapter", shortName: "UMaT", region: "Western Region", location: "Tarkwa", president: "Ernest Whajah", members: 92, events: 6,
    leadership: [{ name: "Ernest Whajah", role: "Chapter President", level: "0532388934" }] },
  { slug: "uew", name: "UEW Chapter", shortName: "UEW", region: "Central Region", location: "Winneba", president: "Saudatu Akasi Ibrahim", members: 78, events: 5,
    leadership: [{ name: "Saudatu Akasi Ibrahim", role: "Chapter President", level: "0536180510" }] },
  { slug: "usted", name: "USTED Chapter", shortName: "USTED", region: "Ashanti Region", location: "Kumasi", president: "-", members: 54, events: 4, leadership: [] },
  { slug: "uew-aj", name: "UEW Chapter", shortName: "UEW-AJ", region: "Central Region", location: "Adjumako", president: "Alex Ninge", members: 41, events: 3, leadership: [] },
  { slug: "atu", name: "ATU Chapter", shortName: "ATU", region: "Greater Accra Region", location: "Accra", president: "-", members: 67, events: 4, leadership: [] },
  { slug: "ttu", name: "TTU Chapter", shortName: "TTU", region: "Western Region", location: "Takoradi", president: "Nena Adwoba Anyimiah", members: 88, events: 5, leadership: [] },
  { slug: "kstu", name: "KsTU Chapter", shortName: "KsTU", region: "Ashanti Region", location: "Kumasi", president: "-", members: 49, events: 3, leadership: [] },
  { slug: "cctu", name: "CCTU Chapter", shortName: "CCTU", region: "Central Region", location: "Cape Coast", president: "-", members: 36, events: 2, leadership: [] },
  { slug: "uenr", name: "UENR Chapter", shortName: "UENR", region: "Bono Region", location: "Sunyani", president: "Akosey Ezra", members: 28, events: 2,
     leadership: [{ name: "Akosey Ezra", role: "Chapter President", level: "0533289089" }]},
  { slug: "asanta-nmtc", name: "Asanta NMTC Chapter", shortName: "Asanta NMTC", region: "Western Region", location: "Asanta", president: "-", members: 22, events: 2, leadership: [] },
  { slug: "knust", name: "KNUST Chapter", shortName: "KNUST", region: "Ashanti Region", location: "Kumasi, Ashanti", president: "Abigail Nyameke", members: 71, events: 5, leadership: [] },
  { slug: "esiama-nmtc", name: "Esiama NMTC Chapter", shortName: "Esiama NMTC", region: "Western Region", location: "Esiama", president: "Justice Kojo Erzuah", members: 24, events: 2, leadership: [] },
  { slug: "ucc", name: "UCC Chapter", shortName: "UCC", region: "Central Region", location: "Cape Coast, Central", president: "-", members: 58, events: 4, leadership: [] },
  { slug: "utas", name: "UTAS Chapter", shortName: "UTAS", region: "Upper East Region", location: "Navrongo", president: "-", members: 19, events: 1, leadership: [] },
  { slug: "usted-am", name: "USTED Chapter", shortName: "USTED-AM", region: "Central Region", location: "Asante Mampong", president: "-", members: 26, events: 2, leadership: [] },
  { slug: "hcce", name: "HCCE Chapter", shortName: "HCCE", region: "Western Region", location: "Sekondi", president: "-", members: 21, events: 2, leadership: [] },
  { slug: "umat-essikado", name: "UMaT Chapter", shortName: "UMaT-Essikado", region: "Western Region", location: "Essikado", president: "Enu Livinance", members: 18, events: 1, featured: true,
     leadership:  [{ name: "Enu Livinance", role: "Chapter President", level: "0531595867" }] },
  { slug: "unimac", name: "UNiMAC", shortName: "UNiMAC", region: "Greater Accra Region", location: "Accra", president: "-", members: 23, events: 2, leadership: [] },
];

export const REGIONS = ["All", "Greater Accra Region", "Western Region", "Central Region", "Ashanti Region", "Bono Region", "Upper East Region"];
