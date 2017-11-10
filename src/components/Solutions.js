import React from 'react'
import Industries from './Industries'
import SectionTitle from './SectionTitle'
import '../css/style.css'

class Solutions extends React.Component {
  render(){
    return (
    <div>
      <div>
        <section className="third">
        Show
        </section>
        <section className="third">
        Tell
        </section>
        <section className="third">
        Sell
        </section>

      </div>

      <Industries />
      
    </div>
    )
  }
}

export default Solutions
