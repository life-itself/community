import OrgList from './OrgList.jsx';
import Fuse from 'fuse.js';
import ItemsJS from 'itemsjs';
import React, { useState, useEffect } from 'react';

/** JS search component
  Use 2 search systems:
  1. Fuse: for general text search
  2. ItemJS: for faceting etc. We disable its native search and use Fuse for that as better
  * */
export default function ProfileSearch({ profiles }) {
  const [orgs, setOrgs] = useState([]);
  useEffect(async () => {
    setOrgs(profiles);
  }, []);

  const facets = [
    {
      id: 'topic',
      name: 'Topic'
    },
    {
      id: 'activity',
      name: 'Activity'
    }
  ];
  const defaultFilterState = {};
  facets.forEach((f) => {
    defaultFilterState[f.id] = [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  // filterState = { topic: ['Value1', 'Value2'], activity: ['ValueX', 'ValueY'] }
  const [filterState, setFilterState] = useState(defaultFilterState);

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handleFilter = (info) => {
    const [facet, item] = info;
    const newFilterState = { ...filterState };
    if (newFilterState[facet].includes(item)) {
      newFilterState[facet] = newFilterState[facet].filter((x) => x != item);
    } else {
      newFilterState[facet].push(item);
    }
    setFilterState(newFilterState);
  };

  const searchIndex = new Fuse(orgs, {
    includeScore: true,
    threshold: 0.4,
    keys: ['title']
  });

  const searchResults = searchIndex.search(searchQuery);

  // configuration for itemsjs faceted search
  const aggregations = {};
  for (const f of facets) {
    aggregations[f.id] = {
      title: f.name,
      size: 20, // set to 20 to be bigger than max size of a facet atm
      conjunction: true // not sure why
    };
  }
  const itemsjs = ItemsJS(orgs, {
    native_search_enabled: false,
    aggregations
  });

  const sortedSearchResults = searchResults.sort((resultA, resultB) => {
    return resultA.score - resultB.score;
  });
  // orgs from search result
  // search result is { item: org, refIndex: 1, score: ... }
  // return all orgs if empty search query
  let sortedOrgs = orgs;
  if (searchQuery) {
    sortedOrgs = sortedSearchResults.map((result) => result.item);
  }

  const searchResults2 = itemsjs.search({
    per_page: 20000, // set to a number larger than any possible total so we have all
    ids: sortedOrgs.map((v) => v.id),
    filters: filterState
  });

  const facetResults = Object.entries(searchResults2.data.aggregations).map((item) => {
    return item[1];
  });

  sortedOrgs = searchResults2.data.items;

  return (
    <section className="max-w-2xl mx-auto lg:max-w-7xl">
      <p className="">Profiles found: {sortedOrgs.length}</p>

      <input
        type="search"
        name="search"
        placeholder="Search ..."
        className="mt-4 w-full md:w-1/2"
        value={searchQuery}
        onChange={(event) => handleSearch(event.target.value)}
      />

      <div className="max-w-7xl mx-auto text-sm mt-4 grid grid-cols-1 auto-rows-min md:grid-cols-none gap-y-10 md:gap-x-6">
        {facetResults.map((facet, idx) => (
          <fieldset key={`${facet.title}-${idx}`}>
            <legend className="block font-medium">{facet.title}</legend>
            <div className="pt-2 space-y-1 md:space-y-0 md:space-x-4">
              {facet.buckets.map((option, optionIdx) => (
                <div
                  key={`${option.id}-${optionIdx}`}
                  className="items-center text-base sm:text-sm md:inline-block">
                  <input
                    id={`${facet.name}-${optionIdx}`}
                    name={`${facet.name}`}
                    defaultValue={option.key}
                    type="checkbox"
                    className="flex-shrink-0 h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500"
                    checked={filterState[facet.name].includes(option.key)}
                    onChange={() => handleFilter([facet.name, option.key])}
                  />
                  <label
                    htmlFor={`${facet.name}-${optionIdx}`}
                    className="ml-4 md:ml-1 min-w-0 text-gray-600">
                    {option.key} ({option.doc_count})
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <OrgList orgs={sortedOrgs} />
    </section>
  );
}

ProfileSearch.propTypes = {};
