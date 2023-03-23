import React from "react";
import nav from '../../widgets/nav1.png'
import './NavBar.css'

function NavBar(){
    return(
        <div className="NavBar">
            <h1>Welcome Bayer!</h1>
            <img id="nav-img" src={nav}/>
        </div>

    );
}
export default NavBar