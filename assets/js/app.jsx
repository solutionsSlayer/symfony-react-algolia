import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import InstantSearch from './components/algolia/instantSearch/index';
import Autocomplete from "./components/algolia/autocomplete/index";

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="auto">Auto-complete</Link>
                    </li>
                </ul>
            </nav>
            <div className="main">
                <Routes>
                    <Route path="/" element={<InstantSearch />}/>
                    <Route path="auto" element={<Autocomplete />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </div>
        </div>
    )
}

export const NotFound = () => {
    return <div>This is a 404 page</div>
}

export default App
