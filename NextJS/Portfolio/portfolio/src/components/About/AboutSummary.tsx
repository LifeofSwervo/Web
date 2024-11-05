
const mainDiv: React.CSSProperties = {
    height: "75vh",
    backgroundColor: "#0C1618",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2.5vh",
}

const sectionDiv: React.CSSProperties = {
    marginBottom: "2.5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "2vw",
    marginRight: "2vw",
}

const AboutSummary = () => {
    const SummaryIntro = [
        "I built my first computer when I turned 18 after saving money from working at Burger King while in High School.",
        "Shortly after this I graduated high school and began pursuing a bachelor\u2019s in Computer Science.",
        "Whilst attaining my pre-requesites, the main skills I focused on learning were Python, Java, and Javascript."
    ];

    const SummaryWork = [
        "During this time, I began my first tech job as a Systems Engineer II at Fiserv, the world\u2019s largest payment processor.",
        "This role focused on a skillset centered in IBM Mainframe, so training consisted of us drilling down z/OS, REXX, and JCL",
        "Training was extremly in depth,Fiserv then offered us an opportunity to shadow all 10 teams we had a chance of joining to see the day in the life."
    ]

    return (
        <div style={mainDiv}>
            <h1>A Brief History</h1>
            <div style={sectionDiv}>
                <h2>Intro to Computer Science</h2>
                {SummaryIntro.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

            <div style={sectionDiv}>
                <h2>Breaking Into Tech</h2>
                {SummaryWork.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
        /*<div style={mainDiv}>
            <h1>A brief history</h1>
            <p>I built my first computer when I turned 18 after saving money from working at Burger King while in high school.</p>
            <p>Shortly after this I graduated and began studying for a bachelor&#39;s in Computer Science.</p>
            <p>In the process of getting my Associate of Science I gained experience in Python, Java and Javascript.</p>
        </div>
        */
    )
}

export default AboutSummary;