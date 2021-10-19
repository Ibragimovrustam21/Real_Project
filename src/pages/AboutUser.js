import React from 'react';
import '../css/about_user/about_user.scss'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { Navbar } from '../components/Navbar'
import { MyProfile } from '../components/User/MyProfile';
import { PersonalInformation } from '../components/User/PersonalInformation';
import { Tests } from '../components/User/Tests';
import { Application } from '../components/User/Application';
import { Notification } from '../components/User/Notification';
import { MyNotification } from '../components/User/MyNotification';

export const AboutUser = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='about_user container-project'>
          <div className='about_user_child'>
            <MyProfile />
            <Switch>
              <Route path='/about-user' exact component={PersonalInformation} />
              <Route path='/about-user/testlar' exact component={Tests} />
              <Route path='/about-user/arizalarim' exact component={Application} />
              <Route path='/about-user/bildirishnomalar' exact component={Notification} />
              <Route path='/about-user/bildirishnomalar/my-notification' exact component={MyNotification} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
