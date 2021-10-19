import React from 'react';
import '../../css/modal/modal.scss'
import '../../css/modal/modalReset.scss'

export const ResetPassword = () => {
  return (
    <>
      <div class="modal fade reset_password" id="resetPassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <h3>Parolni qayta tiklash</h3>
              <div className='input_item'>
                <input type='type' className='form-control' placeholder='Telefon raqami' />
              </div>
              <button type='button' className='modal_btn w-100' >Kodni olish</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
