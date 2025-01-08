export default function Header() {
	return (
		<div className="p-2 w-full bg-secondary-700">
			<div className="container flex justify-between items-center">
				<h2 className="text-secondary-400 font-bold">Inventory App</h2>
				<button className="btn--danger">Reset All</button>
			</div>
		</div>
	);
}
