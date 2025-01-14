import { useState } from "react";
import Select from "../../../ui/Select";

export default function AddProductLayout({ setProducts, products, options }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName && !quantity && !category) return null;
    let index = 0;
    const newProduct = {
      id: index + 1,
      name: productName,
      quantity: quantity,
      category: category
    };
    setProducts([...products, newProduct]);

    setProductName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <>
      <div className="w-full flex flex-col gap-y-4">
        <h2 className="font-bold text-secondary-300 text-lg">
          Add Product Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="gap-y-4 flex flex-col">
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={options}
            />
            <input
              className="textField__input"
              type="text"
              placeholder="Enter Product Name..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              className="textField__input"
              type="number"
              placeholder="Enter Quantity Number..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary-900 text-white rounded-md px-3 py-2 text-center hover:bg-primary-800 transition-all duration-300 focus:bg-primary-700 focus:ring-primary-500 focus:ring-1"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
