import { Loading } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import { MoonIcon } from "./MoonIcon";


import { Grid } from "@nextui-org/react";


import React from 'react'

const HudBox2 = () => {
  return (
    <>
    <div>

        <Loading color="error" textColor="error">
            Low HP
        </Loading>
    </div>

        <div>
        <Grid.Container gap={2} css={{ color: "$color" }}>

      <Grid>
        <Avatar squared icon={<MoonIcon size={20} fill="currentColor" className="myMoonIcon"/>} />
      </Grid>

    </Grid.Container>
        </div>

    </>
  )
}

export default HudBox2