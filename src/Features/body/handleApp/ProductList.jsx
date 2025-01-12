import { HiPencil, HiTrash } from "react-icons/hi";

export default function ProductList({ products }) {
  return (
    <div className="w-1/2 flex flex-col gap-y-4  overflow-y-auto">
      <h2 className="font-bold text-secondary-300 text-lg">Product List</h2>
      {products.map((item) => {
        return (
          <div className="bg-secondary-700 rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              <h1 className="text-secondary-300 font-bold text-sm">
                {item.name}
              </h1>
              <p className="text-secondary-400 text-xs">{item.category}</p>
            </div>
            <div className="flex gap-x-4">
              <div className="flex w-8 h-8 text-xs justify-center bg-secondary-700 border border-secondary-500 rounded-full items-center text-secondary-300">
                {item.quantity}
              </div>
              <button className="flex bg-yellow-50 rounded-full p-1 items-center gap-x-2 text-yellow-500 hover:text-yellow-400 transition-all duration-300">
                <HiPencil className="w-5 h-5" />
              </button>
              <button className="flex bg-red-100 rounded-full p-1 items-center gap-x-2 text-red-600 hover:text-red-500 transition-all duration-300">
                <HiTrash className="w-5 h-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
