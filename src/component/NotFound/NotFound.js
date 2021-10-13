import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
                <Card className="text-center">
             <Card.Header>Error Page</Card.Header>
                 <Card.Body>
                  <Card.Title>  <h1>404 Error Page</h1></Card.Title>
                     <Card.Text>
                    <h3> Sorry, This page Doesn't Exist</h3>
                   <h4>This Page Doesn't Exsits</h4>
                 </Card.Text>
            </Card.Body>
         <Card.Footer><NavLink to="/"><h5  style={{color:'white', textDecoration:'none'}}> ←--Go Back </h5></NavLink></Card.Footer>
        </Card>
            <Container>
           
           
           
            </Container>
        </div>
    );
};

export default NotFound;