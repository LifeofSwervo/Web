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
            username="@LifeOfSwervo"
            link="https://github.com/LifeofSwervo"
          />
          <ContactMethod 
            title="LinkedIn"
            image="/Logos/ContactLogos/linkedIn.svg"
            description="My LinkedIn profile showcases my professional journey, skills, and experiences. If you want to learn more about my background and connect."
            username="Clarence Thomas"
            link="https://www.linkedin.com/in/clarence-t-481920205"
          />
          <ContactMethod 
            title="Discord"
            image="/Logos/ContactLogos/discord.svg"
            description="Join me on Discord to chat and collaborate. If you want to connect and discuss ideas, you can find me here."
            username="Lifeofswervo"
            link=""
          />
          <ContactMethod 
            title="YouTube"
            image="/Logos/ContactLogos/youtube.svg"
            description="Check out my YouTube channel to see my latest videos and tutorials. If you want to stay updated on what I’m creating, subscribe here"
            username="Swervo Life"
            link="https://www.youtube.com/channel/UCdZ2MBALCSVL-Zfn6upNbOw"
          />
          <ContactMethod 
            title="Twitter"
            image="/Logos/ContactLogos/twitter.svg"
            description="Follow me on Twitter to stay updated on my latest thoughts and projects. If you want to connect and see what I'm up to, check out my profile."
            username="@Swervo_Life"
            link="https://x.com/Swervo_Life"
          />
          <ContactMethod 
            title="Email"
            image="/Logos/ContactLogos/email.svg"
            description="Feel free to reach out to me via email for any inquiries or collaborations. If you want to connect and discuss further, you can email me."
            username="SwervoLife@gmail.com"
            link="mailto:SwervoLife@gmail.com"
          />
        </div>
        <Footer />
      </main>
    );
  }
  