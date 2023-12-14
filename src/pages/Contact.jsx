import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContact from '../components/MainContact';
import { useColorContext } from '../context/myContext.js';

const Contact = () => {
  const { color } = useColorContext();

  //{}
  return (
    <>
      <div
        className={
          color ? 'bg-white container-fluid' : 'bg-dark container-fluid'
        }
      >
        <Header />
        <MainContact />
        <Footer />
      </div>
    </>
  );
};
export default Contact;