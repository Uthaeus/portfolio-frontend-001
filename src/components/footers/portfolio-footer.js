import { Link } from "react-router-dom";

function PortfolioFooter() {
    let year = new Date().getFullYear();

    return (
        <footer className="portfolio-footer">
            <p className="footer-copyright">&copy; <span className="copyright-name">homerj</span> Productions {year}</p>

            <div className="footer-links">
                <Link to="/portfolio" className="footer-link footer-portfolio">Back to Portfolio Items</Link>
                <Link to="/" className="footer-link footer-home">Back to Home</Link>
            </div>
        </footer>
    );
}

export default PortfolioFooter;