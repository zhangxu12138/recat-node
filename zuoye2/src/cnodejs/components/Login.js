import React  from 'react'
import {Link} from 'react-router-dom'
export default function Login(){
    return (
        <div className="api">
            <div className="tabBar">
                <Link to={{
                            pathname:'/',
                            search:'?tab=all',
                            state:200
                        }}>主页</Link><span>/ 登陆</span>
            </div>
            <div className="inner topic">
                <div className="topic_content">
                    <div class="markdown-text">
                        <div className="logindiv">
                            <label for="name">用户名</label>
                            <input id="name" name="name" size="30" type="text"/>
                        </div>
                        <div className="logindiv">
                            <label for="password">密&nbsp;码&nbsp;</label>
                            <input id="password" name="password" size="30" type="password"/>
                        </div>
                        <div className="loginbutton">
                        <Link to={{
                            pathname:'/',
                            search:'?tab=all',
                            state:200
                        }}>登陆</Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}