import { useForm } from 'react-hook-form';
import TextField from '../../../ui/TextField';
export default function AddProductLayout() {
	const { register, errors, validationSchema } = useForm();
	return (
		<>
			<div className="w-1/2 flex flex-col gap-y-4">
				<h2 className="font-bold text-secondary-300 text-lg">Add Product Form</h2>
				<form action="">
					<div className="gap-y-4 flex flex-col">
						<TextField
							label="Product Name"
							name="PName"
							register={register}
							validationSchema={validationSchema}
							errors={errors}
							type="text"
							required
						/>
						<TextField
							label="Product Quantity"
							name="PQuantity"
							register={register}
							validationSchema={validationSchema}
							errors={errors}
							type="number"
							required
						/>
						<TextField
							label="Product Category"
							name="PCategory"
							register={register}
							validationSchema={validationSchema}
							errors={errors}
							type="select"
							required
						/>
						<button
							type="submit"
							className="bg-primary-900 text-secondary-0 rounded-md px-3 py-2 text-center hover:bg-primary-800 transition-all duration-300 focus:bg-primary-700 focus:ring-primary-500 focus:ring-1">
							Add Product
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
