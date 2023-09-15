import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuStyle = {
    height: isOpen ? 'fit-content' : '0px',
    transition: '1s',
  };

  useEffect(() => {
    // Function to update isOpen state based on screen width
    const updateMenuOnResize = () => {
      if (window.innerWidth <= 558) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', updateMenuOnResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateMenuOnResize);
    };
  }, []);
  return (
    <div>
      <header>
        <div className="logo">
          <img src="https://be-practical.com/images/Be-logo.png" alt="" />
        </div>
        <div className="right" id="navbar" style={menuStyle}>
          <div className="mynavbar">
            <a href="#home" className="an">Home</a>
            <div className="mega-drop">
              <button className="dropbtn">Course <i className="bi bi-caret-down-fill"></i></button>
              <div className="content">
                <div className="rows row">
                  <div className="devide col-md-6 sm-list-goup">
                    <h3>Explore Course</h3>
                    <a href="#" className='list-group-item'>Fullstack Development</a>
                    <a href="#">Data Science</a>
                    <a href="#">Cloud Computing</a>
                    <a href="#">Software Testing</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Job Guaranteed Course</a>
                  </div>
                  <div className="devide col-md-6">
                    <h3>Fullstack Technology</h3>
                    <a href="#">MEAN Full-Stack</a>
                    <a href="#">MERN Full-Stack</a>
                    <a href="#">Java Full-Stack</a>
                    <a href="#">Python Full-Stack</a>
                    <a href="#">DotNet Full-Stack</a>
                  </div>
                  <div className="devide">
                    <h3>Cloud Computing</h3>
                    <a href="#">Advanced Cloud Computing</a>
                    <a href="#">Cloud Ops</a>
                  </div>
                  <div className="devide">
                    <h3>Software Testing</h3>
                    <a href="#">Core Java and Selenium</a>
                    <a href="#">Python - Selenium</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mega-drop">
              <button className="dropbtn">About Us <i className="bi bi-caret-down-fill"></i></button>
              <div className="content">
                <div className="rows">
                  <div className="devide">
                    <h3>About Us</h3>
                    <a href="#">Why Be-Practical</a>
                    <a href="#">Location</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#event" className="an">Event</a>
            <a href="#gallery" className="an">Gallery</a>
            <a href="#blogs" className="an">Blogs</a>
            <div className="mega-drop">
              <button className="dropbtn">For Company <i className="bi bi-caret-down-fill"></i></button>
              <div className="content">
                <div className="rows">
                  <div className="devide">
                    <h3>Explore</h3>
                    <a href="#">Corporate Training</a>
                    <a href="#">HR Services</a>
                    <a href="#">Hire Training Graduates</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          isOpen ? <i class="bi bi-x-lg" id="toggler" onClick={toggleMenu}></i> : <i class="bi bi-list" id="toggler" onClick={toggleMenu}></i>
        }
      </header>
      <div className="divider-line">

      </div>
    </div>
  );
}

export default Nav;
