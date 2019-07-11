import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './router/route.js';
import MyContext from './context/MyContext'
import {Provider} from 'react-redux'
import configureStore from './store/store.js'
import initState from './store/state.js'

const store=configureStore(initState);

class App extends React.Component{
    componentDidMount() {
      this.setState({
          name:'Yang',
          age:18
      })
    }
    changeAge(){
        //setState中执行更改操作，第一个参数为要更改的数据，第二个参数为更改完成后的回调函数，利用回调的目的是因为setDate的操作是一个异步操作，同步代码中无法
        //实时获取setState后的state状态
        this.setState({
            age:this.state.age+1
        },()=>{
            this.setState({
                age:this.state.age+1
            })
        });
    }
    showRefInfo(){
        console.log(this.refs)
    }

    render(){
        const RouterWithSubRoutes = (route) => {
            if(route.exact){
                return <Route exact path={route.path} render={props => (
                    <route.component {...props} routes={route.routes} >
                        {route.routes?(route.routes.map((route) => (
                            <RouterWithSubRoutes key={route.path} {...route} />
                        ))):''}
                    </route.component>
                )} />
            }else{
                return <Route path={route.path} render={props => (
                    <route.component {...props} routes={route.routes} >
                        {route.routes?(route.routes.map((route) => (
                            <RouterWithSubRoutes key={route.path} {...route} />
                        ))):''}
                    </route.component>
                )} />
            }
        };

        return(
            <Provider store={store}>
                <MyContext.Provider value={{name:'刘清远'}}>
                <div className="App">
                    <div>来自state的值：{JSON.stringify(this.state)}</div>
                    <button onClick={this.changeAge.bind(this)}>改变state的值</button><br/>
                    <span onClick={this.showRefInfo.bind(this)}>showRefInfo</span>
                    <span ref="spanRef" style={{marginLeft:'10px'}}>ref目标Span</span>
                    <div style={{marginBottom:'20px',marginTop:'20px'}}>以下为路由页面</div>
                    <Router>
                        <div>
                            <header className="title">
                                <Link className="myLink" to="/">首页组件</Link>
                                <Link className="myLink" to="/user">用户页面组件（不带参数）</Link>
                                <Link className="myLink" to="/shop/2">商户页面组件</Link>
                            </header>
                            {routes.map((route) => (
                                <RouterWithSubRoutes key={route.path} {...route} />
                            ))}
                        </div>
                    </Router>
                </div>
                </MyContext.Provider>
            </Provider>
        );
    }
}

export default App;
