import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import EditInfo from './editInfo';

export default class Index extends Component{
    render(){
        return (
            <section className="container" style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="row">
                    <div className="CreateCourse-main-card card">
                        <div className="card-header bg-primary CreateCourse-main-card-header">
                            <ol className="row page-path mt-1">
                            <li className="breadcrumb-item"><Link className="first-page" to="/Home">پنل مدیریت</Link></li>
                            <li className="breadcrumb-item"><Link className="first-page" to="/Course">دروه‌های من</Link></li>
                            <li className="breadcrumb-item active " aria-current="page">ویرایش دوره</li>
                            </ol>
                        </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist" style={{direction:"rtl"}}>
                            <li class="nav-item">
                                <a class="nav-link active" id="editCourse-tab" data-toggle="tab" href="#editCourse" role="tab" aria-controls="editCourse" aria-selected="true">ویرایش اطلاعات</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="editMembers-tab" data-toggle="tab" href="#editMembers" role="tab" aria-controls="editMembers" aria-selected="false">ویرایش افراد</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="editCourse" role="tabpanel" aria-labelledby="editCourse-tab">   
                               <EditInfo/>
                            </div>
                            <div class="tab-pane fade" id="editMembers" role="tabpanel" aria-labelledby="editMembers-tab">
                            <table>
                                <thead>
                                <tr>
                                    <th className="w-300px">حذف</th>
                                    <th className="w-300px">زمان</th>
                                    <th className="w-300px">امتیاز</th>
                                    <th className="w-300px">نام</th> 
                                </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map((item,index) =>(
                                    <tr key={index}> 
                                        <td><Link to="/EditCourse" ><i className="fa fa-times" aria-hidden="true"></i></Link></td>   
                                        <td>{item.score}</td>
                                        <td>{item.time}</td>
                                        <td><Link to="/EditCourse">{item.name}</Link></td>
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
                         </div>
                    </div>
                </div>
            </section>
        );
    }
}

