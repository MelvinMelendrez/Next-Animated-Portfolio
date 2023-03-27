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

            <div className='textBoxes' >

                <div className='textBox1'>
                    <h3>Hud</h3>
                </div>

                <div className='textBox2'>
                    <h3>Hud</h3>
                </div>
            
            </div>

            <div className='target' >
                <h1>target</h1>
            </div>

            <div className='projects'>
                <h1>projects</h1>
            </div>
            
            
        </div>

        
    </div>
    )
}

export default Hud1