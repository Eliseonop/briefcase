import React from 'react'
import { lenguajes } from '../assets/logos/imagenes'
import "../css/tarjeta.css"
import { ProgressBar } from 'react-bootstrap'
const Tarjeta = ({ item }) => {
    return (
        < >
            <div id='tarjeta-comp' className='card' >
                <img src={item.imagen} alt="html" id='img-tarj' />
                <p>{item.nombre}</p>
                <div>

                    <ProgressBar variant="info" now={item.progreso} />
                    {/* <span>90%</span> */}
                </div>
            </div>
        </>
    )
}

export default Tarjeta
