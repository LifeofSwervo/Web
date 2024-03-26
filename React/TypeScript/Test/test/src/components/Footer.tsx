
const footerStyle: React.CSSProperties = {
    backgroundColor: "#748386",
    height: '20vh',
    alignItems: 'center',
    padding: '5vh 18% 0 18%',
    margin: '0 auto',
    color: 'white',
    borderTop: "2px solid #D2FDFF"
}

const footerContentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: "1px solid black",

}

const logoStyle: React.CSSProperties = {
    font: 'italic 2em Arial',
    whiteSpace: 'nowrap',
    marginTop: '1vh',
    fontFamily: 'Comic Sans MS, Comic sans, cursive',
    color: '#4B244A'
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

const copyRightStyle: React.CSSProperties = {
    margin: '1vh 0 1vh 0'
}

const Footer = () => {
    return (
        <footer style={footerStyle} >
            <div style={footerContentStyle}>
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
            <p>© Clarence Thomas - 2024</p>
        </footer>
    )
}

export default Footer;