import React from 'react';
import '../../css/modal/modalSignUp.scss'
import BodySignUp from './BodySignUp';

export const SignUp = () => {
  return (
    <>
      <div className="modal fade sign_up_modal" id="staticBackdrop-2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h3>Ro`yhatdan o`tish</h3>
              <BodySignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
