import React from 'react'
import { useState, useEffect } from 'react';
import ItemCard from '../cafe/itemCard';
import { FaLocationPin } from 'react-icons/fa6';
const CafePage = () => {
  let { pathname } = window.location;
  pathname = pathname.split('/');
  const [data, setData] = useState();
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}api/cafes/${pathname[2]}`, requestOptions)
      .then(async (response) => { const data = await response.json(); setData(data); })
      .catch((error) => console.error(error));
  }, [pathname])

  return (
    <div className='mt-[100px] w-screen'>
      {(data !== undefined) ?
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='w-11/12 flex justify-center items-center gap-4 flex-wrap'>
            <div className='h-[300px]'>
              <img src={data.images[0]["url"]} alt="" className='h-[300px] rounded-3xl object-contain' />
            </div>
            <div className=''>
              <p className='text-[#003B40] font-bold tracking-wider text-3xl'>{data.name}</p>
              <div className='text-md flex items-center gap-2'><img src="/assets/star.svg" alt="star" className='w-[15px] h-[15px]' /><span>{data.ratings[0]["score"]}</span><p className='text-[#B7C1C2]'>1,200 reviews</p></div>
              <p className='text-[#003B40] text-sm font-medium tracking-widest'>{data.description}</p>
              <a href={`https://www.google.co.in/maps/place/${data.location.latitude}+${data.location.longitude}`} target='_blank' rel="noreferrer"><FaLocationPin /></a>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 py-16 w-1/2 min-w-[300px]'>
            <p className='text-center font-bold tracking-widest text-[#003B40] text-2xl w-5/12'>Menu</p>
            <div className='flex flex-col items-center justify-center mx-auto gap-4 w-full'>
              {data.products.map((items) => {
                return <ItemCard key={items.id} items={items} />
              })}
            </div>
          </div>
        </div> : ""
      }
    </div >
  )
}

export default CafePage