import React from 'react';
import '../../css/home/our-certificate.scss'


export const OurCertificate = () => {
  return (
    <div className='our_certificate'>
      <div className='our_certificate_child'>
        <div className='about_our_certificate'>
          <h1>Bizning Sertifikat</h1>
          <p>
            Horijiy tillardan test topshiring
            va  qisqa muddatda o’z natijangizni bilib oling.
            Horijiy tillarni bilish darajangizdagi sertifikatga ega bo’ling.
          </p>
          <button>Sertifikatni olish</button>
        </div>
        <div className='photo_our_certificate'></div>
      </div>
    </div>
  );
};
