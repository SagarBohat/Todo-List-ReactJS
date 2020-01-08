import React from 'react';
import { render } from 'react-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { App } from './App';







class Root extends React.Component{

render(){
  return(
    <div className="container">
    <ReactNotification />
    <App />
  </div>

);
}


}

render(<Root/>,window.document.getElementById("root"));
