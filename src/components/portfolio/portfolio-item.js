import { Link } from "react-router-dom";

function PortfolioItem({ portfolio }) {
    let image = `http://localhost:4000${portfolio.image.url}`;

    return (
        <div className="portfolio-item">
            <img src={image} alt={portfolio.title} />
            <div className="portfolio-item__title">{portfolio.title}</div>
            <div className="portfolio-item__description">{portfolio.description}</div>
            <div className="portfolio-item__link">
                <Link to={`/portfolio/${portfolio.id}`}>View Portfolio</Link>
            </div>
        </div>
    );
}

export default PortfolioItem;