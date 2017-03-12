import React from 'react'
import '../css/style.css'

class SectionTitle extends React.Component {
  render(){
    return (
      <div className="sectionTitle wrapper">
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default SectionTitle
