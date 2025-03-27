import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., call an API)
    console.log('Sign Up:', { email, name, dob });
  };

  return (
    <div className="signup-container">
      <h1>VeritasOne</h1>
      <h3>Better Care Begins With Your Story.</h3>

      <p>
        Please fill out the form below if you are interested in becoming a beta tester.
        Users must be 18 years or older.
      </p>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;