import Head from 'next/head'

import SideBar from '@/components/SideBar'

export default function LearningResults() {
  return (
    <>
      <Head>
        <title>Learning results Page</title>
        <meta name="description" content="Learning results Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <SideBar />
        <div className="flex justify-center">Learning Results</div>
      </main>
    </>
  )
}
