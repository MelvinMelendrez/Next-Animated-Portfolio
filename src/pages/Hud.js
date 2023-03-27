import React from 'react'

import { useRouter } from 'next/router';
import Spiner from './Spinner'


const Hud = () => {
  const router = useRouter();

  return (
    <>
        <div className='Hud'>
            <button onClick={() => {router.push('/')}}>Home</button>
              <Spiner/>
        </div>
        <div className='Hud2'>
              
        </div>
    </>
    )
}

export default Hud
