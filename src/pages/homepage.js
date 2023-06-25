import { useContext } from "react";

import { UserContext } from "../store/user-context";

function Homepage() {   
    const { user } = useContext(UserContext);
    
    return (
        <div>
            <h1>Homepage</h1>
            <hr />

            {user && <h2>{user.username}</h2>}
        </div>
    )
}

export default Homepage;