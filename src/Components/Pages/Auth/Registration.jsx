import { useForm } from 'react-hook-form';
import authApi from '../../../redux/fetures/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [registerApi] = authApi.useRegisterApiMutation()

    const onSubmit = async (data) => {
        const userInfo = data.user
        const res = await registerApi({ user: userInfo })
        console.log(17, res);
        if (res?.data?.success) {
            toast.success("SuccessFully Registered", {
                position: "top-center",
                theme: "light",
            })
            navigate("/login")
        }
    };

    return (
        <div className='py-20'>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.user?.name?.firstName ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            {...register('user.name.firstName', {
                                required: 'First name is required',
                            })}
                        />
                        {errors.user?.name?.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.user.name.firstName.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.user?.name?.lastName ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            {...register('user.name.lastName', {
                                required: 'Last name is required',
                            })}
                        />
                        {errors.user?.name?.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.user.name.lastName.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.user?.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            {...register('user.email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.user?.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.user.email.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.user?.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            {...register('user.password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                    message: 'Password must include upper, lower, number, and special character',
                                },
                            })}
                        />
                        {errors.user?.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.user.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
