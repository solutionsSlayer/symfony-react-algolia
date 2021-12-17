import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
    'WWO8Y1U9GS',
    '464c5503efe49eea6d2f904ddcd9f32f'
);

import React, { Component } from "react";
import {
    InstantSearch,
    SearchBox,
    Pagination,
    Configure
} from "react-instantsearch-dom";
import "../styles/algolia.css";
import Content from "./components/algolia/Content";

class App extends Component {
    render() {
        return (
            <InstantSearch
                appId="WWO8Y1U9GS"
                apiKey="464c5503efe49eea6d2f904ddcd9f32f"
                indexName="demo_ecommerce"
                searchClient={searchClient}>
                <main className="search-container">
                    <Configure
                        hitsPerPage={5}
                        attributesToSnippet={["description:24"]}
                        snippetEllipsisText=" [...]"
                    />
                    <div className="right-panel">
                        <div id="hits">
                            {<Content /> }
                        </div>
                        <div id="searchbox">
                            { <SearchBox
                                translations={{ placeholder: "Search for products" }}
                            />}
                        </div>
                        <div id="stats">
                        </div>
                        <div id="pagination">
                            {<Pagination />}
                        </div>
                    </div>
                    <div className="left-panel">
                        <div id="categories">
                            {/* Uncomment the following widget to add categories list */}
                            {/* <Panel header="Categories">
                <Facet attribute="categories" />
              </Panel> */}
                        </div>
                        <div id="brands">
                            {/* Uncomment the following widget to add brands list */}
                            {/* <Panel header="Brands">
                <Facet
                  attribute="brand"
                  searchable={true}
                  translations={{ placeholder: "Search for other..." }}
                />
              </Panel> */}
                        </div>
                        <div id="price">
                            {/* Uncomment the following widget to add price */}
                            {/* <Panel header="Price">
                <RangeSlider attribute="price" />
              </Panel> */}
                        </div>
                    </div>
                </main>
            </InstantSearch>
        );
    }
}

export default App;