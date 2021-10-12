import React from 'react';
import { Card } from 'react-bootstrap';
import AllServices from '../AllCourse/AllCourses'

const AllSer = () => {
    return (
        <div>
            <div>
            <Card className="text-center" style={{marginTop:"5px", backgroundColor:"#C0C0C0", height:"20rem"}}>
  <Card.Body>
    <Card.Title><img src="/logo2.png"/></Card.Title>
    <Card.Text>
     <h1>Choose Your Course And Start Your Career</h1>
     <h1>From Here</h1>
    </Card.Text>
  </Card.Body>
</Card>
            </div>
            <AllServices></AllServices>
        </div>
    );
};

export default AllSer;