import { Link } from "react-router-dom";

import BlogForm from "./blog-form";

function NewBlog() {

    return (
        <div className="blogs-container">
            <h1 className="blogs-title">New Blog</h1>
            <Link to="/blogs" className="blogs-link">Back to Blogs</Link>
            <hr />

            <BlogForm />
        </div>
    );
}

export default NewBlog;