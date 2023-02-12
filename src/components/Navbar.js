import React from 'react'
import './nav.css'

function Navbar() {
    return (
      <div className="navb">
        <Navbar/>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          University Event Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" 
        id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link p-3 mx-md-5 " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-3 " href="/events">
                Events
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link p-3 mx-md-5" href="/#About">
                About
              </a>
            </li>
            <li>
              <div className="dropdown mx-5">
                <button
                  className="btn btn-secondary dropdown-toggle p-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/adminlogin">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/orglogin">
                      Event Organizer
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>        
      </div>
    );
  }
  
  export default Navbar;
  
