import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from './UserList'
class User extends React.Component{
    componentWillMount(){
        if(this.props.location.state){
            console.log(this.props.location.state.day);
        }
    }
    render(){
        return(
            <div>
                User页面<br/>
                通过state传来的值：{JSON.stringify(this.props.location.state)}
                {this.props.children}
            </div>
        );
    }
}
export default User
