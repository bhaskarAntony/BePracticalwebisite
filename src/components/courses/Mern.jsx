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
        <div class="jumbotron text-white">
          <h1>Hello, world!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe molestias voluptates distinctio magni esse itaque officiis? Minus, autem? Atque architecto labore quia earum ipsa consectetur quis? Excepturi, nesciunt aspernatur. </p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
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
