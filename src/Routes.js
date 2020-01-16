//  Start Imports Routes

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CreateCourse from './components/CreateCourse';
import Course from './components/Course';
import Userinfo from './components/Userinfo';


//  End Imports Routes


//  Start Routes

export default [
    { path : "/", component : Home, exact : true},
    { path : "/about", component : About, exact : true},
    { path : "/contact", component : Contact, exact : true},
    { path : "/CreateCourse", component : CreateCourse, exact : true},
    { path : "/Course", component : Course, exact : true},
    { path : "/userinfo", component : Userinfo, exact : true},
    
    ];

//  End Routes
