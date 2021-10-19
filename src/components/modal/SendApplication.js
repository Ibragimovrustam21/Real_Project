import React from 'react';

export const SendApplication = () => {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <h5 className="modal-title" id="staticBackdropLabel">Ariza yuborish</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body p-0 mt-4">
            <div className='modal_select'>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Chet tili nomi*</option>
                <option value="1">English</option>
                <option value="2">Russian</option>
                <option value="3">Uzbek</option>
              </select>
            </div>
            <div className='modal_select'>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Test turi*</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='modal_select'>
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Viloyat*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className='col-6'>
                <div className='modal_select'>
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Tuman*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='modal_select'>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Test topshirish joyi*</option>
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
