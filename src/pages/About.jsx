import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { useColorContext } from '../context/myContext';

const About = () => {
  
  const {color} = useColorContext()
  
  //{}
  return (
    <div
      className={
        color ? 'bg-white container-fluid' : 'bg-dark container-fluid'
      }
    >
      <Header  />
      <Section  />
      <Footer  />
    </div>
  );
};

export default About;