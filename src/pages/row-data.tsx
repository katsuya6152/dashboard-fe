import Head from 'next/head'

import SideBar from '@/components/SideBar'

export default function RowData() {
  return (
    <>
      <Head>
        <title>Row Data Page</title>
        <meta name="description" content="Row Data Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <SideBar />
        <div className="flex justify-center font-bold">Row Data Page</div>
        <div className="flex justify-center">Row Data</div>
        <div className="flex justify-center">Search Criteria</div>
        <div className="flex justify-center">Crawl Results</div>
      </main>
    </>
  )
}
