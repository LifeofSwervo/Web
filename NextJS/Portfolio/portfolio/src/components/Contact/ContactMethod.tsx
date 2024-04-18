import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';


interface ContactMethodProps {
    image: string;
    title: string;
    description: string;
}

const gitHubStyle: React.CSSProperties = {
    gridArea: "1 / 1 / 2 / 2",
}

const contactHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
}

const divStyle: React.CSSProperties = {
    border: "1px solid #1F2B2E",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: '1%',
}


const ContactMethod: React.FC<ContactMethodProps> = ({title, image, description}) => {
    return (
        <div style={divStyle}>
            <div style={contactHeaderStyle}>
              <motion.img
              src={image}
              alt="Logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              width={32}
              height={32} />
              <h1>{title}</h1>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ContactMethod;