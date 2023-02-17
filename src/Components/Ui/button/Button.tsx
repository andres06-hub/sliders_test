import React from 'react'

import './Button.scss';

export const Button = (data: any) => {
  const {style  , content} = data.data;
  console.log(style);
  return (
    <button className={style}>{content}</button>
  )
}
