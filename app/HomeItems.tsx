'use client'
import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'
import homeImage from '@/app/Images/cleaning-service.jpeg'
import girlImage from '@/app/Images/girlCleaner.jpg'
import industrialCleanerImage from '@/app/Images/industrial-cleaning-service-floor-machine-260nw-2420639731.webp'
import friendlyImage from '@/app/Images/medium-shot-people-cleaning-building_23-2150454517.avif'
import Image from 'next/image';
import Link from 'next/link';
import ControlledPage from './Controlled/page';
import IconRowAnimated from './Components/iconsAnimation'


const HomeItems = () => {
  return (
    <>
      <Section className='flex flex-col items-center justify-center h-screen section'>
        <Flex className='headingPosition' direction='column'>
          <Flex>
            <Heading className='text-6xl font-bold text-center space-y-2' style={{ color: 'rgb(19, 40, 126)' }}>Need Cleaning Service?</Heading>
          </Flex>
          <Flex className='mt-5'>
            <Text className='text-2xl font-bold multiline' style={{ color: 'rgb(44, 49, 71)' }}>
              <ul>
                <li className='ml-7'> We are certified company.
                  We provide best cleaning</li>
                <li>services for you,your company, your home and vehicles.</li>
              </ul>
            </Text>
          </Flex>
          <Flex className='btn mt-12'>
            <Link className='btn-theme' href='/About'>
              What we offer
              <i className='arrow right'></i>
            </Link>
          </Flex>
        </Flex>
        <Flex className='imagePosition ml-260'>
          <Image src={homeImage} alt='homeImage' className='w-110 h-90 imageShape' />
        </Flex>
      </Section>
      <Section className='flex flex-col items-center justify-center background'>
        <Container>
          <div className='mb-10'>
            <Text className='text-4xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>
              What can you expect from us ?
            </Text>
          </div>
          <Flex className='flex-container pt-10'>
            <Flex className='w-100 h-100 expectedResultsShape'>
              <div className='ml-30 pt-15'>
                <Image src={girlImage} alt='girlImage' className='w-50 h-50 imageExpectedResultsShape'></Image>
              </div>
              <div className='ml-30'>
                <h2 className='text-2xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>Easy connecting</h2>
              </div>
            </Flex>
            <Flex className='w-100 h-100 expectedResultsShape'>
              <div className='ml-30 pt-15'>
                <Image src={industrialCleanerImage} alt='industrialCleanerImage' className='w-50 h-50 imageExpectedResultsShape'></Image>
              </div>
              <div className='ml-30'>
                <h2 className='text-2xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>Get clean and fresh</h2>
              </div>
            </Flex>
            <Flex className='w-100 h-100 expectedResultsShape'>
              <div className='ml-30 pt-15'>
                <Image src={friendlyImage} alt='friendlyImage' className='w-50 h-50 imageExpectedResultsShape'></Image>
              </div>
              <div className='ml-30'>
                <h2 className='text-2xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>Pleasant and friendly staff</h2>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section className='flex flex-col items-center justify-center'>
        <Container>
          <Flex direction='row' justify='between'>
            <Flex className='mt-1'>
              <Text className='text-3xl font-bold' style={{ color: 'rgb(19, 40, 126)' }}>
                What can we do for you?
              </Text>
            </Flex>
            <ControlledPage />
          </Flex>
        </Container>
      </Section >
      <Section>
        <Container>
          <Flex direction='row'>
            <div className='mt-5 mb-4 text-center'>
              <Text className='text-4xl font-bold pb-7' style={{ color: 'rgb(19, 40, 126)' }}>
                Our targets !
              </Text>
            </div>
            <IconRowAnimated />
          </Flex>
        </Container>
      </Section>
    </>
  )
}

export default HomeItems