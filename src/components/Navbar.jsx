import React from 'react'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div >
      <header>
        <a class="logo" href="#">logo</a>
        <nav>
            <ul>
                <li></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">course <i></i></a>
                <ul>
                    <li><a href="#">fullstack development</a>
                    <ul>
                        <li><a href="#">Mean full-stack</a></li>
                        <li><a href="#">Mern full-Stack</a></li>
                        <li><a href="#">Java full-stack</a></li>
                        <li><a href="#">Python full-stack</a></li>
                        <li><a href="#">DotNet full-stack</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Data Scince</a></li>
                    <li><a href="#">Cloud Computing</a></li>
                    <li><a href="#">sofware testing</a></li>
                    <li><a href="#">Digital marketing</a></li>
                    <li><a href="#">job guaranted cource</a></li>
                </ul>
                </li>
                <li><a href="#">About</a>
                <ul>
                    <li><a href="#">why be practicle</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
                </li>
                <li><a href="#">portfolio</a></li>
                <li><a href="event">event</a></li>
                <li><a href="blog">blog</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </nav>
    </header>

    </div>
  )
}

export default Navbar
