import React from 'react';
import ReactDOM from 'react-dom/client';


// import App from './内联样式/App'
// import App from "./普通的CSS/app";
// import App from './CSS_MODULES/app'
import App from "./styled_components/app";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
