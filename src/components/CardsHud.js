import React from 'react'

import { Card, Col, Text } from "@nextui-org/react";


const CardsHud = () => {

  const projects = [
    { title: '1', image:'',  },
    { title: '2', image:'',  },
    { title: '3', image:'',  },
    { title: '4', image:'',  },
    { title: '5', image:'',  },
  ]

  return (
    <div className='animatedCards'>
      {projects.map((project) => (
 <Card key={project.title}
       className='projectCard'
 >
 <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
   <Col>
     <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
       What to watch
     </Text>
     <Text h4 color="white">
       Stream the Acme event
     </Text>
   </Col>
 </Card.Header>
 <Card.Image
   src="https://nextui.org/images/card-example-4.jpeg"
   objectFit="cover"
   width="100%"
   height={340}
   alt="Card image background"
 />
</Card>
      ))}
    </div>
  )
}

export default CardsHud