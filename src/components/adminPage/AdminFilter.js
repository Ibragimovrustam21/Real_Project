import React from 'react';
import '../../css/admin/admin_filter.scss'

export const AdminFilter = () => {
  return (
    <div className='admin_filter'>
      <div className='row'>
        <div className='col'>
          <div className='filter_data'>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.166 2.50016H16.4993C16.7204 2.50016 16.9323 2.58796 17.0886 2.74424C17.2449 2.90052 17.3327 3.11248 17.3327 3.3335V16.6668C17.3327 16.8878 17.2449 17.0998 17.0886 17.2561C16.9323 17.4124 16.7204 17.5002 16.4993 17.5002H1.49935C1.27834 17.5002 1.06637 17.4124 0.910093 17.2561C0.753813 17.0998 0.666016 16.8878 0.666016 16.6668V3.3335C0.666016 3.11248 0.753813 2.90052 0.910093 2.74424C1.06637 2.58796 1.27834 2.50016 1.49935 2.50016H4.83268V0.833496H6.49935V2.50016H11.4993V0.833496H13.166V2.50016ZM15.666 9.16683H2.33268V15.8335H15.666V9.16683ZM11.4993 4.16683H6.49935V5.8335H4.83268V4.16683H2.33268V7.50016H15.666V4.16683H13.166V5.8335H11.4993V4.16683ZM3.99935 10.8335H5.66602V12.5002H3.99935V10.8335ZM8.16602 10.8335H9.83268V12.5002H8.16602V10.8335ZM12.3327 10.8335H13.9993V12.5002H12.3327V10.8335Z" fill="#ABABAB" />
                </svg>
                <p>

                  Sana bo`yicha
                </p>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className='filter_pay'>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.166 2.50016H16.4993C16.7204 2.50016 16.9323 2.58796 17.0886 2.74424C17.2449 2.90052 17.3327 3.11248 17.3327 3.3335V16.6668C17.3327 16.8878 17.2449 17.0998 17.0886 17.2561C16.9323 17.4124 16.7204 17.5002 16.4993 17.5002H1.49935C1.27834 17.5002 1.06637 17.4124 0.910093 17.2561C0.753813 17.0998 0.666016 16.8878 0.666016 16.6668V3.3335C0.666016 3.11248 0.753813 2.90052 0.910093 2.74424C1.06637 2.58796 1.27834 2.50016 1.49935 2.50016H4.83268V0.833496H6.49935V2.50016H11.4993V0.833496H13.166V2.50016ZM15.666 9.16683H2.33268V15.8335H15.666V9.16683ZM11.4993 4.16683H6.49935V5.8335H4.83268V4.16683H2.33268V7.50016H15.666V4.16683H13.166V5.8335H11.4993V4.16683ZM3.99935 10.8335H5.66602V12.5002H3.99935V10.8335ZM8.16602 10.8335H9.83268V12.5002H8.16602V10.8335ZM12.3327 10.8335H13.9993V12.5002H12.3327V10.8335Z" fill="#ABABAB" />
                </svg>
                <p>
                  To`lov holati bo`yicha
                </p>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
          <div className='filter_tests'>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.166 2.50016H16.4993C16.7204 2.50016 16.9323 2.58796 17.0886 2.74424C17.2449 2.90052 17.3327 3.11248 17.3327 3.3335V16.6668C17.3327 16.8878 17.2449 17.0998 17.0886 17.2561C16.9323 17.4124 16.7204 17.5002 16.4993 17.5002H1.49935C1.27834 17.5002 1.06637 17.4124 0.910093 17.2561C0.753813 17.0998 0.666016 16.8878 0.666016 16.6668V3.3335C0.666016 3.11248 0.753813 2.90052 0.910093 2.74424C1.06637 2.58796 1.27834 2.50016 1.49935 2.50016H4.83268V0.833496H6.49935V2.50016H11.4993V0.833496H13.166V2.50016ZM15.666 9.16683H2.33268V15.8335H15.666V9.16683ZM11.4993 4.16683H6.49935V5.8335H4.83268V4.16683H2.33268V7.50016H15.666V4.16683H13.166V5.8335H11.4993V4.16683ZM3.99935 10.8335H5.66602V12.5002H3.99935V10.8335ZM8.16602 10.8335H9.83268V12.5002H8.16602V10.8335ZM12.3327 10.8335H13.9993V12.5002H12.3327V10.8335Z" fill="#ABABAB" />
                </svg>
                <p>
                  Test turi bo`yicha
                </p>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
