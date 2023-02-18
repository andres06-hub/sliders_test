import React from 'react'
import { Header } from '../../Components/Layout/Header/Header'
import { Slider } from '../../Components/Layout/Slider/Slider'

export const Landing = () => {
  return (
    <>
      <Header/>
      <Slider data={{style: 'first grid place-items-center text-[13px] max-w-[100vw] h-[23rem] text-white bg-[#0f131d] px-[7rem]', mode: 'normal'}}/>
      <Slider data={{style: 'first second grid place-items-center text-[13px] max-w-[100vw] h-[23rem] text-white bg-[#0f131d] px-[7rem]', mode: 'reverse'}}/>
    </>
  )
}
