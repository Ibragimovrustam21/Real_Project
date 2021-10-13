import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.scss'
import gerb from '../img/home/image 11sada (1).png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_child'>
      <div className='footer-h'>
        <div className='address'>
          <div className='header_block'>
            <img src={gerb} alt='' />
            <p>xorijiy tillarni o'rganishni ommalashtirish Agentligi</p>
          </div>
          <div className='location'>
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3033 13.47L8 18.7733L2.69667 13.47C1.64779 12.4211 0.933489 11.0847 0.644107 9.62989C0.354725 8.17504 0.503256 6.66704 1.07092 5.2966C1.63858 3.92616 2.59987 2.75483 3.83324 1.93072C5.0666 1.10661 6.51665 0.666748 8 0.666748C9.48336 0.666748 10.9334 1.10661 12.1668 1.93072C13.4001 2.75483 14.3614 3.92616 14.9291 5.2966C15.4968 6.66704 15.6453 8.17504 15.3559 9.62989C15.0665 11.0847 14.3522 12.4211 13.3033 13.47ZM8 11.5C8.88406 11.5 9.7319 11.1488 10.357 10.5237C10.9821 9.89858 11.3333 9.05074 11.3333 8.16668C11.3333 7.28263 10.9821 6.43478 10.357 5.80966C9.7319 5.18454 8.88406 4.83335 8 4.83335C7.11595 4.83335 6.2681 5.18454 5.64298 5.80966C5.01786 6.43478 4.66667 7.28263 4.66667 8.16668C4.66667 9.05074 5.01786 9.89858 5.64298 10.5237C6.2681 11.1488 7.11595 11.5 8 11.5ZM8 9.83335C7.55798 9.83335 7.13405 9.65775 6.82149 9.34519C6.50893 9.03263 6.33334 8.60871 6.33334 8.16668C6.33334 7.72466 6.50893 7.30073 6.82149 6.98817C7.13405 6.67561 7.55798 6.50002 8 6.50002C8.44203 6.50002 8.86595 6.67561 9.17851 6.98817C9.49107 7.30073 9.66667 7.72466 9.66667 8.16668C9.66667 8.60871 9.49107 9.03263 9.17851 9.34519C8.86595 9.65775 8.44203 9.83335 8 9.83335Z" fill="white" />
            </svg>
            <p>
              Manzil: Toshkent shahri, Mirzo Ulug’bek tumani
              Buyuk Ipak yuli metro, 70/37 - uy, 100100
            </p>
          </div>
        </div>
        <div className='menu'>
          <h3>Asosiy</h3>
          <Link to='/' >Testlar</Link>
          <Link to='/' >Sertifikatlar</Link>
          <Link to='/' >Biz haqimizda</Link>
        </div>
        <div className='contact'>
          <h3>Biz bilan aloqa</h3>
          <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 11.6833V14.63C15.5001 14.841 15.4202 15.0441 15.2763 15.1985C15.1325 15.3528 14.9355 15.4469 14.725 15.4617C14.3608 15.4867 14.0633 15.5 13.8333 15.5C6.46917 15.5 0.5 9.53083 0.5 2.16667C0.5 1.93667 0.5125 1.63917 0.538333 1.275C0.553102 1.06454 0.647151 0.867509 0.801503 0.723674C0.955855 0.579839 1.15902 0.499905 1.37 0.5H4.31667C4.42003 0.499896 4.51975 0.538216 4.59644 0.607517C4.67313 0.676818 4.72133 0.772152 4.73167 0.875C4.75083 1.06667 4.76833 1.21917 4.785 1.335C4.95061 2.49077 5.29 3.61486 5.79167 4.66917C5.87083 4.83583 5.81917 5.035 5.66917 5.14167L3.87083 6.42667C4.97038 8.98871 7.01212 11.0305 9.57417 12.13L10.8575 10.335C10.91 10.2617 10.9865 10.2091 11.0737 10.1864C11.161 10.1637 11.2535 10.1723 11.335 10.2108C12.3892 10.7116 13.513 11.0501 14.6683 11.215C14.7842 11.2317 14.9367 11.25 15.1267 11.2683C15.2294 11.2789 15.3245 11.3271 15.3936 11.4038C15.4628 11.4805 15.501 11.5801 15.5008 11.6833H15.5Z" fill="white" />
            </svg>
            998 91 191 99 99
          </div>
          <div>
            <a href='/'>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50033 0.5H16.5003C16.7213 0.5 16.9333 0.587797 17.0896 0.744078C17.2459 0.900358 17.3337 1.11232 17.3337 1.33333V14.6667C17.3337 14.8877 17.2459 15.0996 17.0896 15.2559C16.9333 15.4122 16.7213 15.5 16.5003 15.5H1.50033C1.27931 15.5 1.06735 15.4122 0.91107 15.2559C0.75479 15.0996 0.666992 14.8877 0.666992 14.6667V1.33333C0.666992 1.11232 0.75479 0.900358 0.91107 0.744078C1.06735 0.587797 1.27931 0.5 1.50033 0.5ZM9.05033 7.73583L3.70699 3.19833L2.62783 4.46833L9.06116 9.93083L15.3787 4.46417L14.2887 3.20333L9.05116 7.73583H9.05033Z" fill="white" />
              </svg>
              info@foreignlang.uz
            </a>
          </div>
        </div>
      </div>
      <div className='hr'></div>
      <div className='footer-b'>
        <p>Copyright © 2021, NAJM Agency tomonidan ishlab chiqilgan.</p>
      </div>
      </div>
      
    </div>
  );
};
