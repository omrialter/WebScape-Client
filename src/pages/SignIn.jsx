import { FaUserAstronaut } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { URL, TOKEN_KEY, doApiMethod } from "../services/apiService";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {



    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm();


    const doApiSignIn = async (_bodyData) => {
        try {

            const url = URL + "/users/login";
            const data = await doApiMethod(url, "POST", _bodyData);
            if (data.token) {
                localStorage.setItem(TOKEN_KEY, data.token);
                toast.success("Howdy!")
                nav("/");
            }


        } catch (error) {
            console.log(error);
            toast.error("User or password is wrong my friend");
        }
    }


    const onSubForm = (_bodyData) => {
        doApiSignIn(_bodyData);
    }


    return (
        <div className="flex justify-center items-center mb-64 mt-10">
            <div className="flex w-[400px] flex-col items-center justify-center px-4 py-8 bg-white shadow-xl rounded-xl">
                <div className="w-full">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h2 className="text-xl font-bold">Sign In</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubForm)}>
                        {/* Username */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Username</label>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaUserAstronaut />
                                </div>
                                <input
                                    {...register("user_name", { required: true, minLength: 2 })}
                                    className="block w-full pl-12 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                                    type="text"
                                    placeholder="username"
                                    required
                                />
                            </div>
                            {errors.user_name && (
                                <div className="text-sm text-red-600">
                                    * Enter valid username(min 3 chars)
                                </div>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Password</label>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <RiLockPasswordLine />
                                </div>
                                <input
                                    {...register("password", { required: true, minLength: 6 })}
                                    className="block w-full pl-12 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                                    type="password"
                                    placeholder="password"
                                    required
                                />
                            </div>
                            {errors.password && (
                                <div className="text-sm text-red-600">
                                    * Enter valid password (min 6 chars)
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold text-white bg-indigo-500 rounded-lg transition duration-300 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-gray-700">
                        <p className="inline">Don't have an account? </p>
                        <Link
                            to="/signup"
                            className="font-semibold text-indigo-500 hover:text-indigo-600"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn