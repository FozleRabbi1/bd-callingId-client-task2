import { useEffect, useState } from "react";
import './ShowAll.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { ProductsApi } from "../../../../redux/fetures/products/ProductApi";

const ShowAll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const buttonStyle = "text-sm border border-gray-500 px-3 text-gray-600 hover:text-white hover:bg-black rounded-full duration-300";

    // ====================>>>>>>>> API Call and State
    const [deleteProduct, { data: deleteData, isSuccess }] = ProductsApi.useDeleteProductMutation()
    const { data, isLoading } = ProductsApi.useGetAllProductsQuery()
    const [itemData, setitemData] = useState(null)




    useEffect(() => {
        if (isSuccess) {
            toast.success(deleteData?.message, {
                position: "top-center",
                theme: "light",
            });
        }
    }, [isSuccess, deleteData]);
    if (isLoading) {
        return <div className="flex justify-center items-center w-full h-full">
            <p className="text-4xl">Loading....</p>
        </div>
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't remove This`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id);
            }
        })
    }





    return (
        <div>
            <h2 className="text-center font-semibold py-2 italic">Show ALl </h2>
            <div className=" p-10 pt-2  ">

                <div className=" grid grid-cols-3 gap-14 ">
                    {
                        data?.data.map(item =>
                            <div className="card-style" key={item._id}>
                                <img className="w-full h-[220px]" src={item.image} alt="" />

                                <div className="p-2">
                                    <h2 className="text-sm font-semibold">{item.name}</h2>
                                    <h2 className="text-sm font-semibold">{item.price}</h2>

                                    <div className="flex justify-between mt-4">
                                        <button
                                            onClick={() => document.getElementById('my_modal_4').showModal()}
                                            onMouseDown={() => setitemData(item)}
                                            className={buttonStyle} > details</button>
                                        <Link to={`update/${item?._id}`} className={buttonStyle} >update</Link>
                                        <button onClick={() => handleDelete(item?._id)} className={buttonStyle} >delete</button>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>
            </div>


            {/*======================  dialog box ====================== */}
            {/*======================  dialog box ====================== */}

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl  h-[90vh] flex flex-col">

                    <div className="flex flex-grow">
                        <div className="flex flex-col justify-center items-start p-4 flex-1">
                            <h3 className="font-bold text-lg">Name :  {itemData?.name}</h3>
                            <p> <span className="font-semibold">Category</span> :  {itemData?.category}</p>
                            <p> <span className="font-semibold">Price</span> :  {itemData?.price}</p>
                            <p> <span className="font-semibold">StockQuantity</span> :  {itemData?.stockQuantity}</p>
                            <p> <span className="font-semibold">Description</span> :  {itemData?.description}</p>
                        </div>

                        <img className="h-[400px] w-[420px] object-cover flex-shrink-0" src={itemData?.image} alt="" />
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={() => setitemData(null)} className="btn text-2xl"> X </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ShowAll;





















// =====================================>>>>>>>>>      just for testing

//  const categoryList = data?.data?.map(product => product.category);
//     const uniqueCategories = [...new Set(categoryList)];
//     uniqueCategories.unshift("All Category")
//     console.log(uniqueCategories);
// =====================================>>>>>>>>>
{/* <div>
    <select
        className="select select-secondary lg:w-[180px] btn btn-sm mb-2  focus:outline-none "
        onChange={handleCategory}
        value={selectedCategory}
    >
        <option disabled selected>
            Pick your favorite products
        </option>
        {
            uniqueCategories?.map(item => <option className="mb-1 border-b border-black " key={item} value={item}>{item}</option>)
        }

    </select>
</div> */}