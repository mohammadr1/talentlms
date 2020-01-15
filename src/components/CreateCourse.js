import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { directive } from '../../node_modules/@babel/types';


class CreateCourse extends React.Component{
  constructor(props){
    super(props)
    this.state={
      titleChangeStatus:false,
      descriptionChangeStatus:false,
      categoryChangeStatus:false,
      picMouseOver:false,

      courseName:"نام دوره‌ی آموزشی خود را مشخص نمایید", 
      courseDescription:" در مورد دوره‌ی آموزشی که قصد برگزاری آن را دارید، به طور خلاصه توضیح دهید",
      courseCode:"",
      coursePrice:"",
      courseTime:"",
      selectValue:"",
      selectedCategory:"دسته‌بندی دوره خود را انتخاب کنید",


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
      menu:[
        {
          title:"ویرایش دوره"
        },
        {
          title:"دوره‌های من"
        },
        {
          title:"گزارش دوره‌ها"
        }
      ],
    }
  }
//   _Save() {
//     const data = {
//         name: this.state.courseName,
//         category: this.state.selectedCategory,
//         description: this.state.courseDescription,
//         code: this.state.courseCode,
//         price: this.state.coursePrice,
//         title: this.state.courseTime,
//         left: this.state.selectValue
//     };
//     console.log( data );
//     axios.post( "/", data )
//         .then( res => {
//             console.log( res );
//             this.setState( { redirectStatus: true } );
//         } )
//         .catch( err => {
//             console.log( err );
//         } );
// }
_select(value){
console.log(value)
}

  render(){
    return (
      <section className="container-fliud" style={{overflowX:"hidden"}}>
        <div className="row">
          <div className="CreateCourse-main-card card">
            <div className="card-header bg-primary CreateCourse-main-card-header">
                <ol className="row page-path mt-1">
                  <li className="breadcrumb-item"><Link className="first-page" to="/">خوش آمدید</Link></li>
                  <li className="breadcrumb-item active " aria-current="page">ساخت دوره آموزشی</li>
                </ol>
            </div>
            <div className="card-body row">
            {/*vertical menu ****************************/}  
              <div className="col-md-3">
                  <ul className="vertical-menu">
                  <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm">
                    <Link to="">ساخت دوره</Link></li>
                  {this.state.menu.map((item,index) =>(
                    <li className="row align-items-center justify-content-end p-4 mb-2 shadow-sm"
                     key={index}><Link to="/">{item.title}</Link></li>))}
                  </ul> 
              </div>
            {/*course create info ****************************/} 
              <div className="col-md-9 pt-2">
                <div className="row">
                  <div className="col-md-10">
                    <form action="/action_page.php">
                  {/* title ChangeStatus ****************************/}
                            {
                              this.state.titleChangeStatus==false &&
                              <h1 id="course-name" onClick={()=>{
                                this.setState({titleChangeStatus:true})
                              }} className="mb-3">
                                <i className="far fa-edit ml-3"></i>
                                {this.state.courseName}
                              </h1>
                            }
                            {
                              this.state.titleChangeStatus==true &&
                              <div className="col-md-12 row justify-content-end d-flex">
                                  <button onClick={()=>{
                                this.setState({titleChangeStatus:false})
                              }} className="mb-3"><i className="fas fa-check"></i></button>
                                  <input type="text" className="form-control form-control-sm col-md-9 text-left mb-3" 
                                  value={this.state.courseName} 
                                  onChange={(event)=> {this.setState({courseName:event.target.value})}}/> 
                              </div> 
                            }
                  {/* category ChangeStatus ****************************/}
                            {
                              this.state.categoryChangeStatus==false &&
                              <p  id="course-category" onClick={()=>{
                                this.setState({categoryChangeStatus:true})
                              }}> 
                              <i className="far fa-edit ml-3 " ></i>
                                {this.state.selectedCategory} 
                               </p>  
                            } 
                            {
                              this.state.categoryChangeStatus==true &&
                              <div className="col-md-12 row justify-content-end d-flex ">
                                  <button onClick={()=>{
                                    this.setState({categoryChangeStatus:false})
                                  }} className="mb-3"><i className="fas fa-check"></i></button>
                                   <select class="custom-select  form-control-sm col-md-9 mb-3" 
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
                                this.state.descriptionChangeStatus==false && 
                                <p  id="course-description" onClick={()=>{
                                  this.setState({descriptionChangeStatus:true})
                                }}>
                                <i className="far fa-edit ml-3 " ></i>
                                 {this.state.courseDescription}
                                </p>
                              }
                              {
                                this.state.descriptionChangeStatus==true &&
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
                                  <input id="courseCode" type="text" onChange={(event)=>{
                                    this.setState({courseCode:event.target.value})
                                  }
                                  } className="col-md-2 form-control form-control-sm text-left "
                                  value={this.state.courseCode}
                                  placeholder=" p752 :مثال"/>
                                  <label for="courseCode" id="course-code" className="col-md-3 mb-3 margin-style mt-1 ">
                                    کد دوره 
                                    <i class="fas fa-tags mr-3"></i></label>
                            </div>
                          {/* course price */}
                            <div className="justify-content-end row">
                                  <input id="coursePrice" type="text" onChange={(event)=>{
                                    this.setState({coursePrice:event.target.value})
                                  }
                                  } className="col-md-2 form-control form-control-sm text-left "
                                  value={this.state.coursePrice}
                                  placeholder=" بر اساس ریال"/>
                                  <label for="coursePrice" id="course-price" className="col-md-3 mb-3 margin-style mt-1 ">
                                    هزینه دوره 
                                  <i class="fas fa-shopping-cart mr-3"></i></label>
                            </div>
                          {/* course time */}
                            <div className="justify-content-end row">
                                  <input id="courseTime" type="text" onChange={(event)=>{
                                    this.setState({courseTime:event.target.value})
                                  }
                                  } className="col-md-2 form-control form-control-sm text-left "
                                  value={this.state.courseTime}
                                  placeholder=" تعداد روز"/>
                                  <label for="courseTime" id="course-time" className="col-md-3 mb-3 margin-style mt-1 ">
                                    طول دوره 
                                  <i class="fas fa-clock mr-3"></i></label>
                            </div>
                          {/* course time */}
                            <div className="justify-content-end row ">
                                <select class="form-control form-control-sm col-md-2 text-left" 
                                   onChange={(text)=>{
                                     this.setState({selectValue:text.target.selectedOptions[0].text})
                                    }}id="courseLevel">
                                    {this.state.level.map((item,index)=>(
                                    <option value={item.id} key={index}> {item.title}</option>
                                    ))}
                                </select>
                                <label for="courseLevel" id="course-level" className="col-md-3 mb-3 margin-style mt-1 ">سطح دوره <i class="fas fa-tachometer-alt mr-3"></i></label>
                            </div>
                            <hr/>
                  {/* submit button ****************************/} 
                            <button class="form btn btn-sm btn-primary " type="submit" 
                            // onClick={()=>{this._save}}
                            >ثبت اطلاعات</button>  
                        </form>      
                  </div>
                  <div className="col-md-2">
                  {/* pic upload ****************************/}
                              <h1 id="pic-upload">: انتخاب عکس</h1>
                              {
                                this.state.picMouseOver==false &&
                                <img src="./images/logo-pic.png" className="upload-course-pic"
                                 onMouseOver={()=>{
                                  this.setState({picMouseOver:true})
                                 }}/>
                              }
                              {
                                this.state.picMouseOver==true && 
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
        </div>
      </section>
    );
  }
}

export default CreateCourse;