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
    margin: '5vh 0 2.5vh 20vw',
    maxWidth: '100%',
    maxHeight: '100%',
}

const rightColumnStyle: React.CSSProperties = {
    flex: 1,
}

const imageStyle: React.CSSProperties = {
    borderRadius: '2%',
    objectFit: 'contain',
    width: '50vh'

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