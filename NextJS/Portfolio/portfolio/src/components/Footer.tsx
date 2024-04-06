
const footerStyle: React.CSSProperties = {
    backgroundColor: "#748386",
    height: '20vh',
    alignItems: 'center',
    padding: '5vh 5% 0 5%',
    margin: '0 auto',
    color: 'white',
    borderTop: "2px solid #D2FDFF",
    minHeight: '150px', // adjust this value as needed

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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // creates two columns
    gridTemplateRows: '1fr 1fr', // creates two rows
    gap: '10px', // adjust as needed for spacing between items
    listStyleType: "none",
    margin: 0,
    padding: 0,
}

const liStyle: React.CSSProperties = {
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
            <p style={copyRightStyle}>© Clarence Thomas - 2024</p>
        </footer>
    )
}

export default Footer;