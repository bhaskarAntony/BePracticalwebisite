import React from 'react'
import Homedata from './Homedata'; // Import your component
import '../styles/home.css'
import Menu from './Menu';
import homegif from '../images/user-interface.gif'
const data = [
  {
    boldtext:"High Paid Salaries & Continuous Career Grouth",
},
{
  boldtext:"Be Practicle Job Oriented Training",
},
{
  boldtext:"High Paid Salaries & Continuous Career Grouth",
},
{
  boldtext:"Be Practicle Job Oriented Training",
}
]

function Home() {
  // Get all elements with the class "animated-item"
const animatedItems = document.querySelectorAll('.animated-item');

// Function to generate a random delay between 0 and 2 seconds
function getRandomDelay() {
  return Math.random() * 5000; // Values in milliseconds
}

// Apply random animation delays to each element
animatedItems.forEach((item) => {
  item.style.animationDelay = `${getRandomDelay()}ms`;
});
  return (
    <div className="home-container-black">
      <div className='home container-fluid'>
      <Menu/>
      {/* <div className="blur">

      </div> */}
        <div className="row">
          <div className="col-12 col-md-12 col-lg-7">
            <div className="home-left">
            <div className="home-text mb-3">
              <Homedata items={data} />
              </div>
              
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5">
            <div className="home-right">
               <img src={homegif} alt="" />

               <div className="lan-icons icon1">
               <img src="https://static.vecteezy.com/system/resources/previews/012/697/295/original/3d-python-programming-language-logo-free-png.png" alt="" />
               </div>
               <div className="lan-icons icon2">
               <img src="https://cdn3d.iconscout.com/3d/premium/thumb/coding-language-6954433-5708996.png" alt=""  />
               </div>
               <div className="lan-icons icon3">
               <img src="https://cdn3d.iconscout.com/3d/premium/thumb/search-code-6954434-5708997.png" alt=""  />
               </div>
               <div className="lan-icons icon4">
               <img src="https://cdn3d.iconscout.com/3d/premium/thumb/firewall-9337986-7644100.png?f=webp" alt=""  />
               </div>
               <div className="lan-icons icon5">
               <img src="https://cdn3d.iconscout.com/3d/premium/thumb/programming-language-6463741-5734964.png" alt=""  />
               </div>
               <div className="lan-icons icon6">
               <img src="https://cdn3d.iconscout.com/3d/premium/thumb/java-script-8533752-6716439.png" alt="" />
               </div>
               
               
               
              
               
               
               <div className="wave-image">

               </div>
               <div className="blur2">

              </div>
               

            </div>
          </div>
        </div>
       
        {/* <div className="home-companies-start text-center text-white">
          <h3>Trusted by the world's best companies</h3>
        <div className="home-companies">
          <div>
            <ul className="homescroll1">
              <li><h3>CodeOps</h3></li>
              <li><h3>AppScript</h3></li>
              <li><h3>Eminds</h3></li>
              <li><h3>Henkel</h3></li>
              <li><h3>MRK</h3></li>
              <li><h3>BlueTree</h3></li>
              <li><h3>InfoMaze</h3></li>
              <li><h3>BlueTechnoSoft</h3></li>
              <li><h3>IdexPoke</h3></li>
              <li><h3>AMBC</h3></li>
              <li><h3>DigitalShark</h3></li>
              <li><h3>InnoMinds</h3></li>
              <li><h3>CurveWing</h3></li>
              <li><h3>Endexel</h3></li>
              <li><h3>Joules to Watts</h3></li>
              <li><h3>Entoss</h3></li>
              <li><h3>CareAtor</h3></li>
              <li><h3>Fartune Softech</h3></li>
              <li><h3>Date Template</h3></li>
              <li><h3>ExamRoom</h3></li>
              <li><h3>DiaToz</h3></li>
            </ul>
          </div>
          <div >
          <ul className="homescroll2">
              <li><h3>CodeOps</h3></li>
              <li><h3>AppScript</h3></li>
              <li><h3>Eminds</h3></li>
              <li><h3>Henkel</h3></li>
              <li><h3>MRK</h3></li>
              <li><h3>BlueTree</h3></li>
              <li><h3>InfoMaze</h3></li>
              <li><h3>BlueTechnoSoft</h3></li>
              <li><h3>IdexPoke</h3></li>
              <li><h3>AMBC</h3></li>
              <li><h3>DigitalShark</h3></li>
              <li><h3>InnoMinds</h3></li>
              <li><h3>CurveWing</h3></li>
              <li><h3>Endexel</h3></li>
              <li><h3>Joules to Watts</h3></li>
              <li><h3>Entoss</h3></li>
              <li><h3>CareAtor</h3></li>
              <li><h3>Fartune Softech</h3></li>
              <li><h3>Date Template</h3></li>
              <li><h3>ExamRoom</h3></li>
              <li><h3>DiaToz</h3></li>
              <li><h3>KPSS Kalpar</h3></li>
            </ul>
          </div>
        </div>
        </div> */}
        <div className="divider-line-companies">
          
        </div>
       <div className="border-colored">
       <div className="register p-2 align-items-center">
          <div className=" p-2 rounded-1 py-3">
            <div className="card-header-text">
              <span className="fs-3 text-center">Register For Free Demo Session</span>
            </div>
          <div className="row mt-2">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor='email' className="form-label">Email Address</label>
                  <input type="email" placeholder='Email' className='form-control' />
                 </div> 
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group">
                  <label htmlFor='phone' className="form-label">Mobile Number</label>
                  <input type="number" placeholder='Phone' className='form-control' />
                 </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group form-group-last">
                  <label htmlFor="course" className="form-label">Select Course</label>
                  <select className='form-control'>
                    <option value="mern">MERN</option>
                    <option value="mern">Python Fullstack</option>
                    <option value="mern">Java Fullstack</option>
                    <option value="mern">Data Science</option>
                    <option value="mern">Cloud Computing</option>
                  </select>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-btn">
              <button>Join Now</button>
            </div>
          </div>
          </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Home
