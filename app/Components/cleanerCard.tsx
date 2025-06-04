import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { Link } from '@radix-ui/themes';

interface CleanerCardProps {
  name: string;
  image: string | StaticImageData;
  role: string;
}

export default function CleanerCard({ name, image, role }: CleanerCardProps) {
  return (
    <div className="bg-blue-900 text-white rounded-t-full pt-1 text-center shadow-lg mt-12 h-fit group transition-all duration-300 flex flex-col items-center max-w-xs">
      <Image
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full border-4 border-white transform transition-transform duration-300 group-hover:scale-150"
      />
      <h3 className="mt-4 font-bold text-lg">{name}</h3>
      <p className="text-sm">{role}</p>
      <div className="flex justify-center gap-4 mt-3">
        <Link href='/About/'>
          <FaInstagram className="hover:text-pink-400 transition-colors duration-300 mb-2" />
        </Link>
        <Link href='/About/'>
          <FaFacebook className="hover:text-blue-400 transition-colors duration-300" />
        </Link>
      </div>
    </div>
  );
}
