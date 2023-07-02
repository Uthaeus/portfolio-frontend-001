import { Link } from "react-router-dom";

import image from '../../assets/images/hammer-thumb.jpg';

function PortfolioUserItem({ user }) {
    let imageUrl = user.avatar?.url ? `http://localhost:4000${user.avatar.url}` : image;

    return (
        <div className="portfolio-user-item">
            <img src={imageUrl} alt={user.username} className="portfolio-user-item-image" width='30px' height='35px' />

            <Link to='/userpage' className="portfolio-user-item-username">{user.username}</Link>
        </div>
    );
}

export default PortfolioUserItem;