import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class verticalMenu extends Component{
    render(){
        return (
                <ul className="vertical-menu">
                    <li className="row bg-primary align-items-center justify-content-end p-4 mb-2 shadow-sm">
                      <Link to="/CreateCourse">ساخت دوره</Link>
                      <img className="ml-4" src="/images/create.png" alt="create-course" />
                    </li>
                    <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                      <Link to="/EditCourse">ویرایش دوره</Link>
                      <img className="ml-4" src="/images/edit.png" alt="course-edit" />
                    </li>
                    <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                      <Link to="/Course">دوره‌های من</Link>
                      <img className="ml-4" src="/images/file.png" alt="all-course" />
                    </li>
                    <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                      <Link to="" className="mt-1">گزارش دوره‌ها</Link>
                      <img className="ml-4" src="/images/chart.png" alt="course-report" />
                    </li>
                </ul>
        );
    }
}
