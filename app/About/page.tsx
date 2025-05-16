'use client';
import { Container, Flex, Section } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import menImage from '@/app/Images/men-cleaning.jpeg'
import Team from '../Components/cleaners';

const AboutPage = () => {
  return (
    <>
      <Section className='flex flex-col items-center justify-center h-screen aboutSection'>
        <Container>
          <Flex className='row'>
            <Flex className='col col-xs-12'>
              <div>
                <h2 className='font-bold text-6xl text-center'>
                  About us
                </h2>
                <ol>
                  <li className='display: inline-block'>
                    <Link href='/' className='font-bold'>Home</Link>
                    <span>/</span>
                  </li>
                  <li className='display: inline-block'>
                    <span className='font-bold'>About</span>
                  </li>
                </ol>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section style={{ backgroundColor: "#eeeeee" }}>
        <Container>
          <Flex direction='row' className='flex-container pt-10 w-600 h-1000'>
            <div className='ml-250 pt-15'>
              <Image src={menImage} alt='menImage' className='w-150 h-140 rounded-full' />
            </div>
            <Flex className='w-120 h-120'>
              <div className='pt-14'>
                <h1 className='text-3xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>The best cleaning service in city</h1>
              </div>
              <div className='pt-2 flex flex-wrap'>
                <p className='text-1xl font-Mulish'>
                  We are cleaning service Petričević opened in 2024. We as young company are providing best
                  cleaning experience with professional,modern machines and very kind staff.
                  Our customers are very satisfied and they recommend us everywhere.
                </p>
                <p className='text-1xl font-medium italic pt-2'>
                  Let&apos;s connect and make your home, car or apartment happy and clean place.
                </p>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex>
            <Team />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage