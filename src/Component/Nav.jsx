import React from "react";
import './Nav.css';

const Nav = () => {
    return(
        <navbar>
            <div className="nav-left">

                <h2>Celebal Tech</h2>

            </div>
            <div className="nav-center">

               <h1>VOICE ASSITANT</h1> 

            </div>

            <div className="nav-right">

            <i className="icon fa-brands fa-facebook"></i>
            <i className="icon fa-brands fa-instagram"></i>
            <i className="icon fa-brands fa-twitter"></i>
            <i className="icon fa-brands fa-linkedin"></i>



            </div>

        </navbar>
    )

} 
export default Nav;