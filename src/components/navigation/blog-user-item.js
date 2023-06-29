import { Link } from 'react-router-dom';

import image from '../../assets/images/hammer-thumb.jpg';

function BlogUserItem({ user }) {
    let imageUrl = user.avatar?.url ? `http://localhost:4000${user.avatar.url}` : image;
    
    return (
        <Link to='/userpage' className="blog-user-item">
            <div className="blog-user-item-img" style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '10%',
                height: '38px',
            }} />
        
            <p className="blog-user-item-username">{user.username}</p>
        </Link>
    );
}

export default BlogUserItem;