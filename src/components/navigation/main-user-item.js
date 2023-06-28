import { Link } from "react-router-dom";

function MainUserItem({ user }) {
  return (
    <Link to='/userpage' className="main-user-item">
      <div className="main-user-item-img" style={{
        backgroundImage: `url(http://localhost:4000${user.avatar?.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} />

      <p className="main-user-item-username">{user.username}</p>
    </Link>
  )
}

export default MainUserItem;