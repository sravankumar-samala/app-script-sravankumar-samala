import Image from "next/image";
import AddToFavouritesBtn from "./addToFavouritesBtn";

export default function RenderProducts({ products }) {
  return (
    <ul className="products-container">
      {products?.map((each) => (
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
          <p className="product-description">
            <a href="#">Sign in</a> or Create an account to see pricing
          </p>
          <AddToFavouritesBtn />
        </li>
      ))}
    </ul>
  );
}

function formatProductTitle(title) {
  const newTitle = title.slice(0, 24).toUpperCase();
  return `${newTitle}${title.length > 24 ? "..." : ""}`;
}
