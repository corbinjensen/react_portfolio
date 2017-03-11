import React from 'react'
import SectionTitle from './SectionTitle'

class Intro extends React.Component {
  render(){
    return (
      <div className="Intro">
        <SectionTitle
          title="Hello"
        />
        <article>

          <p>Im <strong>Corbin</strong>, a Web Developer from Canada.</p>
          <p>I help organizations grow online, creating <strong>websites, apps,
          + e-commerce stores.</strong></p>

        </article>
      </div>
    )
  }
}

export default Intro
