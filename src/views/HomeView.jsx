import { Container, Row, Col } from "react-bootstrap"
import "../css/homeView.css"
import img from "../assets/img.svg"
import { Link } from "react-router-dom"
const HomeView = () => {
    return (
        <div>
            <Container className="my-5" >
                <Row >
                    <Col md={12} lg={6} id="container-home" >
                        <div id="container-home" className="cont-1">

                            <h1 id="title-1">Edu Falcon</h1>

                            <p id="dev">Developer Web Full-Stack</p>
                            <Link to='/Proyectos' id="boton-a">Ver Proyectos</Link>
                            {/* asdasdsad */}

                        </div>
                    </Col>
                    <Col md={12} lg={6} id="container-2" >
                        <div className="m-auto">
                            <img src={img} alt="" id="img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeView
