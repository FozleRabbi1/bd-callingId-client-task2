import { Link, Outlet } from 'react-router-dom';
import './ProductsMain.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/fetures/auth/authSlice';

const ProductsMain = () => {
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="lg:max-w-[1200px] mx-auto mt-20 text-black dark:text-black">
            <div className="grid grid-cols-12 min-h-[70vh]">

                <div className=" col-span-2 bg-gray-200 sticky top-20 h-[calc(100vh-4rem)]">
                    <div className="flex flex-col items-center">
                        {
                            currentUser && <p className="buttons py-2 w-[90%] mt-5  text-[12px] text-center relative">
                                {currentUser?.email}
                                <span className='absolute top-0 left-5 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded px-1 py-[1px] text-white font-semibold'>{currentUser?.role}</span>
                            </p>
                        }
                        <Link to="/products" className="buttons py-2 w-[90%] mt-5 text-left pl-3">
                            Show All Products
                        </Link>
                        <Link to="/products/add-product" className="buttons py-2 w-[90%] mt-5 text-left pl-3">
                            Add Product
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-300 col-span-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ProductsMain;