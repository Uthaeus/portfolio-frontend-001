import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
}

export default ErrorPage;