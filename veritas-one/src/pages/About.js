import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>Welcome to VeritasOne</h1>
      <p>
        Join us on our journey to redefine the future of healthcare—where your data,
        your decisions, and your health truly come first.
      </p>

      <h2>Empowering Patients Through Transparent Data Management</h2>
      <p>
        At VeritasOne, our vision is to empower patients by putting control of
        their healthcare data directly in their hands. We are on a mission to
        revolutionize how medical records are managed and shared.
      </p>

      {/* ... More text from your mockup ... */}

      <h3>What sets us apart is our ethical, patient-first approach to data sharing.</h3>
      <p>
        You decide how your information is used with three customizable sharing modes:
      </p>
      <ul>
        <li><strong>Strict Privacy Mode:</strong> Your data is for your eyes only...</li>
        <li><strong>De-Identified Data for Health Research:</strong> Contribute anonymously...</li>
        <li><strong>Full Data Sharing (Research + Ads):</strong> Body text for whatever you’d like...</li>
      </ul>
    </div>
  );
};

export default About;