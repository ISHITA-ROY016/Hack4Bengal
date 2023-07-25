import React, { useEffect, useState } from 'react'
import "./details.css"
import Heading from "../common/heading/Heading"
import { price } from "../../dummydata"
import Cookies from './cookies.js';
import axios from "axios";

const Details = ({ profile_image, owner, works_at, studies_at, no_students, teach_year, salary, rank }) => {
  // const getCookieValue = (name) => {
  //   const cookies = document.cookie.split(',');

  //   for (let i = 0; i < cookies.length; i++) {
  //     const cookie = cookies[i].split(': ');
  //     console.log(cookie);
  //     if (cookie[0] === name) {
  //       return cookie[1];
  //     }
  //   }
  //   return '';
  // };
  // const profileImage = getCookieValue('profileImage');
  // const owner = getCookieValue('owner');
  // const gender = getCookieValue('gender');
  // const dob = getCookieValue('dob');
  // const phone = getCookieValue('phone');
  // const worksAt = getCookieValue('worksAt');
  // const livesIn = getCookieValue('livesIn');
  // const studentAt = getCookieValue('studentAt');
  //  const role = getCookieValue('role');

  // const profileImage = Cookies.get('profileImage');
  // const owner = Cookies.get('owner');
  // const worksAt = Cookies.get('worksAt');
  // const livesIn = Cookies.get('livesIn');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const getDetails = async () => {
  //   const resp = await fetch('http://localhost:8000/profile/')
  //   setUser((await resp.json()).data)
  //   console.log(resp);

  // }

  // useEffect(() => {
  //   getDetails()
  //   console.log("Effect");
  //   //console.log(users);
  // }, [])
  const [user, setUser] = useState()
  const baseURL = 'http://localhost:8000/profile/';
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUser(response.data);
    });
  }, []);


  if (!user) return null;


  return (
    <>
      {user.slice(0, 1).map((val) => (
        <section className='aboutHome'>
          <div className='container flexSB'>
            <div className='left row'>
              <br />
              <img src={val.profile_image} alt='' />
            </div>
            <div className='right row'>
              <Heading subtitle='LEARN ANYTHING' title='Tutor Details' />
              <div className='items'>
                <h2>{val.owner}</h2><br />
                {/* <h3>Looking for students eager to learn and explore the world of Physics.  </h3><br /> */}
                <ul>
                  <li>Number of Students : {val.no_students}</li><br />
                  <li>Teaching Experience : {val.teach_year} </li><br />
                  <li>Reviews form Student : 3.8/5</li><br />
                  {/* <li>Location: {val.lives_in}</li> */}
                  <li>Works at:{val.works_at}</li><br />
                  <li>Monthly Remunerations : Rs.{val.salary}</li><br />
                  <li>Expertise : Expert in Physics with gold medal in M.Sc  </li><br />
                  <li>Ranking in Leaderboard : {val.rank}</li><br />
                </ul>
                <button> Contact with me </button>
                <button> Chat with me </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Details