export default function Header() {
  return (
    <div className="p-2 w-full bg-secondary-700">
      <div className="container flex justify-between items-center">
        <h2 className="text-secondary-400 font-bold">Inventory App</h2>
        <button className="bg-primary-800 text-white rounded-md px-4 py-2">
          Reset All
        </button>
      </div>
    </div>
  );
}
