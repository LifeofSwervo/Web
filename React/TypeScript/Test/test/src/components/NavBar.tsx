
const NavBar = () => {
    const navStyle: React.CSSProperties = {
        borderBottom: "5px solid",
        borderColor: "#F7D002",
    }

    const ulStyle: React.CSSProperties = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#0C1618",

        borderBottom: "2px solid #D2FDFF",

        // Fixes the navbar to the top of the page
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1,
    }

    const liStyle: React.CSSProperties = {
        float: "right",

    }

    const aStyle: React.CSSProperties = {
        display: "block",
        color: 'white',
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none"
    }

    const namelessStyle: React.CSSProperties = {
        float: "left",
        fontFamily: 'Comic Sans MS, Comic sans, cursive',
        marginLeft: '12.5vw',
        fontSize: '1.25em',
    }
    
    return (
        <div>
            <ul id="navBarList" style={ulStyle}>
                <li style={liStyle}><a href="#home" style={aStyle}>Home</a></li>
                <li style={liStyle}><a href="#about" style={aStyle}>About</a></li>
                <li style={liStyle}><a href="#contact" style={aStyle}>Contact Us</a></li>
                <li style={namelessStyle}><a href="#nameless" style={aStyle}>Nameless Dev</a></li>
            </ul>
        </div>
    );
}

export default NavBar;