import React from 'react'
import Slider from 'react-image-slider';

import '../css/image-slider.css'


class WorkSlider extends React.Component {
  render(){
    const images = [
      '//corbinjensen.ca/portfolio/farmCommand.png',
      '//corbinjensen.ca/portfolio/acu.png',
      '//corbinjensen.ca/portfolio/hop2.png',
      '//corbinjensen.ca/portfolio/acu2.png',
      '//corbinjensen.ca/portfolio/gavin.png',
      '//corbinjensen.ca/portfolio/hyde.png',

    ]

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
