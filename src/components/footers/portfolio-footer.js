import { Link } from "react-router-dom";

function PortfolioFooter() {

    return (
        <footer className="portfolio-footer">
            <p className="footer-copyright">copyright here</p>

            <div className="footer-links">
                <Link to="/portfolio" className="footer-link footer-portfolio">Back to Portfolio Items</Link>
                <Link to="/" className="footer-link footer-home">Back to Home</Link>
            </div>
        </footer>
    );
}

export default PortfolioFooter;