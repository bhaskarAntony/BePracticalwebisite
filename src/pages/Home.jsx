import React, { useEffect } from 'react'
import Header from '../components/Header'
import Councelling from '../components/Councelling'
import Placement from '../components/Placement'
import Companies from '../components/Companies'
import Skills from '../components/Skills'
import Training from '../components/Training'
import Courses from '../components/Courses'
import Footer from '../components/Footer'
import Placed from '../components/Placed'
import '../styles/home-page.css'
import Adwantage from '../components/Adwantage'
import Elite from '../components/Elite'
import AOS from 'aos';
import Course from '../components/Course'
import Students from '../components/Students'
import JoinModal from '../components/JoinModal'
import Socialicons from '../components/Socialicons'
import Menu from '../components/Menu'


function Home() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className='homepage'>
      {/* <Menu/> */}

      <Header/>
      <Elite/>
      <Course/>

      <Councelling/>

      <Companies/>
      <Skills/>
      <Training/>
      {/* <Students/>  */}
      <Placed/>
      <Adwantage/>
      <Socialicons/>
      <Footer/>
    </div>
  )
}

export default Home
