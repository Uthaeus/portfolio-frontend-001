import { Link } from "react-router-dom";

function Userpage() {
    return (
        <div className="userpage">
            <h1 className="userpage-title">Userpage</h1>
            <Link to="/edit-user" className="userpage-link">Edit User</Link>
        </div>
    );
}

export default Userpage;