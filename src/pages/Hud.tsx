import React from 'react'

import { Hud2 } from '../components/Hud/Hud2/Hud2';
import Hud1 from '../components/Hud/Hud1/Hud1';
import Spinner from '@/components/Hud/Spinner'
import SocialButtons from '@/components/Hud/SocialButtons';


const Hud: React.FC = () => {

  return (
    <>
      <div className='spinner'>
        <Spinner />
      </div>
      <Hud1 />
      <Hud2 />
      <SocialButtons />
    </>
  )
}

export default Hud
