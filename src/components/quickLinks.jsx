"use client";

import { useMediaQuery } from "react-responsive";
import CustomDropDown from "./customDropdown";

export default function QuickLinks() {
  const isSmallScreen = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  return (
    <>
      {isSmallScreen ? (
        <CustomDropDown title="Quick Links">
          <ul className="drop-down-list">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </CustomDropDown>
      ) : (
        <div className="quick-links-container">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      )}
    </>
  );
}
