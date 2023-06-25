import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
            });
    }, [id]);

    return (
        <div className="blog-detail">
            <div className="blog-detail-img">
                <img src={`http://localhost:4000${blog?.image?.url}`} alt={blog?.title} />
            </div>
            <div className="blog-detail-body">
                <h3 className="blog-detail-title">{blog?.title}</h3>
                <p className="blog-detail-text">{blog?.body}</p>
            </div>
        </div>
    );
}

export default BlogDetail;