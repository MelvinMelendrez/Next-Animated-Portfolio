import React from 'react'

import { Card, Col, Text } from "@nextui-org/react";

const CardsHud = () => {

  const projects = [
    { title: 'Auth Map', subtitle:'Angular', image: 'https://cdn.sanity.io/images/ohx8wpby/production/223b4126281cddbe28215abe090e5931903adfb9-1437x1503.jpg'},
    { title: 'Healty blog', subtitle:'Next', image:'https://cdn.sanity.io/images/ohx8wpby/production/7f7a2f05037be61fb6538c0b96769b70fec544ed-1439x759.png'},
    { title: 'Melvin portfolio', subtitle:'React', image:'https://cdn.sanity.io/images/ohx8wpby/production/17668c11441bfd3db1b439f4f409abcd078bc015-1440x763.png'},
    { title: 'Go Travel', subtitle:'React Native', image:'https://cdn.sanity.io/images/ohx8wpby/production/19fdc2bb0aa3b0a1faf5646cb8b7d2c8dde2ede9-1440x1520.jpg'},
    { title: 'Animated portfolio', subtitle:'Next', image:'https://cdn.sanity.io/images/ohx8wpby/production/19fdc2bb0aa3b0a1faf5646cb8b7d2c8dde2ede9-1440x1520.jpg'},
  ]

  return (
    <div className='animatedCards'>
      {projects.map((project) => (
      <Card key={project.title}
       className='projectCard'
      >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>

          <Col className='titlecard'>
            <Text size={9} weight="bold" transform="uppercase" color="#ffffffAA" className='cardSubtitle'>
            {project.subtitle}
            </Text>
            <Text h4 color="white" className='cardTitle'>
              {project.title}
            </Text>
          </Col>

        </Card.Header>
        
        <Card.Image
          src= {project.image}
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