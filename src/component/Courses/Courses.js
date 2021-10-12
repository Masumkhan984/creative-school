import React from 'react';
import { Container} from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Course from './Course'



const Courses = () => {
    const [data, setData] = useData([]);
    return (
        <div>
            <Container>
                {
                   data.map(course => <Course course={course}></Course>)
                }
            </Container>
        </div>
    );
};
export default Courses;