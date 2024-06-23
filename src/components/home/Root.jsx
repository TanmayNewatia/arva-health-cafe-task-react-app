import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import ItemCard from '../cafe/itemCard';
import { FaLocationPin } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa";

const Root = () => {
    const [data, setData] = useState();
    const [showData, setShowData] = useState(10);
    const [cafeChoice, setCafeChoice] = useState(-1);
    const [cafeData, setCafeData] = useState();

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(`${REACT_APP_SERVER_BASE_URL}api/cafes/${cafeChoice}`, requestOptions)
            .then(async (response) => { const data = await response.json(); setCafeData(data); })
            .catch((error) => console.error(error));
    }, [cafeChoice])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(`${REACT_APP_SERVER_BASE_URL}api/cafes`, requestOptions)
            .then(async (response) => { const data = await response.json(); setData(data); setShowData(data.slice(0, 10)); })
            .catch((error) => console.error(error));
    }, [])

    const loadMoreData = () => {
        setShowData(data.slice(0, showData.length + 10));
    }

    return (
        <>
            {(cafeChoice == -1) ?
                < div className='w-screen sm:min-h-screen justify-center items-center flex' >
                    <div className='flex-col flex gap-4 w-11/12 justify-center items-center'>
                        <div className='h-screen flex-col flex gap-4 w-11/12 justify-center items-center'>
                            <p className='text-[#003B40] font-semibold tracking-wider text-2xl'>
                                Find a coffee shop anywhere
                            </p>
                            <div className='flex gap-4 justify-center items-center w-4/12 min-w-[300px]'>
                                <div className='flex items-center px-2 py-2 gap-4 bg-[#EDF0EF] rounded-xl'>
                                    <IoSearchOutline />
                                    <input type="text" placeholder='Looking for cafe?' className='bg-transparent outline-none' />
                                </div>
                                <div className='bg-[#003B40] p-2 text-white rounded-xl text-lg'>
                                    <LuSettings2 />
                                </div>
                            </div>
                        </div>
                        <div className='min-h-screen w-full flex flex-wrap gap-8 justify-center py-16'>
                            {(data !== undefined) ?
                                showData.map((items) => {
                                    return <div key={items.id} onClick={() => setCafeChoice(items.id)} className='w-[250px] cursor-pointer'>
                                        <div className='flex justify-end'>
                                            <div className='bg-[#ffffff] p-2 rounded-full absolute w-[40px] h-[40px] -mt-[10px] -mr-[10px] flex justify-center items-center'>
                                                <div className='bg-[#EDF0EF] text-[#003B40] p-2 rounded-full absolute w-[35px] h-[35px] flex justify-center items-center'>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={items.images[0]["url"]} alt="" className='w-[250px] rounded-3xl' />
                                            <div>
                                                <p className='text-[#003B40] font-bold tracking-wider'>{items.name}</p>
                                                <div className='text-md flex items-center gap-2'><img src="/assets/star.svg" alt="star" className='w-[15px] h-[15px]' /><span>{items.ratings[0]["score"]}</span><p className='text-[#B7C1C2]'>1,200 reviews</p></div>
                                                <p className='text-[#003B40] text-sm font-medium tracking-widest'>{ }</p>
                                            </div>
                                        </div>
                                    </div>
                                }) : ""
                            }
                            <button onClick={(e) => { e.preventDefault(); loadMoreData(); }} className='w-full text-[#003B40] font-bold tracking-widest flex justify-center items-center'><p className='border-2 border-black py-2 px-4 rounded-full hover:border-[#003B40] hover:text-white hover:bg-black/50 transition-all'>Load More</p></button>
                        </div>
                    </div>
                </div > :
                <div className='mt-[100px] w-screen'>
                    {(cafeData != undefined || cafeData != null) ?
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <div className='w-11/12 flex justify-center items-center gap-4 flex-wrap'>
                                <div className='h-[300px]'>
                                    <img src={cafeData.images[0]["url"]} alt="" className='h-[300px] rounded-3xl object-contain' />
                                </div>
                                <div className=''>
                                    <p className='text-[#003B40] font-bold tracking-wider text-3xl'>{cafeData.name}</p>
                                    <div className='text-md flex items-center gap-2'><img src="/assets/star.svg" alt="star" className='w-[15px] h-[15px]' /><span>{cafeData.ratings[0]["score"]}</span><p className='text-[#B7C1C2]'>1,200 reviews</p></div>
                                    <p className='text-[#003B40] text-sm font-medium tracking-widest'>{data.description}</p>
                                    <a href={`https://www.google.co.in/maps/place/${cafeData.location.latitude}+${cafeData.location.longitude}`} target='_blank' rel="noreferrer"><FaLocationPin /></a>
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-4 py-16 w-1/2 min-w-[300px]'>
                                <p className='text-center font-bold tracking-widest text-[#003B40] text-2xl w-5/12'>Menu</p>
                                <div className='flex flex-col items-center justify-center mx-auto gap-4 w-full'>
                                    {cafeData.products.map((items) => {
                                        return <ItemCard key={items.id} items={items} />
                                    })}
                                </div>
                            </div>
                        </div> : ""
                    }
                </div >
            }</>
    )
}

export default Root