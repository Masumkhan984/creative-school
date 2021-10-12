import React from 'react';
import Img1 from '../../images/myPhoto.png';
import './Chairman.css'
import { Container } from 'react-bootstrap';

const Chairman = () => {
    return (
        <Container>
        <div className="row studen">
            <div className="man col-6">
                <img src={Img1}/>
            </div>
            <div className="col-6">
            <h1>MD. MASUM BILLAH</h1>
            <br></br>
            <h4>The CEO and Founder of Chairman Of Creative Shool</h4>
            
            <h5>Phone No : 01770709984 any time at (24 / 7)</h5>
            </div>
        </div>
        </Container>
    );
};

export default Chairman;