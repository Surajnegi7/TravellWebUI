
import './App.css';
import './external.css';
import './index.css';
// Carding.jsx
import React from 'react';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key);
  });
  return images;
};

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const visaImg = images['Visa.png'];
const holidayImg = images['holiday.png'];
const plane=images['plane.png'];

export function Carding() {
  return (
    <div className="container  maincards mx-auto mb-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded shadow-md w-full max-w-xs mx-auto">
          <div className="p-4">
            <img src={plane} alt="Holiday" className="logoimg pl-2" />
            <h6 className="font-bold text-gray-800 pl-2 mt-2 text-left">
              ATOL &amp; TTA trusted
            </h6>
            <p className="text-gray-600 text-sm pl-2 mt-1 leading-relaxed">
              Holiday protection has never been<br />
              so important and we offer the best protection<br />
              possible
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded shadow-md w-full max-w-xs mx-auto">
          <div className="p-4">
            <img src={holidayImg} alt="Holiday" className="logoimg pl-2" />
            <h6 className="font-bold text-gray-800 pl-2 mt-2 text-left">
              Powered by Planetholidays
            </h6>
            <p className="text-gray-600 text-sm pl-2 mt-1 leading-relaxed">
              Adventrus is<br />
              Some text about adventrus in the<br />
              planet holiday system
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded shadow-md w-full max-w-xs mx-auto">
          <div className="p-4">
            <img src={visaImg} alt="Visa" className="logoimg pl-2" />
            <h6 className="font-bold text-gray-800 pl-2 mt-2 text-left">
              Payment Security
            </h6>
            <p className="text-gray-600 text-sm pl-2 mt-1 leading-relaxed">
             We have partnered with Okaya and barclays to protect and encrypt any payment details you provide to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
