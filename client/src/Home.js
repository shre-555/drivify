import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomePage = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

    const div_style = {
        background: 'linear-gradient(to right,orange,red,purple)',
        height: 250,
    };

    const handleApplyClick = () => {
        navigate('/instructions'); // Navigate to the instructions page
    };

    return (
        <div>
            <div style={div_style}>
                <header>
                    <figure>
                        <img src="/dl.svg" alt="dl" style={{ marginLeft: '0px', width: "100px", height: "100px", fill: 'white' }} />
                        <figcaption style={{marginLeft:'12px',marginUp:'0px'}}><b><i>Drivify</i></b></figcaption>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>Home</h1>
                    </figure>
                </header>
            </div>
            <main>
                <main>
                    <h1>Welcome to Drivify!</h1>
                    <p style={{fontSize:'25px'}}>Your one-stop solution for managing driving licenses.</p>
                    <div className="featuresLL">
                        <label style={{fontSize:'25px'}}>Learner's License: </label>
                        <button style={{fontSize:'25px'}} onClick={handleApplyClick}>Apply</button> {/* Navigate on click */}
                        <button style={{fontSize:'25px'}}>Renew</button>
                        <button style={{fontSize:'25px'}}>Application Status</button>
                        <button style={{fontSize:'25px'}}>Download Forms</button>
                    </div>
                    <div className="featuresDL">
                        <label style={{fontSize:'25px'}}>Driving License: </label>
                        <button style={{fontSize:'25px'}}>Apply</button> {/* Navigate on click */}
                        <button style={{fontSize:'25px'}}>Renew</button>
                        <button style={{fontSize:'25px'}}>Application Status</button>
                        <button style={{fontSize:'25px'}}>Download Forms</button>
                    </div>
                    <section className="testimonials">
                        <h3 style={{fontSize:'25px'}}>User Testimonials</h3>
                        <p style={{fontSize:'25px'}}>"Drivify made the application process so easy!"</p>
                    </section>
                    <section className="faq">
                        <h3 style={{fontSize:'25px'}}>Frequently Asked Questions</h3>
                        <p style={{fontSize:'25px'}}>What documents do I need to apply?</p>
                    </section>
                </main>

                <footer>
                    <p style={{fontSize:'25px'}}>Contact us at support@drivify.com | +1-800-123-4567</p>
                    <p style={{fontSize:'25px'}}>Follow us on social media</p>
                    <a style={{fontSize:'25px'}} href="/privacy-policy">Privacy Policy</a>
                    <a style={{fontSize:'25px'}} href="/terms">Terms of Service</a>
                </footer>
            </main>
        </div>
    );
};

export default HomePage;
