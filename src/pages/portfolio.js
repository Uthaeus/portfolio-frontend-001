import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "../../store/user-context"

function Portfolio() {
    const [portfolios, setPortfolios] = useState([]);
    const { user } = useContext(UserContext);

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1>Portfolio</h1>
                {user && <Link to="/portfolio/new">New Portfolio</Link>}
            </div>
            <hr />
        </div>
    )
}

export default Portfolio