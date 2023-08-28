import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./NavBar.css";
import mobilelogo from "../logo.svg";

export default function NavBar() {

    const menuOverlayRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const recipient = "admin@lukemoore.au";
    const subject = "Hello!";
    const body = "Any feedback or suggestions you may have are greatly appreciated.";
  
    const openEmailCompose = () => {
      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
    };

    const exitMenu = () => {
        setIsMenuOpen(false);
        menuOverlayRef.current.style.left = "-100%";
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        const menuOverlay = menuOverlayRef.current;
        menuOverlay.style.left = menuOverlay.style.left === "0%" ? "-100%" : "0%";
    };

    return(
        <div className='nav'>
        <nav className='nav-container'>
            <div>
                <Link to='/' className='home-link'>
                    <img className='logo' src={mobilelogo} alt='logo' />
                </Link>
            </div>

            <div 
                id="menuOverlay" 
                className={isMenuOpen ? "overlay open" : "overlay"} 
                ref={menuOverlayRef}>
                <div>
                    <Link to='/' className='home-link'>
                        <img className='mobilelogo' src={mobilelogo} alt='logo' onClick={exitMenu} />
                    </Link>
                </div>
                <button className="exit-button" id="exitButton" onClick={exitMenu}>✕</button>

                <div className="menu-item">
                </div>

                <div className="menu-item">
                </div>

                <div className="menu-item">
                    <button onClick={openEmailCompose}>Contact</button>
                </div>

            </div>
            <button className="mobile-nav" id="navToggle" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </nav>
        <hr className='navbar-bottom-line'/>
    </div>

    );
};