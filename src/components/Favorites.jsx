// Favorites.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('/api/favorites'); // Ensure this API exists
                setFavorites(response.data); // Assuming your API returns an array of favorite jokes
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, []); // Empty dependency array to run only on mount

    return (
        <div>
            <h2>Your Favorite Jokes</h2>
            <ul className="list-group">
                {favorites.map((favorite) => (
                    <li key={favorite.jokeId} className="list-group-item">
                        {favorite.jokeText}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
