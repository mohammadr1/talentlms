import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class timeline extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          id : 1,
          label : "badge badge-success",
          event : "ورود",
          user : "شما",
          content : " 52دقیقه پیش وارد سیستم شدید ",
        },
        {
          id : 2,
          label : "badge badge-danger",
          event : "ورود",
          user : "شما",
          content : " 52دقیقه پیش وارد سیستم شدید ",
        },
        {
          id : 3,
          label : "badge badge-warning",
          event : "ورود",
          user : "شما",
          content : " 52دقیقه پیش وارد سیستم شدید ",
        },
      ]
    }
  }
  
  render(){
    return( 
      <div> 
        <table className="timeline">
          <thead>
            <tr><th >مناسبت ها</th></tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => (
              <tr>
                <td key={index}>
                  <span className={item.label}>{item.event}</span>  
                  <span className="user">{item.user}</span>  
                  <span className="content">{item.content}</span>                            
                </td>     
              </tr>
            ))}                       
          </tbody>
        </table> 
      </div>
    )
  }
}