import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wraper'>

                <div className='main-info intro-content'>
                    <h1>Criação e Manutenção de Computadores</h1>
                    <Typed
                        className='typed-text'
                        strings={["Web development and Computer solutions", "Full Stack Developer", "Computer Building 🚀"]}
                        typeSpeed={50}
                        backSpeed={70}
                        loop
                    />
                    <a href = '#' className=".btn-main-offer"/>
                </div>
            </div>
    );
}

export default Header;