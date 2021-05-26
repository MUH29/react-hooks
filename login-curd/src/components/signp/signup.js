import '../login/login.css';

import { useRef } from 'react';

import { users } from '../../data';
import { useForm } from "react-hook-form";

import axios from 'axios';

export default function Signup() {

  let nameRef = useRef();
  let passwordRef = useRef();
  let cityRef = useRef();
  let fileRef = useRef();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const saveUser = (data) => {




    // let user = {
    //   email: nameRef.current.value,
    //   password: passwordRef.current.value,
    //   city: cityRef.current.value,
    //   pic:fileRef.current.files[0]
    // };

    let fd = new FormData();
    fd.append("email", nameRef.current.value);
    fd.append("name", data.name);
    fd.append("password", passwordRef.current.value);
    fd.append("city", cityRef.current.value);
    fd.append("pic", fileRef.current.files[0]);

    axios.post('/signup', fd).then((resp) => {

      console.log(resp.data);

    });

  }

  return <main>
    <center>
      <img class="responsive-img" style={{ width: '250px' }} src="https://i.imgur.com/ax0NCsK.gif" />
      <div class="section"></div>

      <h5 class="indigo-text">Please, create a new account</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style={{
          display: 'inline-block',
          padding: '32px 48px 0px 48px',
          border: '1px solid #EEE'
        }}>

          <form onSubmit={handleSubmit(saveUser)} class="col s12" method="post">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input name='name' id='name'  {...register("name", { required: true })} ref={nameRef} class='validate active' type='text' />
                <label for='name' className="active">Enter your name</label>
                {errors.name && <span>This field is required</span>}
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input name='email' id='email'  {...register("email", { required: true })} ref={nameRef} class='validate active' type='email' />
                <label for='email'>Enter your email</label>
                {errors.email && <span>This field is required</span>}
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input name='password' id='password' {...register("password", { required: true, minLength: 4 })} ref={passwordRef} class='validate active' type='password' />
                <label for='password'>Enter your password</label>
                {errors.password && <div>This field is required</div>}
                {errors.password && errors.password.type == "minLength" && <div>Please enter passwod with atlesat 4 errors</div>}

              </div>
              <label style={{ float: 'right' }}>
                <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
              </label>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input ref={cityRef} class='validate' type='text' name='password' id='password' />
                <label for='password'>Enter your city</label>
              </div>

            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input ref={fileRef} class='validate' type='file' name='pic' id='pic' />
                <label for='password'>Enter your pic</label>
              </div>

            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Signup</button>
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