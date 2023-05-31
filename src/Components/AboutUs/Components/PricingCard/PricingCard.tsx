import React from 'react';

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <div className="pricing-plan">
        <h3 className="plan-name">Basic</h3>
        <p className="plan-price">$10/month</p>
        <ul className="plan-features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button className="plan-button">Select</button>
      </div>

      <div className="pricing-plan">
        <h3 className="plan-name">Pro</h3>
        <p className="plan-price">$20/month</p>
        <ul className="plan-features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <button className="plan-button">Select</button>
      </div>

      <div className="pricing-plan">
        <h3 className="plan-name">Premium</h3>
        <p className="plan-price">$30/month</p>
        <ul className="plan-features">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
        <button className="plan-button">Select</button>
      </div>
    </div>
  );
};

export default PricingTable;
