import './Navigation.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from './logo.png';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (       
            <nav>
              <img src={logo} width="70" height="50" className="px-2"alt="logo"/>
              <h4>21st Century F1</h4>
              <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={menuOpen ? "open" : ""}>
                <li>
                  <NavLink to="/" className={"nav-link text-white nav-effect"}> Home</NavLink>
                </li>
                <li>
                  <NavLink to="/standings" className={"nav-link text-white nav-effect"}>Standings</NavLink>
                </li>
                <li>
                  <NavLink to="/results" className={"nav-link text-white nav-effect"}>GP Results</NavLink>
                </li>
              </ul>
            </nav>
          );
};
 
export default Navigation;