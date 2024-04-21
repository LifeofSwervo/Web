import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Home/Projects";
import Summary from "@/components/Home/Summary";
import Introduction from "@/components/Home/Introduction";

const richBlack = '#0C1618';


const htmlStyle: React.CSSProperties = {
  backgroundColor: '#006e74',
  fontFamily: 'Poppins, ui-sans-serif',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}


export default function Home() {
  return (
    <main style={htmlStyle}>
      <NavBar />
      <Introduction />
      <Summary />
      <Projects />
      <Footer />
    </main>
  );
}
