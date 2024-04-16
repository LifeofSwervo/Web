
const mainDiv: React.CSSProperties = {
    height: "75vh",
    backgroundColor: '#0C1618',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

const AboutSummary = () => {
    return (
        <div style={mainDiv}>
            <h1>A brief history</h1>
            <p>I built my first computer when I turned 18 after saving money from working at Burger King while in high school.</p>
            <p>Shortly after this I graduated and began studying for a bachelor's in Computer Science.</p>
            <p>In the process of getting my Associate of Science I gained experience in Python, Java and Javascript.</p>
        </div>
    )
}

export default AboutSummary;