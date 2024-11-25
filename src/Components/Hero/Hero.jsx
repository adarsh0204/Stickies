import React from 'react'
import './Hero.css'
import hero_image from '../Images/hero_image.png'
import wave_image from '../Images/wave.png'
import arrow from '../Images/Arrow.png'
import { useNavigate } from 'react-router-dom'
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      <div>
      <div className="hand-icon">
      <p>new</p>
      <img src={wave_image} alt=''/>
      </div>
      <p>Collections</p>
      <p>for everyone</p>
      </div>
      <div className="hero-button"onClick={() => navigate('/new-collections')} >
        <div>Latest Collection</div>
        <img src={arrow} alt=''/>

      </div>
      </div>
      <div className="hero-right">
      <img src={hero_image} alt=''/>
        

      </div>



    </div>
  )
}
