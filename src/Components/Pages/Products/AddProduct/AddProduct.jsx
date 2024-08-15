import { useForm } from "react-hook-form";
import { ProductsApi } from "../../../../redux/fetures/products/ProductApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [addProduct, { data, isSuccess, isError, isLoading }] = ProductsApi.useAddProductMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message, {
                position: "top-center",
                theme: "light",
            });
        }
        if (isError) {
            toast.error("An error occurred while Creating the product.");
        }
    }, [isSuccess, isError, data]);

    const onSubmit = (data) => {
        const newData = {
            ...data,
            price: Number(data.price),
            rating: Number(data.rating),
            stockQuantity: Number(data.stockQuantity),
        }
        const res = addProduct(newData)
        if (res) {
            reset()
        }
    };

    return (
        <div>

            <h2 className="text-center font-semibold py-2 italic">Add Your Products </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mb-5">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                    <input
                        {...register("category", { required: "Category is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.category && <p className="text-red-500 text-xs italic">{errors.category.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Stock Quantity</label>
                    <input
                        type="number"
                        {...register("stockQuantity", { required: "Stock quantity is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.stockQuantity && <p className="text-red-500 text-xs italic">{errors.stockQuantity.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                    <input
                        {...register("brand", { required: "Brand is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.brand && <p className="text-red-500 text-xs italic">{errors.brand.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                    <input
                        type="number"
                        step="0.1"
                        {...register("rating")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="number"
                        step="0.01"
                        {...register("price", { required: "Price is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image URL <span className="text-red-400 text-[11px]">(File Sistem Not Working For Free Hosting...Cloudinary)</span> </label>
                    <input
                        {...register("image", { required: "Image URL is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.image && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        {...register("description", { required: "Description is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
                </div>


                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[100px] rounded focus:outline-none focus:shadow-outline">
                    {isLoading ? <span className="loading loading-spinner loading-sm"></span> : "Submit"}
                </button>
            </form>

        </div>
    );
};

export default AddProduct;