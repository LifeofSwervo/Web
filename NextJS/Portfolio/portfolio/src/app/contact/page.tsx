"use client"; // top to the file

import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactMethod from "@/components/Contact/ContactMethod";
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
  backgroundColor: '#0C1618',
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  color: "white",
  margin: "10vh 15vw",
  zIndex: 2,
}

export default function Contact() {
    return (
      <main style={mainStyle}>
        <NavBar />
        <div style={particleDivStyle}>
          <ParticleBackground />
        </div>
        <div style={contactIntroStyle}>
          <h1>How to get in touch with me. </h1>
        </div>
        <div style={formsOfContactStyle}>
          <ContactMethod 
            title="Github"
            image="/Logos/ContactLogos/github.svg"
            description="My GitHub is where I keep all of my projects and code snippets. If you want to see what I'm working on, check out my GitHub."
            username="LifeOfSwervo"
          />
          <ContactMethod 
            title="LinkedIn"
            image="/Logos/ContactLogos/linkedIn.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="Clarence Thomas"
          />
          <ContactMethod 
            title="Discord"
            image="/Logos/ContactLogos/discord.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="Lifeofswervo"
          />
          <ContactMethod 
            title="YouTube"
            image="/Logos/ContactLogos/youtube.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="placeholder"
          />
          <ContactMethod 
            title="Twitter"
            image="/Logos/ContactLogos/twitter.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="Swervo_Life"
          />
          <ContactMethod 
            title="Email"
            image="/Logos/ContactLogos/email.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="SwervoLife@gmail.com"
          />
        </div>
        <Footer />
      </main>
    );
  }
  