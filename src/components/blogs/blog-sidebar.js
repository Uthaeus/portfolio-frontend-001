import { useState, useEffect } from "react";

import BlogCategoryForm from "./blog-category-form";

function BlogSidebar({ user, categoryFilterHandler }) {
    const [categories, setCategories] = useState([]);
    const [showCategoryForm, setShowCategoryForm] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch(error => console.log('categories error', error));
    }, []);

    function addCategoryHandler(category) {
        setCategories([...categories, category]);
    }

    return (
        <div className="blog-sidebar">
            {user?.role === 'site_admin' && <p onClick={() => setShowCategoryForm(!showCategoryForm)} className="new-category-link">{showCategoryForm ? 'close' : 'create category'}</p>}

            {showCategoryForm && <BlogCategoryForm addCategoryHandler={addCategoryHandler} />}

            <h2 className="blog-sidebar-title">categories</h2>

            <ul className="blog-sidebar-categories">
                <li className="category-wrapper">
                    <p onClick={() => categoryFilterHandler("all")} className="category-name">all</p>
                </li>

                {categories.map((category) => (
                    <li className="category-wrapper" key={category.id}>
                        <p onClick={() => categoryFilterHandler(category.id)} className="category-name">{category.name}</p>
                        {user?.role === 'site_admin' && <p className="category-delete"><i className="bi bi-trash"></i></p>}
                    </li>
                ))}
            </ul>

            <h2 className="blog-sidebar-title">socials</h2>

            <div className="blog-sidebar-socials">
                <a href="example.com" target="_blank" className="blog-sidebar-socials-link">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="example.com" target="_blank" className="blog-sidebar-socials-link">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="example.com" target="_blank" className="blog-sidebar-socials-link">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="example.com" target="_blank" className="blog-sidebar-socials-link">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="example.com" target="_blank" className="blog-sidebar-socials-link">
                    <i className="bi bi-youtube"></i>
                </a>
                <a href="example.com" target="_blank" className="blog-sidebar-socials-link">
                    <i className="bi bi-github"></i>
                </a>
            </div>
        </div>
    );
}

export default BlogSidebar;