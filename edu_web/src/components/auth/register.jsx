import React, { useState } from 'react'
import Back from "../common/back/Back"
import "../contact/contact.css"
import image1 from "./auth-illus.jpg"
import axios from "axios";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";

import { Link, useNavigate, Redirect } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [passShow, setPassShow] = useState('');
  const [email, setEmail] = useState('');
  const [btnLoading, setBtnLoading] = useState('');
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    return setFormDetails({ ...formDetails, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const {
        fullName,
        email,
        password,
      } = formDetails;
      await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDetails)
      }).then(response => response.json()).then(data => {
        console.log(data);
      });
      setBtnLoading(true);
    } catch (error) {
      setBtnLoading(false);
      return error;
    }
  };


  return (
    <>
      <Back title='Register' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <img alt="" className="il" src={image1}></img>
          </div>
          <div className='right row'>
            <form
              onSubmit={handleSubmit}
              className="auth-form auth-signup-form">
              <h1>Register with us</h1>


              <div className='items grid2 flex flexSB'>
                <input
                  type="email"
                  name="email"
                  value={formDetails.email}
                  onChange={inputChange}
                  required
                  className="input-field"
                  maxLength="255"
                  minLength="1"
                  placeholder='Email'
                />

              </div>
              <div className='items grid2 flexSB'>
                <input
                  type="text"
                  name="fullName"
                  value={formDetails.fullName}
                  onChange={inputChange}
                  required
                  maxLength="255"
                  minLength="1"
                  className="input-field"
                  placeholder='User Name'
                />

              </div>
              <div className="items grid2 flexSB">

                <input
                  type={passShow ? "text" : "password"}
                  name="password"
                  value={formDetails.password}
                  onChange={inputChange}
                  maxLength="68"
                  minLength="6"
                  className="input-field"
                  required
                  placeholder='Password'
                />


                {passShow && (
                  <AiFillEye
                    className="eye-open"
                    onClick={() => setPassShow(!passShow)}
                  />
                )}
              </div>
              <Link to='/profile'>
                <button type='submit'
                  className={`primary-btn btn signup-btn auth-btn ${btnLoading ? "disable-btn" : ""
                    }`}
                >Sign Up</button>
              </Link>

              <p>
                Already have an account?{" "}
                <Link to='/login'>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register