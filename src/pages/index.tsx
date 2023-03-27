import { Inter } from 'next/font/google'
import Lobby from './Lobby'
import Spiner from './Spinner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='App-header'>
      <Lobby/>
      <Spiner/>
    </div>
    </>  
    )
}
