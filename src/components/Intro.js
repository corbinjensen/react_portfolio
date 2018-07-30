import React from 'react'
import '../css/intro.css'

import Carousel from './Carousel';

class Intro extends React.Component {
  render(){
    return (
        <div className="Intro Wrapper">

        <article className="CTA" id="About">

          <h2>Hello</h2>

          <p>Im <strong>Corbin</strong>, a Web Developer from Canada.</p>
          <p>I enjoy helping organizations create beautiful</p>
          <p><strong>websites + apps.</strong></p>


        </article>

        <article>
          
          <Carousel />

        </article>


      </div>
    )
  }
}

export default Intro
