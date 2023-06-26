import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function PortfolioNavigation() {
    const { user, logoutUser } = useContext(UserContext);

    return (
        <div className="portfolio-navigation">
            <div className="portfolio-navigation-main">
                <div className="main-socials">
                    socials
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
                        <Link to="/" className="portfolio-link" onClick={logoutUser}>logout</Link>
                    ) : (
                        <>
                            <NavLink to="/sign-in" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>sign in</NavLink>
                            <NavLink to="/sign-up" className={({isActive}) => isActive ? "portfolio-link link-active" : "portfolio-link"}>sign up</NavLink>
                        </>
                    )}
                </div>
            </div>

            <div className="portfolio-navigation-foot">
                <Link className="nav-title">portfolio</Link>
                <Link className="nav-toggle">v</Link>
            </div>
        </div>
    );
}

export default PortfolioNavigation;