import React, { useState } from 'react';
import axios from 'axios';
import JokeList from './JokeList';

const JokeSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jokes, setJokes] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.get('https://icanhazdadjoke.com/search', {
            //     params: { term: searchTerm },
            //     headers: { Accept: 'application/json' },
            // });
            if(searchTerm){
                const response = await axios.get('/api/search-jokes', {
                    params: { searchTerm : searchTerm },
                });
                setJokes(response.data.results); // Update jokes with the results from the API
            }else{
                console.log("please type something ....")
            }

            
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    };

    const handleFavorite = async (joke) => {
        try {
            await saveFavorite(joke.id, joke.joke);
        } catch (error) {
            console.error('Error saving favorite:', error);
        }
    };

    const saveFavorite = async (jokeId, jokeText) => {
        const userId = 1; // Replace with the actual user ID from your authentication context
        try {
            const response = await axios.post('/api/favorites', {
                jokeId,
                jokeText,
                userId,
            });
            console.log('Favorite saved:', response.data);
        } catch (error) {
            console.error('Error saving favorite:', error);
        }
    };

    return (
        <div>
            <div className="input-group mb-3 p-3" style={{ maxWidth: '400px', width: '100%' }}>
                <input
                    type="text"
                    className="form-control joke-search-input"
                    placeholder="Search for a joke"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <JokeList jokes={jokes} onFavorite={handleFavorite} />
        </div>
    );
};

export default JokeSearch;
