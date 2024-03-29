import React from 'react';
import "../styles/navigation.css"
import Resume from "../images/Resume.png"
const Navbar = ({ currentPage, handlePageChange }) => {

  return (
    <ul>
      <a className="linkStyles" href="#Home"
        onClick={() => handlePageChange('Home')}><li className={currentPage === "Home" ? "navigationStylesActive" : "navigationStyles"}>Work</li></a>
      <a className="linkStyles" href="#About"
        onClick={() => handlePageChange('About')}><li className={currentPage === "About" ? "navigationStylesActive" : "navigationStyles"}>About Me</li></a>
      <a className="linkStyles" href="#Contact"
        onClick={() => handlePageChange('Contact')}><li className={currentPage === "Contact" ? "navigationStylesActive" : "navigationStyles"}> Contact</li></a>
      <a href={Resume} target="_blank" className="linkStyles"><li className="navigationStyles">Resume</li></a>
    </ul>
  )
}

export default Navbar
