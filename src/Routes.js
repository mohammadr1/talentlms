//  Start Imports Routes

import Home from './components/Home';
import CreateCourse from './components/CreateCourse';
import EditCourse from './components/EditCourse';
import Course from './components/Course';
import Userinfo from './components/Userinfo';


//  End Imports Routes


//  Start Routes

export default [
    { path : "/", component : Home, exact : true},
    { path : "/CreateCourse", component : CreateCourse, exact : true},
    { path : "/Course", component : Course, exact : true},
    { path : "/userinfo", component : Userinfo, exact : true},
    { path : "/EditCourse", component : EditCourse, exact : true},
    
    ];

//  End Routes
