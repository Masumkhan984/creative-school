import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    // const {id} = props.oneCourse;

    return (
        <div>
            <h2>This course is not Available now.</h2>
            <h1>Coming Soon</h1>
            <h1>Please, Wait for our coming course</h1>
            <Button><NavLink to="/"><h5  style={{ color:"white", textDecoration:'none'}}> ←--Go Back to Home </h5></NavLink></Button>
        </div>
    );
};

export default Course;