import React from 'react';

const JokeCard = ({ joke, onFavorite }) => {
    return (
        <div className="card mb-4 d-flex flex-column " style={{ height: '100%' }}>
            <img 
                src={joke.image || 'https://via.placeholder.com/45x35'} 
                alt="Joke" 
                className="card-img-top" 
                // style={{ width: '45px', height: '35px', objectFit: 'cover', margin: '0 auto' }} // Center the image
            />

            <div className="card-body">
                <p className="card-text">{joke.joke}</p>
                <button onClick={() => onFavorite(joke)} className="btn btn-primary">
                    Favorite
                </button>
            </div>
        </div>
    );
};

const JokeList = ({ jokes, onFavorite }) => {
    return (
        <div className="row g-4 m-3">
            {jokes.map((joke) => (
                <div key={joke.id} className="col-md-4">
                    <JokeCard joke={joke} onFavorite={onFavorite} />
                </div>
            ))}
        </div>
    );
};

export default JokeList;
