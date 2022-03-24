import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import code from '../img/code.png'
import '../css/Cards.css'

const Cards = () => {
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={code} alt='Image 1' className='image-card'/>

            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Web Developer</h4>
                <p className='card-text text-secondary'>Web developer at Fitbank 450 and The Marias Beauty</p>
                <a href = '#' className='btn-card btn-sucess btn-outline-sucess'>About more</a>
            </div>
        </div>
    );
}

export default Cards;