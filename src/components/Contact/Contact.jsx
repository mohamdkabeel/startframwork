import React from 'react'

export default function Contact() {
    return <>
        <div className="head">
            <h1 className='flex justify-center'>CONTACT COMPONENT</h1>
        </div>
        <div className="contact flex justify-center items-center">
            <div className="flex items-center justify-center min-h-screen">
                <div className="rounded-lg shadow-md p-8 w-full max-w-md">
                    <form>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Register
                        </button>
                    </form>

                    {/* Already have an account */}
                    <p className="text-gray-600 text-center mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>



    </>
}
