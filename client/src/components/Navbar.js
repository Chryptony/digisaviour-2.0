import React from 'react'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar1  ">
                <div class="container-fluid nav1 bg-warning text-dark ">
                    <div className="nav justify-content-center ">
                        <Link to="/" ><img src={logo}/></Link>
                        <button class="navbar-toggler position-absolute top-10 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse nav justify-content-center navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                                <li class="nav-item">
                                    <Link class="nav-link fw-bold" to="/Produk-Digisaviour">Produk Digisaviour</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link fw-bold" to="/konsultasi">Konsultasi</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link fw-bold" to="/Contact-us">Hubungi Kami</Link>
                                </li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar