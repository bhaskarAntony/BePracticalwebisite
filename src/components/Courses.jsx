import React from 'react'
import '../styles/courses.css'
import '../styles/snapscoll.css'

function Courses() {
  return (
    <section className='courses container'>
        <div className="courses-header text-center p-5">
            <h1>We Providing <span className=' p-1  fs-3 anim-text'>Courses</span></h1>
        </div>
       <div class="outer_container container">
       
       <div class="container-course container-fluid">
           <div class="card_container big-card" data-aos="fade-down-right">
              <div className="big-card-text">
                <span className="text-white">
                    Book our pre master classes today.
                </span>
                <button className="btn fs-3 p-2 px-3 text-black">Join Now</button>
              </div>
           </div>
   
           <div class="card_container grid-card2" data-aos="fade-down-right">
               <div class="left_card">
                <img src="https://cdn-icons-png.flaticon.com/512/4108/4108969.png" alt=""  className='w-100'/>
               </div>
               <div class="right_card">
                   <div class="top">
                       
                       <h2>Data - Scince</h2>
                       <button class="btn1"><b>Visit Chapters <i class="bi bi-arrow-right-circle-fill"></i></b></button>
                   </div>
                   <p>explore be-practical's data scince course in banglore,offering practical projects and flexible learning.unlock career opportunities </p>
                   <div className="course-card-btn">
                    <button className='btn'>Join Now</button>
                   </div>
   
               </div>
           </div>
   
           <div class="card_container grid-card3" data-aos="fade-down-right">
               <div class="left_card">
               <img src="https://cdn-icons-png.flaticon.com/512/694/694871.png" alt=""  className='w-100'/>
               </div>
               <div class="right_card">
                   <div class="top">
                       
                       <h2>Cloud - computing</h2>
                       <button class="btn1"><b>Visit Chapters <i class="bi bi-arrow-right-circle-fill"></i></b></button>
                   </div>
                   <p> Be pacricle is software training institute in banglore that provide programs for people looking for cloud computing training </p>
                   <div className="course-card-btn">
                    <button className='btn'>Join Now</button>
                   </div>
   
               </div>
           </div>
   
           <div class="card_container  grid-card4" data-aos="fade-down-right">
               <div class="left_card">
               <img src="https://cdn-icons-png.flaticon.com/512/10061/10061767.png" alt=""  className='w-100'/>
               </div>
               <div class="right_card">
                   <div class="top">
                       
                       <h2>Software testing</h2>
                       <button class="btn1"><b>Visit Chapters <i class="bi bi-arrow-right-circle-fill"></i></b></button>
                   </div>
                   <p>be-practical provides software testing course in banglore tauch by industry experianced trainers</p>
                   <div className="course-card-btn">
                    <button className='btn'>Join Now</button>
                   </div>
   
               </div>
           </div>
   
           <div class="card_container  grid-card5" data-aos="fade-down-right">
               <div class="left_card">
               <img src="https://cdn-icons-png.flaticon.com/512/3475/3475683.png" alt=""  className='w-100'/>
               </div>
               <div class="right_card">
                   <div class="top">
                       
                       <h2>Digital marketing</h2>
                       <button class="btn1"><b>Visit Chapters <i class="bi bi-arrow-right-circle-fill"></i></b></button>
                   </div>
                   <p>Be-practicle digital marketing course in banglire offer comparehensive curriculam,practical projects nad flexible learning options</p>
                   <div className="course-card-btn">
                    <button className='btn'>Join Now</button>
                   </div>
   
               </div>
           </div>
           <div class="card_container grid-card1" data-aos="fade-down-right">
                 <div class="left_card ">
                 <img src="https://cdn-icons-png.flaticon.com/512/2620/2620993.png" alt=""  className='w-100'/>
               </div> 
               <div class="right_card">
                   <div class="top">
                       
                       <h2>Full-stack</h2>
                       <button class="btn1"><b>Visit Chapters <i class="bi bi-arrow-right-circle-fill"></i></b></button>
                   </div>
                   <p>weprovide full stack develoment course in bang;ore with placement assistance and flexible payment option</p>
                   <div className="course-card-btn">
                    <button className='btn'>Join Now</button>
                   </div>
   
               </div> 
           </div>

           <div class="card_container last" data-aos="fade-down-right">
            <div className="left_card">

            </div>
               <div class="right_card text-white">
                  
   
               </div> 
           </div>
   
          
       </div>
   </div>
    </section>
  )
}

export default Courses
