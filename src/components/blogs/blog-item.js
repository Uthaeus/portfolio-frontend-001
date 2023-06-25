import { Link } from "react-router-dom";

function BlogItem({ blog }) {

    function truncate(str) {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    return (
        <div className="blog-item">
            <Link to={`/blogs/${blog.id}`} className="blog-item-title">{blog.title}</Link>
            <p className="blog-item-text">{truncate(blog.body)}</p>
        </div>
    );
}

export default BlogItem;