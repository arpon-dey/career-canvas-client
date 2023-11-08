import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import github from "../../../public/Animation - 1696651865357.json";
import google from "../../../public/google.json";
import { AuthContext } from '../../Providers/AuthProviders';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const { signInUser, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
                toast.success('Logged in successfully')


            })
            .catch(error => console.log(error.message))

    }
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log({ email, password })

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state :'/')

            })
            .catch(error => {
                toast.error("Email and password do not match.")
                console.log(error)
            })


    }
    const generateTitle = () => {
        switch (location.pathname) {
            case '/addJob':
                return 'Digitalenet| Login';
            default:
                return 'Digitalenet';
        }
    };
    return (
        <div>
            <Helmet>
                <title>{generateTitle()}</title>
            </Helmet>
            <Navbar></Navbar>
            <ToastContainer
                position="bottom-left"
                theme="dark" />
            <section className=" ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  my-12 lg:py-0">
                    <div className="w-full  bg-gradient-to-br from-teal-400 to-light-green-100  rounded-lg shadow-xl   md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="btn-group md:mx-3 ">
                                <Link to='/login' className="btn md:px-16 ">Login</Link>
                                <Link to='/register' className="btn md:px-16">Register</Link>
                            </div>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-700 font-semibold ">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm  text-black font-semibold hover:underline  "
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <input
                                    type="submit"
                                    name="submit"
                                    value="Login"
                                    className="btn btn-block bg-gradient-to-r from-teal-200 to-teal-600 border-0 text-white"
                                />
                            </form>
                           
                            <div className="flex ">
                                <div className="mx-4 md:mx-0 btn-group btn-group-vertical lg:btn-group-horizontal ">
                                    <button className="btn w-48 bg-zinc-300 hover:bg-blue-gray-200 border-0 text-black ">
                                        <div onClick={handleGoogleSignIn} className="flex justify-center items-center gap-2 ">
                                            <Lottie animationData={google} className="h-12" height={10} width={20} />

                                            <p className="" >google</p>
                                        </div>
                                    </button>

                                    <button className="btn w-48 bg-zinc-500 hover:bg-blue-gray-200 border-0 font-bold">
                                        <div className="flex justify-center items-center ">
                                            <Lottie animationData={github} className="h-12" />
                                            <p>
                                                {" "}
                                                <input type="submit" value="GITHUB" />
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-black ">
                                Don’t have an account yet?{" "}
                                <Link
                                    className="font-bold text-xl text-orange-800 hover:underline"
                                    to="/register"
                                >
                                    Sign up
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Login;