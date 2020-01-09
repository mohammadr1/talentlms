import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
  render(){
    return (
        <div style={{marginTop:60}}>
            <div className="card" style={{width: '18rem',display:'inlineBlock'}}>
              <img className="card-img-top" src="/images/CreateCourse.svg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">عنوان یک</h5>
                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                <Link to="/" className="btn btn-primary">بریم</Link>
              </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="/images/CustomizePortal.svg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">عنوان دو</h5>
                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                <Link to="/" className="btn btn-primary">بریم</Link>
              </div>
            </div>

            
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="/images/Admin.svg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">عنوان سه</h5>
                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                <Link to="/" className="btn btn-primary">بریم</Link>
              </div>
            </div>

        </div>
    );
  }
}

export default Home;



