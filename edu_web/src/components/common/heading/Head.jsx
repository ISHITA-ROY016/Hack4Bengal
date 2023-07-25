import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>SIKSHA SHAKTI</h1>
            <span>Empowering Education In Bengal</span>
          </div>

          <div className='social'>
          <Link to='/login'><button>LOGIN</button></Link>
          <Link to='/register'><button>REGISTER</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head