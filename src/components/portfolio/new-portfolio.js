import { Link } from "react-router-dom";

import PortfolioForm from "./portfolio-form";

function NewPortfolio() {
  return (
    <div className="portfolio-newedit">
      <h1 className="portfolio-newedit-title">New Portfolio</h1>
      <Link to="/portfolio" className="portfolio-newedit-link">Back to Portfolio</Link>
        <hr />

        <PortfolioForm />
    </div>
  );
}

export default NewPortfolio;