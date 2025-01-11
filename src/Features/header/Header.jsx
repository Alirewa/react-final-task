import DarkModeToggle from "./../../ui/DarkModeToggle";

export default function Header() {
  return (
    <div className="p-2 w-full flex flex-row bg-secondary-700">
      <div className="container flex justify-between gap-x-8 items-center">
        <div className="flex flex-1">
          <h2 className="text-secondary-400 font-bold">Inventory App</h2>
        </div>
        <button className="btn--danger">Reset</button>
        <DarkModeToggle />
      </div>
    </div>
  );
}
