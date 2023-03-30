import Head from 'next/head'
import { useState } from 'react'

import SideBar from '@/components/SideBar'

export default function RowData() {
  const [active, setActive] = useState(0)

  const setActivePage = (index: number) => {
    setActive(index)
  }

  return (
    <>
      <Head>
        <title>Row Data Page</title>
        <meta name="description" content="Row Data Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <SideBar active={active} setActive={setActivePage} />
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex justify-center font-bold">Row Data Page</div>
          <div className="flex justify-center">Row Data</div>
          <div className="flex justify-center">Search Criteria</div>
          <div className="flex justify-center">Crawl Results</div>
        </div>
      </main>
    </>
  )
}
