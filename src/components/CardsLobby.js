/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion"

export default function App2() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const itemAnimado = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const data = [
    { name: 'miguel',   años: 32,  nacionalidad: 'pendejo', datoRandom: 'Vale verga' },
    { name: 'esteban',  años: 22,  nacionalidad: 'baboso',  datoRandom: 'gorilazz' },
    { name: 'arce',     años: 2,   nacionalidad: 'pendejo', datoRandom: 'le gusta la verga' },
    { name: 'guitarra', años: 23,  nacionalidad: 'viejo',   datoRandom: 'Vale verga' },
    { name: 'asd',      años: 10,  nacionalidad: 'viejo',   datoRandom: 'Vale verga' },
    { name: 'leo',      años: 19,  nacionalidad: 'pendejo', datoRandom: 'gorilazz' },
    { name: 'luis',     años: 26,  nacionalidad: 'viejo',   datoRandom: 'Vale verga' },
    { name: 'jesus',    años: 27,  nacionalidad: 'viejo',   datoRandom: 'Vale verga' },
    { name: 'lana',     años: 25,  nacionalidad: 'pendejo', datoRandom: 'gorilazz' },
  ];

  const reduceI = data.reduce((accumulator, currentValue) => {
    if (currentValue.nacionalidad === 'viejo') {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  return (
    <motion.div 
      className='cardMaster'
      variants={container}
      initial="hidden"
      animate="show"
      >
        {reduceI.map((item) => (
          <motion.div 
            key={item.name} 
            className='card'
            variants={ itemAnimado }
            >
            <h3>{item.name}</h3>
            <p>{item.nacionalidad}</p>
          </motion.div>
        ))}
    </motion.div>
  )

}




/// ejercios


const filter = () => {
  const data =[]

  const pendejos = data.filter((item) => item.nacionalidad === 'pendejo');

  return (
    <div className='cardMaster'>
      {pendejos.map((item) => (
        <div key={item.name} className="card" >
           <h3>{item.name}</h3>
           <p>{`Edad: ${item.años}`}</p>
           <p>{`Nacionalidad: ${item.nacionalidad}`}</p>
           <p>{`Dato random: ${item.datoRandom}`}</p>
        </div>
      ))}
    </div>
  );
}



const Reduce = () => {
  const data =[]

  const pendejos = data.reduce((accumulator, currentValue) => {
    if (currentValue.nacionalidad === 'viejo') {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  return (
    <div className='cardMaster'>
      {pendejos.map((item) => (
        <div key={item.name} className="card" >
           <h3>{item.name}</h3>
           <p>{`Edad: ${item.años}`}</p>
           <p>{`Nacionalidad: ${item.nacionalidad}`}</p>
           <p>{`Dato random: ${item.datoRandom}`}</p>
        </div>
      ))}
    </div>
  );
}



const map = ()=>{
  const data = []
   return (
      <div className='cardMaster'>
       {data.map((item) => (
         <div key={item.name} className="card" >
           <h3>{item.name}</h3>
           <p>{`Edad: ${item.años}`}</p>
           <p>{`Nacionalidad: ${item.nacionalidad}`}</p>
           <p>{`Dato random: ${item.datoRandom}`}</p>
         </div>))}
      </div>
   )
}