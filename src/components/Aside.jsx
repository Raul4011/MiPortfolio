import React from 'react';
import { useColorContext } from '../context/myContext.js';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import {
  BsFillBootstrapFill,
  BsFiletypeSql,
  BsBraces,
  BsArrowDownShort,
  BsArrowUpShort,
  BsDatabaseFillCheck,
  BsDatabaseFillGear,
} from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMariadb,
  SiExpress,
  SiCsharp,
  SiSketchup,
  SiAdobephotoshop,
  SiPython
} from 'react-icons/si';
import { MdDraw } from "react-icons/md";
import { DiMsqlServer } from "react-icons/di";
import { useTranslation } from "react-i18next"
import '../css/Aside.css';

const Aside = () => {
  const { color } = useColorContext();
  const { t } = useTranslation()
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [database, setDatabase] = useState(false);
  const [design, setDesign] = useState(false)

  //{}
  return (
    <div className={color ? 'bg-white' : 'bg-dark'}>
      <br />
      <h2
        className={color ? 'h2a text-dark text-center' : 'h2b text-white text-center'}
      >
        {t("Aside.Title")}
      </h2>
      <br />
      <br />
      <div className="container row m-auto">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/07/05182149/dogecoin-1.jpg" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <p className={color ? 'text-dark paraph' : 'text-white paraph'}>
            {t("Aside.P1Aside")}
            <br />
            {t("Aside.P2Aside")}
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="padre">
        <div className="1erHijo">
          <h2
            className={
              color ? 'h2a text-dark text-center' : 'h2b text-white text-center'
            }
          >
            {t("Aside.Skills")}
          </h2>
          <br />
          <p
            className={
              color ? 'text-dark text-center' : 'text-white text-center'
            }
          >
            {t("Aside.TitleSkill")}
          </p>
          <div>
            <div>
              <hr style={{ width: '30%' }} className={color ? "text-dark mx-auto" : "text-white mx-auto"} />
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Frontend */}
        <div className="row div-show">
          <div className="div-cursor col-lg-6 col-xl-6 col-sm-12">
            <div>
              <div
                onClick={() => setFront(!front)}
                className="border text-center div-1 cursor"
              >
                <div className="mt-2">
                  <BsBraces className="icon2" />
                </div>
                <div className="mt-2">
                  <h5
                    className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }
                  >
                    {t("Aside.Frontend")}
                  </h5>
                </div>
                <div className="mt-2">
                  {front ? <BsArrowUpShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/> : <BsArrowDownShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/>}
                </div>
              </div>
              <br />
              {front && (
                <div
                  className={
                    color
                      ? 'row border mb-3 mt-3 block p-3 div-2'
                      : 'row border mb-3 mt-3 block p-3 div-2'
                  }
                >
                  <div className="d-flex col-6">
                    <FaHtml5 className="icon text-warning" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      HTML5 - (Advanced)
                    </span>
                  </div>

                  <div className="d-flex col-6">
                    <FaCss3Alt className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      CSS - (Advanced)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <IoLogoJavascript className="icon text-warning" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      JAVASCRIPT - (Advanced)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <FaReact className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      REACT - (Intermediate)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <BsFillBootstrapFill className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      BOOTSTRAP - (Intermediate)
                    </span>
                  </div>

                  <div className="d-flex col-6">
                    <SiNextdotjs className={color ? "icon text-dark" : "icon text-white"} />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      NEXT JS - (Intermediate)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <SiTypescript className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      TYPESCRIPT - (Basic)
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          {/* Backend */}
          <div className="div-cursor col-lg-6 col-xl-6 col-sm-12">
            <div onClick={() => setBack(!back)}>
              <div className="border text-center div-1 cursor">
                <div className="mt-2">
                  <BsDatabaseFillGear className="icon2" />
                </div>
                <div className="mt-2">
                  <h5
                    className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }
                  >
                    {t("Aside.Backend")}
                  </h5>
                </div>
                <div className="mt-2">
                  {back ? <BsArrowUpShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/> : <BsArrowDownShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/>}
                </div>
              </div>
              <br />
              {back && (
                <div className="row mb-3 mt-3 border div-2">
                  <div className="d-flex col-6">
                    <FaNode className="icon text-success" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      NODE - (Intermediate)
                    </span>
                  </div>

                  <div className="d-flex col-6">
                    <SiExpress className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      EXPRESS - (intermediate)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <SiCsharp className="icon3" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      C# - (Advanced)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <SiPython className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      PYTHON - (Basic)
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          {/* Databases */}
          <div className="div-cursor col-lg-6 col-xl-6 col-sm-12">
            <div onClick={() => setDatabase(!database)}>
              <div className="border text-center div-1 cursor">
                <div className="mt-2">
                  <BsDatabaseFillCheck className="icon2" />
                </div>
                <div className="mt-2">
                  <h5
                    className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }
                  >
                    {t("Aside.Databases")}
                  </h5>
                </div>
                <div className="mt-2">
                  {database ? <BsArrowUpShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/> : <BsArrowDownShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/>}
                </div>
              </div>
              <br />
              {database && (
                <div className="row border mb-3 div-2">
                  <div className="d-flex col-6">
                    <SiMysql className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      Mysql - (Intermediate)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <DiMsqlServer className="icon4 text-danger" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      Sql Server - (Intermediate)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <SiPostgresql className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      Postgres - (Intermediate)
                    </span>
                  </div>
                  <div className="d-flex col-6">
                    <SiMongodb className="icon text-success" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      Mongo DB - (Intermediate)
                    </span>
                  </div>

                  <div className="d-flex col-6">
                    <SiMariadb className="icon text-warning" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      Maria DB - (Intermediate)
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Diseño Grafico */}
          <br />
          <div className="div-cursor col-lg-6 col-xl-6 col-sm-12">
            <div onClick={() => setDesign(!design)}>
              <div className="border text-center div-1 cursor">
                <div className="mt-2">
                  <MdDraw className="icon2" />
                </div>
                <div className="mt-2">
                  <h5
                    className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }
                  >
                    {t("Aside.Design")}
                  </h5>
                </div>
                <div className="mt-2">
                  {design ? <BsArrowUpShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/> : <BsArrowDownShort className={
                      color
                        ? 'text-dark text-center fw-bold'
                        : 'text-white text-center fw-bold'
                    }/>}
                </div>
              </div>
              <br />
              {design && (
                <div className="row mb-3 mt-3 border div-2">
                  <div className="d-flex col-6">
                    <SiSketchup className="icon text-danger" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      SketchUp - (Intermediate)
                    </span>
                  </div>

                  <div className="d-flex col-6">
                    < SiAdobephotoshop className="icon" />
                    <span
                      className={
                        color
                          ? 'text-dark text-center'
                          : 'text-white text-center'
                      }
                    >
                      Adobe PhotShop - (Basic)
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;