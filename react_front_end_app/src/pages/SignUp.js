import React, { useState } from 'react';

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submitting form:', { email, name, dob });

  try {
    const response = await fetch('https://your-backend-url.com/signup', {  // <-- replace with real backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, dob }),
    });

    const data = await response.json();
    console.log('Server response:', data);

    if (!response.ok) {
      throw new Error(data.detail || 'Signup failed.');
    }

    alert('Thanks for signing up!');
    setEmail('');
    setName('');
    setDob('');
  } catch (err) {
    console.error('Signup error:', err);
    alert('Error: ' + err.message);
  }
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