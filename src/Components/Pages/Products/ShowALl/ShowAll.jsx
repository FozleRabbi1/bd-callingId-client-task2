import { useState } from "react";
import { ProductsApi } from "../../../../redux/fetures/products/AroductApi";
import './ShowAll.css'
import { Link } from "react-router-dom";

const ShowAll = () => {
    const { data, isLoading } = ProductsApi.useGetAllProductsQuery()
    const [itemData, setitemData] = useState(null)


    if (isLoading) {
        return <div className="flex justify-center items-center w-full h-full">
            <p className="text-4xl">Loading....</p>
        </div>
    }
    const buttonStyle = "text-sm border border-gray-500 px-3 text-gray-600 hover:text-white hover:bg-black rounded-full duration-300";


    return (
        <div>
            <h2 className="text-center font-semibold py-2 italic">Show ALl </h2>
            <div className=" p-10 pt-2 ">
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
                                        <button className={buttonStyle} >delete</button>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>
            </div>

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