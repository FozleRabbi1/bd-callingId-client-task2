import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const id = useParams()
    console.log(id);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Submitted data:", data);

    };

    return (
        <div>

            <h2>Update You Product</h2>


            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
                <div className="mb-4">
                    <label className="block mb-2">Brand</label>
                    <input
                        {...register("brand", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.brand && <span className="text-red-500">Brand is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Category</label>
                    <input
                        {...register("category", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.category && <span className="text-red-500">Category is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.description && <span className="text-red-500">Description is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Image URL</label>
                    <input
                        {...register("image", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.image && <span className="text-red-500">Image URL is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        {...register("name", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Price</label>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.price && <span className="text-red-500">Price is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Rating</label>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        {...register("rating", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.rating && <span className="text-red-500">Rating is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Stock Quantity</label>
                    <input
                        type="number"
                        {...register("stockQuantity", { required: true })}
                        className="w-full p-2 border rounded"
                    />
                    {errors.stockQuantity && <span className="text-red-500">Stock Quantity is required</span>}
                </div>

                <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default UpdateProduct;