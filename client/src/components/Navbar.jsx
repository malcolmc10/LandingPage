import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaBars/>
        </Link>
      </div>
    </>
  )
}

export default Navbar






