import React from 'react';

const Course = (props) => {
    const name = props.course;
    
    return (
        <div>
            <h1>name:{name.length}</h1>
        </div>
    );
};

export default Course;