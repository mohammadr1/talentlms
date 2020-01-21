import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class overView extends Component{
    constructor(props){
        super(props);
         this.state = {
            id:this.props.id,
            username :"m.mohammad",
            email :"mahdir2302@gmail.com",
            badges:1,
            trainingTime : "0h, 30m",
            CoursesNotStarted : 1,
            completedCourses : 0,
            coursesInProgress : 0,
         }
        }

  render(){
    let item = this.state;
      return (
        <div>
          <div className="row">
            <div className="userRight">
              <div className="idUser">
                <h3>{this.state.username}</h3>
                <p>{this.state.email}</p>
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
                  <h2>{this.state.badges}</h2>
                  <p>نشانها</p>
                </Link>
                </div>
                <div className="col borderL">
                  <h2>{this.state.trainingTime}</h2>
                  <p>وقت تمرین</p>
                </div>
                <div className="col borderL coursesStarted">
                  <h2>{this.state.CoursesNotStarted}</h2>
                  <p>دوره های در انتظار شروع</p>
                </div>
                <div className="col borderL">
                  <h2>{this.state.completedCourses}</h2>
                  <p>دوره های تمام شده</p>
                </div>
                <div className="col">
                <h2>{this.state.coursesInProgress}</h2>
                <p>دوره های در حال برگذاری</p>
              </div>
              </div>
            </div>
          </div>
          <div className="boxNemodar">
                نمودار انتخابی 
              </div>
          {/* Start Modal */}
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">             
              <div className="modal-content">      
                <div className="modal-header" >
                  <h4 className="modal-title">{item.username} (نشانها)</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>{item.username}</p>
                  <p>{item.badges} نشانه</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              
              </div>
          </div>             
        </div>
          {/* End Modal */}
        </div>
      )
  }
}