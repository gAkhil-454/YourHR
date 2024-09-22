import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    location: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e)=>
  {
    setFormData({
        ...formData, resume: e.target.files[0],
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('jobTitle', formData.jobTitle);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('resume', formData.resume);
  
    try {
      const response = await axios.post('http://192.168.29.213/signup', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Axios automatically sets the boundary for FormData
        },
      });
  
      if (response.status === 200) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobTitle: '',
          location: '',
          experience: '',
          resume: null,
        });
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name<span>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email<span>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number<span>*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g., +1 23456 78901"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title<span>*</span></label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Desired job title"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Preferred Location<span>*</span></label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City or region"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience Level<span>*</span></label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select experience level
            </option>
            <option value="Internship">Internship</option>
            <option value="Fresher">Fresher</option>
            <option value="<1"> less than one year</option>
            <option value="1-2 years">1-2 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="6-10 years">6-10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>

        <div className='form-group'>
        <label htmlFor='resume'>Resume<span>*</span></label>
        <input 
            type='file'
            id='resume'
            name='resume'
            onChange={handleFileChange}
            required 
        />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupPage;