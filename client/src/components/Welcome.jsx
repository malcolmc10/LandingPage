import React from 'react'
import logo from './package.svg'
import { motion } from "framer-motion"

function Welcome() {
  return (
    <div className="welcome" >
      <div className="split left">
        <div className="centered">
          <h1 className="intro">Hi, We're Scrappy!</h1>
          <p className="description">The<span className="magic-word">app</span> that helps you find<span className="magic-word">boxes</span> when you need them most.</p>
        </div>    
      </div>

      

      <div className="split right">
        <div className="centered">
        <img src={logo} alt="Avatar man" className="logo"/>

        </div>

      </div>










    </div>
  )
}

export default Welcome
