import React from 'react';
import '../../css/modal/modalSignIn.scss'
import '../../css/modal/modal.scss'

export const SignIn = () => {

  return (
    <>
      <div class="modal fade sign_in_modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <h3>Tizimga kirish</h3>
              <div className='input_item w-100'>
                <input type='type' className='form-control' placeholder='Login' />
              </div>
              <div className='input_item w-100'>
                <input type='password' className='form-control ' placeholder='Parolni kiriting' />
              </div>
              <button type='button' className='btn_contained' > Tizimga kirish</button>
              <p>Login yoki parolni  <span data-bs-toggle="modal" data-bs-target="#resetPassword"> unutdingizmi?</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
