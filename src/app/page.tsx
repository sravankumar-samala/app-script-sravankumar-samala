import Image from "next/image";
import "./home.css";

const getProducts = async (): Promise<[]> => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return products;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="home-container">
      <div className="title-container">
        <h1>discover our products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta
          dolores, architecto laboriosam repellendus sequi quae consequatur
          reiciendis sunt enim.
        </p>
      </div>
      <ul className="products-container">
        {products?.map((each: Product) => (
          <li key={each.id}>
            <Image
              src={each.image}
              width={200}
              height={200}
              alt={each.category}
            />
            <h3>{`${each.title.slice(0, 23)}${
              each.title.length > 23 && "..."
            }`}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
