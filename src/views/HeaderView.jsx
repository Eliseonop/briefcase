import React, { useState, useRef, useEffect } from 'react';
import "../css/header.css"
const HeaderView = () => {
    const [background, setBackground] = useState("transparent");
    const [color, setColor] = useState("text-white  items");
    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();

            const backgroundColor = y <= 0 ? 'white' : 'transparent';
            setBackground(backgroundColor);
            const textcolor = y <= 150 ? 'text-white  fw-bold items' : 'text-white  items'
            setColor(textcolor)
            if (y <= 0) {
                setToggleMenu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    // aqui va el togle
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <>
            <div ref={divRef}>

            </div>

            {/* <div id='contenedor'  style={{ background , color }}>
                <div><p className={color}>Proyectos</p></div>
                <div><p className={color}>Sobre mi</p></div>
                <div><p className={color}>Tecnologias</p></div>
                <div><p className={color}>Curriculum</p></div>
            </div> */}
            <nav style={{ background, color }}>
                {(toggleMenu || screenWidth > 560) && (
                    <ul className="list">
                        <li className={color}>Home</li>
                        <li className={color}>Proyectos</li>
                        <li className={color}>Sobre mi</li>
                        <li className={color}>Contactame</li>
                    </ul>
                )}
                <button onClick={toggleNav} className="btn">
                    {!toggleMenu ?
                        <i className="fas fa-align-right fs-1"></i>
                        : <i className="fas fa-chevron-up fs-1"></i>
                    }
                </button>
            </nav>
        </>
    )
}

export default HeaderView
