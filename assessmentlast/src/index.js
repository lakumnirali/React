import React, { useState } from 'react';

// Custom hook for form validation
const useFormValidation = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const validateUsername = (value) => {
    setIsValidUsername(value.length <= 4);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Business logic: Validate form before submission
    if (isValidEmail && isValidUsername) {
      console.log('Form submitted successfully!');
      console.log('Email:', email);
      console.log('Username:', username);
    } else {
      console.log('Form validation failed. Please check your inputs.');
    }
  };

  return {
    email,
    setEmail,
    isValidEmail,
    validateEmail,
    username,
    setUsername,
    isValidUsername,
    validateUsername,
    handleSubmit,
  };
};

const RegistrationForm = () => {
  // Custom hook instance for form validation
  const {
    email,
    setEmail,
    isValidEmail,
    validateEmail,
    username,
    setUsername,
    isValidUsername,
    validateUsername,
    handleSubmit,
  } = useFormValidation();

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {!isValidEmail && <span style={{ color: 'red' }}>Invalid Email</span>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateUsername(e.target.value);
            }}
          />
          {!isValidUsername && (
            <span style={{ color: 'red' }}>Username must be 4 characters or less</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;



