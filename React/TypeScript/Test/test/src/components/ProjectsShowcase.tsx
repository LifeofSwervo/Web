import placeholderImage from "../Assets/placeholder.png"; 

interface ProjectsShowcaseProps {
    image: string;
    name: string;
    description: string;
}

const showcaseStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '1em',
}



const leftColumnStyle: React.CSSProperties = {
    marginRight: '0',
}

const rightColumnStyle: React.CSSProperties = {
}

const imageStyle: React.CSSProperties = {
    borderRadius: '2%',
    objectFit: 'contain',
    width: '500px',
    margin: '20vh 2vw 40vh 15vw',

}

const informationStyle: React.CSSProperties = {
    margin: '20vh 15vw 2.5vh 2vw',
    alignItems: 'left',
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({image, name, description}) => {
    return (
        <div style={showcaseStyle}>
            <div style={leftColumnStyle}>
                <img style={imageStyle} src={image} alt={name} />
            </div>
            <div style={informationStyle}>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsShowcase;