import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ searchInput, search }) => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <h1 style={{color:"red"}}><u><i>Sai Movies</i></u></h1>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="" spy={true} smooth={true}>
              Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
              About
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
              Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          
		      <label>Search </label><input 
			    type="text"
			    placeholder="Search for a Movie..."
			    className="search"
			    onChange={searchInput}
			    onKeyPress={search}
		      />
		    </div>
      </div>
    </div>
  );
};

export default Navbar;