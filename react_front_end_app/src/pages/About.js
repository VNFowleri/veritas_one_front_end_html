import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      {/* Existing Title & Intro */}
      <h1>Welcome to VeritasOne</h1>
      <p>
        Join us on our journey to redefine the future of healthcare—where your data,
        your decisions, and your health truly come first.
      </p>

      <h2>Empowering Patients Through Transparent Data Management</h2>
      <p>
        At VeritasOne, our vision is to empower patients by putting control
        their healthcare data directly in their hands. We are on a mission to
        revolutionize how medical records are managed and shared.
      </p>

      {/* New Text: EMR Platform */}
      <p>
        Our free, unified electronic health record (EMR) platform consolidates your
        medical data from every provider and hospital into one secure, patient-centered
        repository that continually updates throughout your life. By integrating advanced
        technologies with historical record-sharing workflows, Veritas One ensures that
        your complete medical history is always accessible to you and your providers,
        streamlining care, reducing repetitive tests, and enabling more informed
        clinical decisions.
      </p>
      <p>
        But that’s just the beginning. Unlike other platforms, we empower you to take
        control of your health data, allowing you to monetize it on your own terms while
        contributing to groundbreaking medical research and industry innovation.
      </p>

      {/* New Text: Data Selling Awareness */}
      <h3>Most people don’t realize that their identifiable health data is already being sold—without their knowledge or consent:</h3>
      <ul>
        <li>
          Insurance companies sell billing data to pharmaceutical and health marketing firms.
        </li>
        <li>
          Google, Facebook, and Amazon collect search history and device data to infer
          medical conditions and target ads.
        </li>
        <li>
          Wearable devices (Apple, Fitbit, etc.) sell “anonymized” but often re-identifiable
          biometric data for market research and advertising.
        </li>
      </ul>

      {/* Existing Ethical Approach heading (kept) */}
      <h3>What sets us apart is our ethical, patient-first approach to data sharing.</h3>
      <p>
        You decide how your information is used with three customizable sharing modes:
      </p>

      {/* Updated Sharing Modes in a Table (replaces old bullet list) */}
      <table>
        <thead>
          <tr>
            <th>Sharing Option</th>
            <th>How Your Data is Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Strict Privacy Mode (No Sharing)</strong></td>
            <td>Your data is stored for your personal use only.</td>
          </tr>
          <tr>
            <td><strong>De-Identified Research Only</strong></td>
            <td>Your anonymous health data is used to improve medicine and public health.</td>
          </tr>
          <tr>
            <td><strong>Full Data (Research + Ads)</strong></td>
            <td>
              Your de-identified data is used for research, AND if you opt in,
              limited identifiable data (such as medications) can be used for
              personalized health offers.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;