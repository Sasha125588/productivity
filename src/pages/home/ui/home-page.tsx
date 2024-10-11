import { Customers } from '@/features/customers'
import {Header} from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import React from 'react'

export default function HomePage() {
  return (
    <div className='text-3xl'>
      <Header />
      <Hero />
      <Customers />
    </div>
  )
}

