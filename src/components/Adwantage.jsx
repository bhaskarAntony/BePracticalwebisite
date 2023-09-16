import React, { useEffect } from 'react'
import '../styles/adwantage.css'
import AOS from 'aos';

function Adwantage() {

  return (
    <section className='adwantage container-fluid'>
        {/* <div className="blur"></div>
        <div className="blur2"></div> */}
        <div className="adwantage-header p-5 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-white'>TRAINING ADVANTAGE @ BE-PRACTICAL</h1>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">FREE DEMO CLASSES</h4>
                        <p>Before enrolling, a free DEMO lesson is provided.</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-building-fill-check"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">JOB ORIENTED COURSES</h4>
                        <p>Be Practical offers career-focused training with hand-picked job oriented courses in Bangalore.</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-camera-video-fill"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">BACKUP CLASSES</h4>
                        <p>Missed classes are covered by backup classes</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-laptop"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">FREE TECHNICAL SUPPORT</h4>
                        <p>Connect to technical discussion boards for project help.</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-calendar3"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">REAL TIME PROJECTS</h4>
                        <p>Gain world-class exposure with our real-time projects</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-person-check-fill"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">FREE HR SESSIONS</h4>
                        <p>Before you join, you receive a complimentary HR session.</p>
                    </div>
                </div>
            </div>
           
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-journals"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">INTERVIEW TIPS</h4>
                        <p>Our HR Team Provides you with Interview Tips</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-person-hearts"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">DEDICATED HR</h4>
                        <p>Dedicated HR to take care of interviews & Job.</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 mb-3">
                <div className=" adwantage-card p-2" data-aos="fade-up"
                            data-aos-anchor-placement="top-center" data-aos-duration="500">
                    <div className="card-header">
                    <i class="bi bi-person-video3"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="fs 2">DEDICATED TRAINERS</h4>
                        <p>Dedicated & experienced trainers in Be Practical</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    </section>
  )
}

export default Adwantage
