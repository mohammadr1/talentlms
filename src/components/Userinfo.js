import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '../../node_modules/@babel/types';


class Userinfo extends React.Component{
  constructor(props){
    super(props);
     this.state = {
       data:[
         {
          id:1,
          username :"m.mohammad",
          email :"mahdir2302@gmail.com",
          trainingTime : "0h 0m",
          CoursesNotStarted : 1,
          completedCourses : 0,
          coursesInProgress : 0,
        }
       ]
     }
    }
  
  render(){
    return (
          <section className="container-fliud" style={{overflowX:"hidden"}}>
            
          {this.state.data.map((item, index) => (
            <div key={index} className="row">
            
              <div className="CreateCourse-main-card card">
                
                <div className="card-header bg-primary CreateCourse-main-card-header">
                    <ol className="row page-path mt-1">
                      <li className="breadcrumb-item"><Link className="first-page" to="/">خوش آمدید</Link></li>
                      <li className="breadcrumb-item active " aria-current="page">Mohammad</li>
                    </ol>
                </div>
                
                <div className="UserInfo" dir="rtl">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="overview-tab" data-toggle="tab" data-target="#overview" role="tab" aria-controls="overview" aria-selected="true">بررسی اجمالی</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="courses-tab" data-toggle="tab" data-target="#courses" role="tab" aria-controls="courses" aria-selected="false">دوره های آموزشی</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="badges-tab" data-toggle="tab" data-target="#badges" role="tab" aria-controls="badges" aria-selected="false">نشانها</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="timeline-tab" data-toggle="tab" data-target="#timeline" role="tab" aria-controls="timeline" aria-selected="false">جدول زمانی</a>
                    </li>
                  </ul>
                  
                  <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">

                      <div className="row">
                      <div className="userRight">
                        <div className="idUser">
                          <h3>{item.username}</h3>
                    <p>{item.email}</p>
                        </div>
                        <div className="messages">
                            <span className="badge badge-primary">SuperAdmin</span>
                            <span className="badge badge-secondary">Account owner</span>
                        </div>
                      </div>
                      <div className="userLeft">
                      <button type="button" className="btn btn-success" > خروجی اکسل 
                      <i className="fa fa-download" aria-hidden="true"></i>
                      </button>
                      </div>
                      <hr />
                      <div className="user-report">

                      <div className="row">
                      
                      <div className="col borderL badges">
                      <Link data-toggle="modal" data-target="#myModal">
                        <h2>0</h2>
                        <p>نشانها</p>
                        </Link>
                      </div>
                      
                      <div className="col borderL">
                        <h2>0h 0m</h2>
                        <p>وقت تمرین</p>
                      </div>
                      <div className="col borderL coursesStarted">
                        <h2>1</h2>
                        <p>دوره های در انتظار شروع</p>
                      </div>
                      <div className="col borderL">
                        <h2>0</h2>
                        <p>دوره های تمام شده</p>
                      </div>
                      <div className="col">
                        <h2>0</h2>
                        <p>دوره های در حال برگذاری</p>
                      </div>
                    </div>
                    </div>

                    </div>
   
                    <div className="boxNemodar">
                      نمودار انتخابی 
                    </div>

                   </div>
                    
                    
                    <div className="tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">courses</div>
                    <div className="tab-pane fade" id="badges" role="tabpanel" aria-labelledby="badges-tab">badges</div>
                    <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">timeline</div>
                  </div>
                </div>
 
              </div>
            </div>


          ))}

              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header" >
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">M.Mohammad (نشانها)</h4>
                  </div>
                  <div className="modal-body">
                    <p>M.mohammad</p>
                    <p>0 نشانه</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-light" data-dismiss="modal1">تابلو</button>
                  </div>
                </div>

              </div>

              
            </div>


          </section>

    );
  }
}

export default Userinfo;

