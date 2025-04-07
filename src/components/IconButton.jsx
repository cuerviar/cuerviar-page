import { useContext, useState } from "react"
import { ThemeContext } from "../ThemeContext"

export default function App({ onClick, iconLight, iconDark }) {
    const { theme } = useContext(ThemeContext);
    const [isHovered, setIsHovered] = useState(false);

    const containerStyle = {
        'width': '2rem',
        'height': '2rem',
        border: '1px solid transparent',
        borderColor: theme == 'light' ? (isHovered ? '#020617' : '#e2e8f0') : (isHovered ? '#fafafa' : '#3f3f46'),
        borderRadius: '5px',
        backgroundImage: `url(${theme === 'light' ? iconLight : iconDark})`,
        backgroundColor: theme == 'light' ? '#ffffff' : '#18181b',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all .3s ease-in-out',
        backgroundPosition: 'center',
        backgroundSize: '70% 70%',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={containerStyle} onClick={onClick} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
        </div>
    )
}