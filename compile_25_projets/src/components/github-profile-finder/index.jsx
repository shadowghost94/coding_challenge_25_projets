import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
    const [username, setUsername] = useState("shadowghost94");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {
        setLoading(true);

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        const data = await response.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUsername("");
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return (
            <h1>
                Données en cours de téléchargement. Veuillez patientez svp !
            </h1>
        );
    }
    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Rechercher par le nom d'utilisateur"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <button onClick={handleSubmit}>Rechercher</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div>
    );
}
