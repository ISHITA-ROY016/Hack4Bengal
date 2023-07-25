import React from "react"
import "./blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom"

// copy code of blog => blogCard

const Hblog = () => {

    return (
        <>
            <section className='blog post'>
                <div className='container'>
                    <Heading subtitle='QUERIES' title='Recent From Queries' />

                    {blog.slice(0, 1).map((val) => (
                        <div className='items shadow'>
                            <div className='img posti'>
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
                                <h1>{val.title}</h1>
                                <span>
                                    <i className='fa fa-comments comment'></i>
                                    <label htmlFor=''>{val.com}</label>
                                </span><br /><br />

                                <p>{val.desc}</p>
                            </div>
                            <form>
                                <label for="lname" className="com">Comment</label>
                                <input type="text" id="lname" name="lname" />
                                <button className="postbtn">Add comment</button>
                            </form>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Hblog

