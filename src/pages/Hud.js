import React from 'react'

import { useRouter } from 'next/router';
import Spinner from '../components/Spinner'
import CardsHud from '../components/CardsHud'
import BigCard from '../components/BigCard'

const Hud = () => {
  const router = useRouter();

  return (
    <>
        <div className='Hud'>
              <Spinner/>
            <button onClick={() => {router.push('/')}}>Home</button>
        </div>

        <div className='Hud2'>

              <CardsHud/>

              <BigCard/>
        </div>
    </>
    )
}

export default Hud
