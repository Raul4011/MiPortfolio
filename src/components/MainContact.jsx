import React from 'react';
import { useState } from 'react';
import { useColorContext } from '../context/myContext.js';
import '../css/MainContact.css';
import { BiMailSend } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainContact = () => {
  //const navigate = useNavigate();
  const {t} = useTranslation()
  const [nombre,setNombre] = useState("")
  const [email,setEmail] = useState("")
  const [proyecto,setProyecto] = useState("")
  const { color,lng } = useColorContext();

  console.log("este lenguaje llega"+lng)

  const handleClick = (e) => {
    console.log("este lenguaje llega"+lng)
    e.preventDefault();
    if (proyecto === "" || nombre === "" || email === "") {
      lng === "es" ? alert("Rellena los campos por favor") : alert("you must fill the fields THANKS")
      
    }else {
      
      alert('Gracias '+nombre+' Me contactare contigo a la brevedad');
      cleanInputs()
    }
    //navigate('/');
  };

  const cleanInputs =()=>{
    document.getElementById("nombre").value = ""
    document.getElementById("email").value = ""
    document.getElementById("proyecto").value = ""
    setNombre("")
    setEmail("")
    setProyecto("")
  }

  return (
    <div>
      <br />
      <br />
      <h1
        className={color ? 'text-dark text-center' : 'text-white text-center'}
      >
       {t("ContactMe.Title")}
      </h1>
      <br />
      <br />
      <hr />
      <br />
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <br />
          <br />
          <div className="row d-flex flex-column">
            <div className="col">
              <a href="mailto:raul_politi@hotmail.com?Subject=Quiero%20Contactarme%20Contigo">
                <div className="text-center div-3">
                  <BiMailSend
                    className={
                      color ? 'text-dark mt-3 icon3' : 'text-white mt-3 icon3'
                    }
                  />
                  <br />
                  <p className={color ? 'text-dark' : 'text-white'}>Email</p>
                  <br />
                  <p className={color ? 'text-dark' : 'text-white'}>
                    raul_politi@hotmail.com
                  </p>
                  <br />
                  <span
                    className={color ? 'text-dark span1' : 'text-white span1'}
                  >
                    {t("ContactMe.Write")}
                  </span>
                  <br />
                </div>
              </a>
            </div>
            <br />
            <div className="col">
              <Link
                to="https://wa.me/+5493815260220"
                className="me-3"
                target="_blank"
              >

                <div className="text-center div-4">
                  <FaWhatsapp
                    className={
                      color ? 'text-dark mt-3 icon3' : 'text-white mt-3 icon3'
                    }
                  />
                  <br />
                  <p className={color ? 'text-dark' : 'text-white'}>WhatsApp</p>
                  <br />
                  <p className={color ? 'text-dark' : 'text-white'}>
                    +5493815260220
                  </p>
                  <br />
                  <span
                    className={color ? 'text-dark span1' : 'text-white span1'}
                  >
                    {t("ContactMe.Write")}
                  </span>
                  <br />
                </div>
              </Link>
            </div>
            
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <form action="" className="form border mt-2">
            <br />
            <label
              htmlFor=""
              className={color ? 'text-dark span1' : 'text-white span1'}
            >
              {t("ContactMe.Name")}
            </label>
            <br />
            <input
              type="text"
              id='nombre'
              className="input"
              placeholder={t("ContactMe.Placeholder1")}
              onChange={(e)=>setNombre(e.target.value)}
            />
            <br />
            <br />
            <label className={color ? 'text-dark span1' : 'text-white span1'}>
            {t("ContactMe.Email")}
            </label>
            <br />
            <input
              type="text"
              id='email'
              className="input"
              placeholder={t("ContactMe.Placeholder2")}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="" className={color ? 'text-dark' : 'text-white'}>
            {t("ContactMe.Proyect")}
            </label>
            <textarea
              className="form-control area"
              id="proyecto"
              rows="5"
              placeholder={t("ContactMe.Placeholder3")}
              onChange={(e)=>setProyecto(e.target.value)}
            ></textarea>
            <br />
            <br />
            <button onClick={handleClick} className="btn1">
              {t("ContactMe.ButtonMessage")} <BiMailSend />
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
      <br />
      
      <br />
    </div>
  );
};

export default MainContact;