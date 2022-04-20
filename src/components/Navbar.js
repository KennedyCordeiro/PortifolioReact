import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className='container-fluid'>
            <a className="navbar-brand" href="#"><img src={logo} className="img img-logo" alt="logo..." ></img></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBarsStaggered} style = {{color: "#fff"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive" anime="center">
                <ul className="navbar-nav ms-auto text-uppercase" id="NavItem">
                    <li className="nav-item active">
                        <a className="nav-link js-scroll-trigger" href="#services">Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    );
}

export default Navbar;