import React from 'react';

export const SendApplication = () => {
  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <h5 class="modal-title" id="staticBackdropLabel">Ariza yuborish</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body p-0 mt-4">
            <div className='modal_select'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Chet tili nomi*</option>
                <option value="1">English</option>
                <option value="2">Russian</option>
                <option value="3">Uzbek</option>
              </select>
            </div>
            <div className='modal_select'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Test turi*</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='modal_select'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Viloyat*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className='col-6'>
                <div className='modal_select'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Tuman*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='modal_select'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Test topshirish joyi*</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className='row'>
              <div className='col'>
                <input type='date' className='form-control data' placeholder='sana' />
              </div>
              <div className='col'>
                <input type='time' className='form-control time' placeholder='sana' />
              </div>
            </div>
            <button className='btn btn_contained w-100 mt-4'>Ariza yuborish</button>
          </div>
        </div>
      </div>
    </div>
  );
};
