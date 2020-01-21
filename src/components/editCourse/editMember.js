import React from 'react';
import { Link } from 'react-router-dom';

export default class EditMember extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            users:[
                {
                    id:this.props.id,
                    userName :"m.mohammad",
                    score:"250",
                    time:"0"
                },
                {
                    id:this.props.id,
                    userName :"fatemeh",
                    score:"250",
                    time:"0"
                }
            ]
        }
    }
    render(){
        return (
            <React.Fragment>
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
                            <td><Link to="/EditCourse" ><i className="fa fa-times" aria-hidden="true"></i></Link></td>   
                            <td>{item.score}</td>
                            <td>{item.time}</td>
                            <td><Link to="/EditCourse">{item.userName}</Link></td>
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
            </React.Fragment>
        );
    }
}


                           