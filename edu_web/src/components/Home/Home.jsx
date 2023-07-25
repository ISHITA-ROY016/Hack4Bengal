import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Faq from "../pricing/Faq"
import Team from "../team/Team"
import Header from "../common/heading/Header"

const Home = () => {
  return (
    <>

      <Hero />
      <AboutCard />
      <HAbout />
      <Hprice />
      <Testimonal />
      <Hblog />
      <Faq/>
      
    </>
  )
}

export default Home;