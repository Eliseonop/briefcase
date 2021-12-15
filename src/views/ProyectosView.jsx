import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import "../css/proyectos.css"
const ProyectosView = () => {
    return (
        <div>
       <Container className="my-5" >
                <Row >
                    <Col md={12} lg={6} id="cont-1" >
                        <h2 className='h2'>Ecommerce</h2>
                        <p>Una tienda web completa</p>
                    </Col>
                    <Col md={12} lg={6} id="" >
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProyectosView
