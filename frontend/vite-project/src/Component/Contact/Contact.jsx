import React from 'react'
import logo  from "../../../public/Asset/Logo (1).png"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import "./Contact.css"
const Contact = () => {
  return (
    <div className='container'>
    <footer className="footer-section">
      <div className="footer-box">
        <h3 className="footer-title">CONNECT WITH US</h3>
        <p>📞 +91 95678 43340</p>
        <p>📧 info@deepnetsoft.com</p>
      </div>

      <div className="footer_sec">
        <div className='contactlogo'>
        <img src={logo} alt="Deep Net Soft" className="logo-image" />
        </div>
       <h1 className='head'><span className='deep'>DEEP</span> NET <span className='soft'>SOFT</span></h1>

       <div className='social_links'>
        <div className='icon'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        </div>
        <div className='icon'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={20} />
        </a>
        </div>
        <div className='icon'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        </div>
        <div className='icon'>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={20} />
        </a>
        </div>
        
        
       </div>
       
      </div>

      <div className="footer-box">
        <h3 className="footer-title">FIND US</h3>
        <p>📍 First floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
      </div>
    </footer>
    </div>
  )
}

export default Contact
