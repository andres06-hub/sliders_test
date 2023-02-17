import React from 'react'
import { Header } from '../../Components/Layout/Header/Header'
import { Slider } from '../../Components/Layout/Slider/Slider'

export const Landing = () => {
  return (
    <>
      <Header/>
      <Slider data={{style: 'first'}}/>
      <Slider data={{style: 'first second'}}/>
    </>
  )
}
