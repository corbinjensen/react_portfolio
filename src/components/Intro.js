import React from 'react'
import WorkSlider from './WorkSlider'

import '../css/intro.css'

class Intro extends React.Component {
  render(){
    return (
        <div className="Intro Wrapper">

        <article className="CTA">

          <h2>Hello</h2>

          <p>Im <strong>Corbin</strong>, a Web Developer from Canada.</p>
          <p>I help organizations succeed online, creating</p>
          <p><strong>websites, apps, + e-commerce stores.</strong></p>

        <div className="CTA_Buttons">
          <button className="CTA_btn">Get a Quote</button>
          <button>Contact</button>
        </div>

        </article>

        <WorkSlider />

        <article>



        </article>

      </div>
    )
  }
}

export default Intro