import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavbarHeader.css';
import logo from './assets/logo-xl-transparent-v1.0.png';


function NavbarHeader() {
  
  
  return (
    <div className="NavbarHeader-main">
          <img src={logo} alt="simple finance logo" className="NavbarHeader-logo" />
          <button className="NavbarHeader-github-btn App-button-core App-button-transparent-dark">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Github
          </button>
      
    </div>
  )

}


export default NavbarHeader;