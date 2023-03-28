import Head from 'next/head'

import SideBar from '@/components/SideBar'

export default function Analysis() {
  return (
    <>
      <Head>
        <title>Analysis Page</title>
        <meta name="description" content="Analysis Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <SideBar />
        <div className="flex justify-center">Analysis Page</div>
      </main>
    </>
  )
}
