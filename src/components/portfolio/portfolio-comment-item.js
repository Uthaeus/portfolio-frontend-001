import defaultAvatar from '../../assets/images/hammer-thumb.jpg';

function PortfolioCommentItem({ comment, user, removeCommentHandler }) {

    return (
        <div className="portfolio-comment-item">
            <div className="comment-avatar-wrapper">
                <img src={defaultAvatar} alt="avatar" className="comment-avatar" width='92%' height='84px' />
            </div>

            <div className="comment-body">
                <p className="comment-text">{comment.content}</p>
                <p className="comment-details">posted by: <span className="comment-author">{comment.author}</span> <span className="comment-date">{comment.created_at.split('T')[0]}</span></p>

                {(user?.role === 'site_admin' || user?.id === comment.user_id) && (
                    <p className='comment-delete-btn' onClick={() => removeCommentHandler(comment.id)}>X</p>
                )}
            </div>
        </div>
    );
}

export default PortfolioCommentItem;