import {EnvelopeSimple, CalendarBlank, StarFour, ClockCountdown, List,} from "@phosphor-icons/react";

import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const Navbar = () => {


    const customLink = (link, icon, isDes=false) => <NavLink
        to={link}
        className={`nav_elem_container nav_bar_mobile_container ${isDes && 'nav_tablet'}`}
    >
        {icon}
    </NavLink>


    return (
        <nav className="nav_bar_container">

            <div className="nav_bar">
                <NavLink to="https://stud.mgri.ru/WebApp/#/mail/all" target="_blank" rel="noreferrer"
                         className="nav_elem_container ">
                    <EnvelopeSimple weight="bold" className="icon_nav"/>
                </NavLink>
            </div>

            <div className="nav_bar nav_bar_mobile">
                {customLink("/", <CalendarBlank weight="bold" className="icon_nav icon_nav_mobile"/>)}
                {customLink("/courses", <StarFour weight="bold" className="icon_nav icon_nav_mobile"/>, true)}
                {customLink("/deadlines", <ClockCountdown weight="bold" className="icon_nav icon_nav_mobile"/>, true)}
                {customLink("/menu", <List weight="bold" className="icon_nav icon_nav_mobile"/>)}
            </div>
        </nav>
    );
}

export default Navbar;