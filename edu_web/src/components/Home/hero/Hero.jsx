import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container glass'>
          <div className='row'>
            <h1>SIKSHA SHAKTI</h1>

            <br/>
            <span>Empowering Education in Bengal</span><br/><br/>

            <p>“Education is the most powerful weapon which you can use to change the world.” <i>― Nelson Mandela</i></p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW
              </button>
              <button>
                VIEW COURSE
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero