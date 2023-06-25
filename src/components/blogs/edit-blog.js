import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            <h1>Edit Blog</h1>
            <hr />

            <BlogForm blog={blog} />
        </div>
    );
}

export default EditBlog;