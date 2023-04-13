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
        <div className="flex h-screen">
          <SideBar active={active} setActive={setActivePage} />
          <div className="flex w-full h-full justify-center items-center">
            <div className="text-9xl font-black">作成中</div>
          </div>
        </div>
      </main>
    </>
  )
}
