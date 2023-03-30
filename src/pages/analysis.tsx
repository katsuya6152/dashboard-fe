import Head from 'next/head'
import { useState } from 'react'

import SideBar from '@/components/SideBar'

export default function Analysis() {
  const [active, setActive] = useState(2)

  const setActivePage = (index: number) => {
    setActive(index)
  }
  return (
    <>
      <Head>
        <title>Analysis Page</title>
        <meta name="description" content="Analysis Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <SideBar active={active} setActive={setActivePage} />
        <div className="flex justify-center">Analysis Page</div>
      </main>
    </>
  )
}
