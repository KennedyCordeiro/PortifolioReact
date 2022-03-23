import React from 'react';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='header-wraper'>
                <div className='main-info intro-content'>
                    <h1>KenTech Technology</h1>
                    <Typed
                        className='typed-text'
                        strings={["Web development", "Full Stack Developer", "Computer Building 🚀"]}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    />
                    <a href= '#' className="btn-main-offer">Contact me</a>
                </div>
            </div>
            

            
    );
}

export default Header;