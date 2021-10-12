import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import All from "./AllCourse";


const AllCourses = () => {
   const [allservices, setAllservices] = useState([]);
   useEffect(()=>{
       fetch('https://raw.githubusercontent.com/Masumkhan984/fackData/main/school.json')
       .then(res => res.json())
       .then(data => setAllservices(data))
   },[])

    return (
        <div>
            <Container>
           <Row xs={2} md={2} className="g-4"> 
           {
            allservices.map(all => <All key={all.id} all={all}></All>)
           }
           </Row>
           </Container>
        </div>
    );
};

export default AllCourses;