import React from 'react'
import Nav from './Nav'
import logo from '../img/full-logo-colour.svg'

import '../css/header.css'

class Header extends React.Component {
  render(){
    return (
      <header className="wrapper">

        <img className="title" src={logo} alt="Corbin Jensen "/>

        <Nav />
      </header>
    )
  }
}

export default Header
