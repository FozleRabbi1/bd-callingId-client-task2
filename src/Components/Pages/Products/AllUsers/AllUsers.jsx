import { useSelector } from "react-redux";
import authApi from "../../../../redux/fetures/auth/authApi";
import { selectCurrentUser } from "../../../../redux/fetures/auth/authSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useState } from "react";

const AllUsers = () => {
    const { data } = authApi.useGetALlUsersQuery();
    const [updateUsersRole] = authApi.useUpdateUsersRoleMutation()
    const [deleteUser] = authApi.useDeleteUserMutation()
    const currentUser = useSelector(selectCurrentUser);
    const [loadingId, setLoadingId] = useState(null);

    const changeRole = async (role, id, email) => {

        if (currentUser?.email === email) {
            return toast.error("You cannot change your own role");
        }
        if (currentUser?.role !== "admin") {
            return toast.error("Only Admin Can Change The Role");
        }
        setLoadingId(id);
        await updateUsersRole({ role, id });
        setLoadingId(null);
    };

    const deleteUserHandler = (id) => {
        if (currentUser?.role !== "admin") {
            return toast.error("Only Admin Can Delete The User");
        }
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't remove This User`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id);
            }
        });
    };

    return (
        <div>
            <h2 className="text-center font-semibold py-2 italic">All users</h2>
            <div className="px-10">
                {data?.data.map(i => (
                    <div key={i._id}>
                        <div className="grid grid-cols-12 py-3 border-b">
                            <h2 className="col-span-3">Name: {i.name.firstName} {i.name.lastName}</h2>
                            <h2 className="col-span-4">Email: {i.email}</h2>
                            <h2 className="col-span-2">Role: {i.role}</h2>
                            <div className="col-span-3 flex gap-2">
                                <button
                                    onClick={() => changeRole("admin", i._id, i?.email)}
                                    disabled={i.role === "admin"}
                                    className={`border px-3 duration-300 w-full h-[30px] ${i.role === "admin" ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-400"}`}
                                >
                                    {
                                        loadingId === i._id ? <span className="loading loading-ring loading-md h-[30px]"></span> : "Admin"
                                    }
                                </button>
                                <button
                                    onClick={() => changeRole("user", i._id, i?.email)}
                                    disabled={i.role === "user"}
                                    className={`border px-3 duration-300 w-full h-[30px] ${i.role === "user" ? "bg-gray-400 cursor-not-allowed" : "bg-green-400"}`}
                                >
                                    {
                                        loadingId === i._id ? <span className="loading loading-ring loading-md"></span> : "User"
                                    }
                                </button>
                                <button
                                    onClick={() => deleteUserHandler(i._id)}
                                    className="border px-3 bg-red-400 w-full h-[30px]"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;
