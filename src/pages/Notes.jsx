import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Aside from '../components/Aside';
import { useColorContext } from '../context/myContext.js';

const Notes = () => {

  const { color } = useColorContext();
 
  return (
    <>
      <div
        className={
          color ? 'bg-white container-fluid' : 'bg-dark container-fluid'
        }
      >
        <Header />
        <Aside/>
        <Footer />
      </div>
    </>
  );
};
export default Notes;