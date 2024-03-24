import placeholderImage from "../Assets/placeholder.png"; 

interface ProjectsShowcaseProps {
    image: string;
    name: string;
    description: string;
}

const showcaseStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: '1em',
    gridRowGap: '1em',
 
}

const leftColumnStyle: React.CSSProperties = {
}

const rightColumnStyle: React.CSSProperties = {
}

const imageStyle: React.CSSProperties = {
    borderRadius: '2%',
    objectFit: 'contain',
    width: '500px',
    margin: '5vh 20vw',

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