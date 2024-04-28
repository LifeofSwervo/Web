import React from "react"
import ProjectsShowcase from "./ProjectsShowcase"
import placeholderImage from "../../Assets/placeholder.png";
import theBistroCafe from "../../Assets/placeholder.png";

const projectsStyle: React.CSSProperties = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 3,
    
}

const showcaseDescriptionStyle: React.CSSProperties = {
    marginBottom: '10vh'
}

const Projects = () => {
    return (
        <div style={projectsStyle}>
            <h1>Projects I've made.</h1>
            <p style={showcaseDescriptionStyle}>This is a showcase of the various different projects I have completed.</p>
            <div>
                <ProjectsShowcase 
                    image={theBistroCafe}
                    name="The Bistro Cafe"
                    description="The Bistro Cafe is was one of my first website's made purely from HTML, CSS and Javascript. This was my introduction into webdevelopment. This helped me pick up the very basics of web development."
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