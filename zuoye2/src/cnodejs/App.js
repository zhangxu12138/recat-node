import React, { Component } from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import Start from './components/Start'
import About from './components/About'
import Api from './components/Api'
import Home from './container/Home/Home'
import Login from './components/Login'
import './index.css'
import Content from './container/Home/Content'

export default class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <Header/>
                <div className="main">
                    <div className="content" >
                        <Route path='/' exact component={Home}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/signin' component={Login}/>
                        <Route path='/topic/:id' component={Content}/>
                    </div>
                    <div className="sider" >
                        <div className="sider1">
                            <p>CNode：Node.js专业中文社区</p>
                            <p>您可以登陆或注册</p>
                            <button>通过GitHub登陆</button>
                        </div>
                        <div className="sider2">
                            <div style={{padding:"5px 10px"}}>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                            </div>
                        </div>
                        <div className="sider3">
                            <div>
                                <div style={{backgroundColor:"#f6f6f6",padding:"10px"}}><p>友情社区</p></div>
                                
                                <div>
                                    <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                    <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                                    <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                                    <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
        )
    }
}
