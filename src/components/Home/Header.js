import React from 'react';
import gerb from '../../img/home/image 11sada (1).png'
import '../../css/home/header.scss'


export const Header = () => {
  return (
    <div className='header'>
      <div className='header-child'>
        <div className='header_img_block'>
          <img src={gerb} alt='' />
          <p>xorijiy tillarni o'rganishni ommalashtirish Agentligi</p>
        </div>
        <div className='header_search_block'>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z" fill="black" />
          </svg>
          <input type='text' placeholder='Saytdan izlash' />
        </div>
      </div>
    </div>
  );
};
