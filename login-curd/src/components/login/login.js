import './login.css';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from './../../data';
import { toast } from 'react-toastify';
import axios from 'axios';
import store from './../../store/store';


export default function Login(props) {

  let [user, setUser] = useState({});


  let history = useHistory();

  const loginUser = (evt) => {

    evt.preventDefault();


    axios.post("/login", user).then((resp) => {
      console.log(resp.data)

      store.dispatch({
        type:"LOGIN_USER",
        user:resp.data
      });


    }).catch((e) => {
      
      console.log(e.message);

    });

  }


  return <main>
    <center>
      <img class="responsive-img" style={{ width: '250px' }} src="https://i.imgur.com/ax0NCsK.gif" />
      <div class="section"></div>

      <h5 class="indigo-text">Please, login into your account</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style={{
          display: 'inline-block',
          padding: '32px 48px 0px 48px',
          border: '1px solid #EEE'
        }}>

          <form onSubmit={loginUser} class="col s12" method="post">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input onChange={(evt) => {

                  user[evt.target.name] = evt.target.value;
                  setUser({ ...user });

                  console.log(evt.target.id);

                }} class='validate' type='email' name='email' id='email' />
                <label for='email'>Enter your email</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input onChange={(evt) => {

                  user[evt.target.id] = evt.target.value;
                  setUser({ ...user });


                  console.log(evt.target.id);

                }} class='validate' type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
              <label style={{ float: 'right' }}>
                <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
              </label>
            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main >
}