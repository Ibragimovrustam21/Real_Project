import React from 'react';
import '../../css/home/start_test.scss'

export const StartTest = () => {
  return (
    <div className='start_test container-project'>
      <div className='start_test_child'>
        <div className='start_test_info'>
          <h1>Xorijiy tillarni bilish darajasini baholash milliy tizimi</h1>
          <p>
            Istalgan vaqtda, istalgan joyda onlayn testdan o'ting va shaxsiylashtirilgan ForLang Certificate ™ ni oling
          </p>
          <button type='button' className='btn'>Testni boshlash</button>
        </div>
        <div className='start_test_img'></div>
      </div>
    </div>
  );
};
