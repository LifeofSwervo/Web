import placeholderImage from "../Assets/placeholder.png"; 

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

const ProjectsShowcase = () => {
    return (
        <div style={showcaseStyle}>
            <div style={leftColumnStyle}>
                <img style={imageStyle} src={placeholderImage} alt="Placeholder" />
            </div>
            <div style={rightColumnStyle}>
                <h4>Placeholder</h4>
                <p>Loren Ipsum</p>
            </div>
        </div>
    )
}

export default ProjectsShowcase;