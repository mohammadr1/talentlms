import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/sections/Header';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CreateCourse from './components/CreateCourse';
import Course from './components/Course';

function App() {
  return (
   <div>
      <Header />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/About" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/CreateCourse" component={CreateCourse} />
      <Route path="/Course" component={Course} />
    </div>
  );
}

export default App;
