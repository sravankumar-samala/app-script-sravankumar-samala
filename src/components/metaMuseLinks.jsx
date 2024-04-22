"use client";

import { useState } from "react";

export default function MetaMuseLinks() {
  const [metaValue, setMetaValue] = useState("");

  const handleChange = (e) => setMetaValue(e.target.value);

  return (
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
      {/* <select
        value={metaValue}
        onChange={handleChange}
        className="footer-dropdown-links"
      >
        <option value="">mettā muse</option>
        <option value="about us">About Us</option>
        <option value="stories">Stories</option>
        <option value="artisans">Artisans</option>
        <option value="boutiques">Boutiques</option>
        <option value="contact us">Contact Us</option>
        <option value="docs">EU Compliances Docs</option>
      </select> */}
    </div>
  );
}
