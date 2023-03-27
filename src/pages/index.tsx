import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Lobby from './Lobby'
import Lobby2 from './Lobby2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>

    <div className='App-header'>
      <Lobby/>
    </div>
    </div>
    </>  
    )
}
