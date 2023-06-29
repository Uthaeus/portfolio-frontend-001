import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";
import BlogUserItem from "./blog-user-item";

function BlogNavigation() {
    const { user, logoutUser } = useContext(UserContext);

    function logoutHandler() {
        fetch("http://localhost:4000/users/sign_out", {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(response => {
            if (response.ok) {
                logoutUser();
                localStorage.removeItem('token-001');
                return response.json();
            }
        })
        .catch(error => console.log('logout error', error));
    }

    return (
        <div className="blog-navigation">
            <div className="blog-navigation__head">
                {/* border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; */}

                {user ? <BlogUserItem user={user} /> : <p className="blog-head-welcome">Hi there</p>}
            </div>

            <div className="blog-navigation__links">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Contact</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Blogs</NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'blog-nav-link blog-link-active' : 'blog-nav-link'}>Portfolio</NavLink>
            </div>

            <div className="blog-navigation__auth">
                {user ? <Link onClick={logoutHandler} className="blog-nav-link">Sign Out</Link> : (
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