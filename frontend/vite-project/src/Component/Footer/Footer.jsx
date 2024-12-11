import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='container'>
    <footer className="footer">
      <div className="footer-left">© 2024 Deepnetsoft Solutions. All rights reserved.</div>
      <div className="footer-right">
        <a href="/terms" className="footer-link">Terms & Conditions</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer
