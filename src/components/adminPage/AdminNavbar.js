import React from 'react';
import admin_photo from '../../img/home/User.png'
import '../../css/admin/admin_navbar.scss'

export const AdminNavbar = () => {
  return (
    <div className='admin_navbar'>
      <div className='row'>
        <div className='col-12'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.25 0.5C10.976 0.5 14 3.524 14 7.25C14 10.976 10.976 14 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5ZM7.25 12.5C10.1503 12.5 12.5 10.1502 12.5 7.25C12.5 4.349 10.1503 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1502 4.349 12.5 7.25 12.5ZM13.6138 12.5532L15.7355 14.6742L14.6743 15.7355L12.5533 13.6137L13.6138 12.5532Z" fill="#A5A5A5" />
          </svg>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H0.5V12.5H1.25V7.27325C1.25 3.53225 4.2725 0.5 8 0.5C11.7275 0.5 14.75 3.53225 14.75 7.27325V12.5H15.5V14ZM6.125 14.75H9.875C9.875 15.2473 9.67746 15.7242 9.32582 16.0758C8.97419 16.4275 8.49728 16.625 8 16.625C7.50272 16.625 7.02581 16.4275 6.67417 16.0758C6.32254 15.7242 6.125 15.2473 6.125 14.75Z" fill="#A5A5A5" />
          </svg>
          <img src={admin_photo} alt='' />
        </div>
      </div>
    </div>
  )
}
