import React from 'react';
import { NavLink } from 'react-router-dom';

export const MyProfile = () => {
  return (
    <div className='my_profile'>
      <div><h3>Mening profilim</h3></div>
      <div><NavLink to='/about-user' exact>Shaxsiy ma`lumotlar</NavLink></div>
      <div><NavLink to='/about-user/arizalarim'>Arizalarim</NavLink></div>
      <div><NavLink to='/about-user/bildirishnomalar'>Bildirishnomalar</NavLink></div>
      <div><NavLink to='/about-user/testlar'>Testlar</NavLink></div>
      <div><NavLink to='/about-user/D'>Sertifikatlarim</NavLink></div>
      <div><NavLink to='/about-user/T'>To`lovlar</NavLink></div>
      <div><h3>Sozlamalar</h3></div>
      <div><h3>Chiqishlar</h3></div>
    </div>
  );
};