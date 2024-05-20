import { motion } from 'framer-motion';


interface ContactMethodProps {
    image: string;
    title: string;
    username: string;
    description: string;
    link: string;
}

const gitHubStyle: React.CSSProperties = {
    gridArea: "1 / 1 / 2 / 2",
}

const contactHeaderStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const titleStyle: React.CSSProperties = {
}

const usernameStyle: React.CSSProperties = {
    marginTop: "-2vh",
    fontFamily: "Comic Sans MS",
    fontWeight: "lighter",
}

const linkStyle: React.CSSProperties = {
    color: "white",
    
}

const parentImageStyle: React.CSSProperties = {
    marginRight: '1em',
}

const imageStyle: React.CSSProperties = {
}

const divStyle: React.CSSProperties = {
    border: "1px solid #1F2B2E",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: '1%',
    display: "flex",
    flexDirection: "column",
}


const ContactMethod: React.FC<ContactMethodProps> = ({title, image, description, username, link}) => {
    return (
        <div style={divStyle}>
            <div style={contactHeaderStyle}>
                <div style={parentImageStyle}>
                    <motion.img
                    src={image}
                    alt="Logo"
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    width={32}
                    height={32}
                    style={imageStyle}/>
                </div>
                <h1 style={titleStyle}>{title}</h1>
            </div>
            <h2 style={usernameStyle}><a style={linkStyle} href={link}>{username}</a></h2>
            <p>{description}</p>
        </div>
    )
}

export default ContactMethod;