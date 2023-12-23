import React from 'react'

import { IoMdTime } from "react-icons/io";

const TextCard = () => {
  return (
    <div className='text-card'>
      <h1><span>Is your church embracing impact</span> or AI* hesitant?</h1>
      <ol>
        <li>Take this 3-minute assessment</li>
        <li>Invite your team to take it too after you do</li>
        <li>View everyone's results on 1 dashboard</li>
        <li>Align on the best next step for your church's approach to AI</li>
      </ol>

      <div className="button-container">
        <button className='btn'>GET STARTED</button>
        <div className='time'><IoMdTime className='time-icon' /> <p style={{paddingLeft: 4}}>3 mins</p></div>
      </div>

      <p className='text-card-btm-text'>* Artificial Intelligence</p>
    </div>
  )
}

export default TextCard;
