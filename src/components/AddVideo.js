import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class AddVideo extends Component{
  constructor(props){
    super(props);
    this.state = {
      add : 0,
      num : 80,
    }
  }
  _addName(e){
    let lengthN = e.length;
    let newN = 0 + lengthN;
    console.log(newN);
    this.setState({
      add : newN
    })

  }

  render(){
    return (
        <div style={{margin:60, direction:"rtl"}}>
          <div className="container">
            <div className="row">
            <div className="CreateCourse-main-card card">
            <div className="card-header bg-primary CreateCourse-main-card-header">
                <ol className="row page-path mt-1">
                <li className="breadcrumb-item"><Link className="first-page" to="/">خوش آمدید</Link></li>
                <li className="breadcrumb-item active " aria-current="page">دوره های آموزشی</li>
                </ol>
            </div>
                <form className="form-group ">
                  <div class="input-group mb-3">
                    <label className="label-name-addVideo">نام</label>
                    
                    <input type="text" 
                     class="form-control"
                     id="inputName"
                     placeholder="نامی را اختصاص دهید"
                     aria-label="Username" 
                     aria-describedby="basic-addon1"
                     maxLength="80"
                     onChange={(event) => this._addName(event.target.value)} />
                    <div class="input-group-prepend" style={{height:'100%'}}>
                      <span class="input-group-text" id="basic-addon1">{this.state.num}/{this.state.add}</span>
                    </div>
                  </div>

                  <hr />

                  <div class="input-group mb-3">
                    <label className="label-name-addVideo">انتخاب ویدئو</label>
                    
                    <input type="search" 
                     class="form-control"
                     placeholder="url را از سایت مورد نظر وارد کنید"
                     aria-label="Username" 
                     aria-describedby="basic-addon1" />
                    <div class="input-group-prepend" style={{height:'100%'}}>
                      {/* <span class="input-group-text" id="basic-addon1">{this.state.num}/{this.state.add}</span> */}
                      <Link to="/"><i class="fas fa-search" aria-hidden="true"></i></Link>
                    </div>
                  </div>
                  
                  <input type="submit" class="btn btn-primary" value="ذخیره" />
                  
                </form>
                </div>
            </div>
          </div>
        </div>
   );
  }
}

export default AddVideo;



