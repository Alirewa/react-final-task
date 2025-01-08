import { HiPencil, HiTrash } from 'react-icons/hi';

export default function ProductList() {
	return (
		<div className="w-1/2 flex flex-col gap-y-4">
			<h2 className="font-bold text-secondary-300 text-lg">Product List</h2>

			<div className="bg-secondary-700 rounded-md px-4 py-2 flex justify-between items-center">
				<div>
					<h3 className="text-secondary-300 font-bold text-sm">16 Pro Max 256G Zaa</h3>
					<p className="text-secondary-400 text-xs">Product Of Apple Office</p>
				</div>
				<div className="flex gap-x-4">
					<button className="flex bg-secondary-600 rounded-full p-1 items-center gap-x-2 text-yellow-500 hover:text-yellow-400 transition-all duration-300">
						<HiPencil className="w-5 h-5" />
					</button>
					<button className="flex bg-red-200 rounded-full p-1 items-center gap-x-2 text-red-600 hover:text-red-500 transition-all duration-300">
						<HiTrash className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
