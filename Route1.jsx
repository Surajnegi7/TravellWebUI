import './external.css';

import './index.css';
import './App.css';
import React from 'react';
import line1 from './images/line1.svg';
import numb1 from './images/numb1.svg';
import numb2 from './images/numb2.svg';
import numb3 from './images/numb3.svg';

const steps = [
  {
    numberImage: numb1,
    title: 'Find your perfect resort',
    description:
      "Use our 'resort finder' if you’re not sure the best place for your sport, level and travel month.",
    link: 'Use finder →',
  },
  {
    numberImage: numb2,
    title: 'Choose a hotel and flights',
    description:
      'All our properties are hand picked. We offer all major airlines from worldwide departure airports.',
  },
  {
    numberImage: numb3,
    title: 'Choose your hotel room',
    description: 'Adventrus offers the best travel protection in the market.',
  },
];

export function Route1() {
  return (
    <div
      className="sizing py-8 bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${line1})` }}
    >
      <div className="boxes max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 min-w-0">
              <div className="step-box bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={step.numberImage}
                  alt={`Step ${index + 1}`}
                  className="w-12 h-12 mb-4"
                />
                <h6 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h6>
                <p className="text-gray-600 text-sm flex-grow">{step.description}</p>
                {step.link && (
                  <a
                    href="#!"
                    className="text-blue-600 hover:underline mt-0 text-sm font-medium inline-block"
                  >
                    {step.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
