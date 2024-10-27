import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center">
          {/* <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/images/profile.jpeg" 
              alt="Logo"
              width="55"
              height="55"
              className="d-inline-block align-top"
              style={{
                borderRadius: '50%',
                objectFit: 'cover'
              }} 
            />
            <div className="ms-3">
              <h5 className="mb-0">Nathan Standing</h5>
              <small className="text-muted">Instructional Designer</small>
            </div>
          </NavLink> */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink 
                  exact
                  className="nav-link" 
                  to="/" 
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none'
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/about" 
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none'
                  })}
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/project" 
                  style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none'
                  })}
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
