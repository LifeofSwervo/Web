import { useState } from "react"
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false) // Sets open menu to false by default
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        } // Home Icon Above
    ]
    return (
        <nav>
            
        </nav>
    )
}

export default Navbar