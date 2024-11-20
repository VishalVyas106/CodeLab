// components/SearchBar.jsx
import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({
  searchQuery,
  onSearchChange,
  onClearSearch,
  searchResults,
  isSearchFocused,
}) => {
  return (
    <div className="relative flex justify-end max-w-3xl ml-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search documents by title, description, or tags..."
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={onClearSearch}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isSearchFocused && searchQuery && (
        <div className="absolute top-full right-0 bg-white mt-2 rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            searchResults.map((doc) => (
              <a
                key={doc.id}
                href={doc.link}
                className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0"
              >
                <h4 className="font-medium text-gray-900">{doc.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                <div className="flex gap-2 mt-2">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))
          ) : (
            <div className="p-4 text-gray-500 text-center">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
