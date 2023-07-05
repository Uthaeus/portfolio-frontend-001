import { useState, useEffect } from "react";

import BlogCategoryForm from "./blog-category-form";
import BlogCategoryItem from "./blog-category-item";

function BlogSidebar({ user, categoryFilterHandler, currentCategory }) {
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

    function categoryDeleteHandler(categoryId) {
        fetch(`http://localhost:4000/categories/${categoryId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(res => res.json())
        .then(data => console.log('successfully deleted category', data))
        .catch(error => console.log('category delete error', error));

        const newCategories = categories.filter(category => category.id !== categoryId);
        setCategories(newCategories);
    }

    return (
        <div className="blog-sidebar">
            {user?.role === 'site_admin' && <p onClick={() => setShowCategoryForm(!showCategoryForm)} className="new-category-link">{showCategoryForm ? 'close' : 'create category'}</p>}

            {showCategoryForm && <BlogCategoryForm addCategoryHandler={addCategoryHandler} />}

            <h2 className="blog-sidebar-title">categories</h2>
            <p onClick={() => categoryFilterHandler("all")} className="reset-link">reset</p>

            <ul className="blog-sidebar-categories">

                {categories.map((category) => <BlogCategoryItem key={category.id} category={category} user={user} categoryFilterHandler={categoryFilterHandler} categoryDeleteHandler={categoryDeleteHandler} currentCategory={currentCategory} />)}
            </ul>

            <div className="blog-sidebar-divider" />

            <div className="blog-sidebar-quote">
                <p className="sidebar-quote">“We all make mistakes, and it is better to make them before we begin.”</p>
                <p className="sidebar-author">— Nikola Tesla</p>
            </div>

            <div className="blog-sidebar-divider" />

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