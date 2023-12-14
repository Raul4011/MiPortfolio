import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../css/Main.css';
import { useColorContext } from '../context/myContext.js';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Main = () => {

  const {t}=useTranslation()  
  const { color } = useColorContext();

  const proyectos = [
    {
      id: 1,
      nombre: 'Indice Masa Corporal (IMC)',
      imagen:
        'https://www.clinicaciplex.com/wp-content/uploads/2020/07/blog_IMC.jpg',
      text: 'Calcula el indice de masa muscular ',
      linkTo: 'https://indicemasamuscular.netlify.app',
    },
    {
      id: 2,
      nombre: 'Calculadora Basica',
      imagen: 'https://calculator-1.com/images/screens/calculator_1.png',
      text: 'calculadora simple creada con javascript ',
      linkTo: '#',
    },
    {
      id: 3,
      nombre: 'Concesionaria de autos',
      imagen: 'https://laverdadonline.com/wp-content/uploads/2020/11/autos.jpg',
      text: 'programa para mostrar los vehiculos desponibles para la venta',
      linkTo: 'https://www.planx5.com/web/',
    },
    {
      id: 4,
      nombre: 'Marvel Api',
      imagen:
        'https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/20-marvel-api/character.png',
      text: 'programa para mostrar todos los personajes de Marvel',
      linkTo: 'https://raul-marvel-api.netlify.app',
    },
    {
      id: 5,
      nombre: 'Laboratorio Padilla',
      imagen:
        'https://msptucuman.gov.ar/wordpress/wp-content/uploads/2015/07/portada-padilla-2-1024x512.jpg',
      text: 'programa sencillo para buscar el codigo de laboratorio a travez del nombre del estudio solicitado',
      linkTo: 'https://labpadilla2.netlify.app/',
    },
    {
      id: 6,
      nombre: 'Primer Portfolio',
      imagen:
        'https://i.imgur.com/Mx0FCwY.png',
      text: 'primer portafolio creado x mi aprendiendo html y css y haciendo deploy en netlify',
      linkTo: 'https://raulpoliti.netlify.app',
    },
  ];

  const [datos, setDatos] = useState(proyectos);

  return (
    <>
      <div className={color ? 'bg-white ' : 'bg-dark'}>
        <br />
        <br />
        <br />
        <p className={color ? 'text-dark' : 'text-white'}>
          {t("Main.Salute")}
        </p>
        <h1 className={color ? 'text-dark' : 'text-white'}>
          {t("Main.H1")}
        </h1>
        <br />
        <h3 className={color ? 'text-dark' : 'text-white'}>
          {t("Main.H3")}
          <br />{t("Main.Br")}
        </h3>
        <br />
        <br />
        <div className="row">
          {datos.map((dato) => (
            <div className="col-lg-6 col-xl-6 col-sm-12 d-flex justify-content-around mb-4 mt-5 carta">
              <Link key={dato.id} to={dato.linkTo} target="_blank">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={color ? 'card1' : 'card2'}
                  style={{ width: '500px' }}
                >
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-primary text-center text-decoration-underline">
                        {dato.nombre}
                      </Card.Title>
                      <Card.Img variant="top" src={dato.imagen} className="imgCard" />
                      <Card.Text className="text-center fw-bold mt-2">
                        {dato.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;