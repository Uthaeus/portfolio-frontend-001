import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


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
            <div className="blog-detail-left">
                <div className="blog-detail-body">
                    <h3 className="blog-detail-title">{blog?.title}</h3>

                    <div className="blog-detail-widgets">
                        <div className="detail-widgets-left">
                            <Link to="/blogs" className="blog-detail-back">blogs</Link>
                        </div>

                        <div className="detail-widgets-right">
                            
                        </div>
                    </div>

                    <p className="blog-detail-text">{blog?.body}</p>
                </div>
            </div>

            <div className="blog-detail-right">
                comments section
            </div>
        </div>
    );
}

export default BlogDetail;