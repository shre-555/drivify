import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SelectState.css'; 

const Steps = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} style={{paddingLeft: '50px', backgroundColor: 'rgb(243, 243, 243)'}}>
            <h1>Steps To Apply</h1>
            <div className="steps">
                <div className='stepbox'>
                    <img src="./apply.png" alt="apply" width="70" />
                    <br/>
                    <b>Apply</b>
                    <br/>
                    <p>Select your state</p>
                    <p>Fill the application form</p>
                    <p>Get your application number</p>
                </div>
                <div className='stepbox'>
                    <img src="./test.png" alt="test" width="70" />
                    <br/>
                    <b>Test</b>
                    <br/>
                    <p>Refer to our videos for the test</p>
                    <p>Login to the test</p>
                    <p>Give the test</p>
                </div>
                <div className='stepbox'>
                    <img src="./complete.png" alt="test" width="70" />
                    <br/>
                    <b>Get Your License</b>
                    <br/>
                    <p>Wait for test results</p>
                    <p>Get your Driving License!</p>
                </div>
            </div>
            
        </div>
    );
});


const About = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="dl">
            <h1>About Us</h1>
            <div style={{ display: 'flex' }}>
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

const Contact = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="dl">
            <h1>Contact</h1>
            <div style={{ display: 'flex' }}>
                <img src="./ContactUs.jpg" alt="car" width="300" />
                <div style={{ display: 'block' }}>
                    <h2>Phone</h2>
                    <p>+91 0123456789</p>
                </div>
            </div>
        </div>
    );
});

const SelectState = () => {
    const [selectedState, setSelectedState] = useState('Select State');
    const states = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Other'];
    const navigate = useNavigate();
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const stepsRef = useRef(null);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        if (event.target.value !== 'Select State') {
            navigate('/home');
        }
    };

    const scrollToSteps = () => {
        if (stepsRef.current) {
            stepsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="top">
                <header className="header">
                    <div className="logo">
                        <img src="/dl.svg" alt="Drivify Logo" />
                        <h1>Drivify</h1>
                    </div>
                    <nav className="nav">
                        <button onClick={scrollToSteps} className="link">Steps to Apply</button>
                        <button onClick={scrollToAbout} className="link">About</button>
                        <button onClick={scrollToContact} className="link">Contact</button>
                    </nav>
                </header>

                <div className="main">
                    <h1 style={{ fontSize: '40px' }}>Get Your Driving License!</h1>
                    <h2>Select State</h2>
                    <div className="dropdown-container">
                        <select className="dropdown" value={selectedState} onChange={handleStateChange}>
                            <option value="Select State" disabled>Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <Steps ref={stepsRef} />
            </div>
            <div>
                <About ref={aboutRef} />
            </div>
            <div>
                <Contact ref={contactRef} />
            </div>
        </div>
    );
};

export default SelectState;
