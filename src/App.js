import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AllServices from './component/AllCourse/AllCourses';
import Contacts from './component/Contacts/Contacts';
import Course from './component/Courses/Course';
import Courses from './component/Courses/Courses';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import AllSer from './component/AllCourseHome/AllCourseHome'

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route  path="/course/:courseID">
            <Courses></Courses>
          </Route>
          <Route  path="/allSer/allServices">
            <AllSer></AllSer>
          </Route>
          <Route exact path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;