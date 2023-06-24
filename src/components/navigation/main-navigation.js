import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div>
                head
            </div>

            <div>
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink> 
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
            </div>

            <div>
                auth
            </div>
        </div>
    );
}

export default MainNavigation;