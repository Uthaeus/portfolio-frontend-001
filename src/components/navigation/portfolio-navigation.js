import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";

import { UserContext } from "../../store/user-context";

function PortfolioNavigation() {
    const { user, logoutUser } = useContext(UserContext);
    const [navOpen, setNavOpen] = useState(false);

    function navToggleHandler() {
        let element = document.querySelector('.portfolio-layout');
        if (navOpen) {
            element.classList.remove('portfolio-slide');
        } else {
            element.classList.add('portfolio-slide');
        }
        setNavOpen(!navOpen);
    }

    function logoutHandler() {
        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            logoutUser();
            localStorage.removeItem('token-001');
        })
        .catch(error => console.log('logout error', error));
    }

    return (
        <div className="portfolio-navigation">
            <div className="portfolio-navigation-main">
                <div className="main-socials">
                    <a href="example.com" target="_blank" className="portfolio-nav-social-link">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="example.com" target="_blank" className="portfolio-nav-social-link">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="example.com" target="_blank" className="portfolio-nav-social-link">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="example.com" target="_blank" className="portfolio-nav-social-link">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="example.com" target="_blank" className="portfolio-nav-social-link">
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a href="example.com" target="_blank" className="portfolio-nav-social-link">
                        <i className="bi bi-github"></i>
                    </a>
                </div>

                <div className="main-links">
                    <NavLink to="/" end className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>home</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>about</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>contact</NavLink>
                    <NavLink to="/blogs" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>blogs</NavLink>
                    <NavLink to="/portfolio" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>portfolio</NavLink>
                </div>

                <div className="main-auth">
                    {user ? (
                        <Link className="portfolio-link" onClick={logoutHandler}>logout</Link>
                    ) : (
                        <>
                            <NavLink to="/sign-in" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>sign in</NavLink>
                            <NavLink to="/sign-up" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>sign up</NavLink>
                        </>
                    )}
                </div>
            </div>

            <div className="portfolio-navigation-foot">
                <p className="nav-title">homerj's portfolio</p>

                <p className="nav-toggle" onClick={navToggleHandler}>
                    {navOpen ? (
                        <i className="bi bi-caret-up-fill"></i>
                    ) : (
                        <i className="bi bi-caret-down-fill"></i>
                    )}
                </p>
            </div>
        </div>
    );
}

export default PortfolioNavigation;