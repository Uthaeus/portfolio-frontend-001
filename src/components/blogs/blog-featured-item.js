import { Link } from "react-router-dom";

function BlogFeaturedItem({ blog }) {
    function truncate(str) {
        return str.length > 40 ? str.substring(0, 37) + "..." : str + "...";
    }

  return (
    <Link to={`/blogs/${blog.id}`} className="blog-featured-item">
        <h3 className="featured-item-title">{blog.title}</h3>
        <p className="featured-item-body">{truncate(blog.body)}</p>
    </Link>
  )
}

export default BlogFeaturedItem;