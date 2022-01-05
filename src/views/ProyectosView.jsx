import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "../css/proyectos.css"
import proyt1 from "../assets/proyt1.png"
const ProyectosView = () => {
    return (
        <div id='contenedor-padre'>

            <Container className="my-5" >
                <Row  >
                    <Col md={12} lg={6} id='contenedor-proy1' >
                        <div  >

                            <h2 className='h2'>Ecommerce</h2>
                            <div id='title-p'>
                                <p>Una tienda web completa, elaborado con react js</p>

                            </div>
                            <div id='enlace'>

                                <a href='https://e-commerce-2.vercel.app/'>Visitar</a>
                            </div>

                        </div>
                    </Col>
                    <Col md={12} lg={6} id='contenedor-proy2' >
                        <div >
                            <img id='img-proy' src={proyt1} width={600} />

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ProyectosView
