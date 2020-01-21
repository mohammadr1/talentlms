import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import EditInfo from './editInfo';
import EditMember from './editMember';


export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
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
                                <EditInfo code="p752"/>
                            </div>
                            <div class="tab-pane fade" id="editMembers" role="tabpanel" aria-labelledby="editMembers-tab">
                                <EditMember id="1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

