import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './components/Favorites';
import JokeSearch from './components/JokeSearch';
import axios from 'axios';
import { backendUrl } from "./config/keys";

axios.interceptors.request.use(async (config) => {
    config.url = backendUrl + config.url;
    config.headers = {
        ...config.headers,
    };
    return config;
});

const App = () => {
    return (
        <Router>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Joke Search App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" activeClassName="active" style={({ isActive }) => ({ color: isActive ? 'blue' : 'inherit' })}>
                                        Search Jokes
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/favorites" activeClassName="active" style={({ isActive }) => ({ color: isActive ? 'blue' : 'inherit' })}>
                                        Favorites
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<JokeSearch />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
