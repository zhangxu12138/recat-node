import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class List extends Component {
    constructor(){
        super();
        this.state={
            data:[],
           
        }
    }
    componentDidMount(){
        let path = this.props.location.search
        fetch('https://cnodejs.org/api/v1/topics'+path)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log('更新前',res.data)
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search !== this.props.location.search){
            let path = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+path)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                    console.log('更新后',res.data)
                })
        }
        
    }
    render() {
      
        var url = this.props.match.params.url;
        var before = this.props.location.search.split('&')[0];
        var arr = [1,2,3,4,5,6,7,8,9,10];
        console.log(this.props)
        return (
            <div>
                <div>
                    <ul>
                        {
                            this.state.data.map((item,index)=>{
                                var keyName = 'a'+index;
                                var tabName = '';
                                switch (item.tab) {
                                    case 'share':
                                        tabName = "分享"
                                        break;
                                    case 'job':
                                        tabName = '工作'
                                    default:
                                        tabName = "暂无";
                                        break;
                                }
                                var titleName = '';
                                if(item.title.length>50){
                                    titleName = item.title.slice(0,50);
                                   
                                }else{
                                    titleName = item.title
                                }
                                return <div className="cell" key={keyName}>
                                <img style={{float:"left"}} src={item.author.avatar_url} alt={item.loginname}/>
                                <div style={{float:"left",marginLeft:'8px'}}>
                                <span style={{color:"#9e78c0"}}className="count_of_replies" title="回复数">{item.reply_count}</span>
                                <span style={{fontSize:"10px",color:"#b4b4b4"}}>/</span>
                                <span style={{fontSize:"10px",color:"#b4b4b4"}}className="count_of_visits" title="点击数">{item.visit_count}</span>
                                {/* <span className="last_active_time">{item.last_reply_at}</span> */}
                                <span style={{marginLeft:'8px',marginRight:'8px'}}className="topiclist-tab" title="tab">{tabName}</span>
                                <Link className="topic_title" to={{
                                    pathname:`/topic/${item.id}` 
                                }}>{titleName}</Link>
                                </div>
                            </div>
                            })
                        }
                    </ul>
                </div>
                <div style={{backgroundColor:'white',height:"35px"}}>
                    <ul className="ulTar">
                        {
                            arr.map((item,index)=>{
                                return <li className="tar" key={index}><Link to={{
                                    pathname:url,
                                    search:`${before}&page=${item}`,
                                    state:200
                                }}>{item}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
