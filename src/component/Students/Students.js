import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Student from './Student';
import '../Team/Members.css'
const Students = () => {
    const [students, setStudents] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Masumkhan984/fackData/main/students.json')
        .then(res => res.json())
        .then(data => setStudents(data))
    },[])
    return (
        <div>
            <Container>
            <h1 style={{textAlign:"center", marginTop:"50px"}}>What Students Say About Us</h1>
            <div className="body-container">
                <div className="member-container">
                 {
               students.map(student =><Student student={student}></Student>)
                 }
           </div>
           </div>
         </Container>
        </div>
    
    );
};

export default Students;