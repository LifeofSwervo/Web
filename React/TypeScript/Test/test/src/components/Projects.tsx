

const Projects = () => {
    const projectsStyle: React.CSSProperties = {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div style={projectsStyle}>
            <h1>Projects I've made.</h1>
            <p>This is a showcase of the various different projects I have completed.</p>
        </div>
    )
}

export default Projects;