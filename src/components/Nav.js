import React from 'react'
import Resume from '../assets/FrontEndDev-CorbinJensen.pdf'

class Nav extends React.Component {
  render(){
    return (
      <nav id="Contact">

        <ul>
          <li><a href="tel:18776190818"><i className="icon-phone" aria-hidden="true"></i> 1 (877) 619-0818</a></li>
          <li><a href="mailto:c@corbinjensen.ca"><i className="icon-mail" aria-hidden="true"></i> Email</a></li>
          <li><a href={Resume}><i className="icon-download" aria-hidden="true"></i> Download Resume</a></li>
          <li><a href="http://github.com/corbinjensen" target="_blank"><i className="icon-github" aria-hidden="true"></i> Github</a></li>
          <li><a href="https://www.linkedin.com/in/corbinjensen/" target="_blank"><i className="icon-linkedin" aria-hidden="true"></i> Linkedin</a></li>
        </ul>

      </nav>
    )
  }
}

export default Nav
