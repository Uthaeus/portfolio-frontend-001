import { Outlet } from "react-router";

import PortfolioNavigation from "../navigation/portfolio-navigation";

function PortfolioLayout() {
    return (
        <div className="portfolio-layout">
            <PortfolioNavigation />
            <Outlet />
        </div>
    );
}

export default PortfolioLayout;