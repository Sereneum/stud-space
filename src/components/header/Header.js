import Navbar from "./Navbar";

function Header({ isAuth }) {
    return (
        <header className="header_container">
            <h1 className="project_title">Space</h1>
            {isAuth && <Navbar />}
        </header>
    );
}

export default Header;