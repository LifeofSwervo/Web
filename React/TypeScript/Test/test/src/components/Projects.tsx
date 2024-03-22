import React from "react"
import ProjectsShowcase from "./ProjectsShowcase"
import placeholderImage from "../Assets/placeholder.png"; 



const Projects = () => {
    const projectsStyle: React.CSSProperties = {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10vh',
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
        borderRadius: '15%',
    }

    return (
        <div style={projectsStyle}>
            <h1>Projects I've made.</h1>
            <p>This is a showcase of the various different projects I have completed.</p>
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