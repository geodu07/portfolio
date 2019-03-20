import React from 'react'
import './header.css'

function Header (props){
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-5 rounded" >
        
        <a className="navbar-brand col-1 col-lg-6 text-center mr-0" href="#">Georgie Duarte</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mr-2">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Blog</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#">Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
          </ul>
        </div>
       
      </nav>
    </header>
  )
}

export default Header