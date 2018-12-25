import React, { Component } from 'react';

class Blog extends Component {

    
    render() {

        const sidebar = (
            <ul>
                    {
                        this.props.posts.map((post)=>
                        <li key={post.id}>
                             {post.title} 
                        </li>
                    )
                }   
            </ul>             
        );

        const content =  ( 
            <div>
                {
                    this.props.posts.map((post)=>
                    <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    
                        </div>
                    )
                }
            </div>
        );



        return (
            <div>
                {sidebar} <br/>
                {content}
            </div>
        )
    }
}

export default Blog;