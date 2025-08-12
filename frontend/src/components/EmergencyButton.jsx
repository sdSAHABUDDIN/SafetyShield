import { motion } from 'framer-motion'
import React from 'react'

const EmergencyButton = ({onPanic}) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}  className="emergency-pulse p-6 rounded-full bg-danger text-white shadow-lg flex items-center justify-center" onClick={onPanic}>
      <div className="text-center">
        <div className="text-lg font-bold">PANIC</div>
        <div className="text-xs">Send Alert</div>
      </div>
    </motion.div>

  )
}

export default EmergencyButton