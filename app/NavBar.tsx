'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@radix-ui/themes';
import { MobileIcon } from '@radix-ui/react-icons';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import classNames from 'classnames';
import logo from '@/app/Images/logo.jpg';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 left-0 w-full bg-[#f8f9faf7] px-5 shadow-md z-40'>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              className='w-30 h-21 pt-1 pb-1 rounded-full'
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Desktop Contact + Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              className='phoneButton flex items-center gap-2'
              href='tel:+385957210020'
            >
              <MobileIcon className='phoneIcon' color='rgb(19, 40, 126)' />
              +385 95 721 0020
            </Link>
            <Link href='https://www.instagram.com/obrt_za_ciscenje_petricevic?igsh=d2FqeGdtdDQwbThp'>
              <FaInstagram className='hover:text-pink-400 transition-colors duration-300' size={25} />
            </Link>
            <Link href='https://www.facebook.com/profile.php?id=61568585374191'>
              <FaFacebook className='hover:text-blue-400 transition-colors duration-300' size={25} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-blue-900"
          >
            {isMobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg py-6 px-6 space-y-6">
            <NavLinks mobile onLinkClick={() => setMobileMenuOpen(false)} />
            <div className="flex flex-col space-y-3">
              <Link className='text-sm font-semibold text-blue-800' href='tel:+385957210020'>
                📞 +385 95 721 0020
              </Link>
              <div className="flex gap-4 text-blue-800">
                <Link href='https://www.instagram.com/obrt_za_ciscenje_petricevic?igsh=d2FqeGdtdDQwbThp'>
                  <FaInstagram size={22} />
                </Link>
                <Link href='https://www.facebook.com/profile.php?id=61568585374191'>
                  <FaFacebook size={22} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

const NavLinks = ({
  mobile = false,
  onLinkClick,
}: {
  mobile?: boolean;
  onLinkClick?: () => void;
}) => {
  const currentPath = usePathname();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About' },
    { label: 'Services', href: '/Services' },
    { label: 'Contact', href: '/Contact' },
    { label: 'Stuff', href: '/Stuff' },
  ];

  return (
    <ul className={mobile ? 'flex flex-col space-y-2' : 'flex space-x-6'}>
      {links.map((link) => {
        const isActive = currentPath === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={classNames(
                'relative inline-block text-sm font-medium text-gray-700 transition-colors duration-300',
                'hover:text-blue-900',
                {
                  'text-blue-900': isActive,
                }
              )}
            >
              <span
                className={classNames(
                  'before:content-[""] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 before:w-0 hover:before:w-full',
                  {
                    'before:w-full': isActive,
                  }
                )}
              >
                {link.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
