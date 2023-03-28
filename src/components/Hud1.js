import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'

import HudBox2 from './HudBox2';
import ProjectIcon from './ProjectsIcon';

const Hud1 = () => {
    const router = useRouter();

  return (
    <div className='Hud'>
        
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
                <div>

                <p>Target</p>
                </div>
                <div>

                <span>Jhon Smith</span>
                </div>
            </div>

                <ProjectIcon/>            
            
        </div>

        
    </div>
    )
}

export default Hud1