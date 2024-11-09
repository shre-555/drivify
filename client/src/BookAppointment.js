import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Form()
{
   
    <div>
        <h1>Hi!</h1>
    </div>
}

function BookAppointment()
{
    return (
        <div>
            <div style={div_style}>
                <header>
                    <figure>
                        <img src="/dl.svg" alt="dl" style={{ marginLeft: '0px', width: "100px", height: "100px", fill: 'white' }} />
                        <figcaption style={{ marginLeft: '12px', marginTop: '0px', color:'white' }}><b><i>Drivify</i></b></figcaption>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>Application Form For DL</h1>
                    </figure>
                </header>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}

const div_style = {
    background: 'linear-gradient(to right, orange, red, purple)',
    height: 250,
};

export default BookAppointment;