
import './index.css';
import './App.css';
import './external.css'
// Importing images from src/images folder
import React from 'react';
import scubaImage from './images/scubadiving_holidays.png';
import windsurfingImage from './images/windsurfing_holidays.png';
import kitesurfingImage from './images/kitesurfing_holidays.png';

export function Slides() {
  return (
    <div className="activities-container py-12 px-4">
      {/* Top Section: Text + 2 Cards */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Left Text Column */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800">
            <div className="font-bold">Pick your</div>
            <hr className="border-gray-400 my-1 w-20" />
            <div className="italic font-light text-gray-600 mt-2">
              <hr className="border-gray-400 my-1 w-12" />
              activity
            </div>
          </h2>
          <p className="mt-4 text-gray-700">
            Life would not be such a beautiful thing without sport, right?
          </p>
        </div>

        {/* Scuba Diving Card */}
        <div className="lg:w-1/3">
          <div
            className="rounded overflow-hidden shadow-md text-white h-full"
            style={{
              backgroundImage: `url(${scubaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          >
            <div className="flex flex-col justify-between bg-black/50 p-4 h-[300px]">
              <div>
                <h4 className="text-xl font-semibold mb-2">Diving holidays</h4>
                <p className="text-sm leading-relaxed">
                  Book the best scuba dive holiday locations worldwide at the cheapest prices,
                  online right NOW. Be sure of only the best scuba diving schools and dive resorts...
                  personally checked by us.
                </p>
              </div>
              <a
                href="#"
                className="mt-4 inline-block border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-black transition"
              >
                Explore →
              </a>
            </div>
          </div>
        </div>

        {/* Windsurfing Card */}
        <div className="lg:w-1/3">
          <div
            className="rounded overflow-hidden shadow-md text-white h-[300px]"
            style={{
              backgroundImage: `url(${windsurfingImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex items-end bg-black/25 p-4 h-full">
              <h5 className="text-lg font-semibold">Windsurfing holidays</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full-width Card (Kitesurfing) */}
      <div className="flex justify-end">
        <div className="w-full lg:w-2/3">
          <div
            className="rounded overflow-hidden shadow-md text-white h-[300px]"
            style={{
              backgroundImage: `url(${kitesurfingImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex items-end bg-black/25 p-4 h-full">
              <h5 className="text-lg font-semibold">Kitesurfing holidays</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
