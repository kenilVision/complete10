import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {ReadFromDB} from '../Slice/ProfileSlice'
import axios from 'axios';

function Login() {
    const [Credential, SetCredential] = useState({
        Email: "", 
        Password: "" 
    });

    const dispatch = useDispatch()

    function Handler(e) {
        const { name, value } = e.target;
        SetCredential({ ...Credential, [name]: value.trim() }); 
    }

    async function SubmitHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/Profile/login/', Credential)
            .then(res => {
                console.log(res                
                )
                const token = res.data.token;
                localStorage.setItem('token', JSON.stringify(token));
                dispatch(ReadFromDB())
            })
            .catch(err => console.log(err));
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen">
            <div className="flex flex-col items-center justify-center px-12 py-8 mx-auto h-full lg:py-0">
                <div className="w-full max-w-lg bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-10 space-y-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-6" onSubmit={SubmitHandler} autoComplete="off">
                            <div>
                                <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    onChange={Handler}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="Password"
                                    id="Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={Handler}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <NavLink to='/SignUp' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
