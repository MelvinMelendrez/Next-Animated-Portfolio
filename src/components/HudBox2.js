import { Loading } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import { MoonIcon } from "./MoonIcon";

import { motion } from "framer-motion";
import { Grid } from "@nextui-org/react";


import React from 'react'

const HudBox2 = () => {
  return (
    <>
      <div className='iconsHu1'>

      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
        transition={{ duration: .1, delay: 1.5}}
        >
          <Loading color="primary" textColor="primary">
              Full Hp
          </Loading>
      </motion.div>

      <Grid.Container gap={2} css={{ color: "$color" }}>

        <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: .2, delay: 2.5 }}
              >

          <Grid>
            <Avatar squared icon={<MoonIcon size={20} fill="currentColor" className="myMoonIcon"/>} />
          </Grid>

        </motion.div>

      </Grid.Container>

      </div>
    </>
  )
}

export default HudBox2