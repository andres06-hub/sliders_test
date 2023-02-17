import React from 'react'
import { Button } from '../../Ui/button/Button';

import './Header.scss';

export const Header = () => {

  return (
    <header>
      <div className='content'>
        <article>
          <h2>Big Comeback</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, amet error quasi totam voluptatum, ullam distinctio nisi sequi placeat nobis, nam nulla fugit vel voluptas expedita dolor. Est, praesentium ea.</p>
          <div className='container-btn'>
            <Button data={{style: 'primary secundary', content: 'WATCH NOW'}}/>
            <Button data={{style: 'primary', content: '+ PLAYLIST'}} />
          </div>
        </article>
        <div className="video">
          <img src="" alt="video" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil praesentium voluptatem harum inventore temporibus corrupti consectetur, nisi magni in consequuntur. Harum officiis at quod ipsa consequuntur corporis tempore autem dolorem.
        </div>
      </div>
    </header>
  )
}
