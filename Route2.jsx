
import './external.css';

import './App.css';
import './index.css';
import React from 'react';
import numb4 from './images/numb4.svg';
import numb5 from './images/numb5.svg';
import line2 from './images/line2.svg';
import holidayTree from './images/holiday-tree.svg';

export function Route2() {
  return (
    <div className="relative w-full py-4 overflow-hidden">
      {/* Dashed Line Background */}
      <img
        src={line2}
        alt="path-line"
        className="absolute top-0 left-0 w-full z-0 line-background"
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4 max-w-7xl mx-auto">
        {/* Step 04 */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 p-4 step-block">
          <img src={numb4} alt="Step 4" className="mb-3 step-number" />
          <h5 className="text-lg font-semibold mb-2">Add Sports & Airport Transfer</h5>
          <p className="text-gray-600 text-sm">We only work with the best sport centres</p>
        </div>

        {/* Step 05 */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 p-4 step-block">
          <img src={numb5} alt="Step 5" className="mb-3 step-number" />
          <h5 className="text-lg font-semibold mb-2">Add Names, Pay & book online</h5>
          <p className="text-gray-600 text-sm">
            We have partnered with Opayo and Barclays to protect and encrypt any payment details you provide to us.
          </p>
        </div>

        {/* Final Step */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 p-4 step-block">
          <img src={holidayTree} alt="Holiday Icon" className="mb-3 holiday-icon" />
          <h5 className="text-lg font-semibold mb-2 text-green-600">Enjoy your holiday!</h5>
          <p className="text-gray-600 text-sm">
            We will be glad to hear your feedback about our services!
          </p>
        </div>
      </div>
    </div>
  );
}
