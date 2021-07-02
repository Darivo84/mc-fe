import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import slide4 from '../../images/slide4.jpg';

const slideImages = [
  `${slide1}`,
  `${slide2}`,
  `${slide3}`,
  `${slide4}`,
];

const Carousel = () => {
  return (
    <div className="slide-container">
        <Slide style={{height: '100vh', padding: '0px, 10px'}}>
          <div className="each-slide" style={{height: '100vh'}}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`, height: '100%'}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide" style={{height: '100vh'}}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`, height: '100%'}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide" style={{height: '100vh'}}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`, height: '100%'}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          <div className="each-slide" style={{height: '100vh'}}>
            <div style={{'backgroundImage': `url(${slideImages[3]})`, height: '100%'}}>
              {/* <span>Slide 4</span> */}
            </div>
          </div>
        </Slide>
      </div>
  )
}

export default Carousel
