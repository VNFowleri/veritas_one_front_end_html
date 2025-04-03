import React, { useState } from 'react';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://your-backend-api-url.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, dob }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || 'Signup failed.');
    }

    alert('Thanks for signing up! We’ll be in touch soon.');
    setEmail('');
    setName('');
    setDob('');
  } catch (error) {
    alert(error.message);
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