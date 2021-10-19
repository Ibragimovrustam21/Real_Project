import React from 'react';

export const ViewApplicationStatus = () => {
  return (
    <div className="modal fade" id="application-status" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <h5 className="modal-title" id="staticBackdropLabel">Ariza №002</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body p-0 mt-5">
            <div className='row application_status_row'>
              <div className='col'><p> Chet tili nomi:</p></div>
              <div className='col'>English</div>
            </div>
            <div className='row application_status_row'>
              <div className='col'><p> Test turi</p></div>
              <div className='col'>englishexam.com</div>
            </div>
            <div className='row application_status_row'>
              <div className='col'><p> Test topshirish joyi:</p></div>
              <div className='col'><a href='/'>Toshkent sh, M.Ulug’bek, Realtime Education</a></div>
            </div>
            <div className='row application_status_row'>
              <div className='col'><p> Test topshirish vaqti:</p></div>
              <div className='col'>16.09.2021</div>
            </div>
            <div className='row application_status_row'>
              <div className='col'><p> Test topshirish vaqti:</p></div>
              <div className='col'>16.09.2021</div>
            </div>
            <div className='row application_status_row'>
              <div className='col'><p> Imtixon to’lovi: </p></div>
              <div className='col'><strong>500 000 UZS</strong></div>
            </div>
            <div className='row application_status_row'>
              <div className='col'><p> To’lov holati: </p></div>
              <div className='col'><span className='text-danger'>To‘lanmagan</span></div>
            </div>
            <div className='row application_status_row mt-5'>
              <div className='col'><button className='btn btn_cancel  '>Arizani bekor qilish</button></div>
              <div className='col'><button className='btn btn_contained  '>To`lov qilish</button></div>
            </div>
            {/* 
            <div className='row application_status_row  mt-5'>
              <div className='col'><button className='btn btn_contained  '>Natijani ko`rish</button></div>
            </div>
            */}


          </div>
        </div>
      </div>
    </div>
  );
};
