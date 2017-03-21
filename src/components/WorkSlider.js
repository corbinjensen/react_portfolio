import React from 'react'
import Slider from 'react-image-slider';

import '../css/image-slider.css'

import farmCommand from '../img/farmCommand.png'


class WorkSlider extends React.Component {
  render(){
    const images = [
      '//corbinjensen.ca/portfolio/farmCommand.png',
      '//placehold.it/600/3498db',
      '//placehold.it/600/2ecc71',
      '//placehold.it/600/9b59b6',
      '//placehold.it/600/f1c40f',
      '//placehold.it/600/e74c3c',
      '//placehold.it/600/e67e22',
    ];
    return (
      <div className="slider">
          <Slider images={images} isInfinite delay={5000}>
          {images.map((image, key) => <div key={key}><img src={image} /></div>)}
        </Slider>
      </div>
    )
  }
}

export default WorkSlider
