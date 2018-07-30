import React from 'react'

import logo from '../img/full-logo-colour.svg'

import '../css/header.css'

class Header extends React.Component {
  render(){
    return (
      <header className="wrapper">

        <img className="title" src={logo} alt="Corbin Jensen "/>

        <ul className="mainMenu">
          <li><a href="#">Work</a></li>
          <li><a href="http://blog.corbinjensen.ca">Blog</a></li>
          <li><a href="mailto:c@corbinjensen.ca">Contact</a></li>
        </ul>

      </header>
    )
  }
}

export default Header
