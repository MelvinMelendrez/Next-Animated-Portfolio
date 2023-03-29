import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from "framer-motion";

import TitleName from './titleName';
import HudBox2 from './HudBox2';
import ProjectIcon from './ProjectsIcon';


const Hud1 = () => {
  const router = useRouter();

  return (
    <div className='Hud'>

        <button onClick={() => { router.push('/') }}>Lobby</button>
        
        <div className='imageStatus'>
            
             <motion.div
             className='profileImage' 
             initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
             animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
             transition={{ duration: .2, delay: 2 }}
             style={{ zIndex: 3 }}
             >
                        <Image src='https://cdn.sanity.io/images/ohx8wpby/production/75c4c0d1be63fe27d655ec76d54407dd40080e8e-199x194.png' alt='me' width={150} height={150}  />
            </motion.div>
        
            <div className='statusIcons'>
                <HudBox2/>
            </div>

        </div>

        <div className='titleNameTarget'>
            <motion.div 
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: .2, delay: 1 }}
            style={{ zIndex: 3 }}
            >
                <TitleName/>
            </motion.div>
        </div>

        <div className='textBoxes'>
            <motion.div
                        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                        animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                        transition={{ duration: .2, delay: 2 }}
                        style={{ zIndex: 3 }}
            >
                <ProjectIcon />
            </motion.div>
        </div>

      </div>
  )
}

export default Hud1;

