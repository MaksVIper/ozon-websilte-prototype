import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let arr = JSON.parse(localStorage.getItem("allEntries"))|| [];

ReactDOM.render(

    <App />
 , document.getElementById('root')
);


serviceWorker.unregister();
