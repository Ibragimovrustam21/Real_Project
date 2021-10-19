import React from 'react';
import '../css/admin/admin.scss'
import { AdminContent } from '../components/adminPage/AdminContent';
import { AdminFilter } from '../components/adminPage/AdminFilter';
import { AdminLeftbar } from '../components/adminPage/AdminLeftbar';
import { AdminNavbar } from '../components/adminPage/AdminNavbar';

export const AdminPage = () => {
  return (
    <div className='admin_page user-container '>
      <div className='row admin_page_child '>
        <div className='col-3 p-0'>
          <AdminLeftbar />
        </div>
        <div className='col-9 p-0'>
          <AdminNavbar />
          <AdminFilter />
          <AdminContent />
        </div>
      </div>
    </div>
  );
};
