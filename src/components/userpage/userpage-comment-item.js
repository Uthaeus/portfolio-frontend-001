
function UserpageCommentItem({ comment }) {

    return (
        <div className="userpage-comment-item">
            <p className="userpage-comment-item-content">{comment.content}</p>
            <p className="userpage-comment-item-created">posted: <span className="created-at">{comment.created_at.split('T')[0]}</span></p>
        </div>
    );
}

export default UserpageCommentItem;