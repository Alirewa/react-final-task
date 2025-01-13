import { useState } from 'react';
import AddCategoryForm from './handleApp/AddCategoryForm';
import AddProductLayout from './handleApp/AddProductLayout';
import ProductList from './handleApp/ProductList';

function AppLayout({ setProducts, products, options, setOptions }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex gap-8 mt-8 container h-screen w-full justify-start items-start text-secondary-400">
			<div className="w-1/2 flex flex-col gap-y-4">
				<div className="bg-secondary-700 p-4 rounded-md">
					<p className="text-secondary-400 rounded-md font-bold text-lg" onClick={() => setIsOpen(!isOpen)}>
						Add New Category?
					</p>
					{isOpen ? <AddCategoryForm options={options} setOptions={setOptions} /> : ''}
				</div>
				<div className="flex items-start justify-start">
					<AddProductLayout setProducts={setProducts} products={products} options={options} />
				</div>
			</div>
			<ProductList products={products} />
		</div>
	);
}

export default AppLayout;
