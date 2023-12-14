import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { useColorContext } from '../context/myContext.js';
import {useTranslation} from "react-i18next"

const Header = () => {
  const {t,i18n} = useTranslation()
  const { darkColor, lightColor, color,lng ,ToogleLanguage} = useColorContext();
 

  const handleClick = () => {
    lightColor();
  };

  const handleClickPlus = () => {
    darkColor();
  };

  const handleChange = (e) => {
    //console.log(e);
    e ? handleClick() : handleClickPlus();
  };

  const handleLanguaje =() =>{
   
    ToogleLanguage()
  }

 

  //{}
  return (
    <>
      <Navbar bg={color ? 'white fixed-top' : 'dark fixed-top'} variant="dark">
        <Container>
          <Navbar.Brand href="/" className={color ? 'text-dark' : 'text-white'}>
            <img
              src={
                'https://media.licdn.com/dms/image/C4E03AQFm9uzBzZzjAw/profile-displayphoto-shrink_800_800/0/1603847109404?e=2147483647&v=beta&t=zCKcZEpFKwn8EMaZhrRgdqP5xEY4oPVeY7WTO_sMHGs'
              }
              alt=""
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className={color ? 'fw-bold text-dark' : 'fw-bold text-white'}>
              {t("Home")}
            </Nav.Link>
            <Nav.Link
              href="/notes"
              className={color ? 'fw-bold text-dark' : 'fw-bold text-white'}
            >
              {t("Notes")}
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={color ? 'fw-bold text-dark' : 'fw-bold text-white'}
            >
             {t("About")}
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={color ? 'fw-bold text-dark' : 'fw-bold text-white'}
            >
              {t("Contact")}
            </Nav.Link>
          </Nav>
          <BootstrapSwitchButton
            checked={color ? false : true}
            onstyle="light"
            offstyle="dark"
            style="border"
            onlabel="Light"
            offlabel="Dark"
            onChange={handleChange}
            className="my-3"
          />
          <p>{"  "}</p>
          <BootstrapSwitchButton
            checked={lng ? false : true}
            onstyle="primary"
            offstyle="warning"
            style="border"
            onlabel="English"
            offlabel="Espanish"
            onChange={handleLanguaje}
            className="my-3 ml-2"
          />
          
        </Container>
      </Navbar>
      <hr className='text-dark'/>
    </>
  );
};

export default Header;