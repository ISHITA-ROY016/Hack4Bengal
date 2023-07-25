import React, { useEffect, useState } from "react"
import { price } from "../../dummydata"
import { Link } from "react-router-dom";
import axios from "axios";

const PriceCard = ({ profile_image, owner, works_at, studies_at, no_students, teach_year, salary, rank }) => {
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

      {user.map((val) => (
        <div className='items shadow'>
          <img className="it" src={val.profile_image} alt='' />
          <br /><br />
          <h2>Name: {val.owner}</h2>
          <h3>Rank: {val.rank}</h3>
          <p>
            students: {val.no_students}<br />
            Works At: {val.works_at}<br />
            Salary: {val.salary}<br />
            {/* {val.desc} */}
          </p>
          <Link to='/details' className="link">
            <button className='outline-btn'>
              Get Details
            </button>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PriceCard
