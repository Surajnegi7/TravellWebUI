import './App.css';
import './index.css';
import './external.css';
export function Subscribe(){
    return (
    <div className="container d-flex align-items-center  justify-content-center formpage">
      <div className="card  shadow-lg" style={{ maxWidth: '900px', borderRadius: '15px' }}>
        <div className="row g-0 align-items-center">
          {/* Left section with text */}
          <div className="col-md-6 p-4">
            <h2 className="card-title fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'serif', color: '#2c3e50' }}>
              Join our newsletter to<br />
              <span style={{fontStyle:'italic'}}>stay up to date on features and releases.</span>
            </h2>
            <p className="card-text mt-3" style={{ fontSize: '0.75rem', color: '#888' }}>
              By subscribing you agree to with our <a href="#" style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 'bold' }}>Privacy Policy</a> and provide consent to receive
              updates from our company.
            </p>
          </div>

          {/* Vertical divider */}
          

          {/* Right section with form */}
          <div className="col-md-6 p-4 d-flex flex-row justify-content-center">
            <div className="input-group mb-3" style={{maxWidth:'50%'}}>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email" 
                aria-label="Enter your email" 
                style={{ borderRadius: '5px' }}
              />
            </div>
            <button 
              type="button" 
              className="btn text-white  align-items-center justify-content-center"
              style={{ 
                backgroundColor: '#ff6b48', 
                borderColor: '#ff6b48', 
                fontWeight: 'bold',
                maxWidth:'50%',
                maxHeight:'36px',
                padding: '4px 20px',
                borderRadius: '5px'
              }}
            >
              Subscribe
              <i className="bi bi-bell-fill ms-2" style={{ fontSize: '1rem' }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}