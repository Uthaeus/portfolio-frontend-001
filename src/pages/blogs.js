import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import BlogItem from "../components/blogs/blog-item";
import BlogSidebar from "../components/blogs/blog-sidebar";
import BlogFeaturedItem from "../components/blogs/blog-featured-item";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [displayedBlogs, setDisplayedBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("all");
    const [featuredBlog, setFeaturedBlog] = useState(null); 
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then((res) => res.json())
            .then((data) => {
                let randomIndex = Math.floor(Math.random() * data.length);
                setFeaturedBlog(data[randomIndex]);
                setBlogs(data);
                setDisplayedBlogs(data);
            })
            .catch(error => console.log('blogs error', error));
    }, []);

    function categoryFilterHandler(id) {
        if (id === "all") {
            setDisplayedBlogs(blogs);
            setCurrentCategory("all");
        } else {
            let filteredBlogs = blogs.filter((blog) => blog.category_id === id);
            setDisplayedBlogs(filteredBlogs);
            setCurrentCategory(id);
        }
    }

    const removeBlogHandler = (id) => {
        let updatedBlogs = blogs.filter((blog) => blog.id !== id);

        setBlogs(updatedBlogs);
        setDisplayedBlogs(updatedBlogs);
    };

    return (
        <div className="blogs-container">
            <div className="blogs-header">
                <div className="blogs-header-main">
                    <p className="blogs-header-title">My Blogs</p>
                    <p className="blogs-header-subtitle">Trying to learn from my mistakes</p>
                </div>
                
                {featuredBlog && <BlogFeaturedItem blog={featuredBlog} />}
            </div>

            {user?.role === 'site_admin' && <Link to="/blogs/new" className="new-blog-link">New Blog</Link>}

            <div className="blogs-body">

                <div className="blogs-list-wrapper">
                    {displayedBlogs.map((blog) => <BlogItem key={blog.id} blog={blog} user={user} removeBlogHandler={removeBlogHandler} categoryFilterHandler={categoryFilterHandler} />)}
                </div>

                <BlogSidebar user={user} categoryFilterHandler={categoryFilterHandler} currentCategory={currentCategory} />
            </div>
        </div>
    );
}

export default Blogs;