import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './form_styles.css';
import './header_col.css';

function Form()
{
   return(
    <div className='formstyle'>
        <form>
            <label>Application Number</label>
            <input type="text" name="appno" required />
            <label>Select Date</label>
            <input type="datetime-local" name="date" required />
            <label>Track</label>
            <input type="text" name="appno" required />
        </form>
    </div>
   );
}
   

function BookAppointment()
{
    return (
        <div>
            <div className='head'>
                <header>
                    <figure>
                        <img src="/dl.svg" alt="dl" style={{ marginLeft: '0px', width: "100px", height: "100px", fill: 'white' }} />
                        <figcaption style={{ marginLeft: '12px', marginTop: '0px', color:'white' }}><b><i>Drivify</i></b></figcaption>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>Book Appointment</h1>
                    </figure>
                </header>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}

export default BookAppointment;