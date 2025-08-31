import './external.css';
import './App.css';
import './external.css';
import './index.css';

// Menubar.jsx
import React from 'react';

export function Optionvalues() {
  return (
    <div className="container menubar shadow-lg p-4 rounded mx-auto">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="space-y-6">
            <h4 className="text-lg md:text-xl font-bold text-gray-800">
              Ready for an adventure?{' '}
              <span className="font-normal text-gray-500">
                Let's find the best option for you
              </span>
            </h4>

            {/* Grid for Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Sport */}
              <div className="flex flex-col">
                <label className="font-bold text-sm mb-1">Sport *</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>Diving</option>
                  <option>Surfing</option>
                  <option>Hiking</option>
                  <option>Skiing</option>
                </select>
              </div>

              {/* Level */}
              <div className="flex flex-col">
                <label className="font-bold text-sm mb-1">Level</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>All Levels</option>
                </select>
              </div>

              {/* Where */}
              <div className="flex flex-col">
                <label className="font-bold text-sm mb-1">Where? *</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>El Gouna, Egypt</option>
                  <option>Hawaii, USA</option>
                  <option>Bora Bora, French Polynesia</option>
                  <option>Cozumel, Mexico</option>
                </select>
              </div>

              {/* When */}
              <div className="flex flex-col">
                <label className="font-bold text-sm mb-1">When? *</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>Any date</option>
                  <option>Next 3 Months</option>
                  <option>Next 6 Months</option>
                  <option>Next 12 Months</option>
                </select>
              </div>

              {/* Who */}
              <div className="flex flex-col">
                <label className="font-bold text-sm mb-1">Who? *</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="button"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 w-full rounded flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="include-flights"
                className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
              />
              <label htmlFor="include-flights" className="ml-2 text-sm text-gray-700 select-none">
                Include flights
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
