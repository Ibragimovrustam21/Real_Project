import React from 'react';
import '../../css/about_user/my_notification.scss'
import notif_img from '../../img/home/notification_img.png'

export const MyNotification = () => {
  return (
    <div className='admin_page user-container'>
      <div className='admin_page_head'>
        <div className='admin_page_title title_block'>
          <h3>Bildirishnomalar</h3>
          <div className='hr'></div>
        </div>
        <div className='admin_page_content'>
          <div className='row admin_page_content_title'>
            <div className='col'>
              <img src={notif_img} alt='' />
              <p>Sayt admini</p>
            </div>
            <div className='col'>
              <span>23.09.2021 (bugun) 15:33</span>
            </div>
          </div>
          <div className=' admin_page_content_body'>
            <div className='admin_page_content_body_title'>
              <p>
                Sizning №003 arizangiz qabul qilindi. Iltimos, Test topshirish uchun tanlangan manzilda
                o’z vaqtida bo’ling.  Ushbu havola orqali belgilangan vaqtda testni boshlaysiz.
              </p>
            </div>
            <div className='row'>
              <div className='col-4'>
                <p>Chet tili nomi:</p>
                <p>Manzil:</p>
                <p>Test topshirish vaqti:</p>
                <p>Test ishlash havolasi:</p>
              </div>
              <div className='col-8'>
                <h5>English</h5>
                <h5>Toshkent sh, M.Ulug’bek, Realtime Edu o’quv markazi</h5>
                <h5>25.09.2021   10:00 </h5>
                <h5><a href='#'>https://www.examenglish.com/IELTS/IELTS_General.html</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
