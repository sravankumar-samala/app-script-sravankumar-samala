"use client";

import { useMediaQuery } from "react-responsive";
import CustomDropDown from "./customDropdown";

export default function MetaMuseLinks() {
  const isSmallScreen = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  return (
    <>
      {isSmallScreen ? (
        <CustomDropDown title="mettā muse">
          <ul className="drop-down-list">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </CustomDropDown>
      ) : (
        <div className="meta-muse-container">
          <h3>mettā muse</h3>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
      )}
    </>
  );
}
