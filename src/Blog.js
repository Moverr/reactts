import React, { Component } from 'react';

class Blog extends Component {

    
    render() {

        const posts = this.props.posts;
        const sidebar = this.getSideBar(posts);
        const content =  this.getContent(posts);


        return (
            <div>
                {sidebar} <br/>
                {content}
            </div>
        )
    }

    getContent(posts) {
        return (<div>            {posts.map((post) => <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>)}
        </div>);
    }

    getSideBar(posts) {
        return (<ul>
            {posts.map((post) => <li key={post.id}>
                {post.title}
            </li>)}
        </ul>);
    }
}

export default Blog;