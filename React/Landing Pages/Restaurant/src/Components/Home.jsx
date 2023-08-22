import Navbar from "./Navbar"
import BannerBackground from "../assets/home-banner-background.png"

const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <div className="homeBannerContainer">
                <img src={BannerBackground} alt="Background Image"/>
            </div>
            <div className="homeTextSection">
                <h1 className="primary-heading">
                    Amazing food, Delivered Fast and Fresh
                </h1>
                <p className="primaryText">
                Healthy switcher chefs do all the prep work, like peeding, chopping
                & marinating, so you can cook a fresh food.
                </p>
                <button className="secondaryButton">
                    Order Now
                </button> // Add Arrow Right Component above
            </div>
        </div>
    )
}

export default Navbar