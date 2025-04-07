import Header from './components/Header'
import { ThemeProvider } from './ThemeContext';
import { useEffect } from 'react'


export default function App() {

    const theme = localStorage.getItem("theme");

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


    return (
        <>
            <ThemeProvider>
                <Header/>
                <main style={mainStyle}>
                    asd
                </main>
            </ThemeProvider>
        </>
    )
}
