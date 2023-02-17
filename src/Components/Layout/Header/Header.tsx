import React from 'react'
import { Button } from '../../Ui/button/Button';
import imgs from '../../../exports/imgHeder';

export const Header = () => {

  const [imgVideo] = imgs;

  return (
    <header className='h-[27rem] text-xs text-white bg-[#242c3c]'>
      <div className='grid grid-cols-2 pt-14 place-items-center h-[100%] w-[100hv]'>
        <article className='flex flex-col justify-between w-[25rem] h-[13rem]'>
          <h2 className='text-[40px] font-bold'>Big Comeback</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, amet error quasi totam voluptatum, ullam distinctio nisi sequi placeat nobis, nam nulla fugit vel voluptas expedita dolor. Est, praesentium ea.</p>
          <div className='grid grid-cols-3 gap-10'>
            <Button data={{style: 'primary secundary', content: 'WATCH NOW'}}/>
            <Button data={{style: 'primary', content: '+ PLAYLIST'}} />
          </div>
        </article>
        <div className="h-[9rem] w-[18rem] mr-[18rem]">
          <img src={imgVideo} alt="video" />
        </div>
      </div>
    </header>
  )
}
