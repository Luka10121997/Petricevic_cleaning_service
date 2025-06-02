export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  link: string;
  features?: string[];
  price?: string;
}

export const services: ServiceData[] = [
  {
    id: 1,
    slug: "house-cleaning",
    title: "Čišćenje stanova i kuća",
    description: "Redovno ili dubinsko čišćenje svih prostorija vašeg doma.",
    link: "/Services/house-cleaning",
    features: [
      "Čišćenje podova i površina",
      "Čišćenje kuhinjskih aparata, pećnica i ostalih elemenata",
      "Dezinficiranje kuhinjskih površina",
      "Pranje kupaonice i WC-a",
      "Čišćenje prozora i staklenih površina"
    ],
    price: "50"
  },
  {
    id: 2,
    slug: "couch-cleaning",
    title: "Dubinsko čišćenje namještaja i tepiha",
    description: "Uklanjanje mrlja, alergena i neugodnih mirisa profesionalnim strojevima.",
    link: "/Services/couch-cleaning",
    features: [
      "Čišćenje garnitura, fotelja, stolica, madraca i kreveta.",
      "Uklanjanje duboko usađene prljavštine, prašine, dlaka i pijeska.",
      "Koristimo profesionalne strojeve koji ispiru i usisavaju sredstvo s vodom.",
      "Brže sušenje i bolja učinkovitost od klasičnih metoda.",
      "Uklanjanje mrlja, mirisa i bakterija.",
      "Sušenje u roku nekoliko sati zahvaljujući snažnim usisivačima i ventilaciji.",
      "Tapecirani elementi izgledaju kao novi."
    ],
    price: "100"
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
    features: [
      "Usisavanje sjedala, podova i prtljažnika",
      "Dubinsko čišćenje tapeciranih površina",
      "Pranje i dezinfekcija plastičnih i kožnih elemenata",
      "Čišćenje i tretiranje ventilacijskog sustava",
      "Uklanjanje neugodnih mirisa i bakterija",
      "Parno čišćenje teško dostupnih mjesta",
      "Antibakterijsko tretiranje volana, ručki i komandi",
      "Pranje i poliranje staklenih površina iznutra",
      "Vanjsko pranje karoserije bez ogrebotina",
      "Čišćenje felgi i blatobrana",
      "Nanošenje zaštitnog sloja za lak i plastiku",
      "Poliranje svjetala i retrovizora",
      "Brzo sušenje interijera snažnim ventilatorima"
    ],
    price: "100"
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
