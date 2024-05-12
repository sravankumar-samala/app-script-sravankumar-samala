"use client";

import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
import CustomDropDown from "./customDropdown";

export default function FollowUs() {
  return (
    <div className="follow-us-container">
      <h3>Follow Us</h3>
      <ul className="follow-us-list">
        <li>
          <Image
            src="/assets/linkedin.png"
            alt="linkedin link"
            width={30}
            height={30}
          />
        </li>
        <li>
          <Image
            src="/assets/insta.png"
            alt="linkedin link"
            width={30}
            height={30}
          />
        </li>
      </ul>
    </div>
  );
}
