"use client";

import Image from "next/image";

const paymentModesList = [
  {
    imageSrc: "/assets/gpay.png",
    altText: "google pay",
  },
  {
    imageSrc: "/assets/mastercard.png",
    altText: "credit card pay",
  },
  {
    imageSrc: "/assets/paypal.png",
    altText: "paypal",
  },
  {
    imageSrc: "/assets/amex.png",
    altText: "amex pay",
  },
  {
    imageSrc: "/assets/applepay.png",
    altText: "apple pay",
  },
  {
    imageSrc: "/assets/opay.png",
    altText: "opay",
  },
];

export default function PaymentModes() {
  return (
    <div className="payment-modes-container">
      <h3>mettā muse Accepts</h3>
      <ul className="payment-modes-list">
        {paymentModesList.map((eachMode) => (
          <li
            className={`payment-mode-item ${
              eachMode.altText === "apple pay" ? "apple-pay" : ""
            }`}
            key={eachMode.altText}
          >
            <Image
              src={eachMode.imageSrc}
              alt={eachMode.altText}
              width={40}
              height={20}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
