import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/about_user/notification.scss'
import notif_img from '../../img/home/notification_img.png'

export const Notification = () => {
  return (
    <div className='notification user-container'>
      <div className='notification_head'>
        <div className='notification_title title_block'>
          <h3>Bildirishnomalar</h3>
          <div className='hr'></div>
        </div>
        <div className='notification_content'>
          <Link to='/about-user/bildirishnomalar/my-notification'>
            <div className='row notification_item'>
              <div className='col-1'>
                <img src={notif_img} alt='' />
              </div>
              <div className='col-11'>
                <span>23.09.2021</span>
                <p>Sizning arizangiz qabul qilindi.
                  Iltimos, Test topshirish uchun tanlangan manzilda o’z vaqtida bo’ling.
                  Test boshlanishidan avval sizga test topshirish uchun havola beramiz... </p>
              </div>
            </div>
          </Link>
          <Link to='/about-user/bildirishnomalar/my-notification'>
            <div className='row notification_item'>
              <div className='col-1'>
                <img src={notif_img} alt='' />
              </div>
              <div className='col-11'>
                <span>23.09.2021</span>
                <p>Sizning arizangiz ko’rib chiqilmoqda. Arizangiz qabul qilinishi uchun <a href='/'> To’lov</a> qilishingiz kerak.</p>
              </div>
            </div>
          </Link>
          <Link to='/about-user/bildirishnomalar/my-notification'>
            <div className='row notification_item'>
              <div className='col-1'>
                <img src={notif_img} alt='' />
              </div>
              <div className='col-11'>
                <span>23.09.2021</span>
                <p>Sizning arizangiz qabul qilindi.
                  Iltimos, Test topshirish uchun tanlangan manzilda o’z vaqtida bo’ling.
                  Test boshlanishidan avval sizga test topshirish uchun havola beramiz... </p>
              </div>
            </div>
          </Link>
          <Link to='/about-user/bildirishnomalar/my-notification'>
            <div className='row notification_item'>
              <div className='col-1'>
                <img src={notif_img} alt='' />
              </div>
              <div className='col-11'>
                <span>23.09.2021</span>
                <p>Sizning arizangiz ko’rib chiqilmoqda. Arizangiz qabul qilinishi uchun <a href='/'> To’lov</a> qilishingiz kerak.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
