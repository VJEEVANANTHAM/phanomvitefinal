import React from 'react';
import './Dropdown.css';
import dropdownimage from '../../assets/images/dropdown.png';
export const Dropdown = () => {


  return (
<div className="dropdown-container">
  <div className="content">
    <div className="dropdown-section-wrapper">
      <div className="dropdown-section">
        <h3>Digital Marketing</h3>
        <p>SEO (Search Engine Optimisation)</p>
        <p>Social Media Marketing</p>
        <p>Pay Per Click (PPC)</p>
        <p>Youtube Marketing</p>
      </div>

      <div className="dropdown-section">
        <h3>Design & Development</h3>
        <p>Web Development</p>
        <p>Shopify</p>
        <p>Java</p>
        <p>Magento</p>
        <p>Wordpress</p>
        <p>PHP</p>
      </div>

      <div className="dropdown-section">
        <h3>Animations & Graphics</h3>
        <p>Video Marketing</p>
        <p>Branding</p>
        <p>Packaging & Labeling</p>
        <p>Graphic Design</p>
        <p>Web Design</p>
        <p>Rotoscoping</p>
        <p>Animation</p>
      </div>

      <div className="dropdown-section">
        <h3>E-commerce solution</h3>
        <p>E-Commerce Marketing</p>
        <p>Amazon Marketing</p>
      </div>
    </div>

    <button className="btn">Book an Appointment</button>
  </div>

  <img
    className="dropdown-image"
    src={dropdownimage}
    alt="Illustration"
  />
</div>


  );
};
