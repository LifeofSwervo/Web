import placeholderImage from "../Assets/placeholder.png"; 

interface ProjectsShowcaseProps {
    image: string;
    name: string;
    description: string;
}

const showcaseStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5em'

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

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({image, name, description}) => {
    return (
        <div style={showcaseStyle}>
            <div style={leftColumnStyle}>
                <img style={imageStyle} src={image} alt={name} />
            </div>
            <div style={rightColumnStyle}>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsShowcase;