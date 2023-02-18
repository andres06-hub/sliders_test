import React from 'react'

// import './Button.scss';

export const Button = (data: any) => {
  const {style  , content} = data.data;
  console.log(style);

  const styles = {
    primary: 'font-bold w-[8rem] h-[3rem] text-center text-xs border-[2px] border-gray-50 rounded-[4px] bg-transparent',
    secundary: 'bg-[#00B0FF] border-[#00B0FF] font-bold w-[8rem] h-[3rem] text-center text-xs border-[2px] rounded-[4px]',
    slider: 'h-[2rem] w-[2rem] text-gray-500 border-[2px] border-gray-500 rounded-full bg-transparent'
  }
  return (
    <button className={styles[style]}>{content}</button>
  )
}
