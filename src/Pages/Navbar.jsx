import '../Assets/Style.css'
import React from 'react'
import Logo from '../Assets/logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top navbar">
        <div className="navbar-brand text-light">
            <img src={Logo} alt='...'/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""><i class="ri-menu-line"></i></span>
        </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <div className='ms-auto mb-2 btn-contact'>
                    <Link to='/contact'>
                        <button className="btn mt-2 fs-5 text-light" type="#">Contact Us</button>
                    </Link>
                </div>
            </div>
       </nav>
    </div>
  )
}
