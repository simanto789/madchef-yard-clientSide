import React from 'react';
import logo from '../assets/chef1.jpg'
import {  Container } from 'react-bootstrap';

const Banner = () => {
    const imageStyle = {
        width: '600px',
        height: '400px',
    };
    return (
        <Container className='mt-3 mb-3 d-md-flex justify-content-between p-4'>
            <div className='mt-md-3 text-md-left'>
                <h2 className='fs-1 fw-bolder'>Enjoy Exceptional <br />Journey of <br /> <span className='text-danger'>Tastes!!!</span></h2> 
                <div className='fw-semibold mt-3 mb-3'>
                    <p>We Take great care in <br />  everything we prepare <br />served with big smiles <br /> with a great value.Best <br /> delicious food,<span className='text-danger fw-bolder'>wonderful <br /> eating..</span> </p>
                </div>
                <button type="button" className="btn btn-outline-danger">Read More</button>
            </div>
            <img className="img-fluid align-self-center mt-4 mt-md-0" src={logo} alt="" style={imageStyle} />
        </Container>
    );
};

export default Banner;