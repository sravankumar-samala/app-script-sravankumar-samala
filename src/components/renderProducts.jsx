"use client";

import Image from "next/image";
import AddToFavouritesBtn from "./addToFavouritesBtn";
import { useAppScriptContext } from "@/context/appscriptContext";
import CustomDropDown from "./customDropdown";

export default function RenderProducts({ products }) {
  const { dispatch, searchValue } = useAppScriptContext();

  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="products">
      <div className="filters-and-sorting-container">
        <div>
          <strong>{`${products.length} ITEMS`}</strong>
          <div className="filters-container">
            <h4>Show Filters</h4>
          </div>
        </div>
        <CustomDropDown title="Recommended">
          <ul className="drop-down-list">
            <li>RECOMMENDED</li>
            <li>NEWEST FIRST</li>
            <li>POPULAR</li>
            <li>PRICE: HIGHT TO LOW</li>
            <li>LOW TO HIGH</li>
          </ul>
        </CustomDropDown>
      </div>
      <ul className="products-list">
        {searchProducts?.map((each) => (
          <li key={each.id} className="product-item">
            <div className="product-image-container">
              <Image
                src={each.image}
                width={200}
                height={200}
                alt={each.category}
              />
            </div>
            <h3 className="product-title">{formatProductTitle(each.title)}</h3>
            <div className="product-description">
              <p>
                <a href="#">Sign in</a> or Create an account to see pricing
              </p>
              <AddToFavouritesBtn />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatProductTitle(title) {
  const newTitle = title.slice(0, 36).toUpperCase();
  return `${newTitle}${title.length > 36 ? "..." : ""}`;
}
