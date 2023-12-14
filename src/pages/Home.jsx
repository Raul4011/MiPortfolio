import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import { useColorContext } from '../context/myContext.js';

const Home = () => {

  const {color} = useColorContext()

  //{}
  return (
    <>
      <div
        className={
          color ? 'bg-white container-fluid' : 'bg-dark container-fluid'
        }
      >
        <Header  />
        <Main />
        <Footer  />
      </div>
    </>
  );
};
export default Home;