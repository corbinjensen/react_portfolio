import React from 'react'

class Clients extends React.Component {
  render(){
    return (
      <div className="clients wrapper">

        <section className="client">
          <img width="100px" src="img/clients/steve.jpeg" alt=""/>
          <blockquote cite="http://">
            Corbin is <strong>delightful to work with</strong> and like to look into the future.
          </blockquote>
          <h4>- Steve Warren</h4>
          <h5>Executive Producer Chinamerica Radio</h5>
        </section>

        <section className="client">
          <img width="100px" src="img/clients/rebecca.jpeg" alt=""/>
          <blockquote cite="http://">
            Corbin helped me work through some of my business sales strategies - I would <strong>recommend him to anyone starting a business</strong> who needs to rethink their marketing process.
          </blockquote>
          <h4>- Rebecca Rochon</h4>
          <h5>CEO Pivot + Pilot Creative</h5>
        </section>

        <section className="client">
          <img width="100px" src="img/clients/jessica.jpg" alt=""/>
          <blockquote cite="http://">
            Corbin has <strong>an outstanding ability to work inter-culturally, show empathy, and work to understand other points of view</strong>. And in all his interactions and projects you could see his deep commitment to equity.
          </blockquote>
          <h4>- Jessica Pisarek</h4>
          <h5>Project Supervisor Canada World Youth</h5>
        </section>

        <section className="client">
          <img width="100px" src="img/clients/tim.jpg" alt=""/>
          <blockquote cite="http://">
            Corbin was <strong>a pleasure to work with, a through and throughout professional approach</strong> with each assignment and has an innate passion for technology. I found Corbin to adapt well within difficult environments and understand using advanced IT systems, measurement tools and best practices.
          </blockquote>
          <h4>- Timothy Roach</h4>
          <h5>RF Solutions Manager DataDrill Communications</h5>
        </section>

      </div>
    )
  }
}

export default Clients
