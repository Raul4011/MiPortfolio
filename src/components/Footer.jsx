import React from 'react';
import { useColorContext } from '../context/myContext.js';
import { FaFacebook, FaLinkedin, FaGithub, FaBitbucket, FaWhatsapp } from 'react-icons/fa';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"


const Footer = () => {
  const { t } = useTranslation()
  const { color } = useColorContext();

  return (
    <>
      <div className={color ? 'text-center' : 'text-center'}>
        <hr />
        <br />
        <br />
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <h3 className={color ? 'footer1 text-dark' : 'footer2 text-white'}>
              {t("Footer.rights")}
            </h3>
            <br />
            <h4 className={color ? 'footer1 text-dark' : 'footer2 text-white'}>
              {t("Footer.developer")}
            </h4>
            <br />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center gap-2">
            <div className="footer1 d-flex flex-column align-items-center my-2">
              <Link
                to="https://www.facebook.com/raulaugusto.politi"
                className="me-3"
                target="_blank"
              >
                <FaFacebook className="icons" />
              </Link>
              <p className={color ? "text-dark text-center" : "text-white text-center"}>Facebook</p>
            </div>
            <div className="footer1 d-flex flex-column align-items-center my-2">
              <Link
                to="https://ar.linkedin.com/in/raul-politi"
                className="me-3"
                target="_blank"
              >
                <FaLinkedin className="icons" />
              </Link>
              <p className={color ? "text-dark text-center" : "text-white text-center"}>Linkedin</p>
            </div>
            <div className="footer1 d-flex flex-column align-items-center my-2">
              <Link
                to="https://github.com/Raul4011"
                className={color ? "text-dark me-3" : "text-white me-3"}
                target="_blank"
              >
                <FaGithub className="icons" />
              </Link>
              <p className={color ? "text-dark text-center" : "text-white text-center"}>Github</p>
            </div>
            <div className="footer1 d-flex flex-column align-items-center my-2">
              <Link
                to="https://bitbucket.org/raul4011/workspace/repositories"
                className="me-3"
                target="_blank"
              >
                <FaBitbucket className="icons" />
              </Link>
              <p className={color ? "text-dark text-center" : "text-white text-center"}>Bitbucket</p>
            </div>
            <div className="footer1 d-flex flex-column align-items-center my-2">
              <Link
                to="https://wa.me/+5493815260220"
                className="me-3"
                target="_blank"
              >
                <FaWhatsapp className="icons text-success" />
              </Link>
              <p className={color ? "text-dark text-center" : "text-white text-center"}>WhatsApp</p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Footer;