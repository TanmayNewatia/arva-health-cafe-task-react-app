import React from 'react'
import { FaPlus } from "react-icons/fa6";

const itemCard = ({ items }) => {
    return (
        <div className='w-8/12 mx-auto min-w-[300px] max-w-[600px] bg-[#EDF0EF] p-2 rounded-2xl'>
            <div className='flex justify-end'>
                <div className='bg-[#ffffff] p-2 rounded-full absolute w-[40px] h-[40px] -mt-[20px] -mr-[20px] flex justify-center items-center'>
                    <div className='bg-[#003B40] text-[#EDF0EF] p-2 rounded-full absolute w-[35px] h-[35px] flex justify-center items-center'>
                        <FaPlus />
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly gap-4 flex-wrap'>
                <img src={items.image} alt="Coffe" className='h-[150px] rounded-3xl object-contain object-center' />
                <div className='flex flex-col justify-evenly'>
                    <p className='text-[#003B40] font-bold tracking-wider'>{items.name}</p>
                    {/* <p className='text-[#003B40] text-md w-10/12'>A chocolate-flavored warm beverage that is a variant of a café latte</p> */}
                    <p p className='text-[#003B40] text-md font-medium tracking-widest'>₹{items.price}</p>
                </div>
            </div>
        </div>
    )
}

export default itemCard