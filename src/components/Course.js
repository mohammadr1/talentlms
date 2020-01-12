import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[
        {
        id:1,
        title:"php",
        category:"gsdfgds",
        lastupdate:"12/5/1360",
        checked : false
      },
      {
        id:1,
        title:"node",
        category:"gsdfgds",
        lastupdate:"12/5/1360",
        checked : false
      },
      {
        id:1,
        title:"javascript",
        category:"gsdfgds",
        lastupdate:"12/5/1360",
        checked : false
      },
    ]
    }
  }
  _checkAll(value){
    console.log(value)
    let myData=[];
    this.state.data.forEach(element => {
      console.log(element);
      myData.push(
        {
          id:element.id,
          title:element.title,
          category:element.category,
          lastupdate:element.lastupdate,
          checked : value
        }
      )
    });
    console.log(myData)
    this.setState({
      data:myData
    })
  }
  render(){
    return (
        <div style={{overflowX:"hidden"}}>
             <section className="container-fliud">
                <div className="row">
                    <div className="CreateCourse-main-card card">
                        <div className="card-header bg-primary CreateCourse-main-card-header">
                            <ol className="row page-path mt-1">
                            <li className="breadcrumb-item"><Link className="first-page" to="/">خوش آمدید</Link></li>
                            <li className="breadcrumb-item active " aria-current="page">دوره های آموزشی</li>
                            </ol>
                        </div>
                        <div className="btn-group">
                          <Link to="/" className="btn btn-primary">افزودن دوره های جدید</Link>
                        </div>
                        <div className="viewCourseCatalog">
                          <Link to="/">مشاهده کاتالوگ دوره</Link>
                          <i class="fa fa-reply" aria-hidden="true"></i>
                          <Link to="/"></Link>
                        </div>
                        <table>
                          <tr>
                            <th className="w-130px">OPTIONS</th>
                            <th className="w-100px">LAST UPDATE ON</th>
                            <th className="w-100px">CATEGORY</th>
                            <th className="w-10px">COURSE</th>
                            <th className="w-1px"><input type="checkbox" onChange={
                              (text)=>{
                                
                                this._checkAll(text.target.checked)
                                
                            }
                            }></input></th>
                          </tr>
                          {this.state.data.map((item,index) =>(
                            <tr>
                            <td>
                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                            <Link to="/course"><i class="fa fa-reply noshow" aria-hidden="true"></i></Link>
                            <Link to="/course"><i class="fa fa-times noshow" aria-hidden="true"></i></Link>
                            <Link to="/course"><i class="fa fa-magnet noshow" aria-hidden="true"></i></Link>
                            <Link to="/course"><i class="fa fa-edit noshow" aria-hidden="true"></i></Link>
                            <Link to="/course"><i class="fa fa-signal noshow" aria-hidden="true"></i></Link>

                            </td>
                            <td>07/01/2020</td>
                            <td>نمونه</td>
                            <td>{
                              item.title
                              }</td> 
                            <td><input type="checkbox" checked={item.checked} ></input></td> 
                          </tr>
                          ))}
                          

                        </table>

                        <div className="formRight">
                          <div id="courses-grid_info">
                          1 to 10 of 10                        
                          </div>  
                        </div>
                        
                        <div className="formLeft">
                          <div id="courses-grid_infoLeft">
                            <input type="search" placeholder="جستجو" className="form-control"/>
                            <div className="ico">
                              <Link to="/course"><i class="fa fa-filter" aria-hidden="true"></i></Link>
                              <Link to="/course"><i class="fa fa-download" aria-hidden="true"></i></Link>
                            </div>
                          <div>
                            
                              
                        </div>
                        
                          
                          </div>

                        </div>
   
                    </div>
                    
                </div>
                
              </section>
        </div>
    );
  }
}

export default Contact;



