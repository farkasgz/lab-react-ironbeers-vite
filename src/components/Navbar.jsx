import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <NavLink to='/'><img src="src/assets/home-icon.png" alt="home" style={{backgroundColor: "black"}} /></NavLink>
    )
}

export default Navbar;
