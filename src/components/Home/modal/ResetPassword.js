import React from 'react';
import { Modal } from '@mui/material';
import '../../../css/modalReset.scss'

export const ResetPassword = ({ show, hide }) => {
  return (
    <>
      <Modal
        open={show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='modal_reset_password'>
          <h3>Parolni qayta tiklash</h3>
          <div className='input_item'>
            <input type='type' placeholder='Telefon raqami' />
          </div>
          <button type='button' className='modal_btn' >Kodni olish</button>
          <svg className='times' onClick={hide} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99962 4.82178L10.1246 0.696777L11.303 1.87511L7.17796 6.00011L11.303 10.1251L10.1246 11.3034L5.99962 7.17844L1.87462 11.3034L0.696289 10.1251L4.82129 6.00011L0.696289 1.87511L1.87462 0.696777L5.99962 4.82178Z" fill="black" />
          </svg>
        </div>
      </Modal>
    </>
  )
}
