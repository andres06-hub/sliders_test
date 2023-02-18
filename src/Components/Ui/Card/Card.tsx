import React from 'react'
// import './Card.scss';
import { motion } from 'framer-motion';

export const Card = (data: any) => {
  const { date, title, img } = data.item;
  console.log(data);
  return (
    <motion.div className='imgs-cont w-[164px] h-auto mr-3'>
      <motion.div className='img w-[164px] h-[240px] border border-gray-800 mb-2 pointer-events-none cursor-grab'>
        <img className='object-cover' src={img} alt="Img" />
      </motion.div>
      <p className='date text-[12px]'>{date}</p>
      <p className='descrip font-bold'>{title}</p>
    </motion.div>
  )
}
