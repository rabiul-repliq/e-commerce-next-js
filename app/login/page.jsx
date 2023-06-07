"use client"
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';


const formSchema = Yup.object({
    email: Yup.string().email().required('please enter your email'),
    password: Yup.string().required('please enter your password').min(6, 'password should be at least 6 character')
})

function page() {

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: formSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        },
    });

    console.log(errors);

    return (


        <div className="bg-white w-full md:max-w-md mx-auto px-4 my-4 lg:px-10
            ">

            <h1 className="text-xl md:text-2xl font-bold text-center ">LogIn </h1>

            <form className="mt-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id=""
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    {
                        errors.email && touched.email ?
                            <p className=' text-sm text-red-600'>{errors.email}</p>
                            :
                            null
                    }
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                      focus:bg-white focus:outline-none"  />
                    {
                        errors.password && touched.password ?
                            <p className=' text-sm text-red-600'>{errors.password}</p>
                            :
                            null
                    }
                </div>

                <div className="text-right mt-2">
                    <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
                </div>

                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-[10px]  mt-6">Log In</button>


                <hr className="my-6 border-gray-300 w-full" />

                <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-[10px]  border border-gray-300">
                    <div className="flex items-center justify-center">

                        <span className="ml-4">
                            Log in
                            with
                            Google</span>
                    </div>
                </button>

                <p className="mt-4  text-center">Need an account? <Link href="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                    account</Link></p>
            </form>


        </div>


    );
};

export default page;