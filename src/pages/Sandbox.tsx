import { useMemo, useState } from "react";
// import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Sports",
    price: 39.99,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Laptop Stand",
    category: "Electronics",
    price: 29.99,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Sports",
    price: 19.99,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Desk Lamp",
    category: "Home",
    price: 24.99,
    rating: 3.9,
  },
];

export function Sandbox() {
  const [sortCategory, setSortCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("default");
  const [sortRating, setSortRating] = useState("default");

  const sortedProducts = useMemo(() => {
    let result = [...products];

    // Sort by category (grouping, not filtering)
    if (sortCategory !== "all") {
      result.sort((a, b) => {
        const aFirst = a.category === sortCategory ? 0 : 1;
        const bFirst = b.category === sortCategory ? 0 : 1;
        return aFirst - bFirst;
      });
    }

    // Sort by price
    if (sortPrice === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    // Sort by rating
    if (sortRating === "highToLow") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortRating === "lowToHigh") {
      result.sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [sortCategory, sortPrice, sortRating]);

  return (
    <div className="page">
      <h1>Product Listings</h1>

      <div className="controls">
        <label>
          Prioritize category:
          <select value={sortCategory} onChange={(e) => setSortCategory(e.target.value)}>
            <option value="all">None</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Home">Home</option>
          </select>
        </label>

        <label>
          Price:
          <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </label>

        <label>
          Rating:
          <select value={sortRating} onChange={(e) => setSortRating(e.target.value)}>
            <option value="default">Default</option>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
        </label>
      </div>

      <ul className="product-list">
        {sortedProducts.map((p) => (
          <li key={p.id} className="product-card">
            <div className="product-name">{p.name}</div>
            <div className="product-meta">
              <span className="product-category">{p.category}</span>
              <span className="product-price">${p.price.toFixed(2)}</span>
              <span className="product-rating">★ {p.rating.toFixed(1)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
