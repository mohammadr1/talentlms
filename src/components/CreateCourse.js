import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class CreateCourse extends React.Component{
  constructor(props){
    super(props)
    this.state={
      formShow: false,
      courseName:"نام دوره‌ی آموزشی خود را مشخص نمایید",
      courseDescription:" در مورد دوره‌ی آموزشی که قصد برگزاری آن را دارید، به طور خلاصه توضیح دهید"
    }
  }
  handleChange() {
    document.getElementById("avatar-icon").style.display="block";
    document.getElementById("upload-avatar").style.display="block";
    
  }
  handleLeave() {
    document.getElementById("avatar-icon").style.display="none";
    document.getElementById("upload-avatar").style.display="none";

  }
  handleCourseName() {
    document.getElementById("course-name").style.visibility="hidden";
    document.getElementById("Coure-name-input").style.display="block";
    document.getElementById("del-input").style.display="block";
    document.getElementById("save-name").style.display="block";
  }
  handleDeletInput() {
    document.getElementById("course-name").style.visibility="visible";
    document.getElementById("Coure-name-input").style.display="none";
    document.getElementById("del-input").style.display="none";
    document.getElementById("save-name").style.display="none";
  }
   saveName(){
    document.getElementById("course-name").innerHTML=this.state.courseName; 
    document.getElementById("course-name").style.visibility="visible";
    document.getElementById("Coure-name-input").style.display="none";
    document.getElementById("del-input").style.display="none";
    document.getElementById("save-name").style.display="none";
  }
  saveDescription(){
    document.getElementById("course-description").innerHTML=this.state.courseDescription;
    document.getElementById("course-description").style.visibility="visible";
    document.getElementById("Coure-description-input").style.display="none";
    document.getElementById("del-description").style.display="none";
    document.getElementById("save-description").style.display="none";
  }
  handleCourseDescription() {
    document.getElementById("course-description").style.visibility="hidden";
    document.getElementById("Coure-description-input").style.display="block";
    document.getElementById("del-description").style.display="block";
    document.getElementById("save-description").style.display="block";
  }
  deleteDescription() {
    document.getElementById("course-description").style.visibility="visible";
    document.getElementById("Coure-description-input").style.display="none";
    document.getElementById("del-description").style.display="none";
    document.getElementById("save-description").style.display="none";
  }
  handleInputChange(event){
    this.setState({
      courseName:event.target.value
     }) 
  }
  handleDescription(event){
    this.setState({
      courseDescription:event.target.value
     }) 
  }
  render(){
    return (
      <section className="container-fliud">
        <div className="row">
          <div className="CreateCourse-main-card card">
            <div className="card-header bg-primary CreateCourse-main-card-header">
                <ol className="row page-path mt-1">
                  <li className="breadcrumb-item"><Link className="first-page" to="/">خوش آمدید</Link></li>
                  <li className="breadcrumb-item active " aria-current="page">ساخت دوره آموزشی</li>
                </ol>
            </div>
            <div className="card-body row">
              <div className="col-md-3 bg-dark">
               
              </div>
              <div className="col-md-9 pt-2">
                <div className="row">
                  <div className="col-md-10">
                    <h1 id="course-name" onClick={this.handleCourseName.bind(this)}>نام دوره‌ی آموزشی خود را مشخص نمایید</h1>
                    <div className="col-md-12 row justify-content-end d-flex" id="Coure-name-div">
                      <button id="del-input" onClick={this.handleDeletInput.bind(this)}><i class="fas fa-times"></i></button>
                      <button id="save-name" onClick={this.saveName.bind(this)}><i class="fas fa-check"></i></button>
                      <input id="Coure-name-input" type="text" className="form-control form-control-sm col-md-9 text-left" value={this.state.courseName} onChange={this.handleInputChange.bind(this)}/> 
                    </div> 
                    <p  id="course-description" onClick={this.handleCourseDescription.bind(this)}>  در مورد دوره‌ی آموزشی که قصد برگزاری آن را دارید، به طور خلاصه توضیح دهید </p>
                    <div className="col-md-12 row justify-content-end d-flex" id="Coure-name-div">
                      <button id="del-description" onClick={this.deleteDescription.bind(this)}><i class="fas fa-times"></i></button>
                      <button id="save-description" onClick={this.saveDescription.bind(this)}><i class="fas fa-check"></i></button>
                      <textarea id="Coure-description-input"  className="form-control form-control-sm col-md-9 text-left"value={this.state.courseDescription} onChange={this.handleDescription.bind(this)}></textarea> 
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary dropdown-toggle rounded ml-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                      </button>
                      <div class="dropdown-menu">
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                      </div>
                    </div>
                    <Link to="/" className="btn btn-primary btn-sm ml-2 rounded" role="button" aria-pressed="true">مشاهده از دیدگاه کارآموز</Link>
                    <Link  to="/" className="btn btn-primary btn-sm ml-2 rounded" role="button" aria-pressed="true">ویرایش اطلاعات دوره</Link>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary dropdown-toggle rounded ml-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        افزودن
                      </button>
                      <div class="dropdown-menu">
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                        <div class="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                      </div>
                    </div>  
                  </div>
                  <div className="col-md-2">
                    <img src="./images/logo-pic.png" className="upload-course-pic" onMouseLeave={this.handleLeave.bind(this)} onMouseOver={this.handleChange.bind(this)}/>
                    <form>
                      <div className="avatar" id="upload-avatar">
                      <div  className="col-md-12 d-flex justify-content-center" >
                        <i id="avatar-icon" className="fas fa-camera avatar-icon" ></i>
                        </div>
                        <input type="file" name="avatar" />
                      </div>
                    </form>
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

export default CreateCourse;