import { useState } from "react";

function AddCategoryForm({ setOptions, options }) {
  const [productCategoryName, setproductCategoryName] = useState("");
  const [productCategoryValue, setproductCategoryValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      value: options.length + 1,
      label: productCategoryName,
      categoryValue: productCategoryValue
    };
    setOptions([...options, newCategory]);

    setproductCategoryName("");
    setproductCategoryValue("");
  };

  return (
    <>
      <div className="w-1/2 flex flex-col gap-y-4">
        <h2 className="font-bold text-secondary-300 text-lg">
          Add Category Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="gap-y-4 flex flex-col w-full">
            <input
              className="textField__input"
              type="text"
              placeholder="Enter Category Name..."
              value={productCategoryName}
              onChange={(e) => setproductCategoryName(e.target.value)}
            />
            <input
              className="textField__input"
              type="text"
              placeholder="Enter englishTitle of Category"
              value={productCategoryValue}
              onChange={(e) => setproductCategoryValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary-900 text-secondary-0 rounded-md px-3 py-2 text-center hover:bg-primary-800 transition-all duration-300 focus:bg-primary-700 focus:ring-primary-500 focus:ring-1"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCategoryForm;
