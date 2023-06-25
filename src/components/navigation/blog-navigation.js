import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function BlogNavigation() {
    const { user } = useContext(UserContext);

    return (
        <div className="blog-navigation">
            <div className="blog-navigation__head">

            </div>

            <div className="blog-navigation__links">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Contact</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Blogs</NavLink>
            </div>

            <div className="blog-navigation__auth">
                {user ? <NavLink to="/sign-out" className="blog-nav-link">Sign Out</NavLink> : (
                    <>
                        <NavLink to="/sign-in" className="blog-nav-link">Sign In</NavLink>
                        <NavLink to="/sign-up" className="blog-nav-link">Sign Up</NavLink>
                    </>        
                )}
            </div>
        </div>
    );
}

export default BlogNavigation;