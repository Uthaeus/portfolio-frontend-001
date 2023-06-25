import { Link } from "react-router-dom";

function BlogItem({ blog, user, removeBlogHandler }) {

    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    function deleteHandler() {
        fetch(`http://localhost:4000/blogs/${blog.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token-001")}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    removeBlogHandler(blog.id);
                }
            })
            .catch((error) => console.log("delete blog error", error));
    }

    return (
        <div className="blog-item">
            <p className="blog-item-title">{blog.title}</p>

            <div className="blog-item-widgets">
                <div className="widgets-left">
                    <Link to={`/blogs/${blog.id}`} className="widget-item">icon</Link> /
                    <span className="widget-item">{blog.id}</span> /
                    <span className="widget-item">created {blog.created_at}</span> /
                </div>

                <div className="widgets-right">
                    {user?.role === 'site_admin' && (
                        <>
                            <Link to={`/blogs/${blog.id}/edit`} className="widget-item">edit</Link> /
                            <Link onClick={deleteHandler} className="widget-item">delete</Link>
                        </>
                    )}
                </div>

            </div>

            <p className="blog-item-text">{truncate(blog.body)}</p>
        </div>
    );
}

export default BlogItem;