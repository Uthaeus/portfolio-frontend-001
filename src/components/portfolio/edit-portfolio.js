import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import PortfolioForm from "./portfolio-form"

function EditPortfolio() {
    const [portfolio, setPortfolio] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:4000/portfolio_items/' + id)
        .then(response => response.json())
        .then(data => setPortfolio(data))
        .catch(error => console.log('edit page', error));
    }, [id]);

    console.log('edit page', portfolio);

    return (
        <div className="portfolio-newedit">
            <h1 className="portfolio-newedit-title">Edit Portfolio</h1>
            <Link to="/portfolio" className="portfolio-newedit-link">Back to Portfolio</Link>
            <hr />

            <PortfolioForm portfolio={portfolio} />
        </div>
    )
}

export default EditPortfolio