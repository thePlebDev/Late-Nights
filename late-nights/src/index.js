import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './Components/App'
import GlobalStyle from './Styling/Global'



ReactDOM.render(
  <Router>
    <GlobalStyle/>
    <App />
  </Router>,
  document.getElementById('root'))
