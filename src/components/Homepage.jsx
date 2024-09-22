import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Homepage() {
  const buttonRef = useRef(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  const handleClick = () => {
    buttonRef.current.classList.add('clicked');
    
    setTimeout(() => {
      buttonRef.current.classList.remove('clicked');
      navigate('/signupPage'); // Navigate to the signup page after the animation
    }, 100);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>YourHR</h1>
      </div>
      <div className="intro">
        At YourHR, we understand that finding the right job can be a challenging journey. That's why we're here to make it easier for you. Whether your'e a seasoned professional or just starting your career, YourHR is dedicated to connecting you with opportunities that match your skills, experience, and aspirations.
      </div>
      <div className="intro">
        With our user-friendly platform, you can create a personalized profile, specify your job preferences, and upload your resume in just a few simple steps. Let us help you take the next step in your career. Sign up today and start exploring job opportunities tailored to you!
      </div>
      <div className="signupbutton" ref={buttonRef} onClick={handleClick}>
        <button>Signup</button>
      </div>
    </div>
  );
}

export default Homepage;
