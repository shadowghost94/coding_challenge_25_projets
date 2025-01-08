import { useEffect } from "react";
import { useState } from "react";
import Sugestions from "./suggestions";

export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();
    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter(
                          (item) => item.toLowerCase().indexOf(query) > -1
                      )
                    : [];

            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }
    function handleClick(event) {
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }
    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);
    console.log(users, filteredUsers);
    return (
        <div className="search-autocomplete-container">
            {loading ? (
                <h3>
                    Données en cours de chargement. Veuillez patienter svp !
                </h3>
            ) : (
                <input
                    type="text"
                    name="search-users"
                    placeholder="Rechercher un utilisateur ici..."
                    value={searchParam}
                    onChange={handleChange}
                />
            )}

            {showDropdown && (
                <Sugestions data={filteredUsers} handleClick={handleClick} />
            )}
        </div>
    );
}
