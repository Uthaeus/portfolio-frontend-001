

function BlogItem({ blog }) {

    return (
        <div className="blog-item">
            <div className="blog-item-img">
                <img src={`http://localhost:4000${blog.image?.url}`} alt={blog.title} />
            </div>
            <div className="blog-item-body">
                <h3 className="blog-item-title">{blog.title}</h3>
                <p className="blog-item-text">{blog.body}</p>
            </div>
        </div>
    );
}

export default BlogItem;