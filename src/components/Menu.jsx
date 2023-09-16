// Menu.js
import React from 'react';
import '../styles/menu.css';

function Menu() {
    
return (
<div class="">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src="https://be-practical.com/images/Be-logo.png" alt="" /></a>
            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-bg-white text-white"></span>
            </button>
            <div class="collapse navbar-collapse mynavbar" id="navbarNav">
                <ul class="navbar-nav mynavbar">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown position-static">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Courses
                        </a>
                        <div className="dropdown-menu mega-dropdown" aria-labelledby="navbarDropdown">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                    <span className="fs-5">FullStack Devolopment</span>
                                        <ul className='p-0'>
                                            <li><a href="https://be-practical.com/mern-stack-development-training/">MERN FullStack</a></li>
                                            <li><a href="https://be-practical.com/python-fullstack/">MEAN FullStack</a></li>
                                            <li><a href="https://be-practical.com/java-fullstack-developer-course/">Java FullStack</a></li>
                                            <li><a href="https://be-practical.com/python-fullstack/">Python FullStack</a></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <span className="fs-5">Cloud Computing</span>
                                        <ul className='p-0'>
                                            <li><a href="https://be-practical.com/advanced-cloud-computing-aws/">Adwance Cloud Computing</a></li>
                                            <li><a href="">DevOps</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                    <span className="fs-5">Other Courses</span>
                                        <ul className='p-0'>
                                            <li><a href="https://be-practical.com/data-science-course-in-bangalore">Data Science</a></li>
                                            <li><a href="https://be-practical.com/testing-training-institute-job-guaranteed/">Software testing</a></li>
                                            <li><a href="https://be-practical.com/data-science-course-in-bangalore">Digital Marketing</a></li>
                                            <li><a href="https://be-practical.com/job-guaranteed-courses-in-bangalore">Job garanteed Courses</a></li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown position-static">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            AboutUs
                        </a>
                        <div className="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                    <span className="fs-5">FullStack Devolopment</span>
                                        <ul>
                                            <li><a href="https://be-practical.com/mern-stack-development-training/">MERN FullStack</a></li>
                                            {/* <li><a href="">MERN FullStack</a></li> */}
                                            {/* <li><a href="">MEAN FullStack</a></li> */}
                                            <li><a href="https://be-practical.com/java-fullstack-developer-course/">Java FullStack</a></li>
                                            <li><a href="https://be-practical.com/python-fullstack/">Python FullStack</a></li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://be-practical.com/events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://be-practical.com/gallery" tabindex="-1">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://be-practical.com/blogs" tabindex="-1">Blog</a>
                    </li>
                    <li className="nav-item dropdown position-static">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                          For Companies
                        </a>
                        <div className="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                    <span className="fs-5">All Thing You to Get Job</span>
                                        <ul>
                                            <li><a href="https://be-practical.com/java-fullstack-developer-course/https://be-practicalhr.com/corporate-training-in-bangalore/">Corporate Trainig</a></li>
                                            <li><a href="https://be-practical.com/java-fullstack-developer-course/https://be-practicalhr.com/">HR Services</a></li>
                                            <li><a href="https://be-practical.com/contact-us/">Hired Trained Graduates</a></li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="divider-line"></div>
</div>
);
}

export default Menu;