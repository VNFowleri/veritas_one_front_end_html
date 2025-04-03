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
        Veritas One is a comprehensive personalized electronic health record that follows patients throughout their lives.
        It centralizes medical data across systems, breaking down healthcare silos so patients can easily access
        and share their records with any provider—anytime, anywhere in the world.
        The platform puts patients in control of how their information is used—whether for better care coordination,
        or contributing data to groundbreaking research with financial compensation.
        By combining patient empowerment, streamlined care, and ethical data monetization, Veritas One is redefining
        the future of global healthcare.
      </p>
      <p>
        Better health starts with your story. Let Veritas One help you tell it.
      </p>
    </div>
  );
};

export default About;