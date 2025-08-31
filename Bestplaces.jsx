// src/components/BestPlaces.jsx
import React from 'react';
import './App.css';
import './index.css';

import './external.css'; // Custom CSS for styling
import img1 from './images/alacati-kitesurf-7.jpg';
import img2 from './images/fuerteventura_kitesurf_windsurf_holidays_24.jpg';
import img3 from './images/windfoiling_holidsays.png';

 export function Bestplaces() {
  const places = [
    {
      image:img1,
      title: 'Antigua',
      price: '34€/night',
      activities: 'Hiking, Bicycle, Climbing',
      availability: [10, 20, 30, 40, 50, 60, 70, 80, 70, 60, 50, 40]
    },
    {
      image:img2,
      title: 'Alacati',
      price: '34€/night',
      activities: 'Kitesurfing, Windsurfing, Paragliding',
      availability: [30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40]
    },
    {
      image:img3,
      title: 'Hawaii',
      price: '34€/night',
      activities: 'Windfoiling, Surfing, Scuba Diving',
      availability: [40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30]
    }
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

        body {
          font-family: 'Inter', sans-serif;
        }
        .form-select {
          border-radius: 0.5rem;
          border-color: #dee2e6;
        }
        .card-img-top {
          border-top-left-radius: 0.5rem !important;
          border-top-right-radius: 0.5rem !important;
        }
        .bar-chart {
          display: flex;
          align-items: flex-end;
          height: 50px; /* Adjust height as needed */
          gap: 2px;
        }
        .bar {
          width: 8px; /* Adjust width of bars */
          background-color: #e9ecef; /* Default gray color */
          border-radius: 2px;
        }
        .bar.active {
          background-color: #34495e; /* Darker gray color for active bars */
        }
        .bar-label {
          font-size: 0.75rem;
          text-align: center;
          color: #6c757d;
        }
        `}
      </style>
      <div className="container-fluid" style={{marginBottom:'8rem'}}>
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="fw-bold fs-2">Best places</h1>
            <h2 className="text-secondary fw-light fs-4">for any sport?</h2>
            <hr className="w-25 border-3" style={{ color: '#00c19a' }} />
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="sport-select" className="text-secondary fw-light">Sport</label>
              <select className="form-control form-select mt-1" id="sport-select">
                <option>Diving</option>
                <option>Hiking</option>
                <option>Climbing</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="level-select" className="text-secondary fw-light">Level</label>
              <select className="form-control form-select mt-1" id="level-select">
                <option>All</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="when-select" className="text-secondary fw-light">When?</label>
              <select className="form-control form-select mt-1" id="when-select">
                <option>Any month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {places.map((place, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 rounded-3 border-0 shadow-sm">
                <img src={place.image} className="card-img-top rounded-top-3" alt={place.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{place.title}</h5>
                    <span className="text-danger fw-bold">{place.price}</span>
                  </div>
                  <div className="bar-chart mb-2">
                    {place.availability.map((height, barIndex) => (
                      <div
                        key={barIndex}
                        className="bar"
                        style={{ height: `${height}%`, backgroundColor: height > 50 ? '#34495e' : '#e9ecef' }}
                      ></div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between bar-label-container">
                    {months.map((month, monthIndex) => (
                      <span key={monthIndex} className="bar-label">{month}</span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <h6 className="text-muted fw-bold">Other activities:</h6>
                    <p className="card-text text-secondary">{place.activities}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


