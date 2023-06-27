import { Link } from "react-router-dom";

function PortfolioItem({ portfolio, user, removeItemHandler }) {
    let image = `http://localhost:4000${portfolio.image.url}`;

    function itemDeleteHandler() {
        fetch(`http://localhost:4000/portfolio_items/${portfolio.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
        })
        .then(response => {
            if (response.ok) {
                removeItemHandler(portfolio.id);
                return response.json();
            }
        })
        .catch(error => console.log('portfolio delete error', error));
    }

    return (
        <div className="portfolio-item">
            <div className="portfolio-item-image" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} />

            <div className="item-body">
                <div className="item__title">{portfolio.title}</div>
                <div className="item__links">
                    {user?.role === 'site_admin' && (
                        <>
                            <Link to={`/portfolio/${portfolio.id}/edit`} className="item__link edit-link">Edit</Link>
                            <p onClick={itemDeleteHandler} className="item__link delete-link">Delete</p>
                        </>
                    )}

                    <Link to={`/portfolio/${portfolio.id}`} className="item__link view-link">View Project</Link>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;