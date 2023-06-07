"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string().required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  file: Yup.string().required("please enter your photo"),
  password: Yup.string()
    .required("please enter your password")
    .min(6, "password should be at least 6 character"),
});

function page() {
  const { values, errors, touched, handleChange, setFieldValue, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        file: "",
        password: "",
      },
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <div
      className="bg-white w-full md:max-w-md mx-auto px-4 my-4 lg:px-10 
            "
    >
      <h1 className="text-xl md:text-2xl font-bold text-center  ">SignUp </h1>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          />
          {errors.name && touched.name ? (
            <p className=" text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id=""
            value={values.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          />
          {errors.email && touched.email ? (
            <p className=" text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>
        <div className="relative mt-4">
          <label className="block text-gray-700">Photo</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setFieldValue("file", e.target.files[0])}
            class=" w-full py-2 text-[14px] text-gray-900 border rounded-lg cursor-pointer bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none "
          />
          <div className="absolute top-6 w-[94px] bg-gray-800 pl-2  text-white py-[11px] text-sm border rounded-l-lg">
            Choose File
          </div>
          {errors.file && touched.file ? (
            <p className=" text-sm text-red-600">{errors.file}</p>
          ) : null}
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
                      focus:bg-white focus:outline-none"
          />
          {errors.password && touched.password ? (
            <p className=" text-sm text-red-600">{errors.password}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-[10px]  mt-6"
        >
          Sign Up
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          type="button"
          className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-[10px]  border border-gray-300"
        >
          <div className="flex items-center justify-center">
            <span className="ml-4">Log in with Google</span>
          </div>
        </button>
      </form>
    </div>
  );
}

export default page;
