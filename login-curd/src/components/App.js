import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';


import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

// SPA, single page appliaction
// (sirf 1 html file hoti)
// React, Angular, vue.js, Backbone


// non-SPA, non single page appliaction
// multple html pages

export function Data() {


  return <div className="App">
    
    <BrowserRouter>
      
      <Navbar />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />

      <Route exact path="/" component={Home} />

      {/* <Header /> */}

      {/* <Dashboard /> */}

      {/* <Footer /> */}

    </BrowserRouter>

  </div>

}

