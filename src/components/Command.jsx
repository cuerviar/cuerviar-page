export default function App({ text }) {

    const styleContainer = {}
    return <div style={styleContainer}>
        <code>
            {text}
        </code>
    </div>
}