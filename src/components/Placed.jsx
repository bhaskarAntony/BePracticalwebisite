import React from 'react';
import AutoScrollCarousel from './AutoScrollCarousel'; // Import your component
import AutoScrollCarousel2 from './AutoScrollCarousel'; // Import your component

import '../styles/placed.css'
import i1 from '../images/1.jpg'
import i2 from '../images/2.jpg'
import i3 from '../images/3.jpg'
import i4 from '../images/4.png'
import i5 from '../images/5.png'
import i6 from '../images/6.jpg'
import i7 from '../images/7.jpg'
import i8 from '../images/8.jpg'
import i9 from '../images/9.jpg'
import i10 from '../images/10.jpg'
import i11 from '../images/11.jpg'
import i12 from '../images/12.png'
import i13 from '../images/13.jpg'
import i14 from '../images/14.jpg'
import i15 from '../images/15.jpg'
import i16 from '../images/16.jpg'
import i17 from '../images/17.jpg'
import i18 from '../images/18.png'
import i19 from '../images/19.png'
import i20 from '../images/20.png'
import i21 from '../images/21.jpg'
import i22 from '../images/22.png'
import i23 from '../images/23.png'
import i24 from '../images/24.jpg'
import i25 from '../images/25.jpg'
import i26 from '../images/26.jpg'
import i27 from '../images/27.jpg'
import i28 from '../images/28.jpg'
import i29 from '../images/29.jpg'
import i30 from '../images/30.jpg'
import i31 from '../images/31.jpg'
import i32 from '../images/32.jpg'
import i33 from '../images/33.jpg'
import i34 from '../images/34.png'
import i35 from '../images/35.png'
import i36 from '../images/36.png'
import i37 from '../images/37.jpg'
import i38 from '../images/38.png'
import i39 from '../images/39.png'
import i40 from '../images/40.png'

const items = [
  {
    imageUrl: i1,
  },
  {
    imageUrl: i2,
  },
  {
    imageUrl: i3,
  },
  {
    imageUrl: i4,
  },
  {
    imageUrl: i5,
  },
  {
    imageUrl: i6,
  },
  {
    imageUrl: i7,
  },
  {
    imageUrl: i8,
  },
  {
    imageUrl: i9,
  },
  {
    imageUrl: i10,
  },
  {
    imageUrl: i11,
  },
  {
    imageUrl: i12,
  },
  {
    imageUrl: i13,
  },
  {
    imageUrl: i13,
  },
  {
    imageUrl: i15,
  },
  {
    imageUrl: i16,
  },
  {
    imageUrl: i17,
  },
  {
    imageUrl: i18,
  },
  {
    imageUrl: i19,
  },
  {
    imageUrl: i20,
  },
  {
    imageUrl: i21,
  },
  {
    imageUrl: i22,
  },
  {
    imageUrl: i23,
  },
  {
    imageUrl: i24,
  },
  {
    imageUrl: i25,
  },
  {
    imageUrl: i26,
  },
  {
    imageUrl: i27,
  },
  {
    imageUrl: i28,
  },
  {
    imageUrl: i20,
  },
  {
    imageUrl: i31,
  },
  {
    imageUrl: i32,
  },
  {
    imageUrl: i33,
  },
  {
    imageUrl: i34,
  },
  {
    imageUrl: i35,
  },
  {
    imageUrl: i36,
  },
  {
    imageUrl: i37,
  },
  {
    imageUrl: i38,
  },
  {
    imageUrl: i39,
  },
  {
    imageUrl: i40,
  }
];

const items2 = [
  
  {
    imageUrl: i11,
  },
  {
    imageUrl: i12,
  },
  {
    imageUrl: i13,
  },
  {
    imageUrl: i13,
  },
  {
    imageUrl: i15,
  },
  {
    imageUrl: i16,
  },
  {
    imageUrl: i17,
  },
  {
    imageUrl: i18,
  },
  {
    imageUrl: i19,
  },
  {
    imageUrl: i20,
  },
  {
    imageUrl: i1,
  },
  {
    imageUrl: i2,
  },
  {
    imageUrl: i3,
  },
  {
    imageUrl: i4,
  },
  {
    imageUrl: i5,
  },
  {
    imageUrl: i6,
  },
  {
    imageUrl: i7,
  },
  {
    imageUrl: i8,
  },
  {
    imageUrl: i9,
  },
  {
    imageUrl: i10,
  },
  {
    imageUrl: i31,
  },
  {
    imageUrl: i32,
  },
  {
    imageUrl: i33,
  },
  {
    imageUrl: i34,
  },
  {
    imageUrl: i35,
  },
  {
    imageUrl: i36,
  },
  {
    imageUrl: i37,
  },
  {
    imageUrl: i38,
  },
  {
    imageUrl: i39,
  },
  {
    imageUrl: i40,
  },
  {
    imageUrl: i21,
  },
  {
    imageUrl: i22,
  },
  {
    imageUrl: i23,
  },
  {
    imageUrl: i24,
  },
  {
    imageUrl: i25,
  },
  {
    imageUrl: i26,
  },
  {
    imageUrl: i27,
  },
  {
    imageUrl: i28,
  },
  {
    imageUrl: i20,
  },
 
];

function Placed() {
  return (
    <section className='bg-white'>
    <div className="placed-header p-5 text-center">

    <span className="fs-1"  data-aos="fade-up">Placed Our Students</span>
    </div>
    <div className="placed">
      <div className="row">
      <div className="col-12 col-md-12 col-lg-6 mb-3">
        <div className=" certificate-text">
         <div>
         <span className='brand fs-2 mb-3' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">@BE Practical</span>
          <h1 className="c-header"  data-aos="fade-up">Our Students Working At Top MNC companies.</h1>
          <button className=' Enquire-btn'  data-aos="fade-up">Enquire Now</button>
         </div>
        </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
        <div className="certificate mb-3">
        <AutoScrollCarousel items={items} />
        </div>
        </div>
      </div>
    
      {/* <div className="placed-section-text-scroll">
        <marquee behavior="scroll" direction="left"><span>Join Now <span className="text-white">Be Practicle's</span> 100% Placement Programs </span> <button className='btn bg-black text-white'>Join Now</button> </marquee>
      </div> */}
    </div>
    <div className="services">
       <div className="row">
        <div className="col-12 col-sm-12 col-md-9 col-lg-9">
        <span className="fs-2">We run all kinds of IT services that make your success</span>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-lg-end text-sm-center">
        <button className="btn bg-primary text-white p-2">Let's Talk Now</button>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Placed;
