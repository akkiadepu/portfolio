import { Link } from "react-router-dom";
import React from 'react'

function Nav() {
  return (
    <div className="navbar">
        <header id="logo"><img src="https://see.fontimg.com/api/renderfont4/rg9Rx/eyJyIjoiZnMiLCJoIjo2OCwidyI6MTI1MCwiZnMiOjU0LCJmZ2MiOiIjMUIxRDFGIiwiYmdjIjoiI0I2Nzc3NyIsInQiOjF9/QUs/ananda-black-personal-use-regular.png" alt="Cursive fonts"/></header>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Skills'>Skills</Link>
        <Link to='/Project'>Project</Link>
        <Link to='/Contact'>Contact</Link>
    </div>
  )
}

export default Nav