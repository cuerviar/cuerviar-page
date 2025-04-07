import IconButton from './IconButton'

import { useContext, useState } from "react"
import { ThemeContext } from "../ThemeContext"

export default function App() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    }


    const closeNav = () => {
        setIsNavOpen(false);
    }

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all .3s ease-in-out',
        padding: '0 3%',
    }

    const logoStyle = {
        display: 'block',
        width: '3rem',
        height: '3rem',
        backgroundImage: `url(${theme == 'light' ? './cuervo-light.svg' : './cuervo-dark.svg'})`,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all .3s ease-in-out',
        backgroundPosition: 'center',
        backgroundSize: '80% 80%',
        backgroundRepeat: 'no-repeat',
    }

    const iconsButtonsStyle = {
        display: 'flex',
    }

    const navStyle = {
        position: 'fixed',
        left: `${isNavOpen ? '0' : '-100%'}`,
        top: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: `${theme == 'light' ? '#f8fafc' : '#09090b'}`,
        transition: 'all .3s ease-in-out',
    }

    const ulStyle = {
        height: '100%',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

    const liStyle = {
    }

    const routeStyle = {
        textDecoration: 'none',
        color: `${theme == 'light' ? '#334155' : '#FFFFFF'}`,
        userSelect: 'none',
    }

    return (
        <>
            <header style={headerStyle}>
                <a href='/' style={logoStyle} onClick={(e) => { e.preventDefault() }} />
                <div style={iconsButtonsStyle}>
                    <a href="https://www.youtube.com/@cuerviar-dev" target=" _blank">
                        <IconButton iconLight={"./youtube-light.svg"} iconDark={"./youtube-dark.svg"} />
                    </a>
                    <IconButton onClick={toggleTheme} iconLight={"./sun.svg"} iconDark={"./moon.svg"} />
                    <IconButton onClick={openNav} iconLight={"./menu-light.svg"} iconDark={"./menu-dark.svg"} />
                </div>
            </header>
            <nav style={navStyle} onClick={closeNav}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a style={routeStyle} href='/' onClick={(e) => { e.preventDefault() }}>Inicio</a></li>
                    <li style={liStyle}><a style={routeStyle} href='/Debian' onClick={(e) => { e.preventDefault() }}>Debian</a></li>
                    <li style={liStyle}><a style={routeStyle} href='/Windows10' onClick={(e) => { e.preventDefault() }}>Windows 10</a></li>
                </ul>
            </nav>
        </>
    )
}