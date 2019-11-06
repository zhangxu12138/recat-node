import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import List from './List'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            newClassName:0
        }
    }
    handleCilck=(e)=>{
        this.setState({
            newClassName:e.target.getAttribute('data-index')
        })
    
    }
    render() {
        var url = this.props.match.url;//跳到当前的路由
        console.log(this.props);
        return (
            <div>
                <div className="tabBar">
                    <Link className={this.state.newClassName==1?'topic-tab current-tab':'noset'} onClick={this.handleCilck} data-index={1} to={{
                        pathname:url,
                        search:'?tab=all',
                        state:200
                    }}>全部</Link>
                    <Link className={this.state.newClassName==2?'topic-tab current-tab':'noset'} onClick={this.handleCilck} data-index={2} to={{
                        pathname:url,
                        search:'?tab=good',
                        state:200
                    }}>精华</Link>
                    <Link className={this.state.newClassName==3?'topic-tab current-tab':'noset'} onClick={this.handleCilck} data-index={3} to={{
                        pathname:url,
                        search:'?tab=share',
                        state:200
                    }}>分享</Link>
                    <Link className={this.state.newClassName==4?'topic-tab current-tab':'noset'} onClick={this.handleCilck} data-index={4} to={{
                        pathname:url,
                        search:'?tab=job',
                        state:200
                    }}>工作</Link>
                </div>
                <div>
                    <Route path={`${url}`} component={List}/>
                   
                </div> 
            </div>
        )
    }
}
