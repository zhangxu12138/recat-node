import React, { Component } from 'react'

export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        let path = this.props.match.params.id
        console.log('path',path)
        fetch(`https://cnodejs.org/api/v1/topic/${path}`)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log('更新前',res.data)
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search !== this.props.location.search){

            let path = this.props.match.params.id
            console.log('path',path)
            fetch( `https://cnodejs.org/api/v1/topic/${path}`)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                    console.log('更新后',res.data)
                })
        }
        
    }
    render() {
        console.log(this.state.data)
        return (
            <div style={{backgroundColor:"white"}} dangerouslySetInnerHTML = {{ __html:this.state.data.content }}>
  
            </div>
            
        )
    }
}

