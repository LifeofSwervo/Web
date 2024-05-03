"use client"

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PersonalIntro from "@/components/About/PersonalIntro";
import AboutSummary from "@/components/About/AboutSummary";
import ParticleBackground from "@/components/ParticleBackground";

const mainStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const particleDivStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
}

export default function About() {
    return (
      <main style={mainStyle}>
        <NavBar />
        <div style={particleDivStyle}>
          <ParticleBackground />
        </div>
        <div> 
          <PersonalIntro />
          <AboutSummary />
        </div>
        <Footer/>
      </main>
    );
  }
  