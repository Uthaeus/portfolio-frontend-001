

function BlogCategoryItem({ category, user, categoryFilterHandler, categoryDeleteHandler, currentCategory }) {

    let itemAction = category.blogs?.length < 1 ? <p onClick={() => categoryDeleteHandler(category.id)} className="category-delete"><i className="bi bi-trash"></i></p> : <p className="category-count">{category.blogs?.length}</p>;

  return (
    <li className="category-wrapper" key={category.id}>
        <p onClick={() => categoryFilterHandler(category.id)} className={currentCategory === category.id ? "category-name category-active" : 'category-name'}>
            {category.name}
        </p>

        {user?.role === 'site_admin' && itemAction}
    </li>
  )
}

export default BlogCategoryItem;