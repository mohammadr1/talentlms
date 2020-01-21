import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '@babel/types';
import OverView from './overView';
import Courses from './course';
import Timeline from './timeline';

export default class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    }
  
  render(){
    let item = this.state;
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
                    <a className="nav-link" id="timeline-tab" data-toggle="tab" data-target="#timeline" role="tab" aria-controls="timeline" aria-selected="false">جدول زمانی</a>
                  </li>
                </ul>                  
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                    <OverView id="1" />
                  </div>                    
                  <div className="tab-pane fade courses" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                    <Courses />
                  </div>
                  <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
                    <Timeline />
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </section>
    );
  }
}