import React from 'react'

import { useRouter } from 'next/router';
import Lobby from './Lobby2'


const Hud = () => {
  const router = useRouter();

  return (
    <>
        <div className='Hud'>
              <Lobby/>
            <button onClick={() => {router.push('/')}}>Home</button>
        </div>
        <div className='Hud2'>
              
        </div>
    </>
    )
}

export default Hud
