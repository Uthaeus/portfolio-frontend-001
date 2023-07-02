import { useNavigate } from "react-router";

function BlogFooter() {
    const navigate = useNavigate();
    let year = new Date().getFullYear();

    return (
        <div className="blog-footer">
            <button onClick={() => navigate('/blogs')} className="blog-footer-btn blogs-btn">Back to Blogs</button>
            <button onClick={() => navigate('/')} className="blog-footer-btn home-btn">Back to Home</button>

            <p className="blog-footer-copyright">&copy; <span className="blog-copyright-name">homerj</span> Productions {year}</p>
        </div>
    );
}

export default BlogFooter;