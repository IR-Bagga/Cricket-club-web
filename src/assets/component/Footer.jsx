import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const linkedinProfileURL = "https://www.linkedin.com/in/muhammad-irfan-mi";
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-3 foot" id='foot-1'>
              <h3>USEFUL LINKS</h3>
              <h6><a href="/">Home</a></h6>
              <h6><a href="/record">Records</a></h6>
              <h6><a href="/details">Details</a></h6>
              <h6><a href="/news">Updates</a></h6>
              <h6><a href="/contact">Contact Us</a></h6>
            </div>
            <div className="col-lg-3 foot" id='foot-2'>
              <h3>NEWSLETTER</h3>
              <button className="searchbox">Search Here About Us </button><br /><br />
              <button className="subscribebtn"> SUBSCRIBE NOW</button>
            </div>
            <div className="col-lg-3 foot" id='foot-3'>
              <h3>CONTACT</h3>
              <h6>muhammadirfan786980@gmail.com <br />0309-7698907</h6>

              <a href={linkedinProfileURL} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='falinkdin' />
              </a>





            </div>
          </div>
        </div>
      </footer >
    </>
  )
}
