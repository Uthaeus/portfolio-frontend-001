import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/userContext";
import ContentItem from "../components/userpage/content-item";

function Userpage() {
    const { user, logoutUser } = useContext(UserContext);
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
    
    return (
        <div className="userpage">
            <div className="userpage-header">
                <h1 className="userpage-title">{user.username}</h1>
                
            </div>

            <div className="userpage-content">
                <ContentItem title="Username" data={user.username} />

                <hr />

                <div className="content-item">
                    <p className="content-text">Username: </p>
                    <p className="content-data">{user.username}</p>
                </div>

                <p className="userpage-text">Email: {user.email}</p>
                
                <p className="userpage-text">Created: {user.created_at}</p>
                <p className="userpage-text">Updated: {user.updated_at}</p>

                <p className="userpage-text">ID: {user.id}</p>
                <p className="userpage-text">comments</p>
                <p className="userpage-text">likes</p>

            </div>

            <div className="userpage-actions">
                <button onClick={deleteUserHandler} className="userpage-link userpage-delete">Delete User</button>
                <button onClick={navigate('/edit-user')} className="userpage-link userpage-edit">Edit User</button>
                <button onClick={navigate('/')} className="userpage-link userpage-home">Home</button>
            </div>
        </div>
    );
}

export default Userpage;