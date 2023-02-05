"use client";

import Image from 'next/image'
import {BsInstagram} from 'react-icons/bs'

//import motion
import { motion } from 'framer-motion'

//My components
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Omnie from '@/components/Omnie';
import Form from '@/components/Form';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Hero/>
      <Portfolio/>
      <Omnie/>
      <Form/>
    </main>
  )
}

