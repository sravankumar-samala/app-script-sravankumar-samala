import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import "../app/customDropDown.css";

export default function CustomDropDown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="drop-down-container">
      <button type="button" onClick={handleIsOpen} className="drop-down-btn">
        <span>{title}</span>
        {isOpen ? <IoChevronUp /> : <IoChevronDown />}
      </button>
      {isOpen && children}
    </div>
  );
}
