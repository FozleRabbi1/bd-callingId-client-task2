/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ProductsApi } from "../../../../redux/fetures/products/AroductApi";
import { toast } from "react-toastify";
import { useEffect } from "react";

const UpdateProduct = () => {
    const getId = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [updateProduct, { data, isLoading, isSuccess, isError }] = ProductsApi.useUpdateProductMutation()


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
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => {
                return value !== "" && value !== null && value !== undefined;
            }).map(([key, value]) => {
                if (!isNaN(value) && typeof value === 'string' && value.trim() !== "") {
                    return [key, parseFloat(value)];
                }
                return [key, value];
            })
        );
        const newData = { ...filteredData, id: getId?.id }

        await updateProduct(newData);
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
                        <div className="mb-4">
                            <label className="block mb-2">Image URL</label>
                            <input
                                {...register("image")}
                                className="w-full p-2 border rounded"
                            />
                            {errors.image && <span className="text-red-500">Image URL is required</span>}
                        </div>
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
                            <label className="block mb-2">Stock Quantity</label>
                            <input
                                type="number"
                                {...register("stockQuantity")}
                                className="w-full p-2 border rounded"
                            />
                            {errors.stockQuantity && <span className="text-red-500">Stock Quantity is required</span>}
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
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;