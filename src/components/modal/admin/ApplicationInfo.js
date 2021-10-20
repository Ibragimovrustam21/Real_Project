import React from 'react';
import '../../../css/modal/application_info.scss'
import user_photo from '../../../img/home/User.png';

export const ApplicationInfo = () => {
  return (
    <div class="modal fade application_info" id="aboutApplication" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body">
            <h3>Ariza №024</h3>
            <div className='row'>
              <div className='col'>
                <div className='row application_status_row'>
                  <div className='col'><p> Chet tili nomi:</p></div>
                  <div className='col'>English</div>
                </div>
                <div className='row application_status_row'>
                  <div className='col'><p> Test turi</p></div>
                  <div className='col'>englishexam.com</div>
                </div>
                <div className='row application_status_row'>
                  <div className='col'><p> Test topshirish joyi:</p></div>
                  <div className='col'><a href='/'>Toshkent sh, M.Ulug’bek, Realtime Education</a></div>
                </div>
                <div className='row application_status_row'>
                  <div className='col'><p> Test topshirish vaqti:</p></div>
                  <div className='col'>16.09.2021</div>
                </div>
                <div className='row application_status_row'>
                  <div className='col'><p> Test topshirish vaqti:</p></div>
                  <div className='col'>16.09.2021</div>
                </div>
                <div className='row application_status_row'>
                  <div className='col'><p> Imtixon to’lovi: </p></div>
                  <div className='col'><strong>500 000 UZS</strong></div>
                </div>
                <div className='row application_status_row'>
                  <div className='col'><p> To’lov holati: </p></div>
                  <div className='col'><span className='text-danger'>To‘lanmagan</span></div>
                </div>
              </div>
            </div>
            <div className='row user_info_'>
              <div className='col'>
                <h3>Shaxsiy ma`lumotlar</h3>
                <div className='personal_information_child'>
                  <div className='personal_input_group'>
                    <div className='personal_input_item w-75'>
                      <label>FIO</label>
                      <input type='text' className='form-control' id='name' />
                    </div>
                    <div className='personal_input_item w-75'>
                      <label>Elektron pochta manzili</label>
                      <input type='email' className='form-control' id='email' />
                    </div>
                    <div className='personal_input_item w-75'>
                      <label>Telefon raqami</label>
                      <input type='text' className='form-control' id='phone' />
                    </div>
                    <div className='personal_input_item w-75'>
                      <label>Manzil</label>
                      <input type='text' className='form-control' id='address' />
                    </div>
                  </div>
                  <div className='personal_photo_block'>
                    <div className='user_img'>
                      <img src={user_photo} alt='' />
                    </div>
                    <div className='personal_input_item'>
                      <label>Passport seriya va raqami</label>
                      <input type='text' className='form-control' id='passport' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
