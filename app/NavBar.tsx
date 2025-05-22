'use client'
import React from 'react'
import { Container, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import logo from '@/app/Images/logo.jpg'
import Image from 'next/image';
import { MobileIcon } from '@radix-ui/react-icons';
import { FaFacebook, FaInstagram } from 'react-icons/fa';


const NavBar = () => {
  return (
    <nav className='border-b mb-5 border-spacing-10 px-5 py-3' style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Flex align="center" gap="3" className='display: inline-flex space-x-4'>
          <Flex>
            <Link href='/'>
              <Image src={logo} alt='logo' className='w-27 h-22 profileImage' />
            </Link>
          </Flex>
          <Flex justify="between" align="center" gap="3" className='pt-4'>
            <NavLinks />
          </Flex>
          <Flex className='ml-6 pt-4'>
            <Link className='phoneButton' href='tel:+385957210020'>
              <i>
                <MobileIcon fontSize='32px' fontStyle='normal' className='phoneIcon' color='rgb(19, 40, 126)' />
              </i>
              <span> Call us</span>
              +385 95 721 0020
            </Link>
          </Flex>
          <Link href='https://www.instagram.com/obrt_za_ciscenje_petricevic?igsh=d2FqeGdtdDQwbThp' className='pt-4'>
            <FaInstagram size={30} />
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=61568585374191' className='pt-4'>
            <FaFacebook size={30} />
          </Link>
        </Flex>
      </Container>
    </nav>
  )
}

const NavLinks = () => {

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About/' },
    { label: 'Services', href: '/Services/' },
    { label: 'Contact', href: '/Contact/' },
  ]

  const currentPath = usePathname()
  return (
    <ul className='flex space-x-6'>
      {links.map(link =>
        <li key={link.href}>
          <Link
            key={link.href}
            className={classNames({
              "nav-link": true,
              '!text-zinc-900': link.href === currentPath,
            })} href={link.href}>{link.label}</Link></li>)}
    </ul>
  )
}


export default NavBar