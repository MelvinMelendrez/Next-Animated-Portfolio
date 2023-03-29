import Lobby from './Lobby'
import Spiner from '../components/Spinner2'
import SocialButtons from '@/components/SocialButtons'


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
