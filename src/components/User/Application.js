import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/about_user/application.scss'
import NoApplication from '../../img/home/NoApplication.png'
import { SendApplication } from '../modal/SendApplication';
import { ViewApplicationStatus } from '../modal/ViewApplicationStatus';
import { ApplicationTable } from './ApplicationTable';

export const Application = () => {
  const section = () => {
    let section = document.querySelector('.section_test')
    section.classList.toggle('section_test_active')
  }
  return (
    <div className='application user-container'>
      {/* send application */}
      <SendApplication />
      {/* application status */}
      <ViewApplicationStatus />
      <div className='application_head'>
        <div className='application_title title_block'>
          <h3>Arizalarim</h3>
          <button className='btn btn_outline' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ariza yuborish</button>
          <div className='hr'></div>
        </div>
        {/* No Application */}

        {/* <div className='application_content'>
        <p> Sizda hali arizalar mavjud emas!</p>
        <p>Ariza jo’natmoqchi bo’lsangiz <Link to='#' data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Ariza yuborish </Link>tugmasini bosing.</p>
        <img src={NoApplication} alt='' />
      </div> */}

        <div className='application_check'>
          <div className='row'>
            <div className='col-6 col-lg-6'>
              <h4>Sizning №003 arizangiz ko’rib chiqilmoqda.</h4>
              <p>Ariza bo’yicha javob olishingiz uchun to’lov qilishingiz kerak.</p>
            </div>
            <div className='col-3 col-lg-3'>
              <Link to='/' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Arizani tahrirlash</Link>
            </div>
            <div className='col-3 col-lg-3'>
              <button className='btn btn_contained'>To`lov qilish</button>
            </div>
          </div>
        </div>
      </div>
      {/* title */}
      <div className='application_body'>
        <div className='application_navbar'>
          <h3>Barcha arizalar</h3>
          <div className='application_icon_group'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.08398 0.833496C13.638 0.833496 17.334 4.5295 17.334 9.0835C17.334 13.6375 13.638 17.3335 9.08398 17.3335C4.52998 17.3335 0.833984 13.6375 0.833984 9.0835C0.833984 4.5295 4.52998 0.833496 9.08398 0.833496ZM9.08398 15.5002C12.6287 15.5002 15.5006 12.6282 15.5006 9.0835C15.5006 5.53783 12.6287 2.66683 9.08398 2.66683C5.53832 2.66683 2.66732 5.53783 2.66732 9.0835C2.66732 12.6282 5.53832 15.5002 9.08398 15.5002ZM16.8619 15.5652L19.4551 18.1576L18.1581 19.4547L15.5657 16.8614L16.8619 15.5652Z" fill="#2D3A45" />
            </svg>
            <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.05" width="1" height="22" fill="#1B4559" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.584 2.74984H18.2507C18.4938 2.74984 18.7269 2.84641 18.8988 3.01832C19.0707 3.19023 19.1673 3.42339 19.1673 3.6665V18.3332C19.1673 18.5763 19.0707 18.8094 18.8988 18.9814C18.7269 19.1533 18.4938 19.2498 18.2507 19.2498H1.75065C1.50754 19.2498 1.27438 19.1533 1.10247 18.9814C0.930561 18.8094 0.833984 18.5763 0.833984 18.3332V3.6665C0.833984 3.42339 0.930561 3.19023 1.10247 3.01832C1.27438 2.84641 1.50754 2.74984 1.75065 2.74984H5.41732V0.916504H7.25065V2.74984H12.7507V0.916504H14.584V2.74984ZM17.334 10.0832H2.66732V17.4165H17.334V10.0832ZM12.7507 4.58317H7.25065V6.4165H5.41732V4.58317H2.66732V8.24984H17.334V4.58317H14.584V6.4165H12.7507V4.58317ZM4.50065 11.9165H6.33398V13.7498H4.50065V11.9165ZM9.08398 11.9165H10.9173V13.7498H9.08398V11.9165ZM13.6673 11.9165H15.5007V13.7498H13.6673V11.9165Z" fill="#2D3A45" />
            </svg>
            <svg onClick={section} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.65648 15.5C4.84587 14.9632 5.19708 14.4984 5.6617 14.1697C6.12632 13.8409 6.68148 13.6644 7.25065 13.6644C7.81982 13.6644 8.37498 13.8409 8.8396 14.1697C9.30422 14.4984 9.65543 14.9632 9.84482 15.5H19.1673V17.3333H9.84482C9.65543 17.87 9.30422 18.3348 8.8396 18.6636C8.37498 18.9923 7.81982 19.1689 7.25065 19.1689C6.68148 19.1689 6.12632 18.9923 5.6617 18.6636C5.19708 18.3348 4.84587 17.87 4.65648 17.3333H0.833984V15.5H4.65648ZM10.1565 9.0833C10.3459 8.54656 10.6971 8.08178 11.1617 7.75302C11.6263 7.42427 12.1815 7.24772 12.7507 7.24772C13.3198 7.24772 13.875 7.42427 14.3396 7.75302C14.8042 8.08178 15.1554 8.54656 15.3448 9.0833H19.1673V10.9166H15.3448C15.1554 11.4534 14.8042 11.9182 14.3396 12.2469C13.875 12.5757 13.3198 12.7522 12.7507 12.7522C12.1815 12.7522 11.6263 12.5757 11.1617 12.2469C10.6971 11.9182 10.3459 11.4534 10.1565 10.9166H0.833984V9.0833H10.1565ZM4.65648 2.66663C4.84587 2.1299 5.19708 1.66512 5.6617 1.33636C6.12632 1.0076 6.68148 0.831055 7.25065 0.831055C7.81982 0.831055 8.37498 1.0076 8.8396 1.33636C9.30422 1.66512 9.65543 2.1299 9.84482 2.66663H19.1673V4.49997H9.84482C9.65543 5.03671 9.30422 5.50149 8.8396 5.83024C8.37498 6.159 7.81982 6.33555 7.25065 6.33555C6.68148 6.33555 6.12632 6.159 5.6617 5.83024C5.19708 5.50149 4.84587 5.03671 4.65648 4.49997H0.833984V2.66663H4.65648ZM7.25065 4.49997C7.49377 4.49997 7.72692 4.40339 7.89883 4.23148C8.07074 4.05957 8.16732 3.82642 8.16732 3.5833C8.16732 3.34019 8.07074 3.10703 7.89883 2.93512C7.72692 2.76321 7.49377 2.66663 7.25065 2.66663C7.00754 2.66663 6.77438 2.76321 6.60247 2.93512C6.43056 3.10703 6.33398 3.34019 6.33398 3.5833C6.33398 3.82642 6.43056 4.05957 6.60247 4.23148C6.77438 4.40339 7.00754 4.49997 7.25065 4.49997ZM12.7507 10.9166C12.9938 10.9166 13.2269 10.8201 13.3988 10.6481C13.5707 10.4762 13.6673 10.2431 13.6673 9.99997C13.6673 9.75685 13.5707 9.52369 13.3988 9.35179C13.2269 9.17988 12.9938 9.0833 12.7507 9.0833C12.5075 9.0833 12.2744 9.17988 12.1025 9.35179C11.9306 9.52369 11.834 9.75685 11.834 9.99997C11.834 10.2431 11.9306 10.4762 12.1025 10.6481C12.2744 10.8201 12.5075 10.9166 12.7507 10.9166ZM7.25065 17.3333C7.49377 17.3333 7.72692 17.2367 7.89883 17.0648C8.07074 16.8929 8.16732 16.6597 8.16732 16.4166C8.16732 16.1735 8.07074 15.9404 7.89883 15.7685C7.72692 15.5965 7.49377 15.5 7.25065 15.5C7.00754 15.5 6.77438 15.5965 6.60247 15.7685C6.43056 15.9404 6.33398 16.1735 6.33398 16.4166C6.33398 16.6597 6.43056 16.8929 6.60247 17.0648C6.77438 17.2367 7.00754 17.3333 7.25065 17.3333Z" fill="#2D3A45" />
            </svg>
            <div className='section_test'>
              <div className='section_qirra' />
              <p className='active'>English full test</p>
              <p >Writing section</p>
              <p >Reading section</p>
              <p >Listening section</p>
              <p >Speaking section</p>
            </div>
          </div>
        </div>
        <div className='application_table'>
          <ApplicationTable />
        </div>
      </div>


    </div>
  );
};



//  Supurish toq kunlari boshlab beradi.
//  Yakshanba kungi ishlar : Ovqat qilish, supurish, musor, non, kosa yuvish,  toq guruh: Javohir => ovqat, Shoxrux=> supursa va musor, Shaxzod => non va kosalar bular har hafta almashinadi.