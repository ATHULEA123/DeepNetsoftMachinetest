import React from 'react'
import logo  from "../../../public/Asset/Logo (1).png"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube,FaPhone,FaEnvelope,FaMapMarkerAlt } from 'react-icons/fa';
import "./Contact.css"
const Contact = () => {
  return (
    <div className='container'>
    <footer className="footer-section">
      <div className="footer-box">
        <h3 className="footer-title">CONNECT WITH US</h3>
        <p> <FaPhone  color='#C5A059'/><span className='contents'>+91 95678 43340</span></p>
        <p><FaEnvelope color='#C5A059'/> <span className='contents'>info@deepnetsoft.com</span></p>
      </div>

      <div className="footer_sec">
        <div className='contactlogo'>
        <img src={logo} alt="Deep Net Soft" className="logo-image" />
        </div>
       <h1 className='head'><span className='deep'>DEEP</span> NET <span className='soft'>SOFT</span></h1>

       <div className='social_links'>
        <div className='icon'>
        <a href="https://www.instagram.com" target="_blank" >
          <FaInstagram size={20}color="#808080" />
        </a>
        </div>
        <div className='icon'>
        <a href="https://www.facebook.com" target="_blank" >
          <FaFacebook size={20} color="#808080"  />
        </a>
        </div>
        <div className='icon'>
        <a href="https://twitter.com" target="_blank" >
          <FaTwitter size={20} color="#808080" />
        </a>
        </div>
        <div className='icon'>
        <a href="https://www.youtube.com" target="_blank" >
          <FaYoutube size={20} color="#808080"/>
        </a>
        </div>
        
        
       </div>
       
      </div>

      <div className="footer-box">
        <h3 className="footer-title">FIND US</h3>
        <p><FaMapMarkerAlt color='#C5A059' />
       <span className='contents'>Example Usage: First floor, Geo Infopark, Infopark EXPY, Kakkanad</span> </p>
      </div>
    </footer>
    </div>
  )
}

export default Contact
