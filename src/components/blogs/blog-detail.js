import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
            });
    }, [id]);

    function deleteHandler() {
        fetch(`http://localhost:4000/blogs/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.ok) {
                    console.log("blog deleted");
                    navigate("/blogs");
                    return res.json();
                }
            })
            .catch((error) => console.log("delete blog error", error));
    }

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="blog-detail">
            <div className="blog-detail-left">
                <div className="blog-detail-body">
                    <div className="blog-detail-header">
                        <h3 className="blog-detail-title">{blog?.title}</h3>

                        <img src={`http://localhost:4000${blog?.image?.url}`} alt={blog?.title} className="blog-detail-image" width='30%' />
                    </div>

                    <div className="blog-detail-widgets">
                        <div className="detail-widgets-left">
                            <Link to="/blogs" className="blog-detail-back">blogs</Link> /
                            <p className="detail-widget-item">{blog.id}</p> /
                            <p className="detail-widget-item">{blog.title}</p> /
                            <Link to={`/blogs/${id}/edit`} className="blog-detail-category">{blog.category?.name}</Link>
                        </div>

                        <div className="detail-widgets-right">
                            <p className="detail-widget-item">created: <span className="blog-detail-date">{blog.created_at.split('T')[0]}</span></p>

                            {user?.role === "site_admin" && (
                                <>
                                    <Link to={`/blogs/${id}/edit`} className="blog-detail-edit">edit</Link>
                                    <Link onClick={deleteHandler} className="blog-detail-delete">delete</Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="blog-detail-text-wrapper">          
                        <p className="blog-detail-text">{blog?.body}</p>
                    </div>
                </div>
            </div>

            <div className="blog-detail-right">
                <div className="comments-wrapper">
                    comments
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;