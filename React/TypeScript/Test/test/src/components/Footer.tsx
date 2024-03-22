
const footerStyle: React.CSSProperties = {
    backgroundColor: 'darkgray',
    height: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0% 20%',
}

const logoStyle: React.CSSProperties = {
    font: 'italic 2em Arial',
}

const ulStyle: React.CSSProperties = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
}

const liStyle: React.CSSProperties = {
    float: "right",
    padding: "1.5vh 10vw",

}

const Footer = () => {
    return (
        <footer>
            <div style={footerStyle}>
                <div>
                    <h1 style={logoStyle}>Nameless Dev</h1>
                </div>
                <div>
                    <ul style={ulStyle}>
                        <li style={liStyle}>Home</li>
                        <li style={liStyle}>Showcase</li>
                        <li style={liStyle}>About</li>
                        <li style={liStyle}>Contact</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;