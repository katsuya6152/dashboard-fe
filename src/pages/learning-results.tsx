import Head from 'next/head'
import { useState } from 'react'

import SideBar from '@/components/SideBar'

export default function LearningResults() {
  const [active, setActive] = useState(1)

  const setActivePage = (index: number) => {
    setActive(index)
  }
  return (
    <>
      <Head>
        <title>Learning results Page</title>
        <meta name="description" content="Learning results Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <SideBar active={active} setActive={setActivePage} />
        <div className="flex justify-center">Learning Results</div>
      </main>
    </>
  )
}
