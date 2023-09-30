"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import dateFormat from 'dateformat';
import Link from 'next/link';
import { Nunito } from 'next/font/google';

const Campaign = ({params}) => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter()
  
  

  useEffect(() => {   
    const datafetchme = async () =>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/campaigns/${params.slug}`)

      const datas = await response.json()
      // console.log('datas:>', datas)
      setData(datas);
    }
    datafetchme();
  }, [])
  
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscriber = async (e) => {
    e.preventDefault();
    setSubmitting(true)
    // data posting
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subscriber`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          campaign: data.id
        }),
      });
      console.log('email:', email);
      console.log(data.id)
      if (response.ok){
        router.push("/")
      }
    } catch (error) {
      console.log(error);
      
    } finally {
      setSubmitting(false);
    }
    // console.log(`Subscribed with email: ${email}`);
    setEmail(''); // Clear the email input after submission.
  };

  
  
  return (
    
  <div className='w-full p-4 flex flex-col items-center'>
    <div className="rounded flex flex-col xl:flex-row overflow-hidden w-[80%] shadow-lg">
      <Image src={"https://res.cloudinary.com/dteas1mca/"+ data.logo} width={150} height={150} alt={data.title} className="w-full rounded-sm" />
      <div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-white text-base">{data.description}</p>
      </div>
      <div className="px-6 py-4">
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{dateFormat(new Date(data.created_at))}</span> */}
      </div>
      {/* Email Subscription Form */}
      <form onSubmit={handleSubscriber} className="px-6 py-4">
          <div className="flex items-center justify-between">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="rounded-l-lg px-4 py-2 w-2/3 focus:outline-none focus:ring text-black focus:border-blue-300"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/campaigns`)

  const data = await response.json();

  const allData = data.map(item => item.slug)

  const paths = allData.map(slug => ({params: {slug: slug}}))

  return {
    paths,
    fallback: false,
  }
}




export default Campaign;   