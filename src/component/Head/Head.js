import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Head.css';
import  img1  from '../../images/degital2.png';
import  img2  from '../../images/team.jpg';
import  img3  from '../../images/top11.png';

const Head = () => {
    return (
        <Container>
        <Carousel className="banner">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    height="350px"
                    width="350px"
                    alt="img1"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    height="350px"
                    width="350px"
                    alt="img2"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    height="350px"
                    width="350px"
                    alt="img3"
                />

                <Carousel.Caption>
                  <h1 className="titleH">Web Development And Freelancing</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
};

export default Head;