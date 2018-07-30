import React from 'react';
import Carousel from 'nuka-carousel';
import FarmCommand from '../img/portfolio/farmCommand.png';
import BeerWorking from '../img/portfolio/beerWorking.png';
import Anthem from '../img/portfolio/anthemShopify.png';
import Acupuncture from '../img/portfolio/Acupuncture.png';
import Gavin from '../img/portfolio/gavin.png';
import Hop from '../img/portfolio/hop.png';

export default class extends React.Component {
    render() {
      return (
        <Carousel>
          <img src={FarmCommand} />
          <img src={Hop} />
          <img src={BeerWorking} />
          <img src={Anthem} />
          <img src={Acupuncture} />
          <img src={Gavin} />
        </Carousel>
      );
    }
  }
