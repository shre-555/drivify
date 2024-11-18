//Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';
const HomePage = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

    const div_style = {
        background: 'linear-gradient(to right,orange,red,purple)',
        height: 250,
    };

    const handleApplyClick = () => {
        navigate('/instructions'); // Navigate to the instructions page
    };
    const handlePrintClick=()=>{
        navigate('/print');// Navigate to Home page
    };
    const handleApplyDLClick=()=>{
        navigate('/applicationdl');// Navigate to Home page
    };
    const handleprintDL=()=>{
        navigate('/printdl');// Navigate to Home page
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
                    <p style={{fontSize:'25px'}}>Your one-stop solution for managing driving licences.</p>
                    <div style={{alignItems:'center'}} className="steps">
                        <label style={{fontSize:'25px'}}>Learner's Licence: </label><br/>
                        <div className='stepbox' onClick={handleApplyClick}><img src='/form.png'  alt="Form logo" style={{height:120,width:120}}></img><p style={{fontSize:'25px'}}>Apply</p>{/* Navigate on click */}</div>
                        <div className='stepbox' onClick={handlePrintClick}><img src='/print.png'  alt="Print logo" style={{height:120,width:120}}></img><p style={{fontSize:'25px'}}>Print Forms</p></div>
                        <div className='stepbox'><img src='/test2.png'  alt="Test logo" style={{height:120,width:120}}></img><p style={{fontSize:'25px'}}>Take Test</p></div>
                    </div>
                    <div style={{alignItems:'center'}} className="steps">
                        <label style={{fontSize:'25px'}}>Driving Licence: </label><br/>
                        <div className='stepbox' onClick={handleApplyDLClick}><img src='/calendar.png'  alt="Form logo" style={{height:120,width:120}}></img><p style={{fontSize:'25px'}}>Apply</p><br/></div> {/* Navigate on click */}
                        <div className='stepbox' onClick={handleprintDL}><img src='/print.png'  alt="Print logo" style={{height:120,width:120}}></img><p style={{fontSize:'25px'}}>Print Forms</p></div>
                    </div>
                    <section>
                        <marquee className="faq" style={{fontSize:'25px'}}><b>Frequently Asked Questions:</b> What documents do I need to apply?     <b>User Testimonials:</b> "Drivify made the application process so easy!"</marquee>
                    </section>
        
                </main>
            </main>
        </div>
    );
};

export default HomePage;
