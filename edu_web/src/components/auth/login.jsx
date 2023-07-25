import React, { useState } from 'react';
import Back from "../common/back/Back";
import "../contact/contact.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import image from './login-illus.jpg';
import { useUserStore } from '../../store/user';


export default function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [formDetails, setFormDetails] = useState({
    inputField: "",
    password: "",
  });

  const setUser = useUserStore((state) => state.setUser);


  const inputChange1 = (event) => {
    setName(event.target.value);
  };

  const inputChange2 = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login data to the backend
    let responseClone;
    await fetch('http://localhost:8000/auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        "email": name,
        "password": pass
      }),
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${authData?.tokens?.access}}`
      }
    })
      .then(async function (response) {
        responseClone = await response.clone();
        if (!response.ok) {
          throw new Error('Login request failed');
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setUser(data);
        handleLogin(data.tokens);
        navigate('/');
      }, function (rejectionReason) {
        console.log('Error parsing JSON from response:', rejectionReason, responseClone);
        responseClone.text()
          .then(function (bodyText) {
            console.log('Received the following instead of valid JSON:', bodyText);
          });
      });
  };

  return (
    <>
      <></>
      <Back title='Login' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img alt="" className="il" src={image}></img>
          </div>
          <div className='right row'>
            <h1 className='login_header'>Login with us</h1>
            <form onSubmit={handleSubmit} className="auth-form auth-signup-form">
              <div className='flexSB'>
                <input
                  type='text'
                  placeholder='Email'
                  name='inputField'
                  value={name}
                  onChange={inputChange1}
                  required
                />
              </div>
              <input
                placeholder='Password'
                type={passShow ? "text" : "password"}
                name="password"
                value={pass}
                onChange={inputChange2}
                className="input-field"
                minLength="5"
                required
              />
              <button
                type="submit"
                className={'primary-btn'}
              >LOGIN
              </button>
            </form>
            <p>
              Don't have an account? <Link to='/register'>Register</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
