import { FaUserAstronaut } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { URL, doApiMethod } from "../services/apiService";
import { useNavigate } from "react-router-dom";


function SignUp() {

    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSub = (_bodyData) => {
        doApiSignUp(_bodyData);
    }
    const doApiSignUp = async (_bodyData) => {
        try {
            const url = URL + "/users"
            const data = await doApiMethod(url, "POST", _bodyData);
            console.log(data)
            if (data._id) {
                toast.success("it worked!");
                nav("/signin")
            }

        } catch (error) {
            console.log(error);
            toast.error("something went wrong")
        }
    }

    const validateEmail = (value) => {
        // Regular expression to validate email format
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(value) || "Enter a valid email address";
    };

    return (
        <div className="flex justify-center items-center mb-64 mt-10">

            <div className="flex w-[400px] flex-col items-center justify-center px-4 py-8 bg-white shadow-xl rounded-xl">
                <div className="w-full">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h2 className="text-2xl font-bold justify-center">Sign Up</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSub)}>
                        {/* Name */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Name</label>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaUserAstronaut />
                                </div>
                                <input
                                    {...register("name", { required: true, minLength: 3 })}
                                    className="block w-full pl-12 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                                    type="text"
                                    placeholder="name"
                                    required
                                />
                            </div>
                            {errors.name && (
                                <div className="text-sm text-red-600">
                                    * Enter valid name(min 3 chars)
                                </div>
                            )}
                        </div>
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
                        {/* Email */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Email</label>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <IoIosMail />
                                </div>
                                <input
                                    {...register("email", {
                                        required: true,
                                        validate: validateEmail,
                                    })}
                                    className="block w-full pl-12 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                                    type="text"
                                    placeholder="email"
                                    required
                                />
                            </div>
                            {errors.email && (
                                <div className="text-sm text-red-600">
                                    * Enter a valid email
                                </div>
                            )}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold text-white bg-indigo-500 rounded-lg transition duration-300 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        >
                            SignUp!!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp