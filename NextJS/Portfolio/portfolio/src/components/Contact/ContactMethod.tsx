import { motion } from 'framer-motion';


interface ContactMethodProps {
    image: string;
    title: string;
    username: string;
    description: string;
}

const gitHubStyle: React.CSSProperties = {
    gridArea: "1 / 1 / 2 / 2",
}

const contactHeaderStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: 'repeat(2, 1fr)',
    justifyContent: "center",
    alignItems: "center",
    margin: "5% auto auto auto",
}

const titleStyle: React.CSSProperties = {
    gridArea: "1 / 2 / 2 / 3",
    justifyContent: "center",
    textAlign: "start",
    marginLeft: "-20%",
}

const usernameStyle: React.CSSProperties = {
    gridArea: "2 / 2 / 3 / 3",
    marginLeft: "-80%",
    alignContent: "start",
}

const parentImageStyle: React.CSSProperties = {
    gridArea: "1 / 1 / 2 / 2",
    marginLeft: "40%", 
}

const imageStyle: React.CSSProperties = {
}

const divStyle: React.CSSProperties = {
    border: "1px solid #1F2B2E",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: '1%',
}


const ContactMethod: React.FC<ContactMethodProps> = ({title, image, description, username}) => {
    return (
        <div style={divStyle}>
            <div style={contactHeaderStyle}>
                <div style={parentImageStyle}>
                    <motion.img
                    src={image}
                    alt="Logo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    width={32}
                    height={32}
                    style={imageStyle}/>
                </div>
                <h1 style={titleStyle}>{title}</h1>
                <h1></h1>
                <h2 style={usernameStyle}>@{username}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ContactMethod;