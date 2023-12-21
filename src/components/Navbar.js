import React from 'react'

import { BiSolidChurch } from "react-icons/bi";
import { BiSolidMessage } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="brand-logo">
        <div className="brand-logo-img">
          <BiSolidChurch />
        </div>
        <div className="brand-logo-text"><div>Church Tech</div><div>Today</div></div>
      </div>

      <div className="heading">AI Pulse Check</div>

      <div className="side-logo">
        <div className="side-logo-text">built by</div>
        <div className="side-logo-img">
          <BiSolidMessage />
        </div>
      </div>
    </div>
  )
}

export default Navbar
