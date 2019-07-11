import React from 'react';
class UserList extends React.Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>
                子路由：UserList页面
            </div>
        );
    }
}
export default UserList
