"use client"

import placeholder from "@/Assets/placeholder.png"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/Home/Projects";
import Summary from "@/components/Home/Summary";
import Introduction from "@/components/Home/Introduction";
import Particles from "@tsparticles/react";
import particlesConfig from "../../public/Logos/Dummy files/particlesjs-config.json";
import ParticleBackground from "@/components/ParticleBackground";

const richBlack = '#0C1618';

const mainStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const mainContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: richBlack,
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
    <main style={mainStyle}>
      <NavBar />
      <div style={{ position: 'relative' }}>
        <ParticleBackground />
      </div>
      <div style={mainContainerStyle}>
        <Introduction />
        <Summary />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
