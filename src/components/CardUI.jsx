import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import code from './../img/code.png';
import './../css/Cards.css'

const CardUI = props => {
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={code} alt='Image 1' className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Web Developer</h4>
                <p className='card-text text-secondary'>Web developer at Fitbank 450 and The Marias Beauty</p>
                <a href = '#' className='btn btn-card btn-outline-sucess'>About more</a>
            </div>
        </div>
    );
}

export default CardUI;