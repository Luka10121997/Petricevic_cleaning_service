'use client';
import { Container } from '@radix-ui/themes';
import logo from '@/app/Images/white_logo.png';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#0b2c82] text-white py-12 px-6 md:px-16'>
      <Container className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-18'>
          <div className='flex flex-col items-center md:items-start'>
            <h1 className="text-xl font-bold text-white">Petricevic</h1>
            <p className="text-sm text-gray-300 whitespace-nowrap">Best Cleaning Service</p>
            <div className='pt-3'>
              <Link href='/'>
                <Image src={logo} alt='logo' className='w-32 h-full border-2 profileImage'
                />
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h2 className="text-lg font-semibold mb-4 whitespace-nowrap">Quick Link</h2>
            <NavLinks />
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h2 className="text-lg font-semibold mb-4 whitespace-nowrap">Services</h2>
            <ServicesLinks />
          </div>
        </div>
      </Container>

      <Container>
        <div className="text-center text-sm text-gray-300 mt-6 p-8" style={{ backgroundColor: 'rgb(25, 47, 139)' }}>
          <p>&copy; {new Date().getFullYear()} Petricevic. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

const NavLinks = () => {
  const links = [
    { label: 'Naslovnica', href: '/' },
    { label: 'O nama', href: '/About/' },
    { label: 'Usluge', href: '/Services/' },
    { label: 'Contact', href: '/Contact/' },
    { label: 'Oprema', href: '/Stuff/' },
  ];

  return (
    <ul className="space-y-2 text-sm text-gray-300">
      {links.map(link => (
        <li key={link.href}>
          <Link
            className='text-gray-300 hover:text-yellow-300 transition-colors duration-200'
            href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ServicesLinks = () => {
  const links = [
    { label: 'Čišćenje stanova i kuća', href: '/Services/house-cleaning' },
    { label: 'Dubinsko čišćenje namještaja i tepiha', href: '/Services/couch-cleaning' },
    { label: 'Uredsko čišćenje', href: '/Services/office-cleaning' },
    { label: 'Dubinsko čišćenje automobila', href: '/Services/car-cleaning' },
    { label: 'Generalno čišćenje nakon renovacija', href: '/Services/renovation-cleaning' },
    { label: 'Dezinfekcija prostora', href: '/Services/disinfection' }
  ];

  return (
    <ul className="space-y-2 text-sm text-gray-300">
      {links.map(link => (
        <li key={link.href} className="whitespace-nowrap">
          <Link
            className='text-gray-300 hover:text-yellow-300 transition-colors duration-200'
            href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
