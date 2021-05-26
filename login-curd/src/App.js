import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';


import Dashboard from './components/dashboard/dashboard';

import Login from './components/login/login';
import Signup from './components/signp/signup';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/navbar';

import Ad from './components/ad/ad';

import { ads } from './data';

import store from './store/store';

import axios from 'axios'

import { Provider } from 'react-redux';

import AdsBox from './components/adsBox/adsBox';
import Users from './components/users/users';

// SPA, single page appliaction
// (sirf 1 html file hoti)
// React, Angular, vue.js, Backbone


// non-SPA, non single page appliaction
// multple html pages

// hooks
// useState
// useRef
// useContext
// useEffect


function Home() {

  return <>
    <Link to="/signup">New User?</Link>
    <Link to="/login">Already a user?</Link>
  </>

}


// function Child(props) {

//   return <div>
//     <h1>{props.user.name} {props.user.city} {props.num}</h1>
//   </div>

// }

export function App() {

  let [search, setSearch] = useState('');

  const handleChange = (evt) => {

    setSearch(evt.target.value);

  }

  let [name, setName] = useState('');

  // name = "khurram";
  // setName("khurram")

  // debugger

  return <div className="App">

    <Provider store={store}>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>

        <Navbar />

        <input type="text" onChange={(evt) => {

          setName(evt.target.value);

        }} />
        <button onClick={() => {

          // SPAs, bohat xzyada use krti hen
          // NON-SPANs, bohat kum use krti hen AJX ko, php, asp.net
          
          // 3rd part AJAX library
          // ASYNC jS request

        
          
          

        }}>Add Name</button>

        <AdsBox />

        {/* <div className="flex">
          {
            ads.filter(function(ad) {

              if(ad.description.toLowerCase().includes(search.toLowerCase())){
                return true;
              }

            }).map((ad) => {
              return <Ad img={ad.img} desc={ad.description} price={ad.price} />
            })
          }
        </div> */}

        {/* <Ad img={ads[0].img} desc={ads[0].description} price={ads[0].price} />
        <Ad img={ads[1].img} desc={ads[1].description} price={ads[1].price} />
        <Ad img={ads[2].img} desc={ads[2].description} price={ads[2].price} /> */}

        {/* <Child num="10" user={ obj } /> */}

        {/* <Child name="danish" />
        <Child name="talha" />
        <Child name="umar" /> */}

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
   
        <Route path="/users" component={Users} />

      </BrowserRouter>

    </Provider>
  </div>

  // return <div className="App">

  //   <BrowserRouter>

  //     <Navbar />

  //     <Route path="/dashboard" component={Dashboard} />
  //     <Route path="/login" component={Login} />

  //     <Route exact path="/" component={Home} />

  //     {/* <Header /> */}

  //     {/* <Dashboard /> */}

  //     {/* <Footer /> */}

  //   </BrowserRouter>

  // </div>

}

