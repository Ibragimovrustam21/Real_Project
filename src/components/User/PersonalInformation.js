import React, { useState } from 'react';
import user_photo from '../../img/home/User.png'
import { EditButtons } from '../User/EditButtons';
import '../../css/about_user/personal-information.scss'

export const PersonalInformation = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passport, setPassport] = useState('')
  const [phone, setPhone] = useState('')
  const [login, setLogin] = useState('')
  const [vil, setVil] = useState('')
  const [tuman, setTuman] = useState('')
  const [job, setJob] = useState('')

  let user = ['#name', '#email', '#passport', '#phone', '#login']
  let address_block = ['#viloyat', '#tuman', '#job']
  let info = {
    name: 'rustam',
    email: 'asdasdas@mail.com',
    passport: 'AA123453',
    phone: '934342110'
  }

  const disable = (props, iconName) => {
    let a = document.querySelector(`#` + `${iconName}`)
    a.classList.add('active_edit_icon')

    let showButton = document.querySelector(`.` + `${props}`)
    showButton.classList.add('show_button')

    if (props === 'user') {
      for (let i = 0; i < user.length; i++) {
        let doc = document.querySelector(user[i])
        doc.removeAttribute('disabled')
      }
    }
    else if (props === 'address_block') {
      for (let i = 0; i < address_block.length; i++) {
        let doc = document.querySelector(address_block[i])
        doc.removeAttribute('disabled')
      }
    }
  }

  const save = (props, iconName) => {
    let a = document.querySelector(`#` + `${iconName}`)
    a.classList.remove('active_edit_icon')

    let showButton = document.querySelector(`.` + `${props}`)
    showButton.classList.remove('show_button')

    if (props === 'user') {
      for (let i = 0; i < user.length; i++) {
        let doc = document.querySelector(user[i])
        doc.setAttribute('disabled', 'disabled')
      }
    }
    else if (props === 'address_block') {
      for (let i = 0; i < address_block.length; i++) {
        let doc = document.querySelector(address_block[i])
        doc.setAttribute('disabled', 'disabled')
      }
    }
  }
  return (
    <div className='personal_information_block user-container'>
      <div className='personal_information'>
        <div className='personal_information_title title_block'>
          <h3>Shaxsiy ma’lumotlar</h3>
          <div className='hr'></div>
          <div className='edit_icon' id='edit-icon-user' onClick={() => disable('user', 'edit-icon-user')}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.675 3.14356L10.8565 6.32581L3.4315 13.7501H0.25V10.5678L7.675 3.14281V3.14356ZM8.7355 2.08306L10.3263 0.491563C10.4669 0.350959 10.6576 0.271973 10.8565 0.271973C11.0554 0.271973 11.2461 0.350959 11.3868 0.491563L13.5085 2.61331C13.6491 2.75396 13.7281 2.94469 13.7281 3.14356C13.7281 3.34244 13.6491 3.53317 13.5085 3.67381L11.917 5.26456L8.7355 2.08306Z" fill="#1B4559" />
            </svg>
          </div>
        </div>
        <div className='personal_information_child'>
          <div className='personal_input_group'>
            <div className='personal_input_item'>
              <label>FIO</label>
              <input type='text' disabled id='name' value={info.name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='personal_input_item'>
              <label>Elektron pochta manzili</label>
              <input type='email' disabled id='email' value={info.email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className='personal_input_item'>
              <label>Passport seriya va raqami</label>
              <input type='text' disabled id='passport' value={info.passport} onChange={(e) => { setPassport(e.target.value) }} />
            </div>
            <div className='personal_input_item'>
              <label>Telefon raqami</label>
              <input type='text' disabled id='phone' value={info.phone} onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <EditButtons save={save} name={'user'} iconName={'edit-icon-user'} />
          </div>
          <div className='personal_photo_block'>
            <div className='user_img'>
              <img src={user_photo} alt='' />
            </div>
            <div className='personal_input_item'>
              <label>Login</label>
              <input type='text' disabled id='login' value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div className='personal_information_edit'>
        <div className='personal_information_title title_block'>
          <h3>Manzil</h3>
          <div className='hr'></div>
          <div className='edit_icon' id='edit-icon-address' onClick={() => disable('address_block', 'edit-icon-address')}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.675 3.14356L10.8565 6.32581L3.4315 13.7501H0.25V10.5678L7.675 3.14281V3.14356ZM8.7355 2.08306L10.3263 0.491563C10.4669 0.350959 10.6576 0.271973 10.8565 0.271973C11.0554 0.271973 11.2461 0.350959 11.3868 0.491563L13.5085 2.61331C13.6491 2.75396 13.7281 2.94469 13.7281 3.14356C13.7281 3.34244 13.6491 3.53317 13.5085 3.67381L11.917 5.26456L8.7355 2.08306Z" fill="#1B4559" />
            </svg>
          </div>
        </div>
        <div className='user_address'>
          <div className='address'>
            <div className='address_left'>
              <div className='personal_input_item'>
                <label>Viloyat</label>
                <input type='text' disabled id='viloyat' value={vil} onChange={(e) => { setVil(e.target.value) }} />
              </div>
            </div>
            <div className='address_right'>
              <div className='personal_input_item'>
                <label>Tuman</label>
                <input type='text' disabled id='tuman' value={tuman} onChange={(e) => { setTuman(e.target.value) }} />
              </div>
            </div>
          </div>
          <div className='personal_input_item'>
            <label>Ish joyi</label>
            <input type='text' disabled id='job' value={job} onChange={(e) => { setJob(e.target.value) }} />
          </div>
          <EditButtons save={save} name={'address_block'} iconName={'edit-icon-address'} />
        </div>
      </div>
    </div>
  );
};
