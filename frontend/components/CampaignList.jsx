"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dateFormat from 'dateformat';
import Link from 'next/link';
import { Nunito } from 'next/font/google';
import { useRouter } from 'next/navigation';

export const nun = Nunito({ subsets:['latin'] }) 

export const CampaingnCards = ({ datas }) => {
  const router = useRouter()
  const handleNav = (datas) => {
    router.push("/" + datas.slug)
  }
  return (
      <div className='shadow-2xl w-[80%] py-4 card' onClick={() => handleNav(datas)}>
          <div className='flex xl:flex-row sm:flex-col sm:items-center sm:gap-4 gap-6'>
              <div className='flex flex-col items-center relative w-[160px]'>
                  <Image src={"https://res.cloudinary.com/dteas1mca/"+ datas.logo} alt="icon" width={150} height={150} className='rounded-full w-[150px] h-[150px] items-center border object-fit' />
              </div>
              <div className='items-center mx-4 text-left '>
                  <Link href={"/"+datas.slug}><h1>{datas.title}</h1></Link>
                  <p className={`${nun.className} font-medium`}>
                      {datas.description}
                  </p>
                  <span>
                    {dateFormat(new Date(datas.created_at))}
                  </span>
              </div>
          </div>
      </div>
  )
}


function CampaignList( {handleNav} ) {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCamp = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/campaigns`; 
      // Send a GET request to the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Set the retrieved campaigns in the state
          setCampaigns(data);
          setLoading(false);
          console.log(data);
        })
      } catch (error) {
        console.error('Error fetching campaigns:', error);
          setLoading(false);
      }
      
    }

    fetchCamp();
  }, []);

  return (
    <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className='flex flex-col items-center gap-8'>
        {campaigns.map((datas) => (
          <CampaingnCards key={datas.id} datas ={datas} />
        ))}
      </div>
    )}
  </div>
  );
}

export default CampaignList;
