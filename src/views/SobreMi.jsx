import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/sobremi.css";
import Tarjeta from "../components/Tarjeta";
import { lenguajes } from "../assets/logos/imagenes";
import { frame } from "../assets/logos/frame";
import { diseno } from "../assets/logos/Diseno";
import edu from "../assets/edu.jpg";
const SobreMi = () => {
  return (
    <>
      <div id="contenedor-about">
        <Container>
          <Row id="cont-about-1">
            <Col md={12} lg={6}>
              <img src={edu} alt="imagen edu" />
            </Col>
            <Col md={12} lg={6} id="cont-about-2">
              <h1>Hola! </h1>
              <h4>
                Mi nombre es Eliseo Edu Falcon Mestanza , soy un Desarrollador
                web full Stack.
              </h4>
              <p>
                Tengo 21 años, soy un apasionado por la Programacion, me gusta
                resolver problemas usando algoritmos y busco aprender nuevas
                tecnologias a diario ademas estudio Ing Industrial en la UTP.
              </p>
              <a id="boton-a-about">Descargar Cv</a>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="title-conocimientos">
        <h2>Conocimientos</h2>
      </div>
      <div id="cf-about-2">
        <h4>Lenguajes</h4>

        <div id="lenguajes">
          {lenguajes.map((item) => (
            <Tarjeta item={item} />
          ))}
        </div>
      </div>
      <div id="cf-about-2">
        <h4>Frameworks</h4>

        <div id="lenguajes">
          {frame.map((item) => (
            <Tarjeta item={item} />
          ))}
        </div>
      </div>
      <div id="cf-about-2">
        <h4>Librerias de Diseño</h4>

        <div id="lenguajes">
          {diseno.map((item) => (
            <Tarjeta item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SobreMi;
