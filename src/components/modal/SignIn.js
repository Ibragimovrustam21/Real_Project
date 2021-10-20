import React from 'react';
import '../../css/modal/modalSignIn.scss'

export const SignIn = () => {

  return (
    <>
      <div className="modal fade sign_in_modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h3>Tizimga kirish</h3>
              <div className='input_item w-100'>
                <input type='text' className='form-control' placeholder='Login' />
              </div>
              <div className='input_item w-100'>
                <input type='password' className='form-control' placeholder='Parolni kiriting' />
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
