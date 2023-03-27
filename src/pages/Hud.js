import React from 'react'

import { useRouter } from 'next/router';
import Spiner from './Spinner'


const Hud = () => {
  const router = useRouter();

  return (
    <>
        <div className='Hud'>
              <Spiner/>
            <button onClick={() => {router.push('/')}}>Home</button>
        </div>
        <div className='Hud2'>
              
        </div>
    </>
    )
}

export default Hud
