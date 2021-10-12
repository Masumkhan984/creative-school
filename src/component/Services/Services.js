import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useData from '../../Hooks/useData';
import Service from './Service';

const Services = () => {
    const [data, setData] = useData([])
    const history = useHistory();

    const handleClick =()=>{
        history.push(`/allSer/allServices`)
     }
    return (
        <div>
            <div className="courses">
                <Container>
                    <Row xs={2} md={2} className="g-4"> 
                        {(data.map(course => <Service
                        key={course.id}
                            course={course}
                        // hanldleAddToCart={hanldleAddToCart}
                        ></Service>)).slice(0,4)}
                    </Row>
                    <Card  style={{ border: 'none',marginTop:'10px',backgroundColor:'#fff'}}className="text-center">
                    <Card.Body>
                     <Button onClick={handleClick}  variant="outline-primary" style={{padding:'10px 30px'}}> See Some More Courses  --->>> </Button>
                    </Card.Body>
                 </Card>
         </Container>
            </div>
        </div>
    );
};

export default Services;