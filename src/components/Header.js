import React from 'react';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

const Header = () => {
    return (
        <div className='header-wraper '>
                <div className='main-info intro-content collapse.show'>
                    <h1 className=''>KenTech Technology</h1>
                    <Typed
                        className='typed-text'
                        strings={["Web development", "Full Stack Developer", "Computer Builder 🚀"]}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    />
                    <a href='https://api.whatsapp.com/send?phone=5588994148159&text=Ol%C3%A1%20Kennedy%2C%20pode%20me%20ajudar%3F'className="btn-main-offer">Contact me</a>
                </div>
            </div>
            

            
    );
}

export default Header;