import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '../../node_modules/@babel/types';


class Userinfo extends React.Component{
  constructor(props){
    super(props);
     this.state = {
      overview:[
         {
          id:1,
          username :"m.mohammad",
          email :"mahdir2302@gmail.com",
          badges:1,
          trainingTime : "0h, 30m",
          CoursesNotStarted : 1,
          completedCourses : 0,
          coursesInProgress : 0,
        }
       ],
       courses:[
         {
          id : 1,
          course : "Advanced Features of TalentLMS",
          progress : "Not started",
          score : "-",
          enrolled : "1 hour ago",
          completiondata : "-",
          time : "-",
         },
         {
          id : 1,
          course : "Advanced Features of TalentLMS",
          progress : "Not started",
          score : "-",
          enrolled : "1 hour ago",
          completiondata : "-",
          time : "-",
         },
       ],
       badge:[
         {
           id : 1,
           imgClass : "fa fa-eercast fa-5x",
           title : "عنوان badge",
         },
         {
           id : 1,
           imgClass : "fa fa-eercast fa-5x",
           title : "عنوان badge",
         },
       ],
       learning:[
         {
           id : 1,
           imgClass : "fa fa-eercast fa-5x",
           title : "عنوان learning",
         },
         {
           id : 1,
           imgClass : "fa fa-eercast fa-5x",
           title : "عنوان learning",
         },
       ],
       pattern:[
         {
           id : 1,
           imgClass : "fa fa-eercast fa-5x",
           title : "عنوان pattern",
         },
         {
           id : 1,
           imgClass : "fa fa-eercast fa-5x",
           title : "عنوان pattern",
         },
       ],

     }
    }
  
  render(){
    return (
          <section className="container-fliud" style={{overflowX:"hidden"}}>
           <div className="container"> 
          
            <div className="row">
            
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
                  {this.state.overview.map((item, index) => (
                    <div key={index} className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">

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
                        <h2>{item.badges}</h2>
                        <p>نشانها</p>
                        </Link>
                      </div>
                      
                      <div className="col borderL">
                        <h2>{item.trainingTime}</h2>
                        <p>وقت تمرین</p>
                      </div>
                      <div className="col borderL coursesStarted">
                        <h2>{item.CoursesNotStarted}</h2>
                        <p>دوره های در انتظار شروع</p>
                      </div>
                      <div className="col borderL">
                        <h2>{item.completedCourses}</h2>
                        <p>دوره های تمام شده</p>
                      </div>
                      <div className="col">
                        <h2>{item.coursesInProgress}</h2>
                        <p>دوره های در حال برگذاری</p>
                      </div>
                    </div>
                    </div>

                    </div>
   
                    <div className="boxNemodar">
                      نمودار انتخابی 
                    </div>

                   </div>
                    ))}
                    
                    <div className="tab-pane fade courses" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                    <table>
                        <thead>
                          <tr>
                            <th className="w-300px">دوره</th>
                            <th className="w-90px">پیش رفتن</th>
                            <th className="w-25px">نمره</th>
                            <th className="w-100px">ثبت نام</th>
                            <th className="w-90px">تاریخ تکمیل</th>
                            <th className="w-25px">زمان</th>
                          </tr>
                          </thead>
                          <tbody>
                          {this.state.courses.map((item,index) =>(
                          <tr key={index}>
                            <td><Link to="/userinfo">{item.course}</Link></td>  
                            <td><Link to="/">{item.progress}</Link></td>  
                            <td>{item.score}</td>  
                            <td>{item.enrolled}</td>  
                            <td>{item.completiondata}</td>  
                            <td>{item.time}</td>    
                          </tr>
                          ))}
                          </tbody>
                         
                        </table>

                        <div className="formRight">
                          <div id="courses-grid_info">
                          1 to 10 of 10                        
                          </div>  
                        </div>

                        <div className="formLeft">
                          <Link to="/userinfo"><i className="fa fa-download" aria-hidden="true" style={{float:'left',margin:20}}></i></Link>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="badges" role="tabpanel" aria-labelledby="badges-tab">
                   
                      {/* start blog badges */}
                      <div className="bedges">
                        <div className="card-header bg-primary CreateCourse-main-card-header">
                            <ol className="row page-path mt-1">
                              <li className="breadcrumb-item active " aria-current="page">صفحات فعالیت</li>
                            </ol>
                        </div>
                        <div style={{padding:10}}>

                          {this.state.badge.map((item, index) => (


                            <div className="badge-div" key={index}>
                              <i class={item.imgClass} aria-hidden="true"></i>
                              <div>{item.title}</div>
                            </div>


                          ))}
                        </div>
                      </div>
                      {/*  end blog badges */}

                      
                      {/* start blog learning */}
                      <div className="bedges">
                        <div className="card-header bg-primary CreateCourse-main-card-header">
                            <ol className="row page-path mt-1">
                              <li className="breadcrumb-item active " aria-current="page">صفحات آموزش</li>
                            </ol>
                        </div>
                        <div style={{padding:10}}>

                          {this.state.learning.map((item, index) => (


                            <div className="learning-div" key={index}>
                              <i class={item.imgClass} aria-hidden="true"></i>
                              <div>{item.title}</div>
                            </div>


                          ))}
                        </div>
                      </div>
                      {/*  end blog learning */}


                      {/* start blog pattern */}
                      <div className="bedges">
                        <div className="card-header bg-primary CreateCourse-main-card-header">
                            <ol className="row page-path mt-1">
                              <li className="breadcrumb-item active " aria-current="page">صفحات الگو</li>
                            </ol>
                        </div>
                        <div style={{padding:10}}>

                          {this.state.pattern.map((item, index) => (


                            <div className="pattern-div" key={index}>
                              <i class={item.imgClass} aria-hidden="true"></i>
                              <div>{item.title}</div>
                            </div>


                          ))}
                        </div>
                      </div>
                      {/*  end blog pattern */}
                      
                                  
                                  
                    </div>
                    <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">timeline</div>
                  </div>
                </div>
 
              </div>
            </div>


          
</div>
              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                {this.state.overview.map((item, index) => (
                  <div key={index} className="modal-content">
                    
                    <div className="modal-header" >
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">{item.username} (نشانها)</h4>
                    </div>
                    <div className="modal-body">
                      <p>{item.username}</p>
                      <p>{item.badges} نشانه</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                  
                  </div>
                ))}
              </div>             
            </div>

            
          </section>

    );
  }
}

export default Userinfo;

