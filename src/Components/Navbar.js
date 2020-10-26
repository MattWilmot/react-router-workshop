import React from 'react'
import { 
    Link
  } from "react-router-dom";

function Navbar() {
    return(
  
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/HTML">HTML</Link>
            </li>
            <li>
              <Link to="/CSS">CSS</Link>
            </li>
            <li>
              <Link to="/JS">JS</Link>
            </li>
          </ul>
        
    )
}

export default Navbar