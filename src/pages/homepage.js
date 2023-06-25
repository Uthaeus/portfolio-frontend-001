import { useContext, useState } from "react";

import { UserContext } from "../store/user-context";

function Homepage() {   
    const { user } = useContext(UserContext);
    const [showProjects, setShowProjects] = useState(false);

    function showProjectsHandler() {
        let element = document.querySelector('.homepage-projects-wrapper');

        if (showProjects) {
            element.classList.remove('show-projects');
        } else {
            element.classList.add('show-projects');
        }
        setShowProjects(!showProjects);
    }
    
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
                    <button onClick={showProjectsHandler} className="homepage-link projects">Projects</button>
                </div>

                <div className="homepage-projects-wrapper">
                    <div className="homepage-project-item">
                        <p className="project-item-name">first project name</p>
                    </div>

                    <div className="homepage-project-item">
                        <p className="project-item-name">second project name</p>
                    </div>

                    <div className="homepage-project-item">
                        <p className="project-item-name">third project name</p>
                    </div>

                    <div className="homepage-project-item">
                        <p className="project-item-name">fourth project name</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage;