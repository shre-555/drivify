import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const About = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} style={styles.dl}>
            <h1>About Us</h1>
            <div style={{display:'flex'}}>
                <dl>
                    <dt>Vision</dt>
                    <dd>To improve the quality of service delivery to the citizen and the quality of work environment of the RTOs.</dd>
                    <dt>Mission</dt>
                    <dd>To automate all Vehicle Registration and Driving License related activities in transport authorities of country with introduction of smart card technology to handle issues like inter state transport vehicle movement and to create state and national level registers of vehicles/DL information</dd>
                    <dt>Objectives</dt>
                    <dd>
                        <ul>
                            <li>Better services to Transport Department as well as citizen</li>
                            <li>Quick implementation of government policies from time to time</li>
                            <li>Instant access of Vehicle/DL information to other government departments</li>
                        </ul>
                    </dd>
                </dl>
                <img src="./About.jpg" alt="car" width="500" />
            </div>
        </div>
    );
});

const SelectState = () => {
    const [selectedState, setSelectedState] = useState('Select State');
    const states = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Other']; 
    const navigate = useNavigate();
    const aboutRef = useRef(null);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        if (event.target.value !== 'Select State') {
            navigate('/home');
        }
    };

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div style={styles.top}>
                <header style={styles.header}> 
                    <div style={styles.logo}>
                        <img src="/dl.svg" alt="Drivify Logo" />
                        <h1>Drivify</h1>
                    </div>
                    <nav style={styles.nav}>
                        <button onClick={scrollToAbout} style={styles.link}>About</button>
                        <Link to="/feedback" style={styles.link}>Feedback</Link>
                        <Link to="/contact" style={styles.link}>Contact</Link>
                    </nav>
                </header>

                <div style={styles.main}>
                    <h1 style={{ fontSize: '40px' }}>Get Your Driving License!</h1>
                    <h2>Select State</h2>
                    <div style={styles.dropdownContainer}>
                        <select style={styles.dropdown} value={selectedState} onChange={handleStateChange}>
                            <option value="Select State" disabled>Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <About ref={aboutRef} />
            </div>
        </div>
    );
};

const styles = {
    top: {
        backgroundImage: 'url("/DLHome2.png")',
        height: 600,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.5)',
        color: 'white',
    },
    header: {   
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 20,
        background: 'none', // Remove button styles
        border: 'none',     // Remove button styles
        cursor: 'pointer',  // Change cursor to pointer
    },
    main: {
        margin: 'auto',
        textAlign: 'center',
    },
    dropdownContainer: {
        margin: 'auto',
    },
    dropdown: {
        padding: '10px',
        fontSize: '16px',
    },
    dl: {
        display: 'block',
        paddingLeft: 50
      }
};

export default SelectState;
