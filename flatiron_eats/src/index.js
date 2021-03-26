import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from './Login'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
    {/* <Route path="/login" component={Login} /> */}
  </Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
