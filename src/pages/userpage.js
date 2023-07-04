import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import image from "../assets/images/hammer-thumb.jpg";

import { UserContext } from "../store/user-context";
import ContentItem from "../components/userpage/content-item";
import UserpageCommentItem from "../components/userpage/userpage-comment-item";

function Userpage() {
    const { user, logoutUser } = useContext(UserContext);
    const [showBlogComments, setShowBlogComments] = useState(false);
    const [showPortfolioComments, setShowPortfolioComments] = useState(false);
    const navigate = useNavigate();
    

    function deleteUserHandler() {
        fetch(`http://localhost:4000/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(response => {
            if (response.ok) {
                logoutUser();
                localStorage.removeItem('token-001');
                navigate('/');
            }
            throw response;
        })
        .catch(error => console.log('Error deleting user: ', error));
    }

    function toggleBlogComments() {
        setShowBlogComments(!showBlogComments);
    }

    function togglePortfolioComments() {
        setShowPortfolioComments(!showPortfolioComments);
    }

    if (!user) return <h3>Loading...</h3>;

    let userAvatar = user.avatar?.url ? `http://localhost:4000${user.avatar.url}` : image;
    
    return (
        <div className="userpage">
            <div className="userpage-header">
                <h1 className="userpage-title">{user.username}</h1>
            </div>

            <div className="userpage-body">
                <div className="userpage-content">
                    <ContentItem title="Username" data={user.username} />

                    <ContentItem title="ID" data={user.id} />
                    <ContentItem title="Email" data={user.email} />
                    <ContentItem title="Created" data={user.created_at} />
                    <ContentItem title="Updated" data={user.updated_at} />

                    <div className="content-item">
                        <p className="content-text">Blog Comments: </p>
                        <p className="content-data">{user.blog_comments?.length}</p>

                        {user.blog_comments?.length > 0 && (
                            <p onClick={toggleBlogComments} className="content-comments-link">see comments</p>
                        )}
                    </div>

                    <div className="content-item">
                        <p className="content-text">Portfolio Comments: </p>
                        <p className="content-data">{user.portfolio_comments?.length}</p>

                        {user.portfolio_comments?.length > 0 && (
                            <p onClick={togglePortfolioComments} className="content-comments-link">see comments</p>
                        )}
                    </div>

                    <div className="content-item">
                        <p className="content-text">Likes: </p>
                        <p className="content-data">{0}</p>
                    </div>

                    <div className="content-item">
                        <p className="content-text">Avatar: </p>
                        <img className="content-avatar" src={userAvatar} alt="User Avatar" width='175px' />
                    </div>
                </div>

                <div className="userpage-sidebar">
                    <div className="userpage-sidebar-blog-comments">
                        <h2 className="userpage-sidebar-title">Blog Comments</h2>
                        <div className="userpage-sidebar-comments">
                            {user.blog_comments.map(comment => (
                                <UserpageCommentItem key={comment.id} comment={comment} />
                            ))}
                        </div>
                    </div>

                    <div className="userpage-sidebar-portfolio-comments">
                        <h2 className="userpage-sidebar-title">Portfolio Comments</h2>
                        <div className="userpage-sidebar-comments">
                            {user.portfolio_comments.map(comment => (
                                <UserpageCommentItem key={comment.id} comment={comment} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="userpage-actions">
                <button onClick={deleteUserHandler} className="userpage-link userpage-delete">Delete User</button>
                <button onClick={() => navigate('/edit-user')} className="userpage-link userpage-edit">Edit User</button>
                <button onClick={() => navigate('/')} className="userpage-link userpage-home">Home</button>
            </div>
        </div>
    );
}

export default Userpage;