import React from 'react'

import { Hud2 } from '../components/Hud2';
import Hud1 from '../components/Hud1';
import SocialButtons from '../components/SocialButtons'
import Spinner from '../components/Spinner'


const Hud = () => {

  return (
    <>  
     <div className='spinner'>
      <Spinner/>
     </div>
      <Hud1/>
      <Hud2/>
      <SocialButtons/>
    </>
    )
}

export default Hud
