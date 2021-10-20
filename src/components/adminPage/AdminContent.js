import React from 'react';
import '../../css/admin/admin_content.scss'
import { ApplicationInfo } from '../modal/admin/ApplicationInfo';
import { ApplicationReply } from '../modal/admin/ApplicationReply';

export const AdminContent = () => {
  return (
    <>
      <ApplicationInfo />
      <ApplicationReply />
      <div className='admin_content'>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">T/R</th>
              <th scope="col">Chet tili</th>
              <th scope="col">Test turi</th>
              <th scope="col">Ariza vaqti</th>
              <th scope="col">To’lov holati</th>
              <th scope="col">Harakatlar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0023</th>
              <td>English</td>
              <td><a href='/'>lingvist.com</a></td>
              <td>22 Sep 2021 | 16:15</td>
              <td>
                <div className='payment_status_success payment_status'>To`langan</div>
              </td>
              <td>
                <div className='d-flex'>
                  <div className='info_icon table_icon' data-bs-toggle="modal" data-bs-target="#aboutApplication">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00065 13.6668C3.31865 13.6668 0.333984 10.6822 0.333984 7.00016C0.333984 3.31816 3.31865 0.333496 7.00065 0.333496C10.6827 0.333496 13.6673 3.31816 13.6673 7.00016C13.6673 10.6822 10.6827 13.6668 7.00065 13.6668ZM6.33398 6.3335V10.3335H7.66732V6.3335H6.33398ZM6.33398 3.66683V5.00016H7.66732V3.66683H6.33398Z" fill="white" />
                    </svg>
                  </div>
                  <div className='reply_icon table_icon' data-bs-toggle="modal" data-bs-target="#replyApplication">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66732 11.3334L13.334 6.00008L6.66732 0.666748V4.00008C2.98532 4.00008 0.000652313 6.98475 0.000652313 10.6667C0.000652313 10.8487 0.0073185 11.0287 0.0219851 11.2067C1.02732 9.30008 3.02865 8.00008 5.33398 8.00008H6.66732V11.3334Z" fill="white" />
                    </svg>
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <th scope="row">0023</th>
              <td>English</td>
              <td><a href='/'>lingvist.com</a></td>
              <td>22 Sep 2021 | 16:15</td>
              <td>
                <div className='payment_status_success payment_status'>To`langan</div>
              </td>
              <td>
                <div className='d-flex'>
                  <div className='info_icon table_icon'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00065 13.6668C3.31865 13.6668 0.333984 10.6822 0.333984 7.00016C0.333984 3.31816 3.31865 0.333496 7.00065 0.333496C10.6827 0.333496 13.6673 3.31816 13.6673 7.00016C13.6673 10.6822 10.6827 13.6668 7.00065 13.6668ZM6.33398 6.3335V10.3335H7.66732V6.3335H6.33398ZM6.33398 3.66683V5.00016H7.66732V3.66683H6.33398Z" fill="white" />
                    </svg>
                  </div>
                  <div className='reply_icon table_icon'>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66732 11.3334L13.334 6.00008L6.66732 0.666748V4.00008C2.98532 4.00008 0.000652313 6.98475 0.000652313 10.6667C0.000652313 10.8487 0.0073185 11.0287 0.0219851 11.2067C1.02732 9.30008 3.02865 8.00008 5.33398 8.00008H6.66732V11.3334Z" fill="white" />
                    </svg>
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <th scope="row">0023</th>
              <td>English</td>
              <td><a href='/'>lingvist.com</a></td>
              <td>22 Sep 2021 | 16:15</td>
              <td>
                <div className='payment_status_error payment_status'>To`langan</div>
              </td>
              <td>
                <div className='d-flex'>
                  <div className='info_icon table_icon'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00065 13.6668C3.31865 13.6668 0.333984 10.6822 0.333984 7.00016C0.333984 3.31816 3.31865 0.333496 7.00065 0.333496C10.6827 0.333496 13.6673 3.31816 13.6673 7.00016C13.6673 10.6822 10.6827 13.6668 7.00065 13.6668ZM6.33398 6.3335V10.3335H7.66732V6.3335H6.33398ZM6.33398 3.66683V5.00016H7.66732V3.66683H6.33398Z" fill="white" />
                    </svg>
                  </div>
                  <div className='reply_icon table_icon'>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66732 11.3334L13.334 6.00008L6.66732 0.666748V4.00008C2.98532 4.00008 0.000652313 6.98475 0.000652313 10.6667C0.000652313 10.8487 0.0073185 11.0287 0.0219851 11.2067C1.02732 9.30008 3.02865 8.00008 5.33398 8.00008H6.66732V11.3334Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
