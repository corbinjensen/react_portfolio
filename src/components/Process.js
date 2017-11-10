import React from 'react'
import SectionTitle from './SectionTitle'
import '../css/style.css'

class Process extends React.Component {
  render(){
    return (
      <article>
        <div>
          <SectionTitle
            title="1"
          />
          <h4>Listen, Converse, Reflect, Research.</h4>
        </div>
        <div>
          <SectionTitle
            title="2"
          />
          <h4>Prototype, Test, Ajust</h4>
        </div>
        <div>
          <SectionTitle
            title="3"
          />
          <h4>Launch, Optimize, Support</h4>
        </div>
      </article>
    )
  }
}

export default Process
