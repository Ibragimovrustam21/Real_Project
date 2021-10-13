import React from 'react';
import '../../css/home/online_test.scss'
import rectangle from '../../img/home/Rectangle 22.png'
import backRectangle from '../../img/home/Rectangle 21.png'
import { Link } from 'react-router-dom';

export const OnlineTest = () => {
  return (
    <div className='start_online_test'>
      <div className='video_about_test'>
        <div className='play_video'>
          <img src={rectangle} alt='' />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM8.622 6.415L13.501 9.667C13.5559 9.70351 13.6009 9.75302 13.632 9.81111C13.6631 9.86921 13.6794 9.93409 13.6794 10C13.6794 10.0659 13.6631 10.1308 13.632 10.1889C13.6009 10.247 13.5559 10.2965 13.501 10.333L8.621 13.585C8.56083 13.6249 8.49098 13.6477 8.41887 13.6512C8.34676 13.6546 8.27507 13.6384 8.21141 13.6043C8.14774 13.5703 8.09448 13.5197 8.05726 13.4578C8.02004 13.396 8.00025 13.3252 8 13.253V6.747C8.00013 6.67465 8.01989 6.60369 8.05716 6.54168C8.09443 6.47967 8.14782 6.42893 8.21165 6.39486C8.27547 6.36079 8.34734 6.34467 8.41961 6.34822C8.49187 6.35177 8.56182 6.37485 8.622 6.415Z" fill="black" />
          </svg>
        </div>
      </div>
      <div className='read_more_about_test'>
        <h1>Horijiy tillardan
          sertifikatlashtirilgan onlayn test </h1>
        <p>
          Bu tizim - oliy o'quv yurtlari va ish beruvchilarga hamda
          o’qituvchilarga horijiy til darajasini va nomzodlar guruhlarini
          tekshirishga yordam beradigan tez va qulay onlayn test.
          U  ishonchli, tezkor, arzon va sertifikatlashtirilgan.
        </p>
        <Link to='/'>
          Batafsil
          <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9L35 9V7L0 7L0 9Z" fill="#FF7500" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
