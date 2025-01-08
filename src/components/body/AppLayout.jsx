import AddProductLayout from './features/AddProductLayout';
import ProductList from './features/ProductList';

function AppLayout() {
	return (
		<div className="flex gap-x-8 container w-full justify-between items-start text-secondary-400">
			<AddProductLayout />
			<ProductList />
		</div>
	);
}

export default AppLayout;
