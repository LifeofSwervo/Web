import Image from "next/image";
import Logo from "../../public/logo.svg";

const footerStyle: React.CSSProperties = {
    backgroundColor: "#748386",
    alignItems: 'center',
    padding: '1vh 5% 0 5%',
    margin: 'auto auto',
    color: 'white',
    borderTop: "2px solid #D2FDFF",
}

const footerContentStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'space-between',
    borderBottom: "1px solid black",
}

const logoStyle: React.CSSProperties = {
    gridArea: '1 / 1 / 2 / 2',

    display: 'flex',
    justifyContent: 'left',  // add this line
    alignItems: 'end',

    whiteSpace: 'nowrap',
    fontFamily: 'Comic Sans MS, Comic sans, cursive',
    color: '#4B244A',
    height: '13vh',
}

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    padding: '0',
    margin: '0 0 2vh 0',
}

const ulStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // creates two columns
    gridTemplateRows: '1fr 1fr', // creates two rows
    gap: '1px', // adjust as needed for spacing between items
    listStyleType: "none",
    margin: 0,
    padding: 0,
}

const liStyle: React.CSSProperties = {
    padding: "1.5vh 10vw",
}

const copyRightStyle: React.CSSProperties = {
    margin: '1vh 0 0 0'
}

const Footer = () => {
    return (
        <footer style={footerStyle} >
            <div style={footerContentStyle}>
                <div style={logoStyle}>
                    <Image src={Logo} alt="Logo" style={imageStyle}/>
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