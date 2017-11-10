import React from 'react'
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

          <button>

            <a href="#Contact">Contact</a>
            
          </button>

        </div>

        </article>


      </div>
    )
  }
}

export default Intro
