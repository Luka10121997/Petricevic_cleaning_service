import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { Link } from '@radix-ui/themes';

interface CleanerCardProps {
  name: string;
  image: string | StaticImageData;
  role: string;
  number: string;
}

export default function CleanerCard({ name, image, role, number }: CleanerCardProps) {
  return (
    <div className="bg-[#1f3fa0] text-white rounded-t-full pt-1 text-center shadow-lg mt-12 h-fit group flex flex-col justify-center items-center max-w-xs hover:scale-105 transition-transform duration-300 ">
      <Image
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full border-4 border-white transform transition-transform duration-300 group-hover:scale-150"
      />
      <h3 className="mt-4 font-bold text-lg">{name}</h3>
      <p className="text-sm mt-1 centered-paragraph">{role}</p>
      <div className="flex flex-col items-center gap-2 mt-3">
        {/* Prvi red - broj telefona */}
        <Link className='text-sm font-semibold flex items-center gap-1' href={number}>
          📞{number}
        </Link>
        {/* Drugi red - društvene mreže */}
        <div className="flex justify-center gap-4">
          <Link href='https://www.instagram.com/obrt_za_ciscenje_petricevic?igsh=d2FqeGdtdDQwbThp'>
            <FaInstagram className="hover:text-pink-400 transition-colors duration-300 mb-2" />
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=61568585374191'>
            <FaFacebook className="hover:text-blue-400 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
