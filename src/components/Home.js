import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
  render(){
    return (
      <React.Fragment>
        <section className="container-fluid" style={{overflowX:"hidden"}}>
        <div className="row">
              <div className=" pt-5 justify-content-center d-flex" >
                      

                      <div className="home-card col-md-3 shadow"  >
                      <div className="row ">
                          <div className="col-md-5">
                            <img className="mt-5" src="/images/CustomizePortal.svg" alt="Card image cap" />
                          </div>
                          <div className="col-md-7">
                            <h1 className="">عنوان دو</h1>
                            <hr/>
                            <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                            <hr/>
                            <Link to="/" className="btn btn-primary  w-100 btn-sm">بریم</Link>
                          </div>
                        </div>
                      </div>

                      <div className="home-card col-md-3 w-100 shadow" >
                        <div className="row ">
                          <div className="col-md-5">
                            <img className="mt-5" src="/images/CreateCourse.svg" alt="Card image cap" />
                          </div>
                          <div className=" col-md-7">
                            <h1 className="">ایجاد دوره</h1>
                            <hr/>
                            <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                            <hr/>
                            <Link to="/CreateCourse" className="btn btn-primary  w-100 btn-sm">بریم</Link>
                          </div>
                        </div>
                      </div>
                      <div className="home-card col-md-3 shadow">
                      <div className="row ">
                          <div className="col-md-5">
                            <img className="mt-5" src="/images/admin.svg" alt="Card image cap" />
                          </div>
                          <div className=" col-md-7">
                            <h1 className="mb-3">عنوان سه</h1>
                            <hr/>
                            <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                            <hr/>
                            <Link to="/" className="btn btn-primary w-100 btn-sm">بریم</Link>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            </section>
        </React.Fragment>
    );
  }
}

export default Home;



