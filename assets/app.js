import '@algolia/autocomplete-theme-classic';

import './styles/app.css';
import './styles/algolia.css';
import './bootstrap';

import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './js/app.jsx';

render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
