//  Start Imports Routes

import Home from './components/Home';
import CreateCourse from './components/CreateCourse';
import Course from './components/Course';
import Userinfo from './components/Userinfo';
import AddVideo from './components/AddVideo';


//  End Imports Routes


//  Start Routes

export default [
    { path : "/", component : Home, exact : true},
    { path : "/CreateCourse", component : CreateCourse, exact : true},
    { path : "/Course", component : Course, exact : true},
    { path : "/userinfo", component : Userinfo, exact : true},
    { path : "/addvideo", component : AddVideo, exact : true},
    
    ];

//  End Routes
