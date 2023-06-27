
function PortfolioCommentItem({ comment }) {

    return (
        <div className="comment-item">
            <p className="comment-text">{comment.content}</p>
            <p className="comment-details">posted by: <span className="comment-author">{comment.author}</span></p>
        </div>
    );
}

export default PortfolioCommentItem;