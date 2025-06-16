import CleanerCard from "./cleanerCard";
import majaImage from '@/app/Images/maja_cleaning.jpg'
import kristeImage from '@/app/Images/kriste-with_machine.jpg'


const cleaners = [
  {
    name: 'Maja Petričević',
    role: 'Specijalist za čišćenje',
    image: majaImage,
    number: '+385 993 790 170'
  },
  {
    name: 'Kristijan Petričević',
    role: 'Specijalist za čišćenje',
    image: kristeImage,
    number: '+385 957 210 020'
  }
];

export default function Team() {
  return (
    <div className="bg-blue-900 py-12 px-6 text-white text-center w-full staffBackground">
      <h1 className="text-4xl font-bold mb-2">Stručnjaci za čišćenje</h1>
      <p className="text-white/70 mb-10 max-w-xl mx-auto">
        Vaši pouzdani partneri za čistoću doma i ureda.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10 px-4 mb-20 fade-in">
        {cleaners.map((cleaner, idx) => (
          <CleanerCard key={idx} {...cleaner} />
        ))}
      </div>
    </div>
  );
}