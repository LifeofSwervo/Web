
const NavBar = () => {
    const ulStyle = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333", // Black background of nav
    }

    const liStyle: React.CSSProperties = {
        float: "right",

    }

    const aStyle: React.CSSProperties = {
        display: "block",
        color: "white",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none"
    }
    return (
        <div>
            <ul id="navBarList" style={ulStyle}>
                <li style={liStyle}><a href="#home" style={aStyle}>Home</a></li>
                <li style={liStyle}><a href="#about" style={aStyle}>About</a></li>
                <li style={liStyle}><a href="#contact" style={aStyle}>Contact Us</a></li>
            </ul>
        </div>
    );
}

export default NavBar;