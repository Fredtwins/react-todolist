import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
//PWA progressive web application
//这个东西是网页形式去访问手机
//https协议的服务器，即时断网了，这个也会存储在缓存中
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
