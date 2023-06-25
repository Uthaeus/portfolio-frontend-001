import { Outlet } from "react-router";

import BlogNavigation from "../navigation/blog-navigation";

function BlogLayout() {

    return (
        <div className="blog-layout">
            <BlogNavigation />
            <Outlet />
        </div>
    );
}

export default BlogLayout;