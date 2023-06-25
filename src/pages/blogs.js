import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../store/user-context";
import BlogItem from "../components/blogs/blog-item";
import BlogSidebar from "../components/blogs/blog-sidebar";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            })
            .catch(error => console.log('blogs error', error));
    }, []);

    return (
        <div className="blogs-container">
            <div className="blogs-header">
                <h2>Blogs</h2>

                <p>featured section</p>
            </div>

            {user && <Link to="/blogs/new" className="new-blog-link">New Blog</Link>}

            <div className="blogs-body">

                <div className="blogs-list-wrapper">
                    {blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
                </div>

                <BlogSidebar />
            </div>
        </div>
    );
}

export default Blogs;