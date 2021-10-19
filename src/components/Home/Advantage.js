import React from 'react';
import '../../css/home/advantage.scss'
import laptop from '../../img/home/003-laptop.png'
import time from '../../img/home/004-fast-time.png'
import decrease from '../../img/home/005-decrease.png'


export const Advantage = () => {
  return (
    <div className='advantage container-project'>
      <h1>Talab bo'yicha va  istalgan joyda</h1>
      <div className='advantage_child'>
        <div className='advantage_item'>
          <img src={laptop} alt='' />
          <h3>Qulay</h3>
          <p>
            Testni istalgan joyda
            xohlagan vaqtda onlayn o'tkazing
            test markaziga borish
            yoki uchrashuvga hojat yo'q
          </p>
        </div>
        <div className='advantage_item'>
          <img src={time} alt='' />
          <h3>Tezkor</h3>
          <p>
            Sinov tugagandan so'ng
            24 soat ichida o'z
            natijalaringizni olingva uni
            darhol hamma bilan baham ko'ring
          </p>
        </div>
        <div className='advantage_item'>
          <img src={decrease} alt='' />
          <h3>Arzon</h3>
          <p>
            O'zingizning sertificatingizni atigi
            49 dollarga oling, boshqa
            sertifikatlashtirish testlarining
            aksariyati 200 dollardan oshadi
          </p>
        </div>
      </div>
    </div>
  );
};
