import { Outlet, Link } from "react-router-dom";
import "./sass.scss"
const Layout = () => {
    function play() {
        var audio = document.getElementById("audio");
        audio.play();
    }
    return (
        <>
            <div className="navbar">
                <audio id="audio" src="https://www.fesliyanstudios.com/play-mp3/387"></audio>
                <Link to="/" onClick={play}>Home</Link>
                <Link to="/about" onClick={play}>About Us</Link>
                <Link to="/location" onClick={play}>Location</Link>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;
