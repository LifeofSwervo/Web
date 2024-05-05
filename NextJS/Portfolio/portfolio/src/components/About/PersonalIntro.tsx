const aboutIntroStyle: React.CSSProperties = {
    backgroundColor: "#0C1618",
    height: "75vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
}




const PersonalIntro = () => {
    return (
        <div style={aboutIntroStyle}>
            <h1>
                Hello
            </h1>
            <p>
                My name is Clarence Paul Thomas.
            </p>
            <p>
                I&#39;m a computer science student based in Omaha Nebraska.
            </p>
        </div>
    )
}

export default PersonalIntro;