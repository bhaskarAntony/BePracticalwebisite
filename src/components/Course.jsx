import React from 'react'
import '../styles/course.css'

function Course() {
  return (
    <>
     <div className="text-container  text-center bg-white">
            <h3 className='training-header fs-1  .gradient-text'>Take Our Best Courses</h3>
        </div>
   <div className="course-container-black">
   
     <div className='container-fluid second-course'>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
            <div className="course-left">
            <span className='brand fs-2 mb-3' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">@BE Practical</span>
                <h1 className='course-big-text'  data-aos="fade-up"
     data-aos-duration="500">We are providing feautured courses</h1>
                <p className="course-info-text"  data-aos="fade-up"
     data-aos-duration="500">Hire from the biggest pre-screened talent pool in the country in 15 minutes.</p>
                <button className=" course-join"  data-aos="fade-up"
     data-aos-duration="500">Join Now</button>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
            <div className="course-right">
                <div className="course-card" data-aos="zoom-in-up">
                  <div className="course-card-curve"></div>
                 <div>
                 <h3 className='course-name'>Full-stack</h3>
                  <p>we provide full stack develoment course in bang;ore with placement assistance and flexible payment option</p>
                  <button className='btn coursebtn'>Join Now</button>
                 </div>
                 <div className="row">
                  <div className="col-4">
                   <div className="course-icon" data-aos="zoom-in-down">
                   <img src="https://algoscript.in/assets/img/tools/mern/Mern.png" alt="" />
                   </div>
                  </div>
                  <div className="col-4">
                   <div className="course-icon" data-aos="zoom-in-down">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="" />
                   </div>
                  </div>
                  <div className="col-4">
                   <div className="course-icon"  data-aos="zoom-in-down">
                   <img src="https://icon-library.com/images/java-icon-png/java-icon-png-2.jpg" alt="" />
                   </div>
                  </div>
                 </div>
                </div>
                <div className="course-card" data-aos="zoom-in-up">
                  <h3 className='course-name'>Cloud - computing</h3>
                  Be pacricle is software training institute in banglore that provide programs for people looking for cloud computing training 
                  <button className='btn coursebtn mt-3 w-100'>Join Now</button>
                </div>
                <div className="course-card" data-aos="zoom-in-up">
                  <h3 className='course-name'>Digital marketing</h3>
                  Be-practicle digital marketing course in banglire offer comparehensive curriculam,practical projects nad flexible learning options
                  <button className='btn coursebtn mt-3 w-100'>Join Now</button>
                </div>
                 <div className="course-card" data-aos="zoom-in-up">
                  <h3 className='course-name'>Data Science</h3>
                  explore be-practical's data scince course in banglore,offering practical projects and flexible learning.unlock career opportunities 
                  <button className='btn coursebtn mt-3 w-100'>Join Now</button>
                </div>
                {/*<div className="course-card">
                  <h3>Fullstack</h3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, blanditiis libero pariatur enim praesentium 
                </div>
                <div className="course-card">
                  <h3>Fullstack</h3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, blanditiis libero pariatur enim praesentium 
                </div> */}
            </div>
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default Course
