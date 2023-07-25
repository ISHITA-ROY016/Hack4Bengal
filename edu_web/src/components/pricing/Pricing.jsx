import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import { useUserStore } from "../../store/user"

const Pricing = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  console.log("Inside Tutor page", accessToken)

  return (
    <>
      <Back title='Choose The Offline Tutors' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
