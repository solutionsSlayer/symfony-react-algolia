import React from 'react';
import algoliasearch from 'algoliasearch';

import Autocomplete from './Autocomplete';
import ProductItem from './ProductItem';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

// const searchClient = algoliasearch(
//     'WWO8Y1U9GS',
//     '464c5503efe49eea6d2f904ddcd9f32f'
// );

const appId = 'latency';
const apiKey = '6be0576ff61c053d5f9a3225e2a90f76';
const searchClient = algoliasearch(appId, apiKey);


function Index() {
    return (
        <div className="app-container">
            <h1>React Application</h1>
            <Autocomplete
                openOnFocus={true}
                getSources={({ query }) => [
                    {
                        sourceId: 'products',
                        getItems() {
                            return getAlgoliaResults({
                                searchClient,
                                queries: [
                                    {
                                        indexName: 'instant_search',
                                        query,
                                    },
                                ],
                            });
                        },
                        templates: {
                            item({ item, createElement }) {
                                return createElement('div', {
                                    dangerouslySetInnerHTML: {
                                        __html: `
                                        <div class="algolia-custom-item">
                                            <img
                                                src="${item.image}"
                                                alt="${item.name}" />
                                            <div style="padding-left: 8px; font-weight: bold;">
                                              ${item.name}
                                            </div>
                                        </div>`,
                                    },
                                });
                            },
                        }
                    },
                ]}
            />
        </div>
    );
}

export default Index;
