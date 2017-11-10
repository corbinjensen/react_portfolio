import React from 'react'
import '../css/intro.css'

import FarmCommand from '../img/farmCommand.png'

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

          <img src={FarmCommand}/>

        </article>


      </div>
    )
  }
}

export default Intro
