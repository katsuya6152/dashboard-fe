import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import SideBar from '@/components/SideBar'
import { RowDataTable } from '@/components/Table'

type RaceData = {
  id: string
  race_name: string
  race_place: string
  number_of_entries: number
  race_state: string
  date: string
  race_sesults: []
}

const RowData: React.FC<Props> = ({ raceData }) => {
  const [active, setActive] = useState(0)
  const [activeTable, setActiveTable] = useState(1)
  const [data, setData] = useState(raceData)

  const setActivePage = (index: number) => {
    setActive(index)
  }

  const onClickUpdateData = async (page: number): Promise<void> => {
    setActiveTable(page)
    const newData = await axios.get<RaceData[]>(
      `http://localhost:3001/raw/${page - 1}`,
    )
    setData(newData.data)
  }

  return (
    <>
      <Head>
        <title>Row Data Page</title>
        <meta name="description" content="Row Data Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <div className="flex">
          <SideBar active={active} setActive={setActivePage} />
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col justify-center items-center w-full">
              <h1>Row Data</h1>
              <RowDataTable
                page={activeTable}
                onChange={onClickUpdateData}
                data={data}
              />
            </div>
            <div className="flex justify-center w-10/12 mt-4">
              <div className="w-1/2 mx-8">
                <h1>Search Criteria</h1>
                <ul>
                  <li>競走種別：芝のみ</li>
                  <li>競馬場：東京・中山・中京・京都・阪神</li>
                  <li>距離：1600m ~ 3000m</li>
                </ul>
              </div>
              <div className="w-1/2 mx-8">
                <h1>Crawl Results</h1>
                <ul>
                  <li>レース取得件数：4780</li>
                  <li>レース結果取得件数：62057</li>
                  <li>最終取得時間：2023/2/5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

type Props = {
  raceData: RaceData[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apiUrl = 'http://localhost:3001/raw/0'
  const { data } = await axios.get<RaceData[]>(apiUrl)
  return { props: { raceData: data } }
}

export default RowData
