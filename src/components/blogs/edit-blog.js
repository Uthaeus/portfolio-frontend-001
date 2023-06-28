import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import BlogForm from "./blog-form";

function EditBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
            })
            .catch(error => console.log('edit blog error', error));
    }, [id]);

    return (
        <div className="blogs-newedit-container">
            <h1 className="blogs-newedit-title">Edit Blog</h1>
            <Link to="/blogs" className="blogs-newedit-link">Back to Blogs</Link>
            <hr />

            <BlogForm blog={blog} />
        </div>
    );
}

export default EditBlog;