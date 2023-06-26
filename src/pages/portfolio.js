import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "../store/user-context";
import PortfolioItem from "../components/portfolio/portfolio-item";

function Portfolio() {
    const [portfolios, setPortfolios] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/portfolio_items')
            .then(response => response.json())
            .then(data => {
                setPortfolios(data);
            })
            .catch(error => console.log('portfolio error', error));
    }, []);

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-title">Portfolio</h1>
                <p className="portfolio-subtitle">quote here maybe</p>
                {user && <Link to="/portfolio/new" className="new-portfolio-link">New Portfolio</Link>}
            </div>

            <div className="portfolio-items">
                {portfolios.map(portfolio => <PortfolioItem key={portfolio.id} portfolio={portfolio} />)}
            </div>
        </div>
    )
}

export default Portfolio