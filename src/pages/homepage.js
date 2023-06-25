import { useContext } from "react";

import { UserContext } from "../store/user-context";

function Homepage() {   
    const { user } = useContext(UserContext);
    
    return (
        <div className='homepage'>

            <div className='homepage__head'>
                {user && <h2 className="homepage-username">{user.username}</h2>}
                <h1 className="homepage-title">Welcome to my portfolio</h1>
                <p className="homepage-quote">“A problem is a chance for you to do your best.”</p>
                <p className="homepage-author">- Duke Ellington</p>

                <div className="homepage-links">
                    <button className="homepage-link about">About</button>
                    <button className="homepage-link contact">Contact</button>
                    <button className="homepage-link projects">Projects</button>
                </div>
            </div>

        </div>
    )
}

export default Homepage;