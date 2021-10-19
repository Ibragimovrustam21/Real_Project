import React from 'react';
import { Link } from 'react-router-dom';

export const ApplicationTable = () => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">T/R</th>
          <th scope="col">Ariza vaqti</th>
          <th scope="col">Ariza holati</th>
          <th scope="col" colSpan='2'>To`lov holati</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">002</th>
          <td>15/09/2021</td>
          <td>Ko’rib chiqilmoqda</td>
          <td><div className='payment_status_error payment_status'>To`lanmagan</div></td>
          <td><Link to='/' data-bs-toggle="modal" data-bs-target="#application-status">Batafsil</Link></td>
        </tr>
        <div className='table_space' />
        <tr>
          <th scope="row">001</th>
          <td>13/09/2021</td>
          <td>Ko’rib chiqildi</td>
          <td><div className='payment_status_success payment_status'>To`langan</div></td>
          <td><Link to='/'  data-bs-toggle="modal" data-bs-target="#application-status">Batafsil</Link></td>
        </tr>
        <div className='table_space' />

      </tbody>
    </table>
  )
}
