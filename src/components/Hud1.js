import React from 'react'
import { useRouter } from 'next/router';

import Spinner from '../components/Spinner'
import SocialButtons from '../components/SocialButtons'

const Hud1 = () => {
    const router = useRouter();

  return (
    <div className='Hud'>
        <SocialButtons/>
        <Spinner/>
        <button onClick={() => {router.push('/')}}>Home</button>
        <div className='personalProjects'>
            <h1>HUD</h1>
        </div>
    </div>
    )
}

export default Hud1