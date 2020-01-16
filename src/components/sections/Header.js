import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{direction:"rtl"}}>
          <Link className="navbar-brand" to="/"> تلنت فارسی (نسخه آزمایشی)</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">Contact </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/CreateCourse">CreateCourse </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/course">Course </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/userinfo">Userinfo </Link>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>                        
    );
  }
}

export default Header;



