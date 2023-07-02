import { Outlet } from "react-router";

import BlogNavigation from "../navigation/blog-navigation";
import BlogFooter from "../footers/blog-footer";

function BlogLayout() {

    return (
        <div className="blog-layout">
            <BlogNavigation />
            <Outlet />
            <BlogFooter />
        </div>
    );
}

export default BlogLayout;