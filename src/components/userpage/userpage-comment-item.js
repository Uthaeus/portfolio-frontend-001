
function UserpageCommentItem({ comment }) {

    return (
        <div className="userpage-comment-item">
            <p className="userpage-comment-item-content">{comment.content}</p>
            <p className="userpage-comment-item-created">{comment.created_at}</p>
        </div>
    );
}

export default UserpageCommentItem;