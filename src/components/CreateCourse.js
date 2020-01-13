import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '../../node_modules/@babel/types';


class CreateCourse extends React.Component{
  constructor(props){
    super(props)
    this.state={
      formShow: false,
      courseName:"نام دوره‌ی آموزشی خود را مشخص نمایید",
      courseDescription:" در مورد دوره‌ی آموزشی که قصد برگزاری آن را دارید، به طور خلاصه توضیح دهید",
      courseCode:"  c752 :مثال",
      coursePrice:"ریال",
      courseTime:" تعداد روز ",
      level:[
        {
        title:"ساده"
      },
      {
        title:"متوسط"
      },
      {
        title:"سخت"
      }
    ],
      menu:[
        {
        item:"ساخت دوره"
      },
      {
        item:"ویرایش دوره"
      },
      {
        item:"دوره‌های من"
      },
      {
        item:"گزارش دوره‌ها"
      }
    ]
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
  handleCourseCategory(){
    document.getElementById("course-category").style.visibility="hidden";
    document.getElementById("Course-category-select").style.display="block";
    document.getElementById("del-category").style.display="block";
    document.getElementById("save-category").style.display="block";
  }
  handleDeletCategory(){
    document.getElementById("course-category").style.visibility="visible";
    document.getElementById("Course-category-select").style.display="none";
    document.getElementById("del-category").style.display="none";
    document.getElementById("save-category").style.display="none";
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
              <div className="col-md-3">
                  <ul className="menu">
                  {this.state.menu.map((item,index) =>(
                    <li title="home"><Link to="/" className="active">home</Link></li>))}
                  </ul> 
              </div>
              <div className="col-md-9 pt-2">
                <div className="row">
                  <div className="col-md-10">
                            <h1 id="course-name" onClick={this.handleCourseName.bind(this)} className="mb-3"><i className="far fa-edit ml-3"></i>نام دوره‌ی آموزشی خود را مشخص نمایید</h1>
                            <div className="col-md-12 row justify-content-end d-flex" id="Coure-name-div">
                                  <button id="del-input" onClick={this.handleDeletInput.bind(this)} className="mb-3"><i className="fas fa-times"></i></button>
                                  <button id="save-name" onClick={this.saveName.bind(this)} className="mb-3"><i className="fas fa-check"></i></button>
                                  <input id="Coure-name-input" type="text" className="form-control form-control-sm col-md-9 text-left mb-3" value={this.state.courseName} onChange={this.handleInputChange.bind(this)}/> 
                            </div> 
                            <p  id="course-category" onClick={this.handleCourseCategory.bind(this)}> <i className="far fa-edit ml-3 " ></i> دسته‌بندی دوره خود را انتخاب کنید </p>
                            <div className="col-md-12 row justify-content-end d-flex " id="Course-category-div">
                                  <button id="del-category" onClick={this.handleDeletCategory.bind(this)} className="mb-3"><i className="fas fa-times"></i></button>
                                  <button id="save-category" onClick={this.saveCategory} className="mb-3"><i className="fas fa-check"></i></button>
                                  <select class="custom-select  form-control-sm col-md-9 mb-3"  id="Course-category-select">
                                    <option selected >دسته بندی مناسب را انتخاب کنید</option>
                                    <option value="One"></option>
                                    <option value="Two"></option>
                                    <option value="Three"></option>
                                  </select> 
                            </div>
                            <p  id="course-description" onClick={this.handleCourseDescription.bind(this)}> <i className="far fa-edit ml-3 " ></i> در مورد دوره‌ی آموزشی که قصد برگزاری آن را دارید، به طور خلاصه توضیح دهید </p>
                            <div className="col-md-12 row justify-content-end d-flex" id="Coure-description-div">
                                  <button id="del-description" onClick={this.deleteDescription.bind(this)}className="mb-3"><i className="fas fa-times"></i></button>
                                  <button id="save-description" onClick={this.saveDescription.bind(this)} className="mb-3"><i className="fas fa-check"></i></button>
                                  <textarea id="Coure-description-input"  className="form-control form-control-sm col-md-9 text-left mb-3"value={this.state.courseDescription} onChange={this.handleDescription.bind(this)}></textarea> 
                            </div>
                            <div className="btn-group">
                                  <button type="button" className="btn btn-sm btn-primary dropdown-toggle rounded ml-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="fas fa-ellipsis-h"></i>
                                  </button>
                                  <div className="dropdown-menu">
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
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">متن<i className="far fa-file-alt mr-2"></i></Link>
                              </div>
                            </div>  
                            <hr/>
                            
                            <div className="justify-content-end row">
                                <input type="text" className="col-md-2 form-control form-control-sm text-left ml-4" value={this.state.courseCode}/>
                                <h1 id="course-code" className="mb-3 margin-style mt-1 mr-1">کد دوره <i class="fas fa-tags mr-3"></i></h1>
                            </div>
                            <div className="justify-content-end row">
                                <input type="text" className="col-md-2 form-control form-control-sm text-left ml-3" value={this.state.coursePrice}/>
                                <h1 id="course-price" className="mb-3 margin-style mt-1">هزینه دوره <i class="fas fa-shopping-cart mr-3"></i></h1>
                            </div>
                            <div className="justify-content-end row">
                                <input type="text" className="col-md-2 form-control form-control-sm text-left ml-4" value={this.state.courseTime}/>
                                <h1 id="course-time" className="mb-3 margin-style mt-1">طول دوره <i class="fas fa-clock mr-3"></i></h1>
                            </div>
                            <div className="justify-content-end row">
                            {this.state.level.map((item,index) =>(
                                <select className="form-control form-control-sm col-md-2 text-left ml-3" id="exampleFormControlSelect1 "  onSelect={
                                      (text)=>{this.select(text.target.select)}}>
                                      <option>{item.title}</option>
                                      <option>{item.title}</option>
                                      <option>{item.title}</option>
                                </select>
                              ))}
                                <h1 id="course-code" className="mb-3 margin-style mt-1 mr-2">سطح دوره <i class="fas fa-tachometer-alt mr-2"></i></h1>
                            </div>   
                            <div class="file-upload-wrapper">
                              <div class="card card-body view file-upload">
                                  <div class="card-text file-upload-message">
                                    <i class="fas fa-cloud-upload-alt"></i>
                                    <p>Drag and drop a file here or click</p>
                                  </div>
                                  <div class="mask rgba-stylish-slight"></div>
                                  <div class="file-upload-errors-container">
                                    <ul></ul>
                                  </div>
                                  <input type="file" id="input-file-now" class="file_upload"/><button type="button" class="btn btn-sm btn-danger">Remove<i class="far fa-trash-alt ml-1"></i></button>
                                  <div class="file-upload-preview">
                                    <span class="file-upload-render"></span>
                                    <div class="file-upload-infos">
                                        <div class="file-upload-infos-inner">
                                          <p class="file-upload-filename"><span class="file-upload-filename-inner"></span></p>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                            </div>       
                  </div>
                  <div className="col-md-2">
                            <h1 id="pic-upload">: انتخاب عکس</h1>
                            <img src="./images/logo-pic.png" className="upload-course-pic" onMouseOver={this.handleChange.bind(this)}/>
                            <form onMouseLeave={this.handleLeave.bind(this)}>
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