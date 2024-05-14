import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Task</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navtop" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navtop">
      <div className="navbar-nav">
        
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/student">Student</NavLink>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header