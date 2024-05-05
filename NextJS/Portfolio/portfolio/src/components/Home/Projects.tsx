import React from "react"
import ProjectsShowcase from "./ProjectsShowcase"
import placeholderImage from "../../Assets/placeholder.png";

const projectsStyle: React.CSSProperties = {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    zIndex: 3,
    
}

const showcaseDescriptionStyle: React.CSSProperties = {
    marginBottom: "10vh"
}

const theBistroCafe = [
    "/Assets/BistroCafe/BistroCafeHome.png",
    "/Assets/BistroCafe/BistroCafeSpecials.png",
]

const theBistroCafe2 = [
    "/Assets/BistroCafe/BistroCafeHistory.png",
    "/Assets/BistroCafe/BistroCafeHome.png",
]

const NinjaRunner = [
    "/Assets/NinjaRunner/NinjaRunnerGameplay1.png",
    "/Assets/NinjaRunner/NinjaRunnerStart.png",
    
]

const NinjaRunner2 = [
    "/Assets/NinjaRunner/NinjaRunnerGameplay.png",
    "/Assets/NinjaRunner/NinjaRunnerLost.png",
]

const SpaceInvaders = [
    "/Assets/SpaceInvaders/SpaceInvadersShoot.png",
    "/Assets/SpaceInvaders/SpaceInvadersGameplay.png",
]

const SpaceInvaders2 = [
    "/Assets/SpaceInvaders/SpaceInvadersGameplay1.png",
    "/Assets/SpaceInvaders/SpaceInvadersCode.png",
]


const bistroCafeDescription = "The Bistro Cafe is was one of my first website&#39;s made purely from HTML, CSS and Javascript. This was my introduction into webdevelopment. This helped me pick up the very basics of web development. For this project I gained experience making the logo&#39;s from scratch."

const Projects = () => {
    return (
        <div style={projectsStyle}>
            <h1>Projects I&#39;ve made.</h1>
            <p style={showcaseDescriptionStyle}>This is a showcase of the various different projects I have completed.</p>
            <div>
                <ProjectsShowcase 
                    images={theBistroCafe}
                    images2={theBistroCafe2}
                    name="The Bistro Cafe"
                    description="The Bistro Cafe is was one of my first website&#39;s made purely from HTML, CSS and Javascript. This was my introduction into webdevelopment. This helped me pick up the very basics of web development. For this project I gained experience making the logo&#39;s from scratch.  Looking back at this project I can see how far I have come in terms of web development. Looking back at this project I can see how far I have come in terms of web development."
                    linkToCode="https://www.google.com"
                /> 
                <ProjectsShowcase 
                    images={NinjaRunner}
                    images2={NinjaRunner2}
                    name="Ninja Runner"
                    description="This was a basic running game I made in pygame using python. This was my first attempt at my own game from scratch. I wanted to test my utilization of assets and I wanted to make a more interactive project than a website."
                    linkToCode="https://www.google.com"
                />
                <ProjectsShowcase 
                    images={SpaceInvaders}
                    images2={SpaceInvaders2}
                    name="Space Invaders demo"
                    description="Loren Ipsum"
                    linkToCode="https://www.google.com"
                />
            </div>
            
        </div>
    )
}

export default Projects;