import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../logo.png";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="#"><img src={logo} className="img img-logo" alt="logo..." ></img></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
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
        </nav>

    );
}

export default Navbar