import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const contactIntroStyle: React.CSSProperties = {
  backgroundColor: '#0C1618',
  padding: "0% 10%",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  height: "100vh",
  fontFamily: 'Poppins, ui-sans-serif',
  color: "white",
}

const formsOfContactStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "1em",
  gridRowGap: "1em",
  color: "white",
}

const gitHubStyle: React.CSSProperties = {
  gridArea: "1 / 1 / 2 / 2",
}

const linkedInStyle: React.CSSProperties = {
  gridArea: "1 / 2 / 2 / 3",
}

const discordStyle: React.CSSProperties = {
  gridArea: "1 / 3 / 2 / 4",
}

const youtubeStyle: React.CSSProperties = {
  gridArea: "2 / 1 / 3 / 2",
}

const twitterStyle: React.CSSProperties = {
  gridArea: "2 / 2 / 3 / 3",
}

const emailStyle: React.CSSProperties = {
  gridArea: "2 / 3 / 3 / 4",
}

export default function Contact() {
    return (
      <main>
        <NavBar />
        <div style={contactIntroStyle}>
          <h1>How to get in touch with me. </h1>
        </div>
        <div style={formsOfContactStyle}>
          <div style={gitHubStyle}>
            <h1>GitHub</h1>
            <p>My GitHub is where I keep all of my projects and code snippets. If you want to see what I'm working on, check out my GitHub.</p>
          </div>
          <div style={linkedInStyle}>
            <h1>LinkedIn</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div style={discordStyle}>
            <h1>Discord</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
          </div>
          <div style={youtubeStyle}>
            <h1>YouTube</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
          </div>
          <div style={twitterStyle}>
            <h1>Twitter</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
          </div>
          <div style={emailStyle}>
            <h1>Email</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt necessitatibus quis iusto, molestiae veritatis blanditiis deserunt non voluptatibus vitae nisi, laboriosam atque, incidunt esse nihil officiis eligendi aperiam aliquam.</p>
          </div>
        </div>
        <h1>Contact</h1>
        <Footer />
      </main>
    );
  }
  