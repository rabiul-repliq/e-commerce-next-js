"use client";
import { FaStar } from "react-icons/fa";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import p1 from "../../public/Images/p1.jpg";
import p2 from "../../public/Images/p2.jpg";
import p3 from "../../public/Images/p3.jpg";
import Loading from "@/components/Loading/Loading";

function page() {
  const {
    isLoading,
    error,
    data: products = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://next-js-e-commerce-server.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
      <div className="col-span-3 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>

      <div className=" text-gray-800">
        <h3 className="mb-6 font-semibold text-gray-800 text-xl">Category</h3>
        <ul>
          <li className="my-4">
            {" "}
            <p>
              Shirt <span className=" float-right">112</span>
            </p>
          </li>
          <li className="my-4">
            {" "}
            <p>
              Pant <span className=" float-right">640</span>
            </p>
          </li>
          <li className="my-4">
            {" "}
            <p>
              T-Shirt <span className=" float-right">510</span>
            </p>
          </li>
          <li className="my-4">
            {" "}
            <p>
              Shoe <span className=" float-right">120</span>
            </p>
          </li>
          <li className="my-4">
            {" "}
            <p>
              Kid's Clothes <span className=" float-right">110</span>
            </p>
          </li>
          <li className="my-4">
            {" "}
            <p>
              Watch <span className=" float-right">320</span>
            </p>
          </li>
          <li className="my-4">
            {" "}
            <p>
              Accesories <span className=" float-right">60</span>
            </p>
          </li>
        </ul>
        <h3 className="my-6 font-semibold text-gray-800 text-xl">Colors</h3>
        <ul>
          <li className="my-3">
            <span className="inline-block h-3  w-3  rounded-full bg-black"></span>{" "}
            <span className="mx-3">Black</span>
          </li>
          <li className="my-3">
            <span className="inline-block h-3  w-3  rounded-full bg-red-600"></span>{" "}
            <span className="mx-3">Red</span>
          </li>
          <li className="my-3">
            <span className="inline-block h-3  w-3  rounded-full bg-blue-600"></span>{" "}
            <span className="mx-3">Blue</span>
          </li>
          <li className="my-3">
            <span className="inline-block h-3  w-3  rounded-full bg-green-600"></span>{" "}
            <span className="mx-3">Green</span>
          </li>
          <li className="my-3">
            <span className="inline-block h-3  w-3  rounded-full bg-orange-600"></span>{" "}
            <span className="mx-3">Orange</span>
          </li>
        </ul>

        <div>
          <h3 className="my-6 font-semibold text-gray-800 text-xl">
            Popular Products
          </h3>
          <div className="my-4 flex justify-start gap-3">
            <Image
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={p1}
            ></Image>
            <div>
              <p>Injected Humour</p>
              <small>
                560 BDT <del className="mx-2">600 BDT</del>
              </small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-start gap-3">
            <Image
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={p2}
            ></Image>
            <div>
              <p>Classical Literature</p>
              <small>
                650 BDT <del className="mx-2">700 BDT</del>
              </small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-start gap-3">
            <Image
              className=" bg-[#f9f9fa]"
              height={100}
              width={80}
              src={p3}
            ></Image>
            <div>
              <p>Classical Literature</p>
              <small>
                720 BDT <del className="mx-2">800 BDT</del>
              </small>
              <div className=" flex gap-1 mt-2">
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
                <FaStar className=" text-yellow-400" size={12}></FaStar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
