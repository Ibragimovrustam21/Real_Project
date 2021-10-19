import React from 'react';
import { Advantage } from '../components/Home/Advantage';
import { Header } from '../components/Home/Header';
import { OnlineTest } from '../components/Home/OnlineTest';
import { OurCertificate } from '../components/Home/OurCertificate';
import { OurTest } from '../components/Home/OurTest';
import { Partners } from '../components/Home/Partners';
import { StartTest } from '../components/Home/StartTest';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  return (
    < >
      <Header />
      <Navbar />
      <StartTest />
      <OnlineTest />
      <Advantage />
      <OurTest />
      <OurCertificate />
      <Partners />
    </>
  );
};
