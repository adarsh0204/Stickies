import React from 'react'
import './Footer.css'
import whatsapp from '../Images/whatsapp.png'
import instagram from '../Images/instagram.png'
import pinterest from '../Images/pinterest.png'
import logo from '../Images/logo.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt=''/>
        <p>STICKIES</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icons">
        <div className="footer-container">
        <img src={instagram} alt=''/>
        </div>
        <div className="footer-container">
        <img src={pinterest} alt=''/>
        </div>
        <div className="footer-container">
        <img src={whatsapp} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}
