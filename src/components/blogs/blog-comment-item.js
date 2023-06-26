
import image from '../../assets/images/hammer-thumb.jpg';

function BlogCommentItem({ comment, user, commentRemoveHandler }) {

    function itemDeleteHandler() {
        fetch(`http://localhost:4000/blog_comments/${comment.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(response => {
            if (response.ok) {
                commentRemoveHandler(comment.id);
            }
        })
        .catch(error => console.log('delete comment error', error));
    }

    return (
        <div className="blog-comment-item">
            <div className="blog-comment-item-left">
                <img src={image} alt="hammer" className="blog-comment-item-image" width='86%' /> 
            </div>

            <div className="blog-comment-item-right">
                {user && (user.role === "site_admin" || user.id === comment.user_id) && (
                    <div onClick={itemDeleteHandler} className="blog-comment-item-delete">X</div>
                )}
                <p className="comment-item-content">{comment.content}</p>
                <p className="comment-item-author">{comment.author}</p>
            </div>
        </div>
    );
}

export default BlogCommentItem;