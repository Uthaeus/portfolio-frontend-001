
function UserpageCommentItem({ comment }) {

    return (
        <div className="userpage-sidebar-comment">
            <p className="userpage-sidebar-comment-content">{comment.content}</p>
            <p className="userpage-sidebar-comment-created">{comment.created_at}</p>
        </div>
    );
}

export default UserpageCommentItem;