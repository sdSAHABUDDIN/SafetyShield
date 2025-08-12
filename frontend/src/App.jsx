import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </main>


    <Footer />
    </div>
  )
}

export default App