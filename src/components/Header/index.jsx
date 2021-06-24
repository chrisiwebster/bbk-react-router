import React from 'react';
import './styles.css'

const Header = ({children}) => {
  return (
    <header>
    {children}
      <h1>React router</h1>
      <p>Just testing out the router</p>
    </header>
  )
}

export default Header