

function BlogCommentItem({ comment }) {

    return (
        <div className="blog-comment-item">
            <div className="blog-comment-item-left">
                image 
            </div>

            <div className="blog-comment-item-right">
                <p>{comment.content}</p>
                <p>{comment.author}</p>
            </div>
        </div>
    );
}

export default BlogCommentItem;