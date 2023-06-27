import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import PortfolioCommentForm from "./portfolio-comment-form";
import PortfolioCommentItem from "./portfolio-comment-item";

function PortfolioDetail() {
    const [portfolio, setPortfolio] = useState(null);
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio_items/${id}`)
            .then(response => response.json())
            .then(data => {
                setPortfolio(data);
                setComments(data.portfolio_comments);
            })
            .catch(error => console.log('portfolio error', error));
    }, [id]);

    function addCommentHandler(comment) {
        setComments([comment, ...comments]);
    }

    if (!portfolio) {
        return <div>Loading...</div>
    }

    return (
        <div className="portfolio-detail">
            <div className="portfolio-detail-left">
                <div className="portfolio-detail-header">
                    <h2 className="portfolio-detail-title">{portfolio.title}</h2>

                    <div className="portfolio-detail-actions">
                        {user?.role === 'site_admin' && (
                            <>
                                <Link to={`/portfolio/${portfolio.id}/edit`} className="portfolio-detail-action edit-action">Edit</Link>
                                <Link to={`/portfolio/${portfolio.id}/delete`} className="portfolio-detail-action delete-action">Delete</Link>
                            </>
                        )}

                        <Link to='/portfolio' className="portfolio-detail-action back-action">Back</Link>
                    </div>
                </div>

                <div className="portfolio-detail-body">
                    <div className="portfolio-detail-body-left">
                        <div className="portfolio-detail-description-wrapper">
                            <p className="portfolio-detail-description">{portfolio.description}</p>
                        </div>

                        <p className="detail-technology-title">technologies used:</p>

                        <div className="detail-technology-wrapper">
                            {portfolio.technologies.map((technology, index) => <div key={index} className="detail-technology-item">{technology}</div>)}
                        </div>
                    </div>

                    <div className="portfolio-detail-body-right">
                        <img src={`http://localhost:4000/${portfolio.image.url}`} alt="portfolio thumbnail" className="portfolio-detail-image" width='100%' />
                    </div>
                </div>

                <div className="portfolio-detail-comments">
                    <PortfolioCommentForm user={user} portfolioId={portfolio.id} addCommentHandler={addCommentHandler} />

                    <p className="detail-comments-title">comments:</p>

                    <div className="detail-comments-wrapper">
                        {comments.map((comment) => <PortfolioCommentItem key={comment.id} comment={comment} />)}
                    </div>
                </div>
            </div>

            <div className="portfolio-detail-right">
                component
            </div>
        </div>
    );
}

export default PortfolioDetail;