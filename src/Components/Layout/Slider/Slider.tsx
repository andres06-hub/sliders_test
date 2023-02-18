import React, { useEffect, useState } from 'react';
import { Button } from '../../Ui/button/Button';
import images from '../../../exports/imagesSlider';
import { motion } from 'framer-motion';

// import './Slider.scss';
import { Card } from '../../Ui/Card/Card';

export const Slider = (data: any) => {

  const [
    img1, img2, img3, img4, img5, 
    img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15,
] = images;
  const { style, mode } = data.data;
  
  const [characters, setCharacters] = useState(Array)

  const listThisWeek: Object[] = [
      {
        date: 'Action, Drama, 2017',
        title: 'Laby Bird',
        img: img12
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img15
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img10
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img11
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img9
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img13
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img9
      },
  ];

  const listLastDays: Object[] = [
      {
        date: 'Action, Drama, 2017',
        title: 'Laby Bird',
        img: img13
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img10
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img11
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img12
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img3
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img14
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img15
      },
  ];

  const listToday: Object[] = [
      {
        date: 'Action, 2016',
        title: 'Den of Thieves',
        img: img1
      },
      {
        date: 'Action, Thiller, 2018',
        title: 'Laby Bird',
        img: img2
      },
      {
        date: 'Action, Drama, 2017',
        title: 'Laby Bird',
        img: img3
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img4
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img5
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img6
      },
            {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img7
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img8
      },
      {
        date: 'Action, Mystery, 2016',
        title: 'Spiderman 3',
        img: img9
      },
  ];

  const changeListToThisWeek = () => {
    setCharacters(listThisWeek);
  };

  const changeListToLast = () => {
    setCharacters(listLastDays);
  };

  const changeListToday = () =>{
    setCharacters(listToday);
  }

  useEffect(()=>{
    setCharacters(listToday);
  }, []);

  const modeStyles = {
    normal: 'flex justify-between',
    reverse: 'flex flex-row-reverse justify-between'
  };

  return (
    <section className={style}>
      <div className={`content-cont ${modeStyles[mode]} flex place-items-center w-full h-[90%] justify-between`}>
        <section className='slider-cont flex flex-col col-span-2 justify-end max-w-[900px] min-w-[900px] overflow-hidden'>
          <div className='menu flex gap-4 text-gray-500 my-3'>
            <a className='cursor-pointer' onClick={e => changeListToday()}>Today</a>
            <p>/</p>
            <a className='cursor-pointer' onClick={e => changeListToThisWeek()}> This Week</a>
            <p>/</p>
            <a className='cursor-pointer' onClick={e => changeListToLast()}>Last 30 days</a>
          </div>
          <motion.div className='cards grid grid-flow-col place-items-center' drag="x" dragConstraints={{right: 0, left:-741}}>
            {
              characters?.map((item: any, i) => (
                <Card item={item}/>
              ))
            }
          </motion.div>
        </section>
        <div className='content flex flex-col justify-center'>
          <div className="line p-0 my-[1rem] mx-0 border-t-[1px] border-gray-800 max-w-[45px]"></div>
          <div className='title flex flex-wrap text-[25px] max-w-[11rem] font-bold'>
            <h2>Action & Drama Movies</h2>
          </div>
          <div className="previous-next-buttons w-[6rem] grid grid-cols-2 my-4 items-center">
            <Button data={{style: 'slider', content: '<'}}/>
            <Button data={{style: 'slider', content: '>'}}/>
          </div>
          <div className="line mod p-0 my-[1rem] mx-0 border-t-[1px] border-gray-800 max-w-[300px]"></div>
          <a className='font-bold text-gray-500' href="/">VIEW ALL</a>
        </div>
      </div>
    </section>
  )
}
function changeListToThisWeek() {
  throw new Error('Function not implemented.');
}

