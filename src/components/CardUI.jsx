import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/Cards.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CardUI = props => {
    // [tags, SetTags] = useState({tags:[]})

    // const handleTag = () => {
    //     SetTags({})
    // }


    return (

        <div className='card text-center'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='Image 1' className='card-img-top'/>
            </div>
            <div className='card-body'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>Web developer at Fitbank 450 and The Marias Beauty</p>
                <a href = '#' className='btn btn-card btn-outline-sucess'>About more</a>
            </div>
        </div>
    );
}

export default CardUI;