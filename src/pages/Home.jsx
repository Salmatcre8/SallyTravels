import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Featured from '../components/Featured'
import Services from '../components/Services'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <div>
      <Hero />
      <Search />
      <Featured />
      <Services />
      <CTA />
    </div>
  )
}
