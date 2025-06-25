import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Sir Herlerdhyre</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Book</Link>
            </div>


        </nav>
     );
}
 
export default Navbar;