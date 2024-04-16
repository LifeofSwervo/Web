import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PersonalIntro from "@/components/About/PersonalIntro";
import AboutSummary from "@/components/About/AboutSummary"

export default function About() {
    return (
      <main>
        <NavBar />
        <PersonalIntro />
        <AboutSummary />
        <Footer />
      </main>
    );
  }
  