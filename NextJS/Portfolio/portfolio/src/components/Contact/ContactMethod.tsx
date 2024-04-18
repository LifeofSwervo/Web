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


const ContactMethod: React.FC<ContactMethodProps> = ({title, image, description}) => {
    return (
        <div>
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