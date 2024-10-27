import React, { useState } from 'react';

const SelectState= () =>
{
    const [selectedState, setSelectedState] = useState('Select State');
    const states = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Other']; 

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };
    return(
        <div>
            <div style={styles.top}>
                <header style={styles.header}> 
                <div style={styles.logo}>
                    <img src="/dl.svg" alt="Drivify Logo"/>
                    <h1>Drivify</h1>
                </div>
                <nav style={styles.nav}>
                        <a href="#" style={styles.link}>About</a>
                        <a href="#" style={styles.link}>Feedback</a>
                        <a href="#" style={styles.link}>Contact</a>
                </nav>
                </header>

                <div style={styles.main}>
                    <h1 style={{ fontSize: '40px' }}>Get Your Driving License!</h1>
                    <h2>Select State</h2>
                    <div style={styles.dropdownContainer}>
                        <select style={styles.dropdown} value={selectedState} onChange={handleStateChange}>
                            <option value="Select State" disabled>Select State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                </div>

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
        color: 'white'
    },
    header: {   
        display: 'flex',
        justifyContent: 'space-between', //for equal spacing
        alignItems: 'center',
        padding: '10px 20px'
    },
    logo: {
        display: 'flex',
        alignItems: 'center' // to get Drivify beside the logo
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    link: {
        color: 'white', // Color of the links
        textDecoration: 'none', // Optional: removes underline from links
        fontSize: 20
    },
    main: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: '50'
    },
    dropdownContainer: {
        margin: 'auto',

    },
    dropdown: {
        padding: '10px',
        fontSize: '16px',
    }
}

export default SelectState;