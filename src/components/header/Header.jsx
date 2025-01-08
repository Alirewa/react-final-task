export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4 w-full">
      <h2 className="text-secondary-400 font-bold">Inventory App</h2>
      <button className="bg-primary-800 text-white rounded-md px-4 py-2">
        Reset All
      </button>
    </div>
  );
}
