import React from "react";
const Payment=()=>
{

    const div_style = {
        background: 'linear-gradient(to right,orange,red,purple)',
        height: 250,
    };
    const pay_style={
        border:'1px solid black',
        textAlign:'center',
        fontSize:'30px',
        height:'400px',
        width:'400px',
        marginLeft:'450px',
        borderRadius:'30px'
    };
    return(
        <div>
            <div style={div_style}>
                <header>
                    <figure>
                        <img src="/dl.svg" alt="dl" style={{marginLeft:'0px',width:"100px",height:"100px",fill:'white'}}/>
                        <figcaption style={{marginLeft:'12px',marginUp:'0px'}}><b><i>Drivify</i></b></figcaption>
                        <h1 style={{color:'white',textAlign:'center'}}>Payment</h1>
                    </figure>
                </header>
            </div>
            <br/>
            <div style={pay_style}><br/>
                <h3>Pay by :</h3><br/>
                <ul style={{textAlign:'left',paddingLeft: '20px', listStylePosition: 'inside'}}>
                    <li>G Pay</li><br/>
                    <li>PhonePe</li><br/>
                    <li>Net Banking</li><br/>
                    <li>Credit/Debit Card</li><br/>
                </ul>
            </div>
        </div>
    )
}
export default Payment;

    