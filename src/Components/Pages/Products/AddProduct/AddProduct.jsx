import { useForm } from "react-hook-form";
import { ProductsApi } from "../../../../redux/fetures/products/ProductApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VITE_image_upload_key = import.meta.env.VITE_image_upload_key
const AddProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [addProduct, { data, isSuccess, isError, isLoading }] = ProductsApi.useAddProductMutation();
    const [fileLoading, setFileLoading] = useState(false)

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

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`;

    const onSubmit = (data) => {
        setFileLoading(true)
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    setFileLoading(false)
                    const photoUrl = imageData.data.display_url;
                    const newData = {
                        ...data,
                        price: Number(data.price),
                        rating: Number(data.rating),
                        stockQuantity: Number(data.stockQuantity),
                        image: photoUrl
                    }
                    const res = addProduct(newData)
                    if (res) {
                        reset()
                    }
                }
            })
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

                <input type="file"  {...register("image", { required: true })} className="my-2 border-none rounded-md w-8/12 md:w-8/12 lg:w-6/12 max-w-xs text-black mx-2" />
                {errors.exampleRequired && <span>This field is required</span>}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        {...register("description", { required: "Description is required" })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[100px] rounded focus:outline-none focus:shadow-outline">
                    {isLoading || fileLoading ? <span className="loading loading-spinner loading-sm"></span> : "Submit"}
                </button>
            </form>
        </div>
    );
};
export default AddProduct;
