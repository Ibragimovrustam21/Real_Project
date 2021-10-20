import React from 'react';
import '../../../css/modal/application_reply.scss'

export const ApplicationReply = () => {
  return (
    <div className="modal fade application_reply" id="replyApplication" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body">
            <div className='input_item w-100'>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>English</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='input_item w-100' >
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>englishexam.com</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='row input_item input_item_select w-100 '>
              <div className='col p-0'>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue>Toshkent</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='col p-0 d-flex justify-content-end' >
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue>Yunusobod</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className='input_item w-100' >
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Realtime o’quv markazi</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='row input_item input_item_select w-100 '>
              <div className='col p-0'>
                <input type='date' className='form-control' />
              </div>
              <div className='col p-0 d-flex justify-content-end'>
              <input type='time' className='form-control' />

              </div>
            </div>
            <div className="form-floating w-100">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Havolani kiriting</label>
            </div>
            <button className='btn_reply'>Xabarni yuborish</button>
          </div>
        </div>
      </div>
    </div>
  )
}
