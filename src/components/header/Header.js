import Navbar from "./Navbar";
import { ThemeSelector } from './ThemeSelector'

import '../../styles/scss/header.scss'

function Header({ isAuth }) {
    return (
        <header className="header_container">
            <h1 className="project_title">Space</h1>
            {isAuth ? <Navbar /> : <ThemeSelector />}
        </header>
    );
}

export default Header;