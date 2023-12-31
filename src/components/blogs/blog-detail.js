import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import BlogCommentForm from "./blog-comment-form";
import BlogCommentItem from "./blog-comment-item";

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBlog(data);
                setComments(data.blog_comments);
            });
    }, [id]);

    function deleteHandler() {
        fetch(`http://localhost:4000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    console.log("blog deleted");
                    navigate("/blogs");
                }
            })
            .catch((error) => console.log("delete blog error", error));
    }

    function addCommentHandler(comment) {
        setComments([comment, ...comments]);
    }

    function commentRemoveHandler(id) {
        let updatedComments = comments.filter((comment) => comment.id !== id);
        setComments(updatedComments);
    }

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="blog-detail">
            <div className="blog-detail-left">
                <div className="blog-detail-body">
                    <div className="blog-detail-header">
                        <h3 className="blog-detail-title">{blog?.title}</h3>

                        <img src={`http://localhost:4000${blog?.image?.url}`} alt={blog?.title} className="blog-detail-image" width='30%' maxheight='125px' />
                    </div>

                    <div className="blog-detail-widgets">
                        <div className="detail-widgets-left">
                            <Link to="/blogs" className="blog-detail-back">{'<< blogs'}</Link> /
                            <p className="detail-widget-item">{blog.id}</p> /
                            <p className="detail-widget-item">{blog.title}</p> /
                            <p className="detail-widget-item">created: <span className="blog-detail-date">{blog.created_at.split('T')[0]}</span></p>
                        </div>

                        <div className="detail-widgets-right">
                            

                            {user?.role === "site_admin" && (
                                <>
                                    <Link to={`/blogs/${id}/edit`} className="blog-detail-edit">
                                        <i className="bi bi-pen"></i>
                                    </Link>
                                    <Link onClick={deleteHandler} className="blog-detail-delete">
                                        <i className="bi bi-trash"></i>
                                    </Link>
                                </>
                            )}
                            <p className="blog-detail-category">{blog.category?.name}</p>
                        </div>
                    </div>

                    <div className="blog-detail-text-wrapper">          
                        <p className="blog-detail-text">{blog?.body}</p>
                    </div>
                </div>
            </div>

            <div className="blog-detail-right">
                <div className="comments-wrapper">
                    <BlogCommentForm user={user} blogId={id} addCommentHandler={addCommentHandler} />
                    
                    <p className="comments-title">comments:</p>

                    {comments?.map((comment) => <BlogCommentItem key={comment.id} comment={comment} user={user} commentRemoveHandler={commentRemoveHandler} />)}
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;