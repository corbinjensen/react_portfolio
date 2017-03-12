import React from 'react'
import SectionTitle from './SectionTitle'

// Styles
import '../css/work.css'
import '../css/style.css'
import '../css/clients.css'

// Images
import Steve from '../img/clients/steve.jpeg'
import Rebecca from '../img/clients/rebecca.jpeg'
import Jessica from '../img/clients/jessica.jpg'
import Tim from '../img/clients/tim.jpg'

class Clients extends React.Component {
  render(){
    return (
      <div className="testo">
        <SectionTitle
          title="Testimonials"
          />
        <div className="clients wrapper">

          <section className="client">
            <img width="100px" src={Steve} alt=""/>
            <blockquote cite="http://">
              <strong>delightful to work with</strong> and like to look into the future.
            </blockquote>
            <h4>- Steve Warren</h4>
            <h5>Executive Producer Chinamerica Radio</h5>
          </section>

          <section className="client">
            <img width="100px" src={Rebecca} alt=""/>
            <blockquote cite="http://">
              Corbin helped me work through some of my business sales strategies - I would <strong>recommend him to anyone starting a business</strong> who needs to rethink their marketing process.
            </blockquote>
            <h4>- Rebecca Rochon</h4>
            <h5>CEO Pivot + Pilot Creative</h5>
          </section>

          <section className="client">
            <img width="100px" src={Jessica} alt=""/>
            <blockquote cite="http://">
              <strong>outstanding ability to work inter-culturally, show empathy, and work to understand other points of view</strong>. And in all his interactions and projects you could see his deep commitment to equity.
            </blockquote>
            <h4>- Jessica Pisarek</h4>
            <h5>Project Supervisor Canada World Youth</h5>
          </section>

          <section className="client">
            <img width="100px" src={Tim} alt=""/>
            <blockquote cite="http://">
              <strong>a pleasure to work with, a through and throughout professional approach</strong> with each assignment and has an innate passion for technology. I found Corbin to adapt well within difficult environments and understand using advanced IT systems, measurement tools and best practices.
            </blockquote>
            <h4>- Timothy Roach</h4>
            <h5>RF Solutions Manager DataDrill Communications</h5>
          </section>

        </div>
      </div>
    )
  }
}

export default Clients
