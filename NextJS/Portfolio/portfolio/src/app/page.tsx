"use client"

import placeholder from "@/Assets/placeholder.png"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Home/Projects";
import Summary from "@/components/Home/Summary";
import Introduction from "@/components/Home/Introduction";
import Carousel from "@/components/Carousel";

const richBlack = '#0C1618';


const htmlStyle: React.CSSProperties = {
  fontFamily: 'Poppins, ui-sans-serif',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

const images = [
  `${placeholder}`,
  `${placeholder}`,
  `${placeholder}`,
  `${placeholder}`,
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
]

export default function Home() {
  return (
    <main style={htmlStyle}>
      <NavBar />
      <Introduction />
      <Summary />
      <Projects />
      <Carousel images={images} />
      <Footer />
    </main>
  );
}
