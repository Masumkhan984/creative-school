
import React from 'react';
import { Card, Col, Container, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const AllCourse = (props) => {
    const {course_name, rating, course_title, details, fee, img, language, student_number} = props.all;
    return (
        <div>
            <Container>
            <Col>
             <Card style={{backgroundColor:'#E1E4E9',textAlign:'start'}} className="card">
                 {console.log(props.course)}
                 <Card.Img variant="top" src={img} height="280px" width="100px"/>
                 <Card.Body>
                     <Card.Title style={{margin:' 30px 10px'}}><h3>{course_name}</h3></Card.Title>
                     <Card.Text>
                         <h5 style={{color:'#887C72'}}>{course_title}</h5>
                        <h5><u>What You Will Learn:</u></h5>
                        <h6>{details}</h6>
                         <h6>Language: {language}</h6>
                         <h6>Enrolled Students: {student_number}</h6>
                     </Card.Text>
                     Ratings: ({rating})   
                     <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="far fa-star fa icon-color"
                        readonly/>
                        <br></br>
                        <span style={{display:"flex"}}><h1>${fee}</h1><h5>(30% off)</h5></span>
                     <Button variant="primary">Add to Cart</Button>
                 </Card.Body>
             </Card>
          </Col> 
         </Container>
        </div>
    );
};

export default AllCourse;