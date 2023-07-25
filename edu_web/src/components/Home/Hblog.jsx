import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { useUserStore } from "../../store/user"
import { Link } from 'react-router-dom'

// copy code of blog => blogCard

const Hblog = () => {
  const userData = useUserStore((state) => state.user);
  console.log("User data from HBlog", userData);

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    
                  </div>
                  
                  <Link to="/post">

                  <h1>{val.title}</h1>
                  <span>
                      <i className='fa fa-comments comment'></i>
                      <label htmlFor=''>{val.com}</label>
                  </span><br/><br/>
                  </Link>
                  {/* <p>{val.desc}</p> */}
                </div>
              </div>
            ))}
          </div>
          <Link to="/add">
          <button className="add"><b>+</b></button></Link>
        </div>
      </section>
    </>
  )
}

export default Hblog
