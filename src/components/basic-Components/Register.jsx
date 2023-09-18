import React from 'react'
import './register.css';

function Register() {
  return (
   <div className="register p-0">
     <div className='card p-3 border-0'>
      <div className="card-header text-center bg-white">
        <span className="fs-3">Book free master classes now</span>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control p-2" placeholder='Enter name' />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control p-2" placeholder='Enter name' />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="name" className="form-label">Mobil Number</label>
        <input type="tel" className="form-control p-2" placeholder='Mobile Number' />
      </div>
      <div className="form-group mt-4">
       <button className="register-btn btn p-2 fs-5">Book Free Demo Class</button>
      </div>
    </div>
   </div>
  )
}

export default Register
