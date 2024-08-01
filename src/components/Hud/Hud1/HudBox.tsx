import React from 'react'
import { motion } from "framer-motion";
import Spinner from './SpinnerStats';

const HudBox: React.FC = () => {
  return (
    <>
      <div className='iconsHu1'>

        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: .1, delay: 1.5 }}
        >
          <Spinner className='spinnerStatsHp' title='hp' />
        </motion.div>


        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: .2, delay: 2.5 }}
        >
          <Spinner className='spinnerStatsMana' title='mana' />

        </motion.div>


      </div>
    </>
  )
}

export default HudBox