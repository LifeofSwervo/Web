import React from "react";

const Introduction = () => {
    const introStyle: React.CSSProperties = {
        backgroundColor: '#0C1618',
        padding: "0% 10%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        display: "flex",
        height: "100vh",
        fontFamily: 'Poppins, ui-sans-serif',
    }
    const headingStyle: React.CSSProperties = {
        fontSize: "3em",
        marginBottom: "0.5em",
        color: "white",
    }

    return (
        <div style={introStyle}>
            <h1 style={headingStyle}>Aspiring Software Engineer</h1>
            <p>This is my website. I am an aspiring software engineer currently in college and working full time.</p>
        </div>
    );
}

export default Introduction;