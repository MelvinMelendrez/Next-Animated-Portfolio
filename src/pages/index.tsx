import Lobby from './Lobby'
import Spiner from '../components/Lobby/Spinner2'

export default function Home() {
  return (
    <>
      <div className='App-header'>
        <Lobby />
        <Spiner />
      </div>
    </>
  )
}
