import { useForm } from 'react-hook-form';
import authApi from '../../../redux/fetures/auth/authApi';
import { verifyToken } from '../../../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { setUser } from '../../../redux/fetures/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [login] = authApi.useLoginMutation()

    const onSubmit = async (data) => {
        try {
            const res = await login(data).unwrap();
            const token = res.data.accessToken;
            const user = verifyToken(token);
            dispatch(setUser({ user, token }));
            toast.success(`${user.role} Login SuccessFully`, {
                duration: 3000,
                style: {
                    background: "green",
                    color: "white",
                    width: "250px",
                },
            });
            navigate(`/products`);
        } catch (err) {
            toast.error(err.data.message);
            //এর ফলে loding toast কে সে folsy করে ফেলবে & উক্ত toast এর মধ্যে error value show করবে
        }
    };

    return (
        <div className='py-32'>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
                <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: 'Password must include upper, lower, number, and special character',
                                },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
