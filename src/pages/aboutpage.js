import { useContext } from "react";

import { UserContext } from "../store/user-context";

function Aboutpage() {
    const { user } = useContext(UserContext);

    return (
        <div className="about-page-container">

            

            {user?.role === 'site_admin' && <p className="add-skill-btn">add new skill</p>}
        </div>
    )
}

export default Aboutpage;