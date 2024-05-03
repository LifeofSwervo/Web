import summaryPhoto from '../../Assets/SummaryPhoto.jpeg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageStyle: React.CSSProperties = {
    width: "15vh",
    height: "15vh",
    objectFit: "cover",
    borderRadius: "50%",
    zIndex: 3,
}

const summaryStyle: React.CSSProperties = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0% 25%",
    zIndex: 3,

}

const Summary = () => {
    return (
        <div style={summaryStyle}>
            <div>
                <h1>Summary of me 👋</h1>
                <p>Hey there! My name is Clarence Thomas, a 20 year old aspiring software engineer.</p>
            </div>
            <motion.div
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.9 }}>
            <Image style={imageStyle} src={summaryPhoto} alt="Photo of me." />
            </motion.div>
        </div>
    )
}

export default Summary;