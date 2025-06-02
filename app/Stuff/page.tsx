import { Section, Container, Heading, Text } from "@radix-ui/themes";
import MachinesCard from "../Components/machinesCard";

const machines = [
  {
    title: 'Vakuumski usisavač',
    description: 'Visokoučinkovit usisavač za dubinsko čišćenje tepiha i podova u poslovnim prostorima.',
    image: '/images/machines/parquet.jpeg',
  },
  {
    title: 'Stroj za ribanje i čišćenje podova',
    description: 'Automatski riba i suši tvrde podove, idealno za velika područja poput ureda i trgovačkih centara.',
    image: '/images/machines/kriste-with_machine.jpg',
  },
  {
    title: 'Stroj za čišćenje tepiha',
    description: 'Profesionalni stroj za dubinsko čišćenje tepiha i tapeciranog namještaja.',
    image: '/images/machines/sofa_after_clean.jpg',
  },
  {
    title: 'Stroj za čišćenje prozora',
    description: 'Stroj za učinkovito čišćenje prozora i staklenih površina.',
    image: '/images/machines/machine_for_windows.jpeg',
  },
];

export default function StuffPage() {
  return (
    <Section className="py-10 pt-22" style={{ backgroundColor: "#f0f4f8" }}>
      <Container>
        <div className="text-center mb-10">
          <Heading className="text-4xl font-bold text-blue-900">Our Cleaning Equipment</Heading>
          <Text className="text-lg text-gray-600 mt-2">
            We use professional-grade machines to ensure your spaces are spotless.
          </Text>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine, index) => (
            <MachinesCard key={index} {...machine} />
          ))}
        </div>
      </Container>
    </Section>
  );
}