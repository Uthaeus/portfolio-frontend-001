import { Link } from "react-router-dom";

function BlogItem({ blog, user, removeBlogHandler, categoryFilterHandler }) {

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
                    <Link to={`/blogs/${blog.id}`} className="widget-item open-widget">
                        <i className="bi bi-file-earmark-text-fill"></i>    
                    </Link> /
                    <Link to='/blogs' className="widget-item back-widget">blogs</Link> /
                    <span className="widget-item">{blog.id}</span> /
                    <Link onClick={() => categoryFilterHandler(blog.category.id)} className="widget-item category-name">{blog.category?.name}</Link> 
                     
                </div>

                <div className="widgets-right">
                    <p className="widget-item">created <span className="date-widget">{blog.created_at.split('T')[0]}</span></p>
                    {user?.role === 'site_admin' && (
                        <>
                            <Link to={`/blogs/${blog.id}/edit`} className="widget-item edit-widget">
                                <i className="bi bi-pencil-square"></i>    
                            </Link> /
                            <Link onClick={deleteHandler} className="widget-item delete-widget">
                                <i className="bi bi-trash-fill"></i>
                            </Link>
                        </>
                    )}
                </div>

            </div>

            <p className="blog-item-text">{truncate(blog.body)}</p>
        </div>
    );
}

export default BlogItem;