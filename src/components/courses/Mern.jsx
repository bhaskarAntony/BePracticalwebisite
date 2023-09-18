import React from 'react'
import Register_form from '../basic-Components/Register'
import Menu from '../Menu'
import './style.css';

function Mern() {
  return (
    <>
    <Menu/>
    <div className='container-fluid course-page-container'>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
          <h1>Mern stack</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
            <Register_form/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Mern
