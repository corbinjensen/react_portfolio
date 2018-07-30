import React from 'react';
import '../css/photos.css'

import FarmCommand from '../img/portfolio/farmCommand.png';
import BeerWorking from '../img/portfolio/beerWorking.png';
import Anthem from '../img/portfolio/anthemShopify.png';
import Acupuncture from '../img/portfolio/Acupuncture.png';
import Gavin from '../img/portfolio/gavin.png';
import Hop from '../img/portfolio/hop.png';

 class Photos extends React.Component {
    render() {
      return (
          <ul className="photoPort">
            <li>
                <img src={FarmCommand} />
                
            </li>
            <li>
                <img src={Hop} />
                
            </li>
            <li>
                <img src={BeerWorking} />
                
            </li>
            <li>
                <img src={Anthem} />
                
            </li>
            <li>
                <img src={Acupuncture} />
                
            </li>
            <li>
                <img src={Gavin} />
                
            </li>
          </ul>
      );
    }
  }


  export default Photos;


  
