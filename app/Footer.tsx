'use client';
import { Container, Flex } from '@radix-ui/themes'
import logo from '@/app/Images/logo.jpg'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const Footer = () => {
  return (
    <footer className='bg-[#0b2c82] text-white py-12 px-6 md:px-16'>
      <Container className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
        <Flex direction='row' className='display: inline-flex mb-4 footerFlex-container' align='center' wrap='nowrap' gap='5'>
          <Flex className='footerFlex-item'>
            <div>
              <h1 className="text-xl font-bold text-white">Petricevic</h1>
              <p className="text-sm text-gray-300 text-nowrap">Best Cleaning Service</p>
            </div>
            <div className='pt-3'>
              <Image src={logo} alt='logo' className='w-30 h-22 profileImage' />
            </div>
          </Flex>
          <Flex flexGrow='0' flexShrink='0' flexBasis='auto' className='footerFlex-item'>
            <h2 className="text-lg font-semibold mb-4 text-nowrap">Quick Link</h2>
            <NavLinks />
          </Flex>
          <Flex flexGrow='0' flexShrink='0' flexBasis='auto' className='footerFlex-item'>
            <h2 className="text-lg font-semibold mb-4 text-nowrap">Services</h2>
            <ServicesLinks />
          </Flex>
        </Flex>
      </Container>
      <Container>
        <Flex direction='row' className='copyright'>
          <div className="text-center text-sm text-gray-300 mt-6 p-8" style={{ backgroundColor: 'rgb(25, 47, 139)' }}>
            <p>&copy; {new Date().getFullYear()} Petricevic. All rights reserved.</p>
          </div>
        </Flex>
      </Container>
    </footer>
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
    <ul className="space-y-2 text-sm text-gray-300">
      {links.map(link =>
        <li key={link.href}>
          <Link
            key={link.href}
            className={classNames({
              "nav-link": true,
              '!text-zinc-1100': link.href === currentPath,
            })} href={link.href}>{link.label}</Link></li>)}
    </ul>
  )
}

const ServicesLinks = () => {

  const links = [
    { label: 'Čišćenje stanova i kuća', href: '/Services/house-cleaning' },
    { label: 'Dubinsko čišćenje namještaja i tepiha', href: '/Services/couch-cleaning' },
    { label: 'Uredsko čišćenje', href: '/Services/office-cleaning' },
    { label: 'Dubinsko čišćenje automobila', href: '/Services/car-cleaning' },
    { label: 'Generalno čišćenje nakon renovacija', href: '/Services/renovation-cleaning' },
    { label: 'Dezinfekcija prostora', href: '/Services/disinfection' }
  ]

  const currentPath = usePathname()
  return (
    <ul className="space-y-2 text-sm text-gray-300">
      {links.map(link =>
        <li key={link.href} className="whitespace-nowrap">
          <Link
            key={link.href}
            className={classNames({
              "nav-link": true,
              '!text-zinc-1100 text-nowrap': link.href === currentPath,
            })} href={link.href}>{link.label}</Link></li>)}
    </ul>
  )
}

export default Footer