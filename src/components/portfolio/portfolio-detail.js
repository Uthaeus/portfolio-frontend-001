import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function PortfolioDetail() {
    const [portfolio, setPortfolio] = useState(null);
    const { id } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio_items/${id}`)
            .then(response => response.json())
            .then(data => {
                setPortfolio(data);
            })
            .catch(error => console.log('portfolio error', error));
    }, [id]);

    if (!portfolio) {
        return <div>Loading...</div>
    }

    return (
        <div className="portfolio-detail">
            <div className="portfolio-detail-left">
                <h2 className="portfolio-detail-title">{portfolio.title}</h2>

                <div className="portfolio-detail-body">
                    <div className="portfolio-detail-body-left">

                    </div>

                    <div className="portfolio-detail-body-right">

                    </div>
                </div>
                
                <div>
                    {portfolio.technologies.map((technology, index) => <div key={index} className="tech-item">{technology}</div>)}
                </div>

                <div className="portfolio-detail-actions">
                    <Link to='/portfolio' className="portfolio-detail-action">Back</Link>

                    {user?.role === 'site_admin' && (
                        <>
                            <Link to={`/portfolio/${portfolio.id}/edit`} className="portfolio-detail-action">Edit</Link>
                            <Link to={`/portfolio/${portfolio.id}/delete`} className="portfolio-detail-action">Delete</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="portfolio-detail-right">
                component
            </div>
        </div>
    );
}

export default PortfolioDetail;