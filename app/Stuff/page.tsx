import { Section, Container, Heading, Text, Flex } from "@radix-ui/themes";
import MachinesCard from "../Components/machinesCard";
import Link from "next/link";

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
    <>
      <Section className="topSection flex flex-col items-center justify-center min-h-[200px] sm:min-h-[230px] md:min-h-[280px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[400px]">
        <Container>
          <Flex className='row'>
            <Flex className='col col-xs-12'>
              <div className='text-center'>
                <h2 className='font-bold text-4xl sm:text-6xl text-center'>
                  Our stuff
                </h2>
                <ol>
                  <li className='display: inline-block'>
                    <Link href='/' className='font-bold'>Home</Link>
                    <span>/</span>
                  </li>
                  <li className='display: inline-block'>
                    <span className='font-bold'>Stuff</span>
                  </li>
                </ol>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section className="py-10 pt-22" style={{ backgroundColor: "#f2f2f2" }}>
        <Container>
          <div className="text-center mb-10">
            <Heading className="text-3xl sm:text-4xl font-bold text-blue-900">Strojevi/Oprema za čišćenje</Heading>
            <Text className="text-lg text-gray-600 mt-2">
              Koristimo profesionalne strojeve kako bismo osigurali besprijekornu čistoću vaših prostora.
            </Text>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
            {machines.map((machine, index) => (
              <MachinesCard key={index} {...machine} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}