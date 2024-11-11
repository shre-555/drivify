import React, { useState } from 'react';
import { useNavigate} from 'react-router';
import { saveApplication , getApplication}from './api'; 
const ApplicationForm = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
    const div_style={
        background: 'linear-gradient(to right,orange,red,purple)',
        height:250,
    };
    const [formData, setFormData] = useState({
      fullName: "",
      dob: "",
      address: "",
      aadhar: "",
      city: "",
      pincode:"",
      email: "",
      phno: "",
      bloodGroup: "O",
      nationality: "Indian",
      vehicleType: "twoWheeler",
    });
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
  
    // Validation: Check if all fields are filled
    const {
      fullName,
      dob,
      address,
      aadhar,
      city,
      pincode,
      email,
      phno,
      bloodGroup,
      nationality,
      vehicleType
    } = formData;
  
    if (!fullName || !dob || !address || !aadhar || !city ||!pincode || !email || !phno || !bloodGroup || !nationality || !vehicleType) {
      alert("Please fill all the fields before submitting the form.");
      return;  // Prevents submission if any field is empty
    }
  
    // Check if the Aadhar number is valid (12 digits)
    if (aadhar.length !== 12 || isNaN(aadhar)) {
      alert("Please enter a valid 12-digit Aadhar number.");
      return;
    }
  
    // Check if phone number is valid (10 digits)
    if (phno.length !== 10 || isNaN(phno)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (pincode.length !== 6  || isNaN(pincode)) {
      alert("Please enter a valid 6-digit pincode number.");
      return;
    }
    try {
      const res = await saveApplication(formData); // Call the API function
            if (res) {
                alert(`Application saved successfully! ID: ${res.id}`);
            }
            
            } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
          }
    // If all validations pass, generate an application ID and navigate to the payment page
    // Clear form fields after submission
    setFormData({
      fullName: "",
      dob: "",
      address: "",
      aadhar: "",
      city: "",
      pincode:"",
      email: "",
      phno: "",
      bloodGroup: "O",
      nationality: "Indian",
      vehicleType: "twoWheeler",
    });
  
    navigate('/payment');  // Navigate to the payment page after successful form submission
  };
  
  const form_style={
      border:'1px solid black',
      marginLeft:'350px',
      textAlign:'left',
      height:'680px',
      width:'620px',
      borderRadius:'20px',
  };

  return (
    <div>
        <div style={div_style}>
        <header>
          <figure>
            <img src="/dl.svg" alt="dl" style={{marginLeft:'0px',width:"100px",height:"100px",fill:'white'}}/>
            <figcaption style={{marginLeft:'12px',marginUp:'0px'}}><b><i>Drivify</i></b></figcaption>
            <h1 style={{color:'white',textAlign:'center'}}>Application Form</h1>
          </figure>
        </header>
        </div>
    <section>
      <br/>
      <div style={form_style}>
        <br/>
      <form onSubmit={handleSubmit}>
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Full Name:
          </label>
          <input style={{fontSize:"25px",marginLeft:'20px'}}type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required/>
        <br />
        <br/>
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Date of Birth: </label>
          <input style={{fontSize:"25px",marginLeft:'20px'}}type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
        <br/>
        <br />
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Address:</label>
          <textarea 
              style={{fontSize:"25px",marginLeft:'20px'}}
              name="address"  // Correct the name here
              rows="2" 
              cols="30" 
              value={formData.address}  // Bind the value to formData.address
              onChange={handleInputChange}  // Ensure handleInputChange is working
              required>
            </textarea>
            <br/>
        <br/>
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Aadhar no.:</label>
          <input style={{fontSize:"25px",marginLeft:'20px'}}type="text" name="aadhar" pattern="[0-9]{12}" placeholder='12 digits' value={formData.aadhar} onChange={handleInputChange} required ></input>
        <br/>
        <br />
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          City: </label>
          <input style={{fontSize:"25px",marginLeft:'20px'}}type="text" name="city" value={formData.city} onChange={handleInputChange} required ></input>
        <br/>
        <br/>
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Pincode:</label>
          <input style={{fontSize:"25px",marginLeft:'20px'}}type="text" name="pincode" pattern="[0-9]{6}" placeholder='6 digits' value={formData.pincode} onChange={handleInputChange} required ></input>
        <br/>
        <br />
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Email: </label>
          <input 
            style={{fontSize:"25px",marginLeft:'10px'}}
            type="email" 
            name="email"  // Make sure this is "email"
            value={formData.email}  // Bind it to formData.email
            onChange={handleInputChange}  // Handle the change
            required 
          />
        <br/>
        <br/>
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Phone no.: </label>
          <input style={{fontSize:"25px",marginLeft:'20px'}}type="text" name="phno" pattern="[0-9]{10}" placeholder='10 digits'value={formData.phno} onChange={handleInputChange} required ></input>
        <br/>
        <br/>
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Blood group: </label>
          <select style={{fontSize:"25px",marginLeft:'20px'}}name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange}>
            <option value="O">O</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
          </select>
        <br/>
        <br />
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Nationality: </label>
          <select style={{fontSize:"25px",marginLeft:'20px'}}name="nationality" value={formData.nationality} onChange={handleInputChange}>
            <option value="Indian">Indian</option>
            <option value="British">British</option>
            <option value="American">American</option>
            <option value="Canadian">Canadian</option>
            <option value="Russian">Russian</option>
            <option value="French">French</option>
          </select>
        <br/>
        <br />
        <label style={{fontSize:"25px",marginLeft:'10px'}}>
          Vehicle Type: </label>
          <select style={{fontSize:"25px",marginLeft:'10px'}}name="vehicleType" value={formData.vehicleType} onChange={handleInputChange}>
            <option value="twoWheeler">Two-Wheeler</option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
          </select>
        <br/><br/>
        <button style={{fontSize:"25px",marginLeft:'200px',padding:'5px'}} type="submit" onClick={handleSubmit}>Submit Application</button>
      </form>
      </div>
    </section>
    </div>
  );
};

export default ApplicationForm;