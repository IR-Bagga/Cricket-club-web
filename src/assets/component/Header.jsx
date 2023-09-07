import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a href="/"><img src="./image/alphbet-removebg-preview.png" alt="" className='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto px-4 mx-5 px-5">
        <li className="nav-item mx-3">
          <Link className="nav-link text-light" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-light" to="/record">Records</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-light" to="/details">Details</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-light" to="/news">Updates</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-light" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
