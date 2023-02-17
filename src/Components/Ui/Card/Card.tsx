import React from 'react'
import './Card.scss';
import { motion } from 'framer-motion';

export const Card = (data: any) => {
  const { date, title, img } = data.item;
  console.log(data);
  return (
    <motion.div className='imgs-cont'>
      <motion.div className='img'>
        <img src={img} alt="Img" />
      </motion.div>
      <p className='date'>{date}</p>
      <p className='descrip'>{title}</p>
    </motion.div>
  )
}
