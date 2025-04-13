import { useContext, useState } from "react"
import { ThemeContext } from "../ThemeContext"

export default function App({ text }) {
    const { theme } = useContext(ThemeContext);
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredCopy, setIsHoveredCopy] = useState(false);


    const copyToClipboard = async () => {
        const plainText = text.replace(/<br\s*\/?>/gi, "\n");
        try {
            await navigator.clipboard.writeText(plainText);
        } catch (err) {
            console.error("Error al copiar: ", err);
        }
    };

    const styleContainer = {
        position: 'relative'
    }

    const styleCode = {
        display: 'block',
        backgroundColor: `${theme == 'light' ? '#020617' : '#18181b'}`,
        color: '#FFFFFF',
        borderRadius: '0.5rem',
        padding: '1rem',
        overflowX: 'auto',
        whiteSpace: 'pre',
        transition: 'all .3s ease-in-out',
    }

    const styleCopy = {
        display: `${isHovered ? 'flex' : 'none'}`,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        width: '2rem',
        height: '2rem',
        position: 'absolute',
        right: '0.5rem',
        top: '0.5rem',
        borderRadius: '10px',
        border: '0.5px solid #61646e',
        transition: 'all .3s ease-in-out',
        backgroundColor: `${theme == 'light' ? '#0f1323' : '#242427'}`,
    }

    const styleCopyIcon = {
        width: '1.7rem',
        height: '1.7rem',
        borderRadius: '8px',
        backgroundImage: `url('./copy.svg')`,
        backgroundColor: !isHoveredCopy ? 'transparent' : (theme == 'light' ? '#282b3a' : '#3a3a3d'),
        backgroundPosition: 'center',
        backgroundSize: '50% 50%',
        backgroundRepeat: 'no-repeat',
        transition: 'all .3s ease-in-out',
    }

    const styleText = {
        transition: 'all .3s ease-in-out',
        display: `${isHoveredCopy ? 'flex' : 'none'}`,
        color: '#FFFFFF',
        fontSize: '12px',
        width: '4rem',
        height: '1.5rem',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: '7px',
        top: '44px',
        borderRadius: '5px',
        border: 'transparent',
        backgroundColor: `${theme == 'light' ? '#334155' : '#3f3f46'}`,
        userSelect: 'none',
    }

    return <div style={styleContainer}>
        <code style={styleCode} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {text}
            <div style={styleCopy} onMouseEnter={() => setIsHoveredCopy(true)} onMouseLeave={() => setIsHoveredCopy(false)} onClick={() => { setIsHoveredCopy(false); copyToClipboard(); }}><div style={styleCopyIcon}></div></div>
            <div style={styleText}>Copiar</div>
        </code>
    </div>
}