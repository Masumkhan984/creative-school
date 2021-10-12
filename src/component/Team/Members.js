import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Member from './Member';
import './Members.css'

const Members = () => {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Masumkhan984/fackData/main/teachers.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div className="team">
            <Container>
            <h1 style={{textAlign:"center", marginTop:"50px"}}>Our Team Members</h1>
            <div className="body-container">
                <div className="member-container">
            {
                members.map(member=><Member member={member}></Member>)
            }
                </div>
            </div>
            </Container>
        </div>
    );
};
export default Members;