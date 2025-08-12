import React from 'react'
import {motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <section className='bg-white'>
      <div  className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-primary">SafetyShield — Your personal safety companion</h1>
        <p className="mt-4 text-gray-600">Discreet wearable device + real-time tracking + automated alerts. Built for fast help.</p>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="w-full h-64 rounded-xl bg-gradient-to-tr from-blue-100 to-white flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-semibold">Device Status: <span className="text-green-600">Online</span></div>
              <div className="text-sm text-gray-500">Live location & health monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection