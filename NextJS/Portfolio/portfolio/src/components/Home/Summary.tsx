import summaryPhoto from '../../Assets/SummaryPhoto.jpeg';
import Image from 'next/image';

const Summary = () => {
    const summaryBorder: React.CSSProperties = {
        border: "3px solid black",
        borderRadius: "50%",
    }

    const imageStyle: React.CSSProperties = {
        width: "15vh",
        height: "15vh",
        objectFit: "cover",
        borderRadius: "50%",
    }

    const summaryStyle: React.CSSProperties = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0% 25%",
        backgroundColor: "#0C1618",
    }


    return (
        <div style={summaryStyle}>
            <div>
                <h1>Summary of me 👋</h1>
                <p>Hey there! My name is Clarence Thomas, a 20 year old aspiring software engineer.</p>
            </div>
            <Image style={imageStyle} src={summaryPhoto} alt="Photo of me." />
        </div>
    )
}

export default Summary;