import React from 'react';
import { useLocation } from 'react-router-dom';
import './form_styles.css';
import './header_col.css';

const ConfirmDL = () => {
    const location = useLocation();
    const  applicationNumber  = location.state.message || {}; // Access application number from state
    console.log(applicationNumber);
    console.log(location.state.message);
    return (
        <div>
            <div className='head'>
                <header>
                    <div>
                        <img src="/dl.svg" alt="dl" style={{ marginLeft: '0px', width: "100px", height: "100px", fill: 'white' }} />
                        <figcaption style={{ marginLeft: '12px', marginTop: '0px', color: 'white' }}><b><i>Drivify</i></b></figcaption>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>{applicationNumber}</h1>
                        
                    </div>
                </header>
            </div>
        </div>
    );
};

export default ConfirmDL;
