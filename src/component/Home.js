import React from 'react';
import MyContext from '../context/MyContext'
import { connect } from 'react-redux'
import { addCount,subtractCount,changeName } from "../store/action/actions";
import {bindActionCreators} from 'redux';
import {withRouter} from "react-router-dom";
class Home extends React.Component{
    componentWillMount(){
        console.log(this.props)
    }
    addCount(){
        this.props.dispatch({
            type:'add'
        })
    }
    subtractCount(){
        this.props.dispatch({
            type:'subtract'
        })
    }
    toUser(){
        this.props.history.push({ pathname:'/user',state :{day : 'Friday' } })
    }
    toShop(){
        this.props.history.push( '/shop/'+'2'  );
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.count)
    }
    render(){
        return(
            <div>
                Home页面<br/>
                来自redux的count：{this.props.count}<br/>
                来自redux的name：{this.props.name}<br/>
                {/*两种方式都可以触发dispatch，第二种利用了action，流程更完善*/}
                {/*<button onClick={this.addCount.bind(this)}>+</button><br/>*/}
                {/*<button onClick={this.subtractCount.bind(this)}>-</button><br/>*/}
                <button onClick={this.props.addCountAction}>count+</button><br/>
                <button onClick={this.props.subtractCountAction}>count-</button><br/>
                来自content的name：{this.context.name}<br/>
                <button onClick={this.toUser.bind(this)}>跳转到用户页面（带参数）</button><br/>
                <button onClick={this.toShop.bind(this)}>跳转到商店页面</button>
                {this.props.children}<br/>
            </div>
        );
    }
}
Home.contextType=MyContext;
function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        addCountAction: bindActionCreators(addCount, dispatch),
        subtractCountAction: bindActionCreators(subtractCount, dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
