import { NavLink } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {}

    return (
        <div className="main-navigation">
            <div className="main-navigation-head">
                head
            </div>

            <div className="main-navigation-links">
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink> 
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
            </div>

            <div className="main-navigatioin-auth">
                <NavLink to='/sign-in' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                <NavLink to='/sign-up' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>

                <NavLink onClick={logoutHandler} className='nav-link'>Sign Out</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;