import { Link } from "react-router-dom";

function PortfolioFooter() {
    let year = new Date().getFullYear();
    // q: what is the unicode for the copywrite symbol?
    // a: &copy;

    return (
        <footer className="portfolio-footer">
            <p className="footer-copyright">{`&copy; ${year}`}</p>

            <div className="footer-links">
                <Link to="/portfolio" className="footer-link footer-portfolio">Back to Portfolio Items</Link>
                <Link to="/" className="footer-link footer-home">Back to Home</Link>
            </div>
        </footer>
    );
}

export default PortfolioFooter;