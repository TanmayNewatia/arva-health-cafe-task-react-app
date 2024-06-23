import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import CafeCard from './CafeCard';

const Root = () => {
    const [data, setData] = useState();
    const [showData, setShowData] = useState(10);
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/cafes`, requestOptions)
            .then(async (response) => { const data = await response.json(); setData(data); setShowData(data.slice(0, 10)); })
            .catch((error) => console.error(error));
    }, [])

    const loadMoreData = () => {
        setShowData(data.slice(0, showData.length + 10));
    }

    return (
        <div className='w-screen sm:min-h-screen justify-center items-center flex'>
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
                            return <CafeCard key={items.id} items={items} />
                        }) : ""
                    }
                    <button onClick={(e) => { e.preventDefault(); loadMoreData(); }} className='w-full text-[#003B40] font-bold tracking-widest flex justify-center items-center'><p className='border-2 border-black py-2 px-4 rounded-full hover:border-[#003B40] hover:text-white hover:bg-black/50 transition-all'>Load More</p></button>
                </div>
            </div>
        </div >
    )
}

export default Root