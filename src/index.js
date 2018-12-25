import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Hello from './hello';
// import Greeting from './Greeting';
// import Mailbox from './Mailbox';
import Blog from './Blog';


const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

const isLoggedin = true;
// const unreadMessages =   ['MOver Maflona', 'Rita Nabirye', 'Taking Home and Listen'];
ReactDOM.render( <Blog posts = {posts} isLoggedin={isLoggedin}  / > , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();