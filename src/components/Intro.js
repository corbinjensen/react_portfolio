import React from 'react'
import WorkSlider from './WorkSlider'

import '../css/intro.css'

class Intro extends React.Component {
  render(){
    return (
        <div className="Intro Wrapper">

        <article className="CTA" id="About">

          <h2>Hello</h2>

          <p>Im <strong>Corbin</strong>, a Web Developer from Canada.</p>
          <p>I help organizations succeed online, creating</p>
          <p><strong>websites, apps, + e-commerce stores.</strong></p>

        <div className="CTA_Buttons">
          <a href="https://corbinjensen1.typeform.com/to/tzMuqO">
            <button>
              Get a Quote
            </button>
          </a>
          <button><a href="#Contact">Contact</a></button>
        </div>

        </article>

        <WorkSlider />

      </div>
    )
  }
}

export default Intro
