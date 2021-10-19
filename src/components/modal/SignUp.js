import React from 'react';
import '../../css/modal/modal.scss'
import '../../css/modal/modalSignUp.scss'
import BodySignUp from './BodySignUp';

export const SignUp = () => {
  return (
    <>
      <div class="modal fade sign_up_modal" id="staticBackdrop-2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <h3>Ro`yhatdan o`tish</h3>
              <BodySignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
