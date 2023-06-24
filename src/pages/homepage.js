import { useEffect, useState } from "react";

function Homepage() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/home")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMessage(data.message);
            })
            .catch((error) => console.log('homepage', error));
    }, []);
    return (
        <div>
            <h1>Homepage</h1>
            <p>{message}</p>
        </div>
    )
}

export default Homepage;