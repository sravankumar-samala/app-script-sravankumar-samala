import Image from "next/image";
import AddToFavouritesBtn from "./addToFavouritesBtn";

export default function RenderProducts({ products }) {
  return (
    <ul className="products-container">
      {products?.map((each) => (
        <li key={each.id}>
          <Image src={each.image} fill alt={each.category} />
          <h3 className="product-title">{`${each.title
            .slice(0, 24)
            .toUpperCase()}${each.title.length > 24 ? "..." : ""}`}</h3>
          <p className="product-description">
            <a href="#">Sign in</a> or Create an account to see pricing
          </p>
          <AddToFavouritesBtn />
        </li>
      ))}
    </ul>
  );
}
