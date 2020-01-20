import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class course extends Component{
    constructor(props){
        super(props);
         this.state = {
            data: [
                {
                    id : 1,
                    course : "Advanced Features of TalentLMS",
                    progress : "Not started",
                    score : "-",
                    enrolled : "1 hour ago",
                    completiondata : "-",
                    time : "-",
                },
                {
                    id : 2,
                    course : "Advanced Features of TalentLMS",
                    progress : "Not started",
                    score : "-",
                    enrolled : "1 hour ago",
                    completiondata : "-",
                    time : "-",
                },
            ]
         }
    }

  render(){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th className="w-300px">دوره</th>
                    <th className="w-90px">پیش رفتن</th>
                    <th className="w-25px">نمره</th>
                    <th className="w-100px">ثبت نام</th>
                    <th className="w-90px">تاریخ تکمیل</th>
                    <th className="w-25px">زمان</th>
                    </tr>
                    </thead>
                <tbody>
                {this.state.data.map((item,index) =>(
                    <tr key={index}>
                    <td><Link to="/userinfo">{item.course}</Link></td>  
                    <td><Link to="/">{item.progress}</Link></td>  
                    <td>{item.score}</td>  
                    <td>{item.enrolled}</td>  
                    <td>{item.completiondata}</td>  
                    <td>{item.time}</td>    
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
    )
  }
}