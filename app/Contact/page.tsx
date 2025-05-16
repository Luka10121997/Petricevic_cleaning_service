import { Section, Container, Flex, Heading } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import Contact from '../Components/contact'
import ContactForm from '../Components/sendEmail'
import LocationPage from '../Components/location'

const ContactPage = () => {
  return (
    <>
      <Section className='flex flex-col items-center justify-center h-screen aboutSection'>
        <Container>
          <Flex className='row'>
            <Flex className='col col-xs-12'>
              <div>
                <h2 className='font-bold text-6xl text-center'>
                  Contact us
                </h2>
                <ol>
                  <li className='display: inline-block'>
                    <Link href='/' className='font-bold'>Home</Link>
                    <span>/</span>
                  </li>
                  <li className='display: inline-block'>
                    <span className='font-bold'>Contact</span>
                  </li>
                </ol>
              </div>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section style={{ height: '1500px' }}>
        <Container>
          <Flex direction='row' gap='2'>
            <Contact />
            <div className='form_position'>
              <Heading className='text-4xl font-bold text-center mb-7' style={{ color: 'rgb(19, 40, 126)' }}>Contact us via our official E-mail</Heading>
              <ContactForm />
            </div>
          </Flex>
        </Container>
      </Section>
      <Section>
        <LocationPage />
      </Section>
    </>
  )
}

export default ContactPage