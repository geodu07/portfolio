import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header (props){
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded" >
        
        <Link className="navbar-brand col-1 col-lg-6 text-center mr-0" to='/'>Georgie Duarte</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mr-2">
              <Link className="nav-link disabled" to='/blog' tabIndex="-1" aria-disabled="true">Blog</Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link" to='/me'>Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/portfolio'>Portfolio</Link>
            </li>
          </ul>
        </div>
       
      </nav>
    </header>
  )
}

export default Header