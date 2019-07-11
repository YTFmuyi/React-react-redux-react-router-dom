import React from 'react';
class Shop extends React.Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>
                Shop页面<br/>
                传来的id值：{this.props.match.params.id}
            </div>
        );
    }
}
export default Shop
