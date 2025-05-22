// app/data/servicesData.ts

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  link: string;
}

export const services: ServiceData[] = [
  {
    id: 1,
    slug: "house-cleaning",
    title: "Čišćenje stanova i kuća",
    description: "Redovno ili dubinsko čišćenje svih prostorija vašeg doma.",
    link: "/Services/house-cleaning",
  },
  {
    id: 2,
    slug: "couch-cleaning",
    title: "Dubinsko čišćenje namještaja i tepiha",
    description: "Uklanjanje mrlja, alergena i neugodnih mirisa profesionalnim strojevima.",
    link: "/Services/couch-cleaning",
  },
  {
    id: 3,
    slug: "office-cleaning",
    title: "Uredsko čišćenje",
    description: "Pouzdano i diskretno čišćenje uredskih prostora, po dogovoru.",
    link: "/Services/office-cleaning",
  },
  {
    id: 4,
    slug: "car-cleaning",
    title: "Čišćenje automobila",
    description: "Detaljno pranje unutrašnjosti vašeg vozila s parnim čistačima.",
    link: "/Services/car-cleaning",
  },
  {
    id: 5,
    slug: "renovation-cleaning",
    title: "Generalno čišćenje nakon renovacija",
    description: "Uklanjanje građevinske prašine, ostataka i temeljito čišćenje nakon radova.",
    link: "/Services/renovation-cleaning",
  },
  {
    id: 6,
    slug: "disinfection",
    title: "Dezinfekcija prostora",
    description: "Ekološka dezinfekcija površina protiv virusa, bakterija i alergena.",
    link: "/Services/disinfection",
  },
];
