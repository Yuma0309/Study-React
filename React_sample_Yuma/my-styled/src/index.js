/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import StyledDynamic from './StyledDynamic';
/* eslint-enable no-unused-vars */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StyledDynamic theme={{
    radius: true,
    color: 'royalblue'
  }} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
