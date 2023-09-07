import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, Autoplay, EffectFade, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { EffectFade } from 'swiper/modules';

export const Home = () => {
  const [username, setusername] = useState('');
  const [usercnic, setusercnic] = useState('');
  const [useremail, setuseremail] = useState('');
  const [useraddress, setuseraddress] = useState('');
  const [nameErr, setnameErr] = useState(false)
  const [cnicErr, setcnicErr] = useState(false)
  const [emailErr, setemailErr] = useState(false)
  const [addressErr, setaddressErr] = useState(false)


  const handleFormReset = () => {
    setusername('');
    setuseremail('');
    setusercnic('');
    setuseraddress('');
    setnameErr('');
    setcnicErr('');
    setemailErr('');
    setaddressErr('')
  };

  // onChange Function on Input Field

  const namehandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setnameErr(true)
    }
    else {
      setnameErr(false)
    }
    setusername(item)
  }
  const idhandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setcnicErr(true)
    }
    else {
      setcnicErr(false)
    }
    setusercnic(item)
  }
  const emailhandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setemailErr(true)
    }
    else {
      setemailErr(false)
    }
    setuseremail(item)
  }
  const addresshandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setaddressErr(true)
    }
    else {
      setaddressErr(false)
    }
    setuseraddress(item)
  }

  // End of onChange Function on Input Field

  // Submit & Reset Function 

  function handleFormSubmit(e) {
    if (usercnic.length < 1 || username.length < 1 || useremail.length < 1 || useraddress.length < 1) {
      Swal.fire({
        position: 'top-end',
        title: 'type correct value',
      })
    }
    else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'All Good',
      })
    }
    e.preventDefault()
  }
  return (
    <>
      <section id='section-1'>
        <div className="sec1-div">
          <div className="sec1-content">
            <h1>BAGGA CRICKET VALLEY</h1>
            <h2>We Power Passion Take Your Techniques To The Next Level!</h2>
            {/* <button className='btn-register'>REGISTER NOW</button> */}

            {/* OffCanvas  */}
            <div className="offcanvas offcanvas-end bg-dark" id="demo">
              <div className="form-img">
                <div className="offcanvas-header">
                  <h3 className="offcanvas-title">BREADY BCV MEMBER</h3>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
              </div>
              <div className="offcanvas-body">
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder='Enter your Name'
                    onChange={namehandler}
                  /><br />{nameErr ? <span>User Not Valid</span> : ""}<br />
                  <input
                    type="text"
                    placeholder='Enter your id'
                    onChange={idhandler}
                  /><br />{cnicErr ? <span>User Not Valid</span> : ""}<br />
                  <input
                    type="email"
                    placeholder='Enter your Email'
                    onChange={emailhandler}
                  /><br />{emailErr ? <span>User Not Valid</span> : ""}<br />
                  <input
                    type="text"
                    placeholder='Enter your Address'
                    onChange={addresshandler}
                  /><br />{addressErr ? <span>User Not Valid</span> : ""}<br />

                  <input type="submit" name="" id="btn-submit" />
                  <input
                    type="reset" name="" id="btn-reset" value="Reset" onClick={handleFormReset}
                  />
                </form>
              </div>
            </div>

            <div className="container-fluid mt-3">
              <button className="btn-register" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                REGISTER NOW
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 */}
      <div className="container-fluid d-flex slider-sec">
        <section className='' id='section-2'>
          <div className="container-fluid">
            <div className="sec2-content">
              <h1 className='text-center pb-4'>How become a Cricketer?</h1>
              <p>Cricketers have to come through these stages to join national cricket team. You may start small but you need to aim big. Once you start playing for a club or for any team, you need to make sure that you go to tournaments held across the country. Your gateway to becoming a professional cricketer is to join a highly competitive team and try to get into the state team.</p>
              <div className="row px-3">
                <div className="col-lg-6">
                  <ol>
                    <li>Basic Game Understanding.</li>
                    <li>"Unleash the power of your bat with us."</li>
                    <li>Understanding Their Strongholds.</li>
                    <li>"Cricket is not about winning; it's an attitude that never loses."</li>
                    <li>"Because real players never give up."</li>
                    <li>"Join the cricket league, practice hard and play harder."</li>
                    <li>Participate in a Cricket Academy.</li>
                    <li>"Be a part of a team that celebrates success one wicket at a time."</li>
                  </ol>
                  <Link to="/details"><button className='btn btn-dark m-2 my-4 btn-about '>Something more About Us</button></Link>
                </div>
                <div className="col-lg-6">
                  <div className="slider" id="sec2-slider">
                    <Swiper
                      // loop={true}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                      }}
                      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                      spaceBetween={0}
                      // effect='fade'
                      slidesPerView={1}
                      // navigation
                      // pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                    >
                      <SwiperSlide>
                        <img src="/image/flickity-1.jpg" alt="" style={{ height: "365px", width: "100%" }} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/image/flickity-4.jpg" alt="" style={{ height: "365px", width: "100%" }} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/image/flickity-3.jpg" alt="" style={{ height: "365px", width: "100%" }} />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End of Sec-2  */}

          {/* Start of Sec-3  */}



        </section>
      </div>

      {/* Section 3 */}
      <div className="container-fliud sec-3 card-main">
        <h1 className='text-center'>Benefits of Being Part of Bagga Cricket Valley</h1>
        <div className="row p-3 card-div">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            spaceBetween={20}
            effect='coverflow'
            slidesPerView={3}
            // navigation
            //  pagination={{ clickable: true }}
            //  scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="card text-center">
                <img src="/image/Hafeez-img.jpg" alt="/" className='card-img-1'/>
                <h3>Coaching from best cricketers</h3>
                <p>A camp for the selected students where they got a very highly paid coaching from the renowned cricketers free of cost</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-center">
                <img src="/image/SK-Afridi.jpg" alt="/" className='card-img-1'/>
                <h3>Chance to meet biggest cricket stars</h3>
                <p>Chance to meet the biggest cricket stars and to get tips</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-center">
                <img src="/image/spons-2.jpg" alt="/" className='card-img-1'/>
                <h3>Sponsorship</h3>
                <p>1 year full sponsorship for the year</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-center">
                <img src="/image/Kit.jpg" alt="/" className='card-img-1'/>
                <h3>Cricket Kit</h3>
                <p>Cricket white kit will be provide with the logo Bagga cricket club on it</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-center">
                <img src="/image/Talent.jpg" alt="/" className='card-img-1'/>
                <h3>Showcase your talent</h3>
                <p>Chances to showcase your talent to the whole world</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </>
  )
}
