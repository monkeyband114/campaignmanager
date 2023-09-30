import { Nunito } from 'next/font/google'
import React from 'react'
import CampaignList from '@/components/CampaignList'
import Head from 'next/head'



export default function Home() {

 
  return (
    <section>
      <Head>
        <title>
          Campaign Manager:Campagin List
        </title>
      </Head>
      <div className='font-5xl  text-[20px]'>Avaliable Campaigns</div>
      <CampaignList  /> 
    </section>
  )
}




