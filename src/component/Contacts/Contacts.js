
import React from 'react';
import { Container, FormControl, InputGroup, Button } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div>


            <h1 style={{textAlign:"center"}}>Contact With Us</h1>
     <Container>
            <span style={{fontWeight:"bold"}}>Enter Your Name: </span>
            <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
             <FormControl aria-label="First name" />
             <FormControl aria-label="Last name" />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">About Yourself</InputGroup.Text>
            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </InputGroup>

            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
        <div class="mb-3">
         <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <Button variant="primary">Submit Your Massages</Button>
     </Container>
        </div>
    );
};

export default Contacts;