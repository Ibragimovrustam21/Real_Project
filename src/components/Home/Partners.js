import React, { useState } from 'react';
import '../../css/home/partners.scss'
import Slider from "react-slick";
import gerb from '../../img/home/image 11sada (1).png'
import portal from '../../img/home/image 14.png'
import ochiq_portal from '../../img/home/image 12.png'
import m_vazirlik from '../../img/home/image 13.png'



export const Partners = () => {
  const [display] = useState(true)
  let settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='partners'>
      <div className='partners_child'>
        <h1>Bizning Hamkorlar</h1>
        <div className='carousel' style={{
          display: display ? "block" : "none",
        }}>
          <Slider {...settings} style={{ height: '100%' }}>
            <div className='carousel-card-item'>
              <img src={gerb} alt='' />
              <p>O‘zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
            </div>
            <div className='carousel-card-item'>
              <img src={portal} alt='' />
              <p>Davlat interaktiv xizmatlari yagona portali</p>
            </div>
            <div className='carousel-card-item'>
              <img src={ochiq_portal} alt='' />
              <p>O‘zbekiston Respublikasi ochik ma'lumotlari portali</p>
            </div>
            <div className='carousel-card-item'>
              <img src={m_vazirlik} alt='' />
              <p>O‘zbekiston Respublikasi Maktabgacha Ta'lim Vazirligi</p>
            </div>
            <div className='carousel-card-item'>
              <img src={gerb} alt='' />
              <p>O‘zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
            </div>
            <div className='carousel-card-item'>
              <img src={gerb} alt='' />
              <p>O‘zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
            </div>
            <div className='carousel-card-item'>
              <img src={gerb} alt='' />
              <p>O‘zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
            </div>
            <div className='carousel-card-item'>
              <img src={gerb} alt='' />
              <p>O‘zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
            </div>
          </Slider>
        </div>
      </div>

    </div>
  );
};
