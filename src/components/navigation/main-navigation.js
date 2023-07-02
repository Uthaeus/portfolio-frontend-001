import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import MainUserItem from "./main-user-item";

function MainNavigation() {
    const { user, logoutUser } = useContext(UserContext);

    function logoutHandler() {

        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(response => {
            if (response.ok) {
                localStorage.removeItem('token-001');
                logoutUser();
                return response.json();
            }
        })
        .catch(error => console.log('sign out error', error));
    }

    return (
        <div className="main-navigation">
            <div className="main-navigation-head">

                {user ? <MainUserItem user={user} /> : <Link to='/sign-up' className="head-welcome">Hello</Link>}
            </div>

            <div className="main-navigation-links">
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink> 
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>
                <NavLink to="/blogs" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Blogs</NavLink>
                <NavLink to="/portfolio" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Portfolio</NavLink>
            </div>

            <div className="main-navigation-auth">
                {user ? (
                    <Link onClick={logoutHandler} className='nav-link'>Sign Out</Link>
                ) : (
                    <>
                        <NavLink to='/sign-in' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                        <NavLink to='/sign-up' className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>
                    </>
                )}
                

                
            </div>
        </div>
    );
}

export default MainNavigation;