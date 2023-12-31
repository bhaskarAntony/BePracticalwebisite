import React from 'react'
import '../styles/training.css'
import placementvideo from '../images/placement-video.mp4'
    
function Training() {
  return (
    <section>

    <div className='container-fluid training'>
    <div className="training-header text-center p-2">
            <h1 className='text-white'  data-aos="fade-up">Mode Of Training </h1>
        </div>
        <div className="training-top">
            <div className="row overflow-hidden">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 border-layout1 p-0">
                    <div className="training-left mb-3">
                   <div className="training-text">
                   <h1  data-aos="fade-up">Keep Learning & Unlock Your Brain <i class="bi bi-battery-charging"></i></h1>
                        <p  data-aos="fade-up">Start Sign up to applay our free demo classes.</p>
                        <div className="form-group mt-3">
                           <div className="row">
                            <div className="col-12 col-sm-8 col-md-8 col-lg-9">
                            <input type="text" className="form-control p-3 rounded-5 fs-5 mb-2"  placeholder='join Now for free demo classes'/>
                            </div>
                            <div className="col-12 col-sm-4 col-md-6 col-lg-3">
                            <button className='btn bg-black text-white w-100 p-3 rounded-5 mb-2'>Join</button>
                            </div>
                           </div>
                            
                        </div>
                   </div>
                        <div className="battery-container">
                            <div className="battery">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 border-layout2">
                  <div className="training-right">
                      <video src={placementvideo} autoPlay loop controls muted>
                      </video>
                      {/* <div className="play-training-video">
                     <div className="play-anim-container">
                     <i class="bi bi-play-fill"></i>
                     </div>
                      </div> */}

                    </div>
                  </div>
            </div>
        </div>
        <div className="training-bottom p-2">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className=" border-0 train-card rounded-5 mb-3 training-card1"  data-aos="zoom-in-down">
                <div className="card-header border-0 bg-transparent">
                <i class="bi bi-people"></i>
                </div>
                <div className="card-body">
                    <span className="fs-3 text-black d-block mb-2">Class Room Training</span>
                    <p>In-house training / classroom training is livelier with our excellent infrastructure and modern facilities and face to face interaction with our trainers.</p>
                    <div className="go-next-training-card">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
            <div className=" border-0 train-card rounded-5 mb-3 training-card2" data-aos="zoom-in-down">
                <div className="card-header border-0 bg-transparent">
                <i class="bi bi-camera-video"></i>
                </div>
                <div className="card-body">
                    <span className="fs-3 text-black d-block mb-2">Online Training</span>
                    <p>Online training lets you compete your training from any place in the world. Learn your desired course while sitting in your home.</p>
                    <div className="go-next-training-card">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3 " data-aos="zoom-in-down">
            <div className=" border-0 train-card rounded-5 mb-3 training-card3">
                <div className="card-header border-0 bg-transparent">
                <i class="bi bi-laptop"></i>
                </div>
                <div className="card-body">
                    <span className="fs-3 text-black d-block mb-2">Corporate Training</span>
                    <p>Our trainers provide corporate training, so you can stay up to date with the latest developments in your field..</p>
                    <div className="go-next-training-card">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
         <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3 " data-aos="zoom-in-down">
            <div className=" border-0 train-card rounded-5 mb-3 training-card4">
                <div className="card-header border-0 bg-transparent">
                <i class="bi bi-building-check"></i>
                </div>
                <div className="card-body">
                    <span className="fs-3 text-black d-block mb-2">Campus Training</span>
                    <p>Be Practical conducts job skill training programs for college students. It helps college students get trained and find their desired job.</p>
                    <div className="go-next-training-card">
                    <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
    </section>
  )
}

export default Training
