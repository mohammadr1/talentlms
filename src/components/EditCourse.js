import React from 'react';
import { Link } from 'react-router-dom';

class EditCourse extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            titleChangeStatus:false,
            descriptionChangeStatus:false,
            categoryChangeStatus:false,
            picMouseOver:false,

            courseName:"نام دوره از سرور", 
            courseDescription:"توضیحات دوره از سرور",
            courseCode:"کد دوره از سرور",
            coursePrice:"قیمت دوره از سرور",
            courseTime:"زمان دوره از سرور",
            courseLevel:"سطح دوره از سرور",
            selectedCategory:"دسته‌بندی دوره از سرور",

            category:[
                {
                  id:1,
                  text:"ICDl"
                },
                {
                  id:2,
                  text:"PHP"
                },
                {
                  id:3,
                  text:"Android"
                },
                {
                  id:4,
                  text:"HTML & CSS"
                }
              ],
            
            level:[
                {
                id:1,
                title:"ساده"
                },
                {
                id:2,
                title:"متوسط"
                },
                {
                id:3,
                title:"سخت"
                }
            ],
            users:[
                {
                 id : 1,
                 name : "fatemeh",
                 score : "-",
                 time : "1 hour",
                },
                {
                 id : 2,
                 name : "fatemeh",
                 score : "-",
                 time : "1 hour",
                },
              ],
        }
    }
    render(){
        return (
            <section className="container" style={{overflowX:"hidden",overflowY:"hidden"}}>
                <div className="row">
                    <div className="CreateCourse-main-card card">
                        <div className="card-header bg-primary CreateCourse-main-card-header">
                            <ol className="row page-path mt-1">
                            <li className="breadcrumb-item"><Link className="first-page" to="/home">پنل مدیریت</Link></li>
                            <li className="breadcrumb-item"><Link className="first-page" to="/course">دروه‌های من</Link></li>
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
                                <div className="card-body row">
                                    {/*vertical menu ****************************/}  
                                    <div className="col-md-3">
                                        <ul className="vertical-menu">
                                            <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                                            <Link to="/CreateCourse">ساخت دوره</Link>
                                            <img className="ml-4" src="/images/create.png" alt="create-course" />
                                            </li>
                                            <li className="row  bg-primary align-items-center justify-content-end p-4 mb-2 shadow-sm">
                                            <Link to="">ویرایش دوره</Link>
                                            <img className="ml-4" src="/images/edit.png" alt="course-edit" />
                                            </li>
                                            <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                                            <Link to="/Course">دوره‌های من</Link>
                                            <img className="ml-4" src="/images/file.png" alt="all-course" />
                                            </li>
                                            <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                                            <Link to="" className="mt-1">گزارش دوره‌ها</Link>
                                            <img className="ml-4" src="/images/chart.png" alt="course-report" />
                                            </li>
                                        </ul> 
                                    </div>
                                    {/*course create info ****************************/} 
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <form  >
                                                    {/* title ChangeStatus ****************************/}
                                                            {
                                                                this.state.titleChangeStatus===false &&
                                                                <h1 id="course-name" onClick={()=>{
                                                                    this.setState({titleChangeStatus:true})
                                                                    }} className="mb-3">
                                                                    <i className="far fa-edit ml-3"></i>
                                                                    {this.state.courseName}
                                                                </h1>
                                                            }
                                                            {
                                                                this.state.titleChangeStatus===true &&
                                                                <div className="col-md-12 row justify-content-end d-flex">
                                                                    <button onClick={()=>{
                                                                        this.setState({titleChangeStatus:false})
                                                                        }} className="mb-4"><i className="fas fa-check"></i>
                                                                    </button>
                                                                    <input type="text" className="form-control form-control-sm col-md-9 text-left mb-3" 
                                                                        value={this.state.courseName} 
                                                                        onChange={(event)=> {this.setState({courseName:event.target.value})}}
                                                                    /> 
                                                                </div> 
                                                            }
                                                    {/* category ChangeStatus ****************************/}
                                                        {
                                                            this.state.categoryChangeStatus===false &&
                                                            <p  id="course-category" onClick={()=>{
                                                                this.setState({categoryChangeStatus:true})}}> 
                                                                <i className="far fa-edit ml-3 " ></i>
                                                                {this.state.selectedCategory} 
                                                            </p>  
                                                        } 
                                                        {
                                                            this.state.categoryChangeStatus===true &&
                                                            <div className="col-md-12 row justify-content-end d-flex ">
                                                                <button onClick={()=>{
                                                                    this.setState({categoryChangeStatus:false})
                                                                }} className="mb-3"><i className="fas fa-check"></i></button>
                                                                <select className="custom-select  form-control-sm col-md-9 mb-3" 
                                                                onChange={(text)=>{
                                                                    this.setState({selectedCategory:text.target.selectedOptions[0].text})
                                                                    }}
                                                                >
                                                                    <option selected >دسته‌بندی مناسب را انتخاب کنید</option>
                                                                    {this.state.category.map((item,index)=>(
                                                                    <option value={item.id} key={index}> {item.text}</option>
                                                                    ))}
                                                                </select> 
                                                            </div>
                                                        }         
                                                    {/* description ChangeStatus ****************************/}
                                                        {
                                                            this.state.descriptionChangeStatus===false && 
                                                            <p  id="course-description" onClick={()=>{
                                                            this.setState({descriptionChangeStatus:true})
                                                            }}>
                                                            <i className="far fa-edit ml-3 " ></i>
                                                            {this.state.courseDescription}
                                                            </p>
                                                        }
                                                        {
                                                            this.state.descriptionChangeStatus===true &&
                                                            <div className="col-md-12 row justify-content-end d-flex">
                                                                <button onClick={()=>{
                                                                this.setState({descriptionChangeStatus:false})
                                                                }} className="mb-3"><i className="fas fa-check"></i></button>
                                                                <textarea onChange={(event)=>{
                                                                    {this.setState({courseDescription:event.target.value})}
                                                                }} className="form-control form-control-sm col-md-9 text-left mb-3"
                                                                value={this.state.courseDescription}>
                                                                </textarea> 
                                                            </div>
                                                        }
                                                        <hr/>
                                                    {/* course Info ****************************/} 
                                                        {/* course code */}  
                                                            <div className="justify-content-end row">
                                                                <input id="courseCode" type="text"  className="col-md-2 form-control form-control-sm text-left "
                                                                value={this.state.courseCode}
                                                                placeholder=" p752 :مثال"/>
                                                                <label htmlFor="courseCode" id="course-code" className="col-md-3 mb-3 margin-style mt-1 ">
                                                                    کد دوره 
                                                                    <i className="fas fa-tags mr-3"></i></label>
                                                            </div>
                                                        {/* course price */}
                                                            <div className="justify-content-end row">
                                                                <input id="coursePrice" type="text" onChange={(event)=>{
                                                                    this.setState({coursePrice:event.target.value})
                                                                }
                                                                } className="col-md-2 form-control form-control-sm text-left "
                                                                value={this.state.coursePrice}
                                                                placeholder=" بر اساس ریال"/>
                                                                <label htmlFor="coursePrice" id="course-price" className="col-md-3 mb-3 margin-style mt-1 ">
                                                                    هزینه دوره 
                                                                <i className="fas fa-shopping-cart mr-3"></i></label>
                                                            </div>
                                                        {/* course time */}
                                                            <div className="justify-content-end row">
                                                                <input id="courseTime" type="text" onChange={(event)=>{
                                                                    this.setState({courseTime:event.target.value})
                                                                }
                                                                } className="col-md-2 form-control form-control-sm text-left "
                                                                value={this.state.courseTime}
                                                                placeholder=" تعداد روز"/>
                                                                <label htmlFor="courseTime" id="course-time" className="col-md-3 mb-3 margin-style mt-1 ">
                                                                    طول دوره 
                                                                <i className="fas fa-clock mr-3"></i></label>
                                                            </div>
                                                        {/* course time */}
                                                            <div className="justify-content-end row ">
                                                                <select className="form-control form-control-sm col-md-2 text-left" 
                                                                onChange={(text)=>{
                                                                    this.setState({selectValue:text.target.selectedOptions[0].text})
                                                                    }}id="courseLevel">
                                                                    {this.state.level.map((item,index)=>(
                                                                    <option value={item.id} key={index}> {item.title}</option>
                                                                    ))}
                                                                </select>
                                                                <label htmlFor="courseLevel" id="course-level" className="col-md-3 mb-3 margin-style mt-1 ">سطح دوره 
                                                                <i className="fas fa-tachometer-alt mr-3"></i></label>
                                                            </div>
                                                            <hr/>
                                                        {/* upload file ****************************/} 
                                                            <form>
                                                                <h1 className="h1-size">
                                                                    :آپلود ویدیوی معرفی 
                                                                </h1>
                                                                <div className="video" id="upload-video"> 
                                                                    <div  className="col-md-12 d-flex justify-content-center" >
                                                                    <i className="fas fa-video mt-4" ></i>
                                                                    </div>
                                                                    <input id="videoUpload" type="file" name="video" />
                                                                </div>
                                                            </form>
                                                        {/* submit button ****************************/} 
                                                            <div className="row justify-content-end "> 
                                                                <p className="help mt-4">.جهت اضافه کردن ویدیو قسمت‌های مختلف دوره، پس از ثبت به بخش دوره‌های من مراجعه نمایید
                                                                </p>
                                                                <button className="form btn btn-sm btn-primary mt-3 ml-4" id="save-course-changes" type="submit" 
                                                                //onClick={}
                                                                >
                                                                ثبت تغییرات</button>
                                                            </div>
                                                </form>      
                                            </div>
                                            <div className="col-md-2">
                                                {/* pic upload ****************************/}
                                                    <h1 className="h1-size">: انتخاب عکس</h1>
                                                    {
                                                        this.state.picMouseOver===false &&
                                                        <img src="./images/logo-pic.png" className="upload-course-pic"
                                                        onMouseOver={()=>{
                                                        this.setState({picMouseOver:true})
                                                        }}/>
                                                    }
                                                    {
                                                        this.state.picMouseOver===true && 
                                                        <form onMouseLeave={()=>{
                                                        this.setState({picMouseOver:false})
                                                        }}>
                                                        <div className="avatar" id="upload-avatar">
                                                        <div  className="col-md-12 d-flex justify-content-center" >
                                                            <i id="avatar-icon" className="fas fa-camera avatar-icon" ></i>
                                                            </div>
                                                            <input type="file" name="avatar" />
                                                        </div>
                                                        </form>
                                                    }      
                                            </div> 
                                        </div>
                                    </div>
                                </div>
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
                                        <td><Link to="/EditCourse"><i className="fa fa-times" aria-hidden="true"></i></Link></td>   
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
export default EditCourse;
