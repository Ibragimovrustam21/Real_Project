import React from 'react';
import '../../css/modal/modalReset.scss'

export const ResetPassword = () => {
  return (
    <>
      <div className="modal fade reset_password" id="resetPassword" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h3>Parolni qayta tiklash</h3>
              <div className='input_item'>
                <input type='text' className='form-control' placeholder='Telefon raqami' />
              </div>
              <button type='button' className='modal_btn w-100' >Kodni olish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
