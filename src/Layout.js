import { Outlet, Link } from "react-router-dom";
import "./sass.scss"
const Layout = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/location">Location</Link>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;