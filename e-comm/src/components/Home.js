import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bag from '../images/bag.webp'
import cap from '../images/cap.webp'
import denim from '../images/denim.webp'
import Cards from './Cards';
import Cards1 from './Cards1';
import Viewall from './Viewall';


function Home() {
  return (
    <>
            <div className=''>
        <Carousel className='crausal'>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={bag}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={cap}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={denim}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </div>

      <Cards />
      <Cards1 />


    </>
  )
}

export default Home
