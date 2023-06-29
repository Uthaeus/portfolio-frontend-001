import { Outlet } from "react-router";

import PortfolioNavigation from "../navigation/portfolio-navigation";
import PortfolioFooter from "../footers/portfolio-footer";

function PortfolioLayout() {
    return (
        <div className="portfolio-layout">
            <PortfolioNavigation />
            <Outlet />
            <PortfolioFooter />
        </div>
    );
}

export default PortfolioLayout;