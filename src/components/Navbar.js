import React from 'react';
import '../css/navbar.scss'
import { Link } from 'react-router-dom';
import { SignIn } from './modal/SignIn';
import { SignUp } from './modal/SignUp';
import { User } from './User/User';
import { ResetPassword } from './modal/ResetPassword';

export const Navbar = () => {

  return (
    <>
      <SignIn />
      <SignUp />
      <ResetPassword />
      <div className='navbar'>
        <div className='navbar-child'>
          <div className='nav-item'>
            <ul>
              <li>
                <Link to='/'>
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 18.9999C19 19.2651 18.8946 19.5195 18.7071 19.707C18.5196 19.8946 18.2652 19.9999 18 19.9999H4C3.73478 19.9999 3.48043 19.8946 3.29289 19.707C3.10536 19.5195 3 19.2651 3 18.9999V9.99992H0L10.327 0.61192C10.5111 0.444398 10.7511 0.351562 11 0.351562C11.2489 0.351563 11.4889 0.444398 11.673 0.61192L22 9.99992H19V18.9999ZM7 13.9999V15.9999H15V13.9999H7Z" fill="black" />
                  </svg>
                </Link >
              </li>
              <li><Link to='/'>Testlar</Link ></li>
              <li><Link to='/'>Sertifikatlar</Link ></li>
              <li><Link to='/'>Bog`lanish</Link ></li>
              <li><Link to='/'>Biz haqimizda</Link ></li>
            </ul>
          </div>
          <div className='nav-button'>
            <ul>
              <li>
                O`zbek
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.9995 3.78145L8.2995 0.481445L9.24217 1.42411L4.9995 5.66678L0.756836 1.42411L1.6995 0.481445L4.9995 3.78145Z" fill="black" />
                </svg>
              </li>
              <li data-bs-toggle="modal" data-bs-target="#staticBackdrop">Kirish</li>
              <li><button data-bs-toggle="modal" data-bs-target="#staticBackdrop-2" className='btn_outline'>Ro`yxatdan o`tish</button></li>
            </ul>
            {/* <User/> */}
          </div>
        </div>
      </div>
    </>
  );
};
