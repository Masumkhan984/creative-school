import React from 'react';
import { Container} from 'react-bootstrap';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';
import Course from './Course';



const Courses = () => {
    // const [data] = useData([]);
    // let {courseID} = useParams();
    // let oneCourse ={}
    // for( const data1 of data){
    //     if(data1.id === courseID){
    //         oneCourse.push(data1)
    //     }
    // }
    
    return (
        <div>
            <Container>
                <Course></Course>
            </Container>
        </div>
    );
};
export default Courses;