'use client'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Testkomponente() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img src="img/Slider02.jpg" alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Zeit zum Ausmisten</h3>
            <p>Spende Kleidung und Helfe</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src="img/Slider01.jpg" alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Schaffe Platz und Helfe</h3>
            <p>Spende alte Klamotten</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src="img/Slider03.jpg" alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Kleiderschrank voll?</h3>
            <p>Zeit zum Spenden!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Testkomponente;