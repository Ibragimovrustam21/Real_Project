import React from 'react';
import '../../css/home/our-test.scss'
// import { OurTestItem } from './our-test/Our-test-item';
import { Link } from 'react-router-dom';


export const OurTest = () => {
  return (
    <div className='our_test'>
      <div className='our_test_child'>
        <h1>Bizning Testlar</h1>
        <div className='our_test_child'>
          <div className='our_test_item'>
            <div className='test_item_title'>
              <div className='test_item_title_icon'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H2V8H8V2ZM10 2V8H16V2H10ZM16 10H10V16H16V10ZM8 16V10H2V16H8ZM0 0H18V18H0V0Z" fill="black" />
                </svg>
              </div>
              <div className='test_item_title_info'>
                <div>
                  <h1>Full Test</h1>
                  <p>sertificate</p>
                </div>
                <div>
                  <h3>Exam</h3>
                </div>
              </div>
            </div>
            <div className='test_item_text'>
              <p>
                Reading, Listening, Writing
                and Speaking sections
              </p>
            </div>
            <div className='test_item_time'>
              <div>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6813 4.97325L13.8921 3.76242L15.0705 4.94075L13.8596 6.15159C15.0561 7.64922 15.6337 9.54815 15.4739 11.4584C15.314 13.3686 14.4288 15.1451 13 16.423C11.5713 17.701 9.70745 18.3833 7.7913 18.33C5.87515 18.2766 4.05215 17.4916 2.6967 16.1362C1.34125 14.7807 0.55625 12.9577 0.502907 11.0416C0.449565 9.12545 1.13193 7.2616 2.40987 5.83284C3.68781 4.40409 5.46432 3.51888 7.37453 3.35902C9.28475 3.19916 11.1837 3.77678 12.6813 4.97325ZM7.99964 16.6666C8.76569 16.6666 9.52423 16.5157 10.232 16.2225C10.9397 15.9294 11.5828 15.4997 12.1244 14.958C12.6661 14.4164 13.0958 13.7733 13.3889 13.0656C13.6821 12.3578 13.833 11.5993 13.833 10.8333C13.833 10.0672 13.6821 9.30866 13.3889 8.60093C13.0958 7.8932 12.6661 7.25014 12.1244 6.70846C11.5828 6.16679 10.9397 5.73711 10.232 5.44395C9.52423 5.1508 8.76569 4.99992 7.99964 4.99992C6.45255 4.99992 4.96881 5.6145 3.87485 6.70846C2.78089 7.80242 2.16631 9.28616 2.16631 10.8333C2.16631 12.3803 2.78089 13.8641 3.87485 14.958C4.96881 16.052 6.45255 16.6666 7.99964 16.6666ZM7.16631 6.66658H8.83298V11.6666H7.16631V6.66658ZM4.66631 0.833252H11.333V2.49992H4.66631V0.833252Z" fill="black" />
                </svg>
                <p>30 daqiqa</p>
              </div>
              <div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16667 0.333252H15.5V1.99992H7.16667V0.333252ZM7.16667 3.66658H12.1667V5.33325H7.16667V3.66658ZM7.16667 8.66658H15.5V10.3333H7.16667V8.66658ZM7.16667 11.9999H12.1667V13.6666H7.16667V11.9999ZM0.5 0.333252H5.5V5.33325H0.5V0.333252ZM2.16667 1.99992V3.66658H3.83333V1.99992H2.16667ZM0.5 8.66658H5.5V13.6666H0.5V8.66658ZM2.16667 10.3333V11.9999H3.83333V10.3333H2.16667Z" fill="black" />
                </svg>
                <p>40 ta test</p>
              </div>
            </div>
            <div className='hr'></div>
            <div className='test_item_price'>
              <h3>$52</h3>
              <Link to='/'>
                Boshlash
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.97656 5.99987L0.851562 1.87487L2.0299 0.696533L7.33323 5.99987L2.0299 11.3032L0.851562 10.1249L4.97656 5.99987Z" fill="#FF7500" />
                </svg>
              </Link>
            </div>
          </div>
          <div className='our_test_item'>
            <div className='test_item_title'>
              <div className='test_item_title_icon'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H2V8H8V2ZM10 2V8H16V2H10ZM16 10H10V16H16V10ZM8 16V10H2V16H8ZM0 0H18V18H0V0Z" fill="black" />
                </svg>
              </div>
              <div className='test_item_title_info'>
                <div>
                  <h1>Reading section</h1>
                  {/* <p>sertificate</p> */}
                </div>
                <div>
                  <h3>Test</h3>
                </div>
              </div>
            </div>
            <div className='test_item_text'>
              <p>
                Mos keluvchi, ko'p tanlovli, to'g'ri/noto'g'ri, tugallangan test
              </p>
            </div>
            <div className='test_item_time'>
              <div>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6813 4.97325L13.8921 3.76242L15.0705 4.94075L13.8596 6.15159C15.0561 7.64922 15.6337 9.54815 15.4739 11.4584C15.314 13.3686 14.4288 15.1451 13 16.423C11.5713 17.701 9.70745 18.3833 7.7913 18.33C5.87515 18.2766 4.05215 17.4916 2.6967 16.1362C1.34125 14.7807 0.55625 12.9577 0.502907 11.0416C0.449565 9.12545 1.13193 7.2616 2.40987 5.83284C3.68781 4.40409 5.46432 3.51888 7.37453 3.35902C9.28475 3.19916 11.1837 3.77678 12.6813 4.97325ZM7.99964 16.6666C8.76569 16.6666 9.52423 16.5157 10.232 16.2225C10.9397 15.9294 11.5828 15.4997 12.1244 14.958C12.6661 14.4164 13.0958 13.7733 13.3889 13.0656C13.6821 12.3578 13.833 11.5993 13.833 10.8333C13.833 10.0672 13.6821 9.30866 13.3889 8.60093C13.0958 7.8932 12.6661 7.25014 12.1244 6.70846C11.5828 6.16679 10.9397 5.73711 10.232 5.44395C9.52423 5.1508 8.76569 4.99992 7.99964 4.99992C6.45255 4.99992 4.96881 5.6145 3.87485 6.70846C2.78089 7.80242 2.16631 9.28616 2.16631 10.8333C2.16631 12.3803 2.78089 13.8641 3.87485 14.958C4.96881 16.052 6.45255 16.6666 7.99964 16.6666ZM7.16631 6.66658H8.83298V11.6666H7.16631V6.66658ZM4.66631 0.833252H11.333V2.49992H4.66631V0.833252Z" fill="black" />
                </svg>
                <p>30 daqiqa</p>
              </div>
              <div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16667 0.333252H15.5V1.99992H7.16667V0.333252ZM7.16667 3.66658H12.1667V5.33325H7.16667V3.66658ZM7.16667 8.66658H15.5V10.3333H7.16667V8.66658ZM7.16667 11.9999H12.1667V13.6666H7.16667V11.9999ZM0.5 0.333252H5.5V5.33325H0.5V0.333252ZM2.16667 1.99992V3.66658H3.83333V1.99992H2.16667ZM0.5 8.66658H5.5V13.6666H0.5V8.66658ZM2.16667 10.3333V11.9999H3.83333V10.3333H2.16667Z" fill="black" />
                </svg>
                <p>40 ta test</p>
              </div>
            </div>
            <div className='hr'></div>
            <div className='test_item_price'>
              <h3>$15</h3>
              <Link to='/'>
                Boshlash
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.97656 5.99987L0.851562 1.87487L2.0299 0.696533L7.33323 5.99987L2.0299 11.3032L0.851562 10.1249L4.97656 5.99987Z" fill="#FF7500" />
                </svg>
              </Link>
            </div>
          </div>
          <div className='our_test_item'>
            <div className='test_item_title'>
              <div className='test_item_title_icon'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H2V8H8V2ZM10 2V8H16V2H10ZM16 10H10V16H16V10ZM8 16V10H2V16H8ZM0 0H18V18H0V0Z" fill="black" />
                </svg>
              </div>
              <div className='test_item_title_info'>
                <div>
                  <h1>Full Test</h1>
                  <p>sertificate</p>
                </div>
                <div>
                  <h3>Exam</h3>
                </div>
              </div>
            </div>
            <div className='test_item_text'>
              <p>
                Reading, Listening, Writing
                and Speaking sections
              </p>
            </div>
            <div className='test_item_time'>
              <div>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6813 4.97325L13.8921 3.76242L15.0705 4.94075L13.8596 6.15159C15.0561 7.64922 15.6337 9.54815 15.4739 11.4584C15.314 13.3686 14.4288 15.1451 13 16.423C11.5713 17.701 9.70745 18.3833 7.7913 18.33C5.87515 18.2766 4.05215 17.4916 2.6967 16.1362C1.34125 14.7807 0.55625 12.9577 0.502907 11.0416C0.449565 9.12545 1.13193 7.2616 2.40987 5.83284C3.68781 4.40409 5.46432 3.51888 7.37453 3.35902C9.28475 3.19916 11.1837 3.77678 12.6813 4.97325ZM7.99964 16.6666C8.76569 16.6666 9.52423 16.5157 10.232 16.2225C10.9397 15.9294 11.5828 15.4997 12.1244 14.958C12.6661 14.4164 13.0958 13.7733 13.3889 13.0656C13.6821 12.3578 13.833 11.5993 13.833 10.8333C13.833 10.0672 13.6821 9.30866 13.3889 8.60093C13.0958 7.8932 12.6661 7.25014 12.1244 6.70846C11.5828 6.16679 10.9397 5.73711 10.232 5.44395C9.52423 5.1508 8.76569 4.99992 7.99964 4.99992C6.45255 4.99992 4.96881 5.6145 3.87485 6.70846C2.78089 7.80242 2.16631 9.28616 2.16631 10.8333C2.16631 12.3803 2.78089 13.8641 3.87485 14.958C4.96881 16.052 6.45255 16.6666 7.99964 16.6666ZM7.16631 6.66658H8.83298V11.6666H7.16631V6.66658ZM4.66631 0.833252H11.333V2.49992H4.66631V0.833252Z" fill="black" />
                </svg>
                <p>30 daqiqa</p>
              </div>
              <div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16667 0.333252H15.5V1.99992H7.16667V0.333252ZM7.16667 3.66658H12.1667V5.33325H7.16667V3.66658ZM7.16667 8.66658H15.5V10.3333H7.16667V8.66658ZM7.16667 11.9999H12.1667V13.6666H7.16667V11.9999ZM0.5 0.333252H5.5V5.33325H0.5V0.333252ZM2.16667 1.99992V3.66658H3.83333V1.99992H2.16667ZM0.5 8.66658H5.5V13.6666H0.5V8.66658ZM2.16667 10.3333V11.9999H3.83333V10.3333H2.16667Z" fill="black" />
                </svg>
                <p>40 ta test</p>
              </div>
            </div>
            <div className='hr'></div>
            <div className='test_item_price'>
              <h3>$52</h3>
              <Link to='/'>
                Boshlash
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.97656 5.99987L0.851562 1.87487L2.0299 0.696533L7.33323 5.99987L2.0299 11.3032L0.851562 10.1249L4.97656 5.99987Z" fill="#FF7500" />
                </svg>
              </Link>
            </div>
          </div>
          <div className='our_test_item'>
            <div className='test_item_title'>
              <div className='test_item_title_icon'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H2V8H8V2ZM10 2V8H16V2H10ZM16 10H10V16H16V10ZM8 16V10H2V16H8ZM0 0H18V18H0V0Z" fill="black" />
                </svg>
              </div>
              <div className='test_item_title_info'>
                <div>
                  <h1>Full Test</h1>
                  <p>sertificate</p>
                </div>
                <div>
                  <h3>Exam</h3>
                </div>
              </div>
            </div>
            <div className='test_item_text'>
              <p>
                Reading, Listening, Writing
                and Speaking sections
              </p>
            </div>
            <div className='test_item_time'>
              <div>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6813 4.97325L13.8921 3.76242L15.0705 4.94075L13.8596 6.15159C15.0561 7.64922 15.6337 9.54815 15.4739 11.4584C15.314 13.3686 14.4288 15.1451 13 16.423C11.5713 17.701 9.70745 18.3833 7.7913 18.33C5.87515 18.2766 4.05215 17.4916 2.6967 16.1362C1.34125 14.7807 0.55625 12.9577 0.502907 11.0416C0.449565 9.12545 1.13193 7.2616 2.40987 5.83284C3.68781 4.40409 5.46432 3.51888 7.37453 3.35902C9.28475 3.19916 11.1837 3.77678 12.6813 4.97325ZM7.99964 16.6666C8.76569 16.6666 9.52423 16.5157 10.232 16.2225C10.9397 15.9294 11.5828 15.4997 12.1244 14.958C12.6661 14.4164 13.0958 13.7733 13.3889 13.0656C13.6821 12.3578 13.833 11.5993 13.833 10.8333C13.833 10.0672 13.6821 9.30866 13.3889 8.60093C13.0958 7.8932 12.6661 7.25014 12.1244 6.70846C11.5828 6.16679 10.9397 5.73711 10.232 5.44395C9.52423 5.1508 8.76569 4.99992 7.99964 4.99992C6.45255 4.99992 4.96881 5.6145 3.87485 6.70846C2.78089 7.80242 2.16631 9.28616 2.16631 10.8333C2.16631 12.3803 2.78089 13.8641 3.87485 14.958C4.96881 16.052 6.45255 16.6666 7.99964 16.6666ZM7.16631 6.66658H8.83298V11.6666H7.16631V6.66658ZM4.66631 0.833252H11.333V2.49992H4.66631V0.833252Z" fill="black" />
                </svg>
                <p>30 daqiqa</p>
              </div>
              <div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16667 0.333252H15.5V1.99992H7.16667V0.333252ZM7.16667 3.66658H12.1667V5.33325H7.16667V3.66658ZM7.16667 8.66658H15.5V10.3333H7.16667V8.66658ZM7.16667 11.9999H12.1667V13.6666H7.16667V11.9999ZM0.5 0.333252H5.5V5.33325H0.5V0.333252ZM2.16667 1.99992V3.66658H3.83333V1.99992H2.16667ZM0.5 8.66658H5.5V13.6666H0.5V8.66658ZM2.16667 10.3333V11.9999H3.83333V10.3333H2.16667Z" fill="black" />
                </svg>
                <p>40 ta test</p>
              </div>
            </div>
            <div className='hr'></div>
            <div className='test_item_price'>
              <h3>$52</h3>
              <Link to='/'>
                Boshlash
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.97656 5.99987L0.851562 1.87487L2.0299 0.696533L7.33323 5.99987L2.0299 11.3032L0.851562 10.1249L4.97656 5.99987Z" fill="#FF7500" />
                </svg>
              </Link>
            </div>
          </div>
          <div className='our_test_item'>
            <div className='test_item_title'>
              <div className='test_item_title_icon'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2H2V8H8V2ZM10 2V8H16V2H10ZM16 10H10V16H16V10ZM8 16V10H2V16H8ZM0 0H18V18H0V0Z" fill="black" />
                </svg>
              </div>
              <div className='test_item_title_info'>
                <div>
                  <h1>Full Test</h1>
                  <p>sertificate</p>
                </div>
                <div>
                  <h3>Exam</h3>
                </div>
              </div>
            </div>
            <div className='test_item_text'>
              <p>
                Reading, Listening, Writing
                and Speaking sections
              </p>
            </div>
            <div className='test_item_time'>
              <div>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6813 4.97325L13.8921 3.76242L15.0705 4.94075L13.8596 6.15159C15.0561 7.64922 15.6337 9.54815 15.4739 11.4584C15.314 13.3686 14.4288 15.1451 13 16.423C11.5713 17.701 9.70745 18.3833 7.7913 18.33C5.87515 18.2766 4.05215 17.4916 2.6967 16.1362C1.34125 14.7807 0.55625 12.9577 0.502907 11.0416C0.449565 9.12545 1.13193 7.2616 2.40987 5.83284C3.68781 4.40409 5.46432 3.51888 7.37453 3.35902C9.28475 3.19916 11.1837 3.77678 12.6813 4.97325ZM7.99964 16.6666C8.76569 16.6666 9.52423 16.5157 10.232 16.2225C10.9397 15.9294 11.5828 15.4997 12.1244 14.958C12.6661 14.4164 13.0958 13.7733 13.3889 13.0656C13.6821 12.3578 13.833 11.5993 13.833 10.8333C13.833 10.0672 13.6821 9.30866 13.3889 8.60093C13.0958 7.8932 12.6661 7.25014 12.1244 6.70846C11.5828 6.16679 10.9397 5.73711 10.232 5.44395C9.52423 5.1508 8.76569 4.99992 7.99964 4.99992C6.45255 4.99992 4.96881 5.6145 3.87485 6.70846C2.78089 7.80242 2.16631 9.28616 2.16631 10.8333C2.16631 12.3803 2.78089 13.8641 3.87485 14.958C4.96881 16.052 6.45255 16.6666 7.99964 16.6666ZM7.16631 6.66658H8.83298V11.6666H7.16631V6.66658ZM4.66631 0.833252H11.333V2.49992H4.66631V0.833252Z" fill="black" />
                </svg>
                <p>30 daqiqa</p>
              </div>
              <div>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.16667 0.333252H15.5V1.99992H7.16667V0.333252ZM7.16667 3.66658H12.1667V5.33325H7.16667V3.66658ZM7.16667 8.66658H15.5V10.3333H7.16667V8.66658ZM7.16667 11.9999H12.1667V13.6666H7.16667V11.9999ZM0.5 0.333252H5.5V5.33325H0.5V0.333252ZM2.16667 1.99992V3.66658H3.83333V1.99992H2.16667ZM0.5 8.66658H5.5V13.6666H0.5V8.66658ZM2.16667 10.3333V11.9999H3.83333V10.3333H2.16667Z" fill="black" />
                </svg>
                <p>40 ta test</p>
              </div>
            </div>
            <div className='hr'></div>
            <div className='test_item_price'>
              <h3>$52</h3>
              <Link to='/'>
                Boshlash
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.97656 5.99987L0.851562 1.87487L2.0299 0.696533L7.33323 5.99987L2.0299 11.3032L0.851562 10.1249L4.97656 5.99987Z" fill="#FF7500" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
