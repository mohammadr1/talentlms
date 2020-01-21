//  Start Imports Routes

import Home from './components/Home';
import CreateCourse from './components/CreateCourse';
import EditCourse from './components/editCourse/index';
import Course from './components/Course';
import Course from './components/course/index';
import Userinfo from './components/userInfo/index';
import AddVideo from './components/AddVideo';


//  End Imports Routes


//  Start Routes

export default [
    { path : "/", component : Home, exact : true},
    { path : "/CreateCourse", component : CreateCourse, exact : true},
    { path : "/Course", component : Course, exact : true},
    { path : "/userinfo", component : Userinfo, exact : true},
    { path : "/addvideo", component : AddVideo, exact : true},
    { path : "/EditCourse", component : EditCourse, exact : true},
    
    ];

//  End Routes
