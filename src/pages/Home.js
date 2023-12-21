import React from 'react'

import VideoCard from '../components/VideoCard'
import TextCard from '../components/TextCard'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-card">
        <VideoCard />
        <TextCard />
      </div>
    </div>
  )
}

export default Home
