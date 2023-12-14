import React from 'react';
import '../css/Section.css';
import { useColorContext } from '../context/myContext.js';
import { useTranslation } from 'react-i18next';


const Section = () => {

  const {t}=useTranslation()
  const { color } = useColorContext();
  return (
    <>
      <div className={color ? 'text-dark ' : 'text-white '}>
        <br />

        <br />
        <h1
          className={color ? 'h1a text-dark text-center' : 'h1b text-white text-center'}
        >
          {t("Section.Salute")}
        </h1>
        <br />
        <br />
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <img
              src={
                'https://media.licdn.com/dms/image/C4E03AQFm9uzBzZzjAw/profile-displayphoto-shrink_800_800/0/1603847109404?e=2147483647&v=beta&t=zCKcZEpFKwn8EMaZhrRgdqP5xEY4oPVeY7WTO_sMHGs'
              }
              alt=""
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <br />
            <p
              className={
                color ? 'text-dark text-center' : 'text-white text-center'
              }
            >
              {t("Section.P1")}
            </p>
            <br />
            <p
              className={
                color ? 'text-dark text-center' : 'text-white text-center'
              }
            >
              {t("Section.P2")}
            </p>
            <br />
            <p
              className={
                color ? 'text-dark text-center' : 'text-white text-center'
              }
            >
              {t("Section.P3")}
            </p>
            <br />
            <p className={
                color ? 'text-dark text-center' : 'text-white text-center'
              }>
                {t("Section.P4")}
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Section;