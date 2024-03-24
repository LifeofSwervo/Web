import React from "react"
import ProjectsShowcase from "./ProjectsShowcase"
import placeholderImage from "../Assets/TheBistroCafe.jpg"; 
import theBistroCafe from "../Assets/TheBistroCafe.jpg";



const Projects = () => {
    const projectsStyle: React.CSSProperties = {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: '10vh auto 10vh auto',
        backgroundColor: 'lightgrey',
    }

    const showcaseStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    const leftColumnStyle: React.CSSProperties = {
        flex: 1,
        marginRight: '30vh',
    }

    const rightColumnStyle: React.CSSProperties = {
        flex: 1,
    }

    const imageStyle: React.CSSProperties = {
        borderRadius: '5%',
        objectFit: 'contain',
    }

    return (
        <div style={projectsStyle}>
            <h1>Projects I've made.</h1>
            <p>This is a showcase of the various different projects I have completed.</p>
            <ProjectsShowcase 
                image={theBistroCafe}
                name="The Bistro Cafe"
                description="The Bistro Cafe is was one of my first website made purely from HTML, CSS and Javascript. This was my introduction into webdevelopment. This helped me pick up the very basics of web development."
            /> 
            <ProjectsShowcase 
                image={placeholderImage}
                name="Placeholder"
                description="Loren Ipsum"
            />
            <ProjectsShowcase 
                image={placeholderImage}
                name="Placeholder"
                description="Loren Ipsum"
            />
        </div>
    )
}

export default Projects;