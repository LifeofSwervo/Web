import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Introduction from "@/components/Introduction";

const richBlack = '#0C1618';

const htmlStyle: React.CSSProperties = {
  backgroundColor: richBlack,
  fontFamily: 'Poppins, ui-sans-serif',
  color: 'white',
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
