import React, { useEffect, useState } from 'react';
import { Button } from '../../Ui/button/Button';
import images from '../../../exports/imagesSlider';
import { motion } from 'framer-motion';

import './Slider.scss';
import { Card } from '../../Ui/Card/Card';

export const Slider = (data: any) => {

  const [img1, img2, img3, img4, img5, img6, img7, img8, img9] = images;
  const { style } = data.data;
  
  const [characters, setCharacters] = useState(Array)

  const listThisWeek: Object[] = [
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
        img: img9
      },
  ];

  const listLastDays: Object[] = [
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
        img: img9
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

  return (
    <section className={style}>
      <div className='content-cont'>
        <section className='slider-cont'>
          <div className='menu'>
            <a onClick={e => changeListToday()}>Today</a>
            <p>/</p>
            <a onClick={e => changeListToThisWeek()}> This Week</a>
            <p>/</p>
            <a onClick={e => changeListToLast()}>Last 30 days</a>
          </div>
          <motion.div className='cards' drag="x" dragConstraints={{right: 0, left:-741}}>
            {
              characters?.map((item: any, i) => (
                <Card item={item}/>
              ))
            }
          </motion.div>
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
          <a href="/">VIEW ALL</a>
        </div>
      </div>
    </section>
  )
}
function changeListToThisWeek() {
  throw new Error('Function not implemented.');
}

