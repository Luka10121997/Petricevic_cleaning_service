import CleanerCard from "./cleanerCard";
import majaImage from '@/app/Images/maja_cleaning.jpg'
import kristeImage from '@/app/Images/kriste-with_machine.jpg'


const cleaners = [
  {
    name: 'Maja Petričević',
    role: 'Cleaner Leader',
    image: majaImage
  },
  {
    name: 'Kristijan Petričević',
    role: 'Cleaner Leader',
    image: kristeImage
  }
];

export default function Team() {
  return (
    <div className="bg-blue-900 py-12 px-6 text-white text-center w-full staffBackground">
      <h1 className="text-4xl font-bold mb-2">Expert Cleaners</h1>
      <p className="text-white/70 mb-10 max-w-xl mx-auto">
        It was popularised in the with the release desktop publishing software like versions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10 px-4 mb-20">
        {cleaners.map((cleaner, idx) => (
          <CleanerCard key={idx} {...cleaner} />
        ))}
      </div>
    </div>
  );
}