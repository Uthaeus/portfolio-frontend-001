import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function NewBlog() {

    return (
        <div className="blogs-newedit-container">
            <h1 className="blogs-newedit-title">New Blog</h1>
            <Link to="/blogs" className="blogs-newedit-link">Back to Blogs</Link>

            <BlogForm />
        </div>
    );
}

export default NewBlog;