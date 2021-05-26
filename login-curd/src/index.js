




import Abc, { makeIftari, makeBiryani, some } from './data';

// import {makeBiryani} from './data';
// systemJS

import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import {App } from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(<div>
  <App />
</div>, document.getElementById('danish'));

// RM.render(, document.getElementById('danish')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
