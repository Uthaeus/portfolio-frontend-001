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

    function removeItemHandler(id) {
        setPortfolios(portfolios.filter(portfolio => portfolio.id !== id));
    }

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-title">Portfolio</h1>
                <div className="portfolio-subtitle-wrapper">
                    <p className="header-quote">I have not failed. I've just found 10,000 ways that won't work.</p> 
                    <p className="header-author">-Thomas A. Edison</p>
                </div>

                {user?.role === 'site_admin' && <Link to="/portfolio/new" className="new-portfolio-link">New Portfolio</Link>}
            </div>

            <div className="portfolio-items">
                {portfolios.map(portfolio => <PortfolioItem key={portfolio.id} portfolio={portfolio} user={user} removeItemHandler={removeItemHandler} />)}
            </div>
        </div>
    )
}

export default Portfolio