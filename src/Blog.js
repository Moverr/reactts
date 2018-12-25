import React, { Component } from 'react';

class Blog extends Component {

    
    render() {

        const sidebar = (
            <ul>
                    {
                        this.props.posts.map((post)=>
                        <li> movers </li>
                        )
                }   
            </ul>             
        );
    
        

        return (
            <div>
                
            </div>
        );
    }
}

export default Blog;