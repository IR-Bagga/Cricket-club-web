import React, { useState } from 'react'
import Swal from 'sweetalert2';

export const Contact = () => {
  const [fullname, setfullname] = useState('')
  const [emailaddress, setemailaddress] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [fullnameErr, setfullnameErr] = useState(false)
  const [emailaddressErr, setemailaddressErr] = useState(false)
  const [phoneErr, setphoneErr] = useState(false)
  const dataSubmit = (e) => {
    e.preventDefault();
    if (fullname.length < 1 || emailaddress.length < 1 || phoneNo.length < 1) {
      // Swal.fire('Please add information')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please add information'
      })
    }
    else {
      Swal.fire('Information Received')
    }
  }






  const fullnamehandler = (e) => {
    let data = e.target.value
    if (data.length < 1) {
      setfullnameErr(true)
    }
    else {
      setfullnameErr(false)
    }
  }
  const emailaddresshandler = (e) => {
    let data = e.target.value
    if (data.length < 1) {
      setemailaddressErr(true)
    }
    else {
      setemailaddressErr(false)
    }
  }
  const phonehandler = (e) => {
    let data = e.target.value
    if (data.length < 1) {
      setphoneErr(true)
    }
    else {
      setphoneErr(false)
    }
  }
  return (
    <>
      <div className="contact-main">
        <div className="container  py-5">
          <div className="row contact">
            <div className="col-lg-6 px-2">
              <h1>Contact <span>BCV</span>?</h1>
              <p>If you’ve got any questions, please fill out the short form below to drop us an email and we promise to get back to you shortly.</p>
              <button>Contact Us</button>
              <button className='call'>Book a Call</button>
            </div>
            <div className="col-lg-5 call-img px-3">
              <img src="/image/about-brandcurb.webp" alt="/" style={{ width: "80%", height: "460px", marginTop: "-30px" }} className='ml-5' />
            </div>
          </div>
        </div>
        <div className="email-main py-5">
          <div className="container e-mail py-5">
            <h1 className='text-center'>E-mail Us</h1>
            <form onSubmit={dataSubmit}>
              <div className="name-email d-flex row">
                <div className="fname-div col-xl-6">
                  <label htmlFor="fname">Full Name:</label><br />
                  <input type="text" name="" id="fname" placeholder='Enter Your Name' onChange={fullnamehandler} />
                </div>
                <div className="emadd-div col-xl-6">
                  <label htmlFor="emadd">Email address:</label><br />
                  <input type="email" name="" id="emadd" placeholder='123xyz@gmail.com' onChange={emailaddresshandler} />
                </div>
              </div>
              <label htmlFor="text" className='mt-4 mb-2'>Tell us more about you</label><br />
              <textarea id="text" cols="10" rows="4" placeholder='Please share as much detaila as you can'></textarea>
              <div className="name-email">
                <label htmlFor="phone">Enter your Phone Number</label><br />
                <input type="number" name="" id="phone" placeholder='Phone #' onChange={phonehandler} />
              </div>
              <button className='email-submit' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
