'use client'
import { FaStar } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import Loading from "@/components/Loading/Loading";

function page() {

    const { isLoading, error, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://next-js-e-commerce-server.vercel.app/products')
            const data = await res.json()
            return data;
        }
    })


    if (isLoading) return <Loading></Loading>
    if (error) return 'An error has occurred: ' + error.message

    console.log(products);
    return (
        <div className=" m-2 lg:m-0">
            {/* <h2 className=' text-center mb-2 text-3xl text-gray-800 font-bold'>My Product</h2> */}

            <div className="hidden sm:block h-screen overflow-y-scroll">
                <table className="min-w-full text-xs">

                    <thead className="bg-gray-100">
                        <tr className="border-b border-gray-300 text-left">
                            <th className="p-3">Image</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Rating</th>
                            <th className="p-3 ">Quantity</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product =>
                                <tr
                                    key={product.id}
                                    className="border-b  border-gray-300 bg-gray-100">
                                    <td className="p-3">
                                        <img className='h-16 w-16' src={product.img} alt="" />
                                    </td>
                                    <td className="p-3">
                                        {product.name}
                                    </td>
                                    <td className="p-3">

                                        {product.price} BDT
                                    </td>
                                    <td className="p-3">
                                        {product.ratings}
                                    </td>
                                    <td className="p-3 ">
                                        {product.stock}
                                    </td>
                                    <td className="p-3 ">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Delete</span>
                                        </span>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="sm:hidden grid grid-cols-1 gap-4">
                {
                    products?.map(product =>
                        <div className="my-4 flex justify-start gap-3">
                            <img className=" bg-[#f9f9fa]" height={100} width={80} src={product?.img}></img>
                            <div>
                                <p>{product.name}</p>
                                <small>Price : {product.price}</small>
                                <div className=" flex gap-1 mt-2">

                                    <FaStar className=" text-yellow-400" size={12}></FaStar>
                                    <FaStar className=" text-yellow-400" size={12}></FaStar>
                                    <FaStar className=" text-yellow-400" size={12}></FaStar>
                                    <FaStar className=" text-yellow-400" size={12}></FaStar>
                                    <small className=' text-gray-500 -mt-[2px]  mx-1'>{product.ratingsCount}</small>
                                </div>

                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default page;