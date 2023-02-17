import React from 'react'
import { Button } from '../../Ui/button/Button'

import './Slider.scss';

export const Slider = () => {
  return (
    <section className='container'>
      <div className='content-cont'>
        <section className='slider-cont'>
          <div className=''>
            <p>Today / This week / Last 30 days</p>
          </div>
          <div className='imgs-cont'>
            <div className='img'>
              <img src="https://pm1.narvii.com/6251/6d1e0439bdbef8e1e395db6904e4bb4ea5a037c3_hq.jpg" alt="Img" />
            </div>
            <p className='date'>Action,2016</p>
            <p className='descrip'>Den of Thieves</p>
          </div>
        </section>
        <div className='content'>
          <div className="line"></div>
          <div className='title'>
            <h2>Action & Drama Movies</h2>
          </div>
          <div className="previous-next-buttons">
            <Button data={{style: 'slider', content: '<'}}/>
            <Button data={{style: 'slider', content: '>'}}/>
          </div>
          <div className="line mod"></div>
        </div>
      </div>
    </section>
  )
}
