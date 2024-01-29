import React, { useState, useEffect } from 'react';

// Custom hook for input validation
const useInputValidation = (initialValue, validationRules, validationMessage) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const validate = () => {
      const isValidValue = validationRules.test(value);
      setIsValid(isValidValue);
    };

    validate();
  }, [value, validationRules]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    isValid,
    validationMessage,
  };
};

function UserRegistration(props) {
  // Validation rules
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameValidation = /^.{1,4}$/;
  const passwordValidation = /^[^\s@]+@[^\s@]+$/; // You may want to add more specific rules for password validation
  const phoneNumberValidation = /^[\d]{10}$/; // Assuming 10-digit phone number
  const pinValidation = /^\d{5}$/; // Assuming a 5-digit PIN
  const countryValidation = /.*/;

  // Using custom hooks for validation
  const firstName = useInputValidation('', /.*/, 'Please enter a valid first name.');
  const lastName = useInputValidation('', /.*/, 'Please enter a valid last name.');
  const email = useInputValidation('', emailValidation, 'Please enter a valid email address.');
  const password = useInputValidation('', passwordValidation, 'Please enter a valid password like admin@123. ');
  const retypePassword = useInputValidation('', /.*/, 'Please retype the password.');
  const phoneNumber = useInputValidation('', phoneNumberValidation, 'Please enter a valid phone number 10 digit.');
  const address = useInputValidation('', /.*/, 'Please enter a valid address.');
  const town = useInputValidation('', /.*/, 'Please enter a valid town.');
  const pin = useInputValidation('', pinValidation, 'Please enter a valid PIN. 6 number');
  const country = useInputValidation('', countryValidation, 'Please enter a valid country.');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!firstName.isValid || !lastName.isValid || !email.isValid || !password.isValid || !phoneNumber.isValid || !address.isValid || !town.isValid || !pin.isValid || !country.isValid) {
      alert('Please fill in all required fields.');
      return;
    }

    // Perform additional actions or submit the form
    alert('Form submitted successfully!');
  };

  return (
    <>
      <body>
        <form id="user-form" onSubmit={handleSubmit}>
          <h1>User Registration Form</h1>

          <table>
          <tr>
              <td>
                <label>Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="lastname"
                  className="in_size"
                  name="field"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...lastName}
                />
                {!lastName.isValid && (
                  <p className="validation-message">{lastName.validationMessage}</p>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="email"
                  className="in_size"
                  name="field"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...email}
                />
                {!email.isValid && <p className="validation-message">{email.validationMessage}</p>}
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  className="in_size"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...password}
                />
                {!password.isValid && (
                  <p className="validation-message">{password.validationMessage}</p>
                )}
              </td>
            </tr>
          
            <tr>
              <td>
                <label>Phone Number:</label>
              </td>
              <td>
                <input
                  type="tel"
                  id="phonenumber"
                  name="Phone Number"
                  className="in_size"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...phoneNumber}
                />
                {!phoneNumber.isValid && (
                  <p className="validation-message">{phoneNumber.validationMessage}</p>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label>Address:</label>
              </td>
              <td>
                <textarea
                  name="address"
                  id="address"
                  className="in_size"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...address}
                ></textarea>
                {!address.isValid && <p className="validation-message">{address.validationMessage}</p>}
              </td>
            </tr>
            <tr>
              <td>
                <label>Town:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="town"
                  className="in_size"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...town}
                />
                {!town.isValid && <p className="validation-message">{town.validationMessage}</p>}
              </td>
            </tr>
            <tr>
              <td>
                <label>Postcode\Zip:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="pin"
                  className="in_size"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...pin}
                />
                {!pin.isValid && <p className="validation-message">{pin.validationMessage}</p>}
              </td>
            </tr>
            <tr>
              <td>
                <label>Country:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="country"
                  className="in_size"
                  autoComplete="off"
                  autoFocus="autofocus"
                  required
                  {...country}
                />
                {!country.isValid && (
                  <p className="validation-message">{country.validationMessage}</p>
                )}
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </body>
    </>
  );
}

export default UserRegistration;
