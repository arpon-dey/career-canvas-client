import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {



    const { createUser, userUpdate, user } = useContext(AuthContext)

    console.log(user);


    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        // const photoInput = form.get('photo').files[0];
        const email = form.get('email')
        const password = form.get('password')
        const photoInput = e.target.querySelector('input[type="file"]');
        const photoFile = photoInput.files[0];
        console.log({ name, email, photoFile, password })

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one capital letter');
            return;
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-]/.test(password)) {

            toast.error('Password must not contain special characters');
            return;
        }




        const user = await createUser(email, password)
        if (user.user) {
            const userInf = {
                displayName: name,
                photoURL: photoFile,
            };

            try {
                await userUpdate(userInf);
                toast.success('Registration successful');
            } catch (error) {
                console.error(error.message);
            }



        }
    }



    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer
                position="bottom-left"
                theme="dark" />
            <section className="flex  justify-center items-center">
                <div>
                    <img src="https://i.ibb.co/w6kNHTF/4957412-Mobile-login-Cristina.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-12 lg:py-0 ">
                    <div className="w-full bg-gradient-to-br from-teal-400 to-light-green-100   rounded-lg shadow-xl   md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="btn-group md:mx-3 ">
                                <Link to='/login' className="btn md:px-16 shadow-inner ">Login</Link>
                                <Link to='/register' className="btn md:px-16 shadow-inner">Register</Link>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleRegister} >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
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
                                <div>
                                    <label
                                        htmlFor="formFile"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Photo URL
                                    </label>
                                    <input
                                        type="file"
                                        name="photo"
                                        // onChange={handleImageChange}
                                        id="photo"
                                        placeholder="Enter your image"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "

                                    />
                                </div>
                                <input className="btn btn-block bg-gradient-to-r from-light-green-100 to-teal-600  border-0 text-white" type="submit" value='Sign up'>

                                </input>

                                <p className="text-sm font-semibold text-black ">
                                    Already Registerd?{" "}
                                    <Link
                                        className="font-bold text-xl text-orange-800 hover:underline" to='/login'>
                                        Log in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>


        </div>
    );
};

export default Register;