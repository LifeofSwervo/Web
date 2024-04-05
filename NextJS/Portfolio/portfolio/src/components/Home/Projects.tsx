import React from "react"
import ProjectsShowcase from "./ProjectsShowcase"
import placeholderImage from "../../Assets/placeholder.png";
import theBistroCafe from "../../Assets/placeholder.png";



const Projects = () => {
    const projectsStyle: React.CSSProperties = {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#0C1618",
    }

    const showcaseStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        gridColumnGap: '1em',
        gridRowGap: '1em',
     
    }

    const leftColumnStyle: React.CSSProperties = {
        flex: 1,
        marginRight: '30vh',
    }

    const rightColumnStyle: React.CSSProperties = {
        flex: 1,
    }

    const imageStyle: React.CSSProperties = {
        borderRadius: '12px',
        objectFit: 'contain',
    }

    const showcaseDescriptionStyle: React.CSSProperties = {
        marginBottom: '10vh'
    }

    return (
        <div style={projectsStyle}>
            <h1>Projects I've made.</h1>
            <p style={showcaseDescriptionStyle}>This is a showcase of the various different projects I have completed.</p>
            <div>
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
            
        </div>
    )
}

export default Projects;