import React from 'react';

const About = () => {
  return (
    <div
      className="about-container"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 20px'
      }}
    >
      <h1>Welcome to VeritasOne</h1>
      <p>
        Veritas One is a free, longitudinal EHR that centralizes all patient data, bridging
        healthcare silos so patients can seamlessly access and share their records with any provider.
        Our platform puts patients in control of how their information is used—whether simply
        for better care coordination, or optionally for targeted advertising and meaningful
        compensation. By combining patient empowerment, streamlined care, and ethical data
        monetization, we aim to transform the healthcare ecosystem on a global scale.
      </p>
         <p>
        Join us on our journey to redefine the future of healthcare. Better Health Starts With Your Story.
      </p>
    </div>
  );
};

export default About;