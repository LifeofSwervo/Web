"use client"; // top to the file

import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactMethod from "@/components/Contact/ContactMethod";


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
  margin: "10vh 15vw"
}

export default function Contact() {
    return (
      <main>
        <NavBar />
        <div style={contactIntroStyle}>
          <h1>How to get in touch with me. </h1>
        </div>
        <div style={formsOfContactStyle}>
          <ContactMethod 
            title="Github"
            image="/Logos/github.svg"
            description="My GitHub is where I keep all of my projects and code snippets. If you want to see what I'm working on, check out my GitHub."
            username="LifeOfSwervo"
          />
          <ContactMethod 
            title="LinkedIn"
            image="/Logos/linkedIn.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="placeholder"
          />
          <ContactMethod 
            title="Discord"
            image="/Logos/discord.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="placeholder"
          />
          <ContactMethod 
            title="YouTube"
            image="/Logos/youtube.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="placeholder"
          />
          <ContactMethod 
            title="Twitter"
            image="/Logos/twitter.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="placeholder"
          />
          <ContactMethod 
            title="Email"
            image="/Logos/email.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            username="SwervoLife@gmail.com"
          />
        </div>
        <Footer />
      </main>
    );
  }
  