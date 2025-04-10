import Header from './components/Header'
import Home from './pages/Home'
import Debian from './pages/Debian'
import Windows10 from './pages/Windows 10'

import { ThemeProvider } from './ThemeContext';
import { useEffect, useState } from 'react'


export default function App() {
    const theme = localStorage.getItem("theme");
    const [currentPage, setCurrentPage] = useState("Home");

    useEffect(() => {
        if (!theme) {
            localStorage.setItem("theme", "light");
        } else if (theme == 'light') {
            document.body.style.backgroundColor = '#f8fafc';
        } else {
            document.body.style.backgroundColor = '#09090b';
        }
    }, []);

    const mainStyle = {
        padding: '0 3%',
    }

    const renderPage = () => {
        switch (currentPage) {
            case "Home":
                return <Home />;
            case "Debian":
                return <Debian />;
            case "Windows10":
                return <Windows10 />;
            default:
                return <Home />;
        }
    };

    return (
        <>
            <ThemeProvider>
                <Header setCurrentPage={setCurrentPage} />
                <main style={mainStyle}>
                    {renderPage()}
                </main>
            </ThemeProvider>
        </>
    )
}
