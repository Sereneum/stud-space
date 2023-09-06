import { CaretLeft } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import FaqContent from "./FaqContent";

const FaqLogged = () => {
    return ( 
        <div className="block">

            <NavLink to={'/menu'} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Помощь и возможности</h2>
            </NavLink>

            <FaqContent />

        </div>
     );
}
 
export default FaqLogged;