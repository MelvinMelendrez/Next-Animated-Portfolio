import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import Spinner from '../Spinner'
import SocialButtons from '../SocialButtons'
import HudBox2 from '../HudBox2';
import { BsSortDownAlt } from 'react-icons/bs';


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
                    <div className='cardHud1'>
                    <Image src='/me.jpg' alt='me' width={20} height={40} className='targetImg' />
                    </div>
                </div>

                <div className='textBox2'>

                    <HudBox2/>

                </div>
            
            </div>

            <div className='target' >
                <p>Target</p>
                <span>Jhon Smith</span>
            </div>

            <div className='projects'>
                <span className='projectSpan'>Projects  </span>   <BsSortDownAlt className='projectIcon'/>                
            </div>
            
            
        </div>

        
    </div>
    )
}

export default Hud1