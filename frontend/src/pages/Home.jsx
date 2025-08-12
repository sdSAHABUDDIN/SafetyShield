import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import FeatureGrid from '../components/FeatureGrid'
import TrendingSection from '../components/Product'
import Footer from '../components/UpperFooter'
import Hero from '../components/HeroTwoSection'
import Feature from '../components/Feature'

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <Hero />
      <section className="container mx-auto px-4 py-12">
      <Feature />
      </section>
      <FeatureGrid />
      <TrendingSection />
      <Footer />
    </div>
  )
}

export default Home