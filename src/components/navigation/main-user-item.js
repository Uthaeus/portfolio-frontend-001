import { Link } from "react-router-dom";

import image from '../../assets/images/hammer-thumb.jpg';

function MainUserItem({ user }) {
    let imageUrl = user.avatar?.url ? `http://localhost:4000${user.avatar.url}` : image;

  return (
    <Link to='/userpage' className="main-user-item">
      <div className="main-user-item-img" style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} />

      <p className="main-user-item-username">{user.username}</p>
    </Link>
  )
}

export default MainUserItem;