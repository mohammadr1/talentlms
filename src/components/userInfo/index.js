import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '@babel/types';
import OverView from './overView'

export default class Index extends Component{
  constructor(props){
    super(props);
     this.state = {
     
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
       evends :[
         {
           id : 1,
           label : "badge badge-success",
           event : "ورود",
           user : "شما",
           content : " 52دقیقه پیش وارد سیستم شدید ",
         },
         {
           id : 2,
           label : "badge badge-danger",
           event : "ریست",
           user : "m.mohammad",
           content : "دیروز ویژگی های پیشرفته ای برای شما تنظیم شده است ",
         },
         {
           id : 3,
           label : "badge badge-warning",
           event : "افزودن",
           user : "شما",
           content : "دیروز به دوره ضمن خدمت اضافه شدید ",
         },
       ]
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
                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                      <OverView id="1" />
                    </div>
                    
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
                    <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                        <table className="timeline">
                          <thead>
                            <tr><th >مناسبت ها</th></tr>
                          </thead>
                          <tbody>
                          {this.state.evends.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <span className={item.label}>{item.event}</span>  
                                <span className="user">{item.user}</span>  
                                <span className="content">{item.content}</span>                            
                              </td>                            
                            </tr>
                             ))}
                          </tbody>
                        </table>
                    </div>
                  </div>
                </div>
 
              </div>
            </div>


          
</div>
              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
               {/*
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
               */}
              </div>             
            </div>

            
          </section>

    );
  }
}