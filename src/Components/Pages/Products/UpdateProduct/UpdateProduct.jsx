/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ProductsApi } from "../../../../redux/fetures/products/ProductApi";

const VITE_image_upload_key = import.meta.env.VITE_image_upload_key
const UpdateProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const getId = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [updateProduct, { data, isSuccess, isError, isLoading }] = ProductsApi.useUpdateProductMutation()
    const [fileLoading, setFileLoading] = useState(false)
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${VITE_image_upload_key}`;

    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message, {
                position: "top-center",
                theme: "light",
            });
        }
        if (isError) {
            toast.error("An error occurred while updating the product.");
        }
    }, [isSuccess, isError, data]);

    const onSubmit = async (data) => {
        setFileLoading(true);

        let filteredData = Object.fromEntries(
            Object.entries(data)
                .filter(([key, value]) => value !== "" && value !== null && value !== undefined)
                .map(([key, value]) => {
                    if (!isNaN(value) && typeof value === 'string' && value.trim() !== "") {
                        return [key, parseFloat(value)];
                    }
                    return [key, value];
                })
        );
        try {
            const formData = new FormData();
            if (data.image && data.image[0]) {
                formData.append("image", data.image[0]);
                const imageResponse = await fetch(image_hosting_url, {
                    method: "POST",
                    body: formData
                });
                const imageData = await imageResponse.json();

                if (imageData.success) {
                    const photoUrl = imageData.data.display_url;
                    filteredData.image = photoUrl;
                } else {
                    throw new Error('Image upload failed');
                }
            }
            const newData = { ...filteredData, id: getId?.id };
            if (newData?.image?.length === 0) {
                delete newData.image;
            }
            const result = await updateProduct(newData);
            if (result?.data) {
                reset();
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setFileLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-center font-semibold py-2 italic">Update You Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" p-4 w-[70%] mx-auto ">
                <div className="grid grid-cols-2 gap-x-8">
                    <div>
                        <div className="mb-4">
                            <label className="block mb-2">Brand</label>
                            <input
                                {...register("brand")}
                                className="w-full p-2 border rounded"
                            />
                            {errors.brand && <span className="text-red-500">Brand is required</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2">Category</label>
                            <input
                                {...register("category")}
                                className="w-full p-2 border rounded"
                            />
                            {errors.category && <span className="text-red-500">Category is required</span>}
                        </div>

                        <label className="block mb-2">Stock Quantity</label>
                        <input
                            type="number"
                            {...register("stockQuantity")}
                            className="w-full p-2 border rounded"
                        />
                        {errors.stockQuantity && <span className="text-red-500">Stock Quantity is required</span>}
                    </div>
                    <div>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input
                                {...register("name")}
                                className="w-full p-2 border rounded"
                            />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Price</label>
                            <input
                                type="number"
                                {...register("price")}
                                className="w-full p-2 border rounded"
                            />
                            {errors.price && <span className="text-red-500">Price is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Upload Image</label>
                            <input type="file"  {...register("image")} className="my-2 border-none rounded-md w-8/12 md:w-8/12 lg:w-6/12 max-w-xs text-black mx-2" />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        {...register("description")}
                        className="w-full p-2 border rounded"
                    />
                    {errors.description && <span className="text-red-500">Description is required</span>}
                </div>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded block w-1/2 mx-auto">
                    {isLoading || fileLoading ? <span className="loading loading-spinner loading-sm"></span> : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;