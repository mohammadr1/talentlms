import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class badge extends Component{
  constructor(props){
    super(props);
    this.state = {
      badge:[
        {
          id : 1,
          imgClass : "fa fa-eercast fa-5x",
          title : "عنوان badge",
        }
      ],
      learning:[
        {
          id : 1,
          imgClass : "fa fa-eercast fa-5x",
          title : "عنوان learning",
        },
        {
          id : 1,
          imgClass : "fa fa-eercast fa-5x",
          title : "عنوان learning",
        },
      ],
      pattern:[
        {
          id : 1,
          imgClass : "fa fa-eercast fa-5x",
          title : "عنوان pattern",
        }
      ],
    }
  }
  
  render(){
    let badge = this.state.badge;
    let learning = this.state.learning;
    let pattern = this.state.pattern;
    return( 
      <div> 
        <div className="bedges">
          <div className="card-header bg-primary CreateCourse-main-card-header">
            <ol className="row page-path mt-1">
              <li className="breadcrumb-item active " aria-current="page">صفحات فعالیت</li>
            </ol>
          </div>
          <div style={{padding:10}}>
            <div className="badge-div">
              <i class={badge.imgClass} aria-hidden="true"></i>
              <div>{badge.title}</div>
            </div>
          </div>
        </div>              
        {/* start blog learning */}
        <div className="bedges">
          <div className="card-header bg-primary CreateCourse-main-card-header">
            <ol className="row page-path mt-1">
              <li className="breadcrumb-item active " aria-current="page">صفحات آموزش</li>
            </ol>
          </div>
          <div style={{padding:10}}>
            <div className="learning-div">
              <i class={learning.imgClass} aria-hidden="true"></i>
              <div>{learning.title}</div>
            </div>
          </div>
        </div>
        {/*  end blog learning */}

        {/* start blog pattern */}
        <div className="bedges">
          <div className="card-header bg-primary CreateCourse-main-card-header">
            <ol className="row page-path mt-1">
              <li className="breadcrumb-item active " aria-current="page">صفحات الگو</li>
            </ol>
          </div>
          <div style={{padding:10}}>
            <div className="pattern-div">
              <i class={pattern.imgClass} aria-hidden="true"></i>
              <div>{pattern.title}</div>
            </div>
          </div>
        </div>
        {/*  end blog pattern */}                           
      </div>
    )
  }
}