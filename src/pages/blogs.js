import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import BlogItem from "../components/blogs/blog-item";
import BlogSidebar from "../components/blogs/blog-sidebar";
import BlogFeaturedItem from "../components/blogs/blog-featured-item";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [displayedBlogs, setDisplayedBlogs] = useState([]);
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
        } else {
            let filteredBlogs = blogs.filter((blog) => blog.category_id === id);
            setDisplayedBlogs(filteredBlogs);
        }
    }

    const removeBlogHandler = (id) => {
        let updatedBlogs = blogs.filter((blog) => blog.id !== id);

        setBlogs(updatedBlogs);
    };

    return (
        <div className="blogs-container">
            <div className="blogs-header">
                <div className="blogs-header-main">
                    <h2 className="blogs-header-title">My Blogs</h2>
                    <p className="blogs-header-subtitle">Learn from my mistakes</p>
                </div>

                <div className="blogs-header-featured">
                    <p className="featured-title">featured blog:</p>
                    {featuredBlog && <BlogFeaturedItem blog={featuredBlog} />}
                </div>
            </div>

            {user && <Link to="/blogs/new" className="new-blog-link">New Blog</Link>}

            <div className="blogs-body">

                <div className="blogs-list-wrapper">
                    {displayedBlogs.map((blog) => <BlogItem key={blog.id} blog={blog} user={user} removeBlogHandler={removeBlogHandler} categoryFilterHandler={categoryFilterHandler} />)}
                </div>

                <BlogSidebar user={user} categoryFilterHandler={categoryFilterHandler} />
            </div>
        </div>
    );
}

export default Blogs;