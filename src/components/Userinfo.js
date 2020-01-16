import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '../../node_modules/@babel/types';


class Userinfo extends React.Component{
  constructor(props){
    super(props);

    }

  render(){
    return (
          <section className="container-fliud" style={{overflowX:"hidden"}}>
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
                      <Link className="nav-link active" id="overview-tab" data-toggle="tab" to="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="courses-tab" data-toggle="tab" to="#courses" role="tab" aria-controls="courses" aria-selected="false">Courses</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="badges-tab" data-toggle="tab" to="#badges" role="tab" aria-controls="badges" aria-selected="false">Badges</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" id="timeline-tab" data-toggle="tab" to="#timeline" role="tab" aria-controls="timeline" aria-selected="false">Timeline</Link>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">overview</div>
                    <div className="tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">courses</div>
                    <div className="tab-pane fade" id="badges" role="tabpanel" aria-labelledby="badges-tab">badges</div>
                    <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">timeline</div>
                  </div>
                </div>

              </div>
            </div>
          </section>
    );
  }
}

export default Userinfo;