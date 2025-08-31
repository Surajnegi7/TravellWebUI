import './external.css';
import './index.css';
import './App.css';
import React from 'react';
import scubaImage from './images/gozo_scuba_diving_holidays_11.jpg';

export function Explore() {
  return (
    <div className="w-full py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 px-5 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            What is <span className="text-blue-600">our secret?</span>
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed text-justify lg:text-left">
            Adventrus holidays are the first ever ocean sports holiday website to offer
            <strong> LIVE ONLINE BOOKING</strong> to include flights, airport transfers and sports
            (such as lessons and equipment rental). The team at Adventrus are highly
            experienced travel professionals with over 25 years direct experience; we only
            offer the very best locations, properties and sport centres, personally checked
            by us. We are passionate about the sports we offer, and are always on hand to
            provide expert unbiased advice.
          </p>
          <div className="mt-4 text-blue-600 font-semibold flex items-center space-x-2 cursor-pointer">
            <a href="#" className="hover:underline">Explore</a>
            <span className="text-lg">➤</span>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800">1500+</h3>
            <p className="text-sm text-gray-600">places around the world</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 px-5">
          <img
            src={scubaImage}
            alt="Scuba Diving"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
